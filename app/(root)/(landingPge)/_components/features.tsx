import { FC } from "react";
import FeatureItem from "./feature-item";
import { features } from "@/utils/features";

interface FeaturesProps {}

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
              key={item.id}
              index={item.id}
              link={item.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;
