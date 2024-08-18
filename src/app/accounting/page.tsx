"use client";
import SlidingContact from "@/components/SlidingContact";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { accounting_data } from "@/data/accounting_data";
import { useLenis } from "@studio-freight/react-lenis";

const Page = () => {
  const [mobile, setMobile] = useState(false);
  const lenis = useLenis();

  const handleScroll = () => {
    lenis?.scrollTo("#accounting");
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMobile(width < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row p-8" id="accounting">
      <div className={`flex w-full flex-col`}>
        <div className="lg:pr-5">
          {accounting_data.data.map((item, i) => {
            return (
              <>
                <div className="font-poppins text-[40px] font-medium">
                  {item.title}
                </div>
                {item.content.map((subItem) => {
                  const type = subItem.slice(0, 3);
                  return type === "img" ? (
                    <Image
                      key={i}
                      src={subItem.slice(4)}
                      height={1000}
                      width={1000}
                      alt="image"
                      className="mt-4 h-auto w-full"
                    />
                  ) : (
                    <div
                      className="font-dms mt-4 text-[20px] font-normal text-[#797C7F]"
                      key={i}
                      dangerouslySetInnerHTML={{ __html: subItem }}
                    />
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
