"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define types for the submenu and menu
interface SubMenu {
  name: string;
  desc: string;
  icon?: React.ElementType;
  link: string;
}

interface Menu {
  name: string;
  subMenu?: SubMenu[]; // Optional subMenu
  subMenuHeading?: string[];
  gridCols?: number; // Optional grid column count
}

interface DesktopMenuProps {
  menu: Menu;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu.subMenu?.length ?? 0 > 0; // Default to 0 if undefined
  const gridCols = menu.gridCols ?? 1; // Default to 1 if undefined

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <span className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              gridCols === 3
                ? "grid-cols-3"
                : gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu?.map((submenu, i) => (
              <div className="relative cursor-pointer" key={i}>
                {gridCols > 1 && menu.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-white">
                    {menu.subMenuHeading[i]}
                  </p>
                )}
                <Link
                  href={submenu.link}
                  className="flex items-center gap-x-4 group/menubox"
                >
                  <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold">{submenu.name}</h6>
                    <p className="text-sm white">{submenu.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
