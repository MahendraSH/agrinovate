import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import FeatureItem from "./feature-item";

interface FeaturesProps {}

const features = [
  {
    label: "Crop Recommendation",
    herf: "/sys/CropRecommendation.webp",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus asperiores autem esse beatae incidunt nesciunt ea nemo earum iusto exercitationem.z",
  },
  {
    label: "Fertilizer Recommendation",
    herf: "/sys/FertilizerRecommendation.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus asperiores autem esse beatae incidunt nesciunt ea nemo earum iusto exercitationem.z",
  },
  {
    label: "Plant Disease Prediction",
    herf: "/sys/PlantDisease.webp",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus asperiores autem esse beatae incidunt nesciunt ea nemo earum iusto exercitationem.z",
  },
];

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <div>
      <main id="features" className="text-gray-600 body-font shadow-md ">
        <div className="container px-5 py-24 mx-auto">
          {features.map((item) => (
            <FeatureItem
              label={item.label}
              description={item.description}
              herf={item.herf}
              key={item.label}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;
