import { FC } from "react";
import NavLinks from "./nav-links";

interface SidbarProps {}

const Sidebar: FC<SidbarProps> = ({}) => {
  return (
    <div>
      <div className="drawer z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-secondary  z-50 ">
            {/* Sidebar content here */}
            <NavLinks isSidbar={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
