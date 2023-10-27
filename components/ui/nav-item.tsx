"use client";

import { FC } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface NavItemProps {
  isSidbar: boolean;
  href: string;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ isSidbar, label, href }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  if (isSidbar == false && label !== "home") {
    return (
      <Button variant={"ghost"}  className={cn( isActive && " text-primary")}>
        <Link href={href}>{label}</Link>
      </Button>
    );
  } else if (isSidbar === true) {
    return (
      <Button variant={"ghost"} className={cn(isActive && "text-primary")}>
        <label
          htmlFor="my-drawer-4"
          className="drawer-button"
          onClick={() => router.push(href)}
        >
          {label}
        </label>
        <div
          className={cn(
            "ml-auto opacity-0 border-2 border-primary  h-full  transition-all ",
            isActive && "opacity-100 "
          )}
        />
      </Button>
    );
  } else {
    return;
  }
};

export default NavItem;
