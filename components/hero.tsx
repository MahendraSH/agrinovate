import { siteConfig } from "@/lib/config/site-config";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { ArrowDown, ArrowDown01, ArrowRight, MoveDown } from "lucide-react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <section className=" min-h-screen  flex flex-col justify-center items-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  bg-clip-text text-transparent bg-gradient-to-l from-slate-400 to-primary ">
              {" "}
              
              {siteConfig.description }
            </h1>
            <p className="mb-8 leading-relaxed  text-lg">
              Discover AI and Farming  Solutions   to help  farmers in there  work 
            </p>
            <div className="flex justify-center mx-auto animate-bounce">
              <Link
                href="/#features"
                className=""
              >
                <Button variant={"ghost" } size={"icon"}>

                <MoveDown className="w-8 h-8  "/>
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-background">
            <img
              className="object-cover object-center rounded dark:hidden "
              alt="hero"
              src="/imgLanding/ai-farmer.png"
              width={720}
              height={600}
            />
            <img
              className="object-cover object-center rounded hidden dark:block"
              alt="hero"
              src="/imgLanding/ai-farmer-dark.png"
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
