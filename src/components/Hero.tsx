import { HeroCard } from "./cards/HeroCard";
import { dummyData } from "@/data/hero_data";

export default function Hero() {
  return (
    <div className="flex justify-center items-center h-screen md:mb-24 mt-24 md:mt-0">
      <HeroCard
        title={dummyData.title}
        description={dummyData.description}
        buttonText={dummyData.buttonText}
        imageSrc={dummyData.imagePlaceholder}
      />
    </div>
  );
}
