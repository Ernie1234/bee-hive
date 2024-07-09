"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setInView(currentPosition > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky bg-darkBlue top-0 z-50 px-2 py-4 transition-all duration-300 ease-out bg-foreground ${
        inView && "shadow-md"
      }`}
    >
      <div className="container w-full px-5 md:max-w-[63rem] mx-auto flex justify-between items-center text-primary-foreground  font-display">
        <p>logo</p>
        <div className="flex gap-5">
          <Link href="/coach" className="capitalize">
            join us
          </Link>
          <Link href="/coach" className="capitalize text-[#ffba00]">
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
