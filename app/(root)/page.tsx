import Features from "@/components/features";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    <>
    <Hero/>
    <Separator className="h-0.5 dark:bg-slate-400 bg-slate-800 "/>  
    <Features/>
    </>
  );
};

export default LandingPage;
