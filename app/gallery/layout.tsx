import React from "react";

import BlogBanner from "@/components/blogComp.tsx/BlogBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <div>
      <Navbar />

      <BlogBanner />
      {children}
      <div className="mt-8 container">
        <Footer />
      </div>
    </div>
  );
}

export default layout;
