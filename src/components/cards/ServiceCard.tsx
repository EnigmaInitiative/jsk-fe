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
  className?:string;
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
  className,
}) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-md ${bgColor} flex flex-col transform transition-transform hover:scale-105  ${className} ${
        double ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <Image
          src={iconPath}
          alt={title}
          width={100}
          height={100}
          className="h-14 w-14 object-contain"
        />
        <Image
          src={arrow}
          alt="arrow"
          width={60}
          height={60}
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </div>
      <h3
        className={`mt-4 text-2xl font-semibold ${textColor} ${maxwidth} truncate`}
      >
        {title}
      </h3>
      <p className={`mt-2 text-lg ${textColor}`}>{description}</p>
    </div>
  );
};

export default ServiceCard;
