"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "./ui/button";

import { usePathname, useRouter } from "next/navigation";
import { Menus } from "@/lib/utils";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon: string;
  hoverIcon: string;
  pathName: string;
}

const INSIDE_HIVE = [
  {
    title: "About",
    href: "/about",
    icon: "/Icons/About.svg",
    hoverIcon: "Icons/AboutHover.svg",
  },
  {
    title: "Team",
    href: "/team",
    icon: "/Icons/Team.svg",
    hoverIcon: "Icons/TeamHover.svg",
  },
];

const RESOURCES = [
  {
    title: "Curriculum",
    href: "/curriculum",
    icon: "/Icons/About.svg",
    hoverIcon: "Icons/AboutHover.svg",
  },
  {
    title: "Legal Agreement",
    href: "/legal-agreement",
    icon: "/Icons/Team.svg",
    hoverIcon: "Icons/TeamHover.svg",
  },
];
const PROGRAMS = [
  {
    title: "Events",
    href: "/events",
    icon: "/Icons/About.svg",
    hoverIcon: "Icons/AboutHover.svg",
  },
  {
    title: "Idea Lab",
    href: "/idea-lab",
    icon: "/Icons/Team.svg",
    hoverIcon: "Icons/TeamHover.svg",
  },
];
const MEDIA = [
  {
    title: "Blogs",
    href: "/blogs",
    icon: "/Icons/About.svg",
    hoverIcon: "Icons/AboutHover.svg",
  },
  {
    title: "Gallery",
    href: "/gallery",
    icon: "/Icons/Team.svg",
    hoverIcon: "Icons/TeamHover.svg",
  },
];

export default function Navbar() {
  const [inView, setInView] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setInView(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-2 py-4 transition-all duration-300 ease-out bg-darkBlue ${
        inView ? "shadow-lg bg-foreground/50 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex justify-between items-center mx-auto px-5 w-full font-display text-primary-foreground container">
        <div className="flex gap-5">
          <Link href="/">
            <Image
              alt="logo"
              src="/images/Logo.png"
              className="w-12 lg:w-14"
              width={100}
              height={100}
            />
          </Link>

          <ul className="gap-x-1 lg:flex items-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          <Button variant="hiveYellow">
            <Link href="/contact">Join us</Link>
          </Button>
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </div>
    </nav>
  );
}
