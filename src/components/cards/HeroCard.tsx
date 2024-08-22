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
    <div className="flex flex-col md:flex-row items-center w-full h-full mx-auto bg-white overflow-hidden">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 text-gray-900">{title}</h2>
        <p className="md:text-lg text-gray-600 mb-6">{description}</p>
        <button className="bg-[#372E97] text-white px-8 py-2 rounded-full border-2 border-[#372E97] shadow hover:bg-white hover:text-[#372E97] transition duration-300">
          {buttonText}
        </button>
      </div>

      <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center mt-10">
        <div className="bg-gray-300 rounded-lg w-full h-full flex justify-center items-center">
          <Image
            src={imageSrc}
            height={1000}
            width={1000}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
