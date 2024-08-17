import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import { type Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "700"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JSK Portfolio Management Co. L.L.C",
  description:
    "At JSK, our foundation is built on financial wisdom and a commitment to your success",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${plusJakartaSans.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body className="font-sans max-w-7xl mx-auto">
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
