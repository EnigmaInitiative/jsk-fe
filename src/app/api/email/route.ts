import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

type MailOptions = {
  from: string;
  to: string;
  subject: string;
  text?: string;
  replyTo?: string;
  html?: string;
};

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

const rateLimitStore: Record<string, { count: number; lastRequest: number }> =
  {};

function isRateLimited(ip: string) {
  const currentTime = Date.now();
  const record = rateLimitStore[ip];

  if (record) {
    if (currentTime - record.lastRequest > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore[ip] = { count: 1, lastRequest: currentTime };
      return false;
    } else {
      if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
        return true;
      } else {
        record.count++;
        record.lastRequest = currentTime;
        return false;
      }
    }
  } else {
    rateLimitStore[ip] = { count: 1, lastRequest: currentTime };
    return false;
  }
}

const ContactRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    const inputData = await request.json();
    const parsedData = ContactRequestSchema.parse(inputData);
    const { name, email, phone, subject, message } = parsedData;

    const ip =
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for") ||
      request.headers.get("remote-addr");

    if (!ip) {
      return NextResponse.json(
        { message: "IP address not found" },
        { status: 400 },
      );
    }

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT as string),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_TECH_PASSWORD,
      },
    });

    const mailOptions: MailOptions = {
      from: process.env.EMAIL_USER!,
      to: process.env.EMAIL_CONTACT!,
      subject: subject,
      replyTo: email,
      html: `
          <!doctype html>
          <html>
            
          </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    const acknowledgementTransporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT as string),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_CONTACT,
        pass: process.env.EMAIL_CONTACT_PASSWORD,
      },
    });

    const acknowledgementOptions: MailOptions = {
      from: process.env.EMAIL_CONTACT!,
      to: email,
      subject: "Contact Request Received!",
      html: `
            <!doctype html>
            <html>

                
            </html>
        `,
    };

    await acknowledgementTransporter.sendMail(acknowledgementOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending email", error: error },
      { status: 422 },
    );
  }
}
