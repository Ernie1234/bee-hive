"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

// Define types for the submenu and menu
interface SubMenu {
  name: string;
  icon: React.ElementType;
  link: string;
}

interface Menu {
  name: string;
  subMenu?: SubMenu[]; // Optional subMenu
}

interface MobMenuProps {
  Menus: Menu[];
}

const MobMenu: React.FC<MobMenuProps> = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null); // State can be a number or null

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = Array.isArray(subMenu) && subMenu.length > 0; // Check if subMenu is an array and has items

            return (
              <li key={name}>
                <span
                  className="flex-center-between flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked ? "rotate-180" : ""}`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon, link }) => (
                      <Link href={link} key={name}>
                        <li className="p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer">
                          <Icon size={17} />
                          {name}
                        </li>
                      </Link>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobMenu;
