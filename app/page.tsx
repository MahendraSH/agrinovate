import { Button } from "@/components/ui/button";
import { FC } from "react";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Button> Landing Page </Button>
    </div>
  );
};

export default LandingPage;
