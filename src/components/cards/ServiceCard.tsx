import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  iconPath: string;
  bgColor: string;
  textColor: string;
  double?: boolean;
  maxwidth?: string;
  arrow: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconPath,
  bgColor,
  textColor,
  double = false,
  maxwidth = "16rem",
  arrow,
}) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-md ${bgColor} flex transform flex-col transition-transform hover:scale-105 ${double ? "md:col-span-2" : ""}`}
    >
      <div className="flex items-start justify-between">
        <Image
          src={iconPath}
          alt={title}
          width={100}
          height={100}
          className="h-14 w-14"
        />
        <Image src={arrow} alt="arrow" width={60} height={60} />
      </div>
      <h3 className={`mt-4 text-2xl font-semibold ${textColor} ${maxwidth}`}>
        {title}
      </h3>
      <p className={`mt-2 text-lg ${textColor}`}>{description}</p>
    </div>
  );
};

export default ServiceCard;
