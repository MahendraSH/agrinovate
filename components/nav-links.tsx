import { FC } from "react";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import NavItem from "./ui/nav-item";

interface NavLinksProps {
  isSidbar: boolean;
}

const NavRoutes = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/about",
    label: "About",
  },

  {
    href: "/contact",
    label: "contact",
  },
];

const NavLinks: FC<NavLinksProps> = ({ isSidbar }) => {
  const routers = NavRoutes;
  return (
    <>
      {isSidbar && (
        <Button size={"icon"} variant={"outline"}>
          <label htmlFor="my-drawer-4" className="drawer-button ">
            <XIcon className=" h-6 w-6    text-muted-foreground  " />
          </label>
        </Button>
      )}
      {routers.map((route) => (
        <NavItem
          isSidbar={isSidbar}
          label={route.label}
          href={route.href}
          key={route.href}
        />
      ))}
    </>
  );
};

export default NavLinks;
