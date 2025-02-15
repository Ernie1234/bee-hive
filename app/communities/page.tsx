import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MentorsCoaches from "@/components/MentorsCoaches";
import Navbar from "@/components/Navbar";
import PerfectCommunity from "@/components/PerfectCommunity";
import TechHub from "@/components/TechHub";
import TheTeam from "@/components/TheTeam";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="border-b-2 min-h-dvh font-exo">
      <Navbar />
      <div className="flex md:flex-row flex-col justify-center items-center p-8 max-h-dvh container">
        <div className="flex flex-col flex-1 gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/Icons/Communities.svg"
              alt="entrepreneurs_icon"
              className="w-8"
              height={100}
              width={100}
            />
            <h1 className="font-bold text-3xl text-center text-gold">
              Communities
            </h1>
          </div>
          <h4 className="text-white text-3xl">Discover your Tribe</h4>
          <p className="max-w-prose">
            At The Hive, shared passions unite us. Join a vibrant community
            tailored to your goals—there’s a place for you to thrive.
          </p>
          <Button variant="hiveYellow" size="lg" className="max-w-fit" asChild>
            <Link href="/business">Explore Communities</Link>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/communities/Group 11.svg"
            alt="about_hive"
            className="w-full"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="pt-12 md:pt-20"></div>

      <PerfectCommunity />
      <TechHub />
      <TheTeam />
      <MentorsCoaches />
      <div className="my-16 container">
        <Contact />
      </div>
      <div className=" container">
        <Footer />
      </div>
    </div>
  );
}

export default page;
