"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface IItems {
  title: string;
  href: string;
  icon: string;
  hoverIcon: string;
}

interface Props {
  items: IItems[];
  title: string;
}

export function DesktopMenu({ items, title }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem key={2}>
          <NavigationMenuTrigger
            className={cn(
              "cursor-pointer text-white font-grotesk transition-all duration-300 bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white"
            )}
          >
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-4 bg-slate-700 backdrop-blur-md">
              {items.map((item) => (
                <ListItem {...item} key={item.title} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, href, hoverIcon, icon }: IItems) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      href={href}
      className="group transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={title}
    >
      <div className="flex gap-6 items-center p-3 rounded-md">
        {hovered ? (
          <Image
            src={hoverIcon}
            alt={title}
            width={100}
            height={100}
            className="w-12"
          />
        ) : (
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            className="w-12"
          />
        )}
        <span className="text-gold group-hover:text-gold-foreground  transition-all duration-500 font-grotesk">
          {title}
        </span>
      </div>
    </Link>
  );
}
