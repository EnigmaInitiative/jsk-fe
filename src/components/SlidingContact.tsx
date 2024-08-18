import React, { useRef } from "react";
import axios, { AxiosError } from "axios";
import CustomButton1 from "./ui/CustomButton1";
import { Send } from "lucide-react";
import { general_data } from "@/data/general_data";
import toast from "react-hot-toast";
import InputBox from "./ui/InputBox";

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

const SlidingContact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const data = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
      message: msgRef.current?.value ?? "",
      subject: `Contact Form by ${nameRef.current?.value}`,
    };
    toast.loading("Loading...");

    try {
      await axios.post("/api/email", data);
      toast.dismiss();
      toast.success("Contact form submitted successfully!");
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      phoneRef.current!.value = "";
      msgRef.current!.value = "";
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
    <div className="flex h-fit w-full flex-col bg-white md:flex-col lg:flex-col">
      <div className="w-full px-[40px] pt-[60px]">
        <p className="mb-8 font-poppins text-[20px] font-medium">
          Get in Touch
        </p>
        <InputBox label={"Name"} sliding={true} ref={nameRef} />
        <InputBox label={"Email"} sliding={true} ref={emailRef} />
        <InputBox label={"Phone"} sliding={true} ref={phoneRef} number />
        <InputBox label={"Message"} sliding={true} ref={msgRef} />
        <div className="my-[30px] md:my-[40px]" onClick={handleSubmit}>
          <CustomButton1
            label={
              <div className="flex flex-row items-center justify-center gap-4">
                <p>Get In Touch</p>
                <Send />
              </div>
            }
          />
        </div>
      </div>
      <div className="flex w-full flex-col px-[40px] py-0 font-poppins">
        <p className="text-[24px] font-medium">Contact Details</p>
        <div className="mb-12 mt-2 flex h-1/2 flex-col justify-evenly">
          <div className="flex flex-row items-center justify-start gap-4">
            <p className="font-dms my-2 flex-grow text-[20px] text-[#797C7F]">
              {general_data.address}
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <p className="font-dms custom-scrollbar my-2 overflow-x-scroll text-[20px] text-[#797C7F]">
              <a href={`mailto:${general_data.email}`}>{general_data.email}</a>
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <p className="font-dms my-2 flex-grow text-[20px] text-[#797C7F]">
              <a href={`tel:${general_data.phone}`}>{general_data.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingContact;
