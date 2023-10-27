import { FC } from "react";
import NavLinks from "./nav-links";
import { siteConfig } from "@/lib/config/site-config";
import Logo from "./ui/logo";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-background shadow-sm border-t-2   rounded flex flex-col">
        <nav className="flex ">
          <NavLinks isSidbar={false} />
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by {siteConfig.name}</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
