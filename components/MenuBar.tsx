"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "About",
    href: "/about",
    icon: "/Icons/About.svg",
    hoverIcon: "Icons/AboutHover.svg",
  },
  {
    title: "The Team",
    href: "/team",
    icon: "/Icons/Team.svg",
    hoverIcon: "Icons/TeamHover.svg",
  },
  {
    title: "Communities",
    href: "/communities",
    icon: "/Icons/Communities.svg",
    hoverIcon: "/Icons/Communities.svg",
  },
  {
    title: "The Hub",
    href: "/hub",
    icon: "/Icons/TechHub.svg",
    hoverIcon: "/Icons/TechHub.svg",
  },
  {
    title: "Entrepreneurs",
    href: "/entrepreneurs",
    icon: "/Icons/entre.svg",
    hoverIcon: "/Icons/entre.svg",
  },
  {
    title: "Curriculum",
    href: "/resources",
    icon: "/Icons/About.svg",
    hoverIcon: "Icons/AboutHover.svg",
  },
  {
    title: "Legal Agreement",
    href: "/resources",
    icon: "/Icons/Team.svg",
    hoverIcon: "Icons/TeamHover.svg",
  },
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
  {
    title: "Launch Lab",
    href: "/launch-lab",
    icon: "/Icons/LaunchLab.svg",
    hoverIcon: "/Icons/LaunchLab.svg",
  },
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

function MenuBar() {
  return (
    <div className="block md:hidden h-full">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="hidden">
              <SheetTitle>Are you absolutely sure?</SheetTitle>
            </div>
            <div className="flex flex-col justify-between gap-4 h-full">
              <div className="flex flex-col gap-3">
                {items.map(
                  (nav: {
                    title: string;
                    href: string;
                    icon: string;
                    hoverIcon: string;
                  }) => (
                    <Link href={nav.href} key={nav.title}>
                      <p
                        className={cn(
                          "transition duration-300 text-slate-800 px-2 py-1 rounded-md"
                        )}
                      >
                        {nav.title}
                      </p>
                    </Link>
                  )
                )}
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MenuBar;
