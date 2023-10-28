import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <>
    <Hero/>
    </>
  );
};

export default LandingPage;
