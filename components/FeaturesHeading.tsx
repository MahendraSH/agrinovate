"use client";

import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface FeaturesHeadingProps {
  label: string;
  description: string;
  imageHref: string;
  children: React.ReactNode;
}

const FeaturesHeading: FC<FeaturesHeadingProps> = ({
  label,
  imageHref,
  description,
  children,
}) => {
  return (
    <div className=" w-full flex justify-center items-center my-16   ">
      <Card className="lg:max-w-3xl md:max-xl  max-w-full   w-full lg:px-16 px-4 py-10">
        <CardHeader>
          <CardTitle className=" font-semibold text-xl ">{label}</CardTitle>
          <CardDescription> {description}</CardDescription>
        </CardHeader>
        <CardContent className=" mx-0 ">
          <Image
            src={imageHref}
            alt={label}
            width={500}
            height={400}
            className=" aspect-video lg:h-60 md:h-40 h-36  rounded-md mx-auto mb-2 "
          />
        </CardContent>
        <Separator className=" bg-muted-foreground" />
        <CardFooter className="capitalize">{children}</CardFooter>
      </Card>
    </div>
  );
};

export default FeaturesHeading;
