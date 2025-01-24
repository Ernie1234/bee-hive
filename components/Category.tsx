"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";

const featGallery = [
  {
    id: 1,
    src: "/images/entrepreneurs/energy1.svg",
    alt: "entre 1",
  },
  {
    id: 2,
    src: "/images/entrepreneurs/energy2.svg",
    alt: "entre 2",
  },
];

const cat = ["Tech", "Energy", "Finance", "E-commerce", "Real Estate"];

function Category() {
  const [category, setCategory] = useState<string>(cat[1]);
  return (
    <div className="my-16 container">
      <div className="flex justify-between items-center gap-3 mb-8">
        <h2 className="font-primary font-semibold text-gold text-xl">
          Categories
        </h2>
        <Input
          className="max-w-prose bg-transparent border-gold rounded-none"
          placeholder="Search by business name or category"
        />
      </div>
      <div className="flex gap-4">
        {cat.map((c) => (
          <p
            key={c}
            onClick={() => setCategory(c)}
            className={`text-sm font-medium cursor-pointer border-0 rounded-md px-4 py-2 hover:text-gold transition-all duration-200 ${
              category === c ? "text-gold" : "text-gold-foreground"
            }`}
          >
            {c}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {featGallery.map((item) => {
          return (
            <div key={item.id} className="relative">
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full object-cover rounded-lg hover:scale-100 scale-95 transition-all duration-500"
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
