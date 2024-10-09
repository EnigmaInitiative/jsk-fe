import React from "react";
import ServiceCard from "./cards/ServiceCard";
import { services, featuresHeading } from "@/data/features_data";
import icon from "@/assets/icons/profile-tick.svg";
import icon2 from "@/assets/icons/convert-card.svg";
import icon3 from "@/assets/icons/security-safe.svg";
import icon4 from "@/assets/icons/presention-chart.svg";
import icon5 from "@/assets/icons/coin.svg";
import arrowwhite from "@/assets/icons/Arrow.svg";
import arrowblue from "@/assets/icons/Arrowblue.svg";

const Features: React.FC = () => {
  const icons = [icon, icon2, icon3, icon4, icon5];
  return (
    <div className="min-h-screen md:mb-24">
      <header className="bg-white py-8">
        <div className="container mx-auto flex flex-col items-start justify-between px-4 lg:flex-row">
          <div className="lg:w-1/3">
            <h1 className="text-5xl font-bold leading-tight">
              {featuresHeading.title}
            </h1>
          </div>
          <div className="mt-6 text-left lg:mt-0 lg:w-1/2">
            <p className="mb-4 text-lg text-gray-600">
              {featuresHeading.description}
            </p>
            <button className="rounded-full border-2 border-[#372E97] px-6 py-3 font-semibold text-[#372E97] transition hover:bg-[#372E97] hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            iconPath={icons[index] as string}
            bgColor={service.bgColor}
            textColor={service.textColor}
            double={service.double}
            maxwidth={""}
            arrow={index === 0 ? (arrowwhite as string) : (arrowblue as string)}
          />
        ))}
      </main>
    </div>
  );
};

export default Features;
