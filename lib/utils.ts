import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Bolt, Calendar, Home, Image } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Database } from "lucide-react";
import { FaFileContract, FaHubspot } from "react-icons/fa";
import { FcEnteringHeavenAlive } from "react-icons/fc";

export const Menus = [
  {
    name: "Inside the hive",
    subMenu: [
      {
        name: "About",
        desc: "about the hive",
        icon: Bolt,
        link: "/about",
      },
      {
        name: "Team",
        desc: "team members",
        icon: Users,
        link: "/team",
      },
      {
        name: "Communities",
        desc: "Communities",
        icon: Home,
        link: "/communities",
      },
      {
        name: "The Hub",
        desc: "The Hub",
        icon: FaHubspot,
        link: "/hub",
      },
      {
        name: "Entrepreneurs",
        desc: "Entrepreneurs",
        icon: FcEnteringHeavenAlive,
        link: "/entrepreneurs",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Resources",
    subMenu: [
      {
        name: "Curriculum",
        desc: "Curriculum",
        icon: Database,
        link: "/curriculum",
      },
      {
        name: "Legal Agreement",
        desc: "legal agreement",
        icon: FaFileContract,
        link: "/curriculum",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Programs",
    subMenu: [
      {
        name: "Events",
        desc: "Events",
        icon: Calendar,
        link: "/events",
      },
      {
        name: "Idea Lab",
        desc: "Idea Lab",
        icon: TriangleAlert,
        link: "/idea-lab",
      },
      {
        name: "Launch Lab",
        desc: "Launch Lab",
        icon: ShieldPlus,
        link: "/launch-lab",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Media",
    subMenu: [
      {
        name: "Blogs",
        desc: "Blogs",
        icon: MessageCircle,
        link: "/blogs",
      },
      {
        name: "Gallery",
        desc: "Gallery",
        icon: Image,
        link: "/gallery",
      },
    ],
    gridCols: 1,
  },
];
