import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function BlogGallery() {
  return (
    <div className="my-8 md:my-16">
      <div className="flex justify-between items-center gap-3 mb-8 container ">
        <div className="flex items-center gap-3">
          <Image
            src="/Icons/BlogGallery.svg"
            alt="about_icon"
            className="w-8"
            height={100}
            width={100}
          />
          <h2 className="font-primary font-semibold text-gold text-2xl">
            Gallery
          </h2>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center  max-h-dvh">
        <div className="flex flex-col flex-1 gap-5 container p-16">
          <div className="flex items-center gap-3">
            <Image
              src="/Icons/entre.svg"
              alt="entrepreneurs_icon"
              className="w-8"
              height={100}
              width={100}
            />
            <h1 className="font-bold text-3xl text-center text-gold">
              Entrepreneurs
            </h1>
          </div>
          <p className="max-w-prose">
            At The Hive, we host a variety of businesses that are driving
            innovation across industries. Explore the companies thriving here,
            all benefiting from our modern facilities and collaborative
            environment.
          </p>
          <Button className="max-w-fit" variant="hiveYellow" size="lg" asChild>
            <Link href="/business">See Businesses</Link>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/blogs/blogGallery.svg"
            alt="about_hive"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogGallery;
