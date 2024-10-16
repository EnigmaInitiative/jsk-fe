import Image from "next/image";
import React from "react";

type InfoCardProps = {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt = "Info Card Image",
}) => {
  return (
    <div className="mx-4 flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row">
      <div className="flex h-64 w-full items-center justify-center md:h-auto md:w-[45%]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={1000}
          width={1000}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <div className="w-full p-8 md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>
        <p className="mb-6 text-justify text-lg text-gray-600">{description}</p>
        <button className="rounded-full border-2 border-[#372E97] bg-[#372E97] px-6 py-2 text-white shadow transition duration-300 hover:bg-white hover:text-[#372E97]">
          <a href="/JSK Product List.pdf" target="_blank" rel="noreferrer noopener">
            {buttonText}
          </a>
        </button>
      </div>
    </div>
  );
};
