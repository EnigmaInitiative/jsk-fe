import { HeroCard } from "./cards/HeroCard";
import { dummyData } from "@/data/hero_data";

export default function Hero() {
  return (
    <div className=" flex h-auto items-center justify-center p-4 md:mb-24 md:mt-0 md:h-screen">
      <HeroCard
        title={dummyData.title}
        description={dummyData.description}
        buttonText={dummyData.buttonText}
        imageSrc={dummyData.imagePlaceholder}
      />
    </div>
  );
}
