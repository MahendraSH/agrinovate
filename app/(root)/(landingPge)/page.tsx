import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import Hero from "./_components/hero";
import Features from "./_components/features";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <>
      <Hero />
      <Separator />
      <Features />
    </>
  );
};

export default LandingPage;
