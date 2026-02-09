import React from "react";
import LinkItem from "../ui/LinkItem";
import { FaAlignRight } from "react-icons/fa";

const SideMenu = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-1" className="btn drawer-button">
          <FaAlignRight />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <LinkItem to={"/"} className={`text-black!`}>
              home
            </LinkItem>
          </li>
          <li>
            <LinkItem to={"about"} className={`text-black!`}>
              about us
            </LinkItem>
          </li>

          <li>
            <LinkItem to={"books"} className={`text-black!`}>
              books
            </LinkItem>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
