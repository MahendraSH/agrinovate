import { siteConfig } from "@/lib/config/site-config";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./button";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href={"/"}>
      <Button
        variant={"default"}
        className=" bg-background hover:bg-background text-secondary-foreground  normal-case text-xl  shadow-none"
      >
        <Image
          src={"/logo-dark.png"}
          width={40}
          height={40}
          alt="logo"
          className="mr-1 hidden dark:block "
        />
        <Image
          src={"/logo-light.png"}
          width={40}
          height={40}
          alt="logo"
          className="mr-1 dark:hidden  "
        />
        {siteConfig.name}
      </Button>
    </Link>
  );
};

export default Logo;
