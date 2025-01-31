import BlogBanner from "@/components/blogComp.tsx/BlogBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center gap-3 mb-8 container">
        <div className="flex items-center gap-3">
          <Image
            src="/Icons/Blogs.svg"
            alt="about_icon"
            className="w-8"
            height={100}
            width={100}
          />
          <h2 className="font-primary font-semibold text-gold text-xl">
            Blogs
          </h2>
        </div>
        <Input
          className="max-w-prose bg-transparent border-gold rounded-none"
          placeholder="Search keywords or category"
        />
      </div>
      <BlogBanner />
      {children}
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default layout;
