import { TItems } from "@/app/blog/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  links: string;
  linkTitle: string;
  items: TItems[];
}

function MostRecentBlog({ title, links, linkTitle, items }: Props) {
  return (
    <div className="container my-12 md:my-20">
      <div className="flex justify-between items-center gap-3 mb-8">
        <h2 className="font-primary text-white text-2xl">{title}</h2>
        <Link className="p-2 border border-gold" href={links}>
          {linkTitle}
        </Link>
      </div>
      <div className="flex gap-8">
        {items.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const BlogCard = ({ item }: { item: TItems }) => {
  return (
    <div className="mx-auto w-full">
      <div>
        <Image
          src={item.src}
          alt="Modern building architecture"
          className="h-auto w-full object-cover"
          width={500}
          height={500}
        />

        <div className="mt-8 space-y-6 font-primary">
          <p className="text-xl leading-tight font-semibold text-slate-300">
            {item.title}
          </p>
          <p className="text-gold font-primary">{item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default MostRecentBlog;
