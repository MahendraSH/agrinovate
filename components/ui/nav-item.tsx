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
  if (isSidbar == false) {
    return (
      <Button variant={"ghost"}>
        <Link href={href}>{label}</Link>
      </Button>
    );
  } else {
    return (
      <Button variant={"ghost"}>
        <label
          htmlFor="my-drawer-4"
          className="drawer-button"
          onClick={() => router.push(href)}
        >
          {label}
        </label>
      </Button>
    );
  }
};

export default NavItem;
