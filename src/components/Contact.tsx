"use client";
import React, { useRef } from "react";
import axios, { type AxiosError } from "axios";

import toast from "react-hot-toast";
import InputBox from "./ui/InputBox";
import CustomButton1 from "./ui/CustomButton1";
import Heading from "./ui/Heading";
import SubHeading from "./ui/SubHeading";

interface ErrorResponse {
  message: string;
  error: {
    issues: [
      {
        message: string;
      },
    ];
  };
}

const Contact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    const data = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
      subject: subRef.current?.value ?? "",
      message: msgRef.current?.value ?? "",
    };
    toast.loading("Loading...");
    try {
      await axios.post("/api/email", data);
      toast.dismiss();
      toast.success("Contact form submitted successfully!");
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      switch (err.response?.status) {
        case 429:
          toast.dismiss();
          toast.error("Too many requests. Please try again later.");
          break;

        case 422:
          toast.dismiss();
          toast.error(err.response?.data.error.issues[0].message);
          break;

        default:
          toast.dismiss();
          toast.error("Something went wrong!");
          break;
      }
    }
  };

  return (
    <>
      <div
        id="contact"
        className="h-fit rounded-t-[50px] bg-[#F9FAFB] p-8 lg:min-h-[60vh]"
      >
        <div className="my-12 flex h-fit flex-grow flex-col">
          <Heading>Navigating Your Investment Journey with Confidence.</Heading>
          <SubHeading>
            Curious about how to kickstart your investment journey? Contact us
            today
          </SubHeading>
          <div className="flex h-full flex-grow flex-col items-center lg:flex-row">
            <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
              <div className="mt-8">
                <InputBox label={"Name"} ref={nameRef} />
                <InputBox label={"Email Address"} ref={emailRef} />
                <InputBox label={"Phone"} ref={phoneRef} number />
                <InputBox label={"Subject"} ref={subRef} />
                <p className="mb-4 font-poppins font-medium text-jsk-blue">
                  Message
                </p>
                <textarea
                  ref={msgRef}
                  rows={4}
                  className="w-full resize-none bg-[#F7F7F7] p-2 outline-none"
                />
              </div>

              <div className="mt-8 w-fit">
                <div onClick={handleSubmit}>
                  <CustomButton1
                    label={
                      <div className="flex flex-row items-center justify-center gap-4">
                        <p>Submit</p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
