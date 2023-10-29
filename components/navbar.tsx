"use client";

import { FC, Suspense } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { useScrollTop } from "@/hooks/use-sroll-top";
import { cn } from "@/lib/utils";
import Logo from "./ui/logo";
import { LucideMenu } from "lucide-react";
import { Button } from "./ui/button";
import NavLits from "./nav-links";
import { ClerkLoading, SignInButton, UserButton } from "@clerk/nextjs";
import LoaderSpiner from "./ui/loader-spiner";

interface NavbarProps {
  isAuth: boolean;
}

const Navbar: FC<NavbarProps> = ({ isAuth }) => {
  const scrolled = useScrollTop();

  return (
    <>
      <div
        className={cn(
          "navbar z-40 fixed top-0  bg-background   ",
          scrolled &&
            " border-b shadow w shadow-slate-800  dark:shadow-gray-300"
        )}
      >
        <div className=" sm:justify-end md:justify-start  flex-1">
          <Button size={"icon"} variant={"outline"} className="md:hidden">
            <label htmlFor="my-drawer-4" className="drawer-button ">
              <LucideMenu className="h-6 w-6   mx-2 " />
            </label>
          </Button>
          <Logo />
        </div>
        <div className="hidden md:flex  ">
          <div className="menu menu-horizontal px-1 gap-x-3  ">
            <NavLits isSidbar={false} />
            <ClerkLoading
              children={
                <div className="my-auto">
                  <LoaderSpiner size={"default"} />
                </div>
              }
            />
            {isAuth && <UserButton signInUrl="/" />}
            {!isAuth && (
              <>
                <SignInButton children={"login"} />
              </>
            )}
            <div className="mx-2">
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="flex md:hidden   ">
          <div className="menu menu-horizontal px-1 gap-x-2 ">
            {isAuth && <UserButton signInUrl="/" />}
            {!isAuth && (
              <>
                <SignInButton children={"login"} />
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
