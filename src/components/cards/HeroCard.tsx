import React from "react";
import Image from "next/image";

type HeroCard = {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
};

export const HeroCard: React.FC<HeroCard> = ({
  title,
  description,
  buttonText,
  imageSrc,
}) => {
  return (
    <div className="mx-auto flex h-full w-full flex-col items-center overflow-hidden bg-white md:flex-row">
      <div className="w-full p-4 md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-6xl">
          {title}
        </h2>
        <p className="mb-6 text-gray-600 md:text-lg">{description}</p>
        <button className="rounded-full border-2 border-[#372E97] bg-[#372E97] px-8 py-2 text-white shadow transition duration-300 hover:bg-white hover:text-[#372E97]">
          <a href="#contact">{buttonText}</a>
        </button>
      </div>

      <div className="mt-10 flex h-64 w-full items-center justify-center md:h-full md:w-1/2">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
          <Image
            src={imageSrc}
            height={1000}
            width={1000}
            alt="Hero"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
