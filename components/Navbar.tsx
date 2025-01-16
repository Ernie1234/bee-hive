"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
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

          <NavigationMenu className="md:block hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                  Inside the hive
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-2 border-gold bg-foreground bg-gradient-to-b from-foreground to-gold-foreground/50">
                  <ul className="gap-3 grid grid-cols-1 p-2 w-[400px] max-w-fit min-h-fit">
                    {INSIDE_HIVE.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                        hoverIcon={component.hoverIcon}
                        pathName={pathname}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-2 border-gold bg-foreground bg-gradient-to-b from-foreground to-gold-foreground/50">
                  <ul className="gap-3 grid grid-cols-1 p-2 w-[400px] max-w-fit min-h-fit">
                    {RESOURCES.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                        hoverIcon={component.hoverIcon}
                        pathName={pathname}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                  Programs
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-2 border-gold bg-foreground bg-gradient-to-b from-foreground to-gold-foreground/50">
                  <ul className="gap-3 grid grid-cols-1 p-2 w-[400px] max-w-fit min-h-fit">
                    {PROGRAMS.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                        hoverIcon={component.hoverIcon}
                        pathName={pathname}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                  Media
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-2 border-gold bg-foreground bg-gradient-to-b from-foreground to-gold-foreground/50">
                  <ul className="gap-3 grid grid-cols-1 p-2 w-[400px] max-w-fit min-h-fit">
                    {MEDIA.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                        hoverIcon={component.hoverIcon}
                        pathName={pathname}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button variant="hiveYellow">
          <Link href="/contact">Join us</Link>
        </Button>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, hoverIcon, icon, href, pathName, ...props }, ref) => {
    const router = useRouter();
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-foreground hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group transition-all duration-500",
              pathName === href ? "text-gold-foreground" : "text-gold",
              className
            )}
            {...props}
          >
            <div
              className=""
              onClick={() => {
                router.push(`/${href}`);
              }}
            >
              <Image
                src={icon}
                alt={icon}
                className="block group-hover:hidden mr-2 w-6"
                width={100}
                height={100}
              />
              <Image
                src={hoverIcon}
                alt={icon}
                className="group-hover:block hidden mr-2 w-6"
                width={100}
                height={100}
              />
            </div>
            <div className="font-medium text-gold text-sm hover:text-gold-foreground leading-none">
              {title}
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
