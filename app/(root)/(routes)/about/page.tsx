import { Button } from "@/components/ui/button";
import { FC } from "react";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Button> About Page </Button>
    </div>
  );
};

export default AboutPage;
