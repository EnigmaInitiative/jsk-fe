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
    <div className="w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden mx-4">
      <div className="w-full h-64 md:h-auto md:w-[45%] flex justify-center items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={1000}
          width={1000}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2 p-8">
        <h2 className=" text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <button className="bg-[#372E97] text-white px-6 py-2 rounded-full border-2 border-[#372E97] shadow hover:bg-white hover:text-[#372E97] transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
