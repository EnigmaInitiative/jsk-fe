import { InfoCard } from "./cards/SummaryCard";
import { dummyData } from "@/data/summary_data";

export default function Summary() {
  return (
    <div className="flex justify-center items-center md:mb-24 my-8">
      <InfoCard
        title={dummyData.title}
        description={dummyData.description}
        buttonText={dummyData.buttonText}
        imageSrc="/summaryimg.jpg"
      />
    </div>
  );
}
