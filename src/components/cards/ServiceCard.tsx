import React from "react";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  redirect: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  redirect,
}) => {
  return (
    <Link
      href={redirect}
      className={`flex w-full transform flex-col rounded-lg bg-[#FAFAFA] p-6 text-gray-900 shadow-md transition-transform hover:scale-105 ${className} grow cursor-pointer hover:bg-[#372E97] hover:text-white md:w-1/4`}
    >
      <div className="flex items-center justify-between">
        <Icon size={36} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63"
          height="26"
          viewBox="0 0 63 26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0.999634 13H58.9996" />
          <path d="M48.6621 1.78369L61 13L48.6621 24.2162" />
        </svg>
      </div>
      <h3 className={`mt-4 truncate text-2xl font-semibold`}>{title}</h3>
      <p className={`mt-2 text-lg`}>{description}</p>
    </Link>
  );
};

export default ServiceCard;
