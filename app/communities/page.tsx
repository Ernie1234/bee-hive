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
import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

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
          {/* <Button variant="hiveYellow" size="lg" className="max-w-fit" asChild>
            <Link href="/business">Explore Communities</Link>
          </Button> */}
          <div className="flex gap-4 my-2 sm:mt-0 pt-12">
            <Link
              href="https://www.linkedin.com/company/the-hive-incubator/"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gold-foreground transition-all duration-500 dark:hover:text-white"
            >
              <IoLogoLinkedin size={35} />
            </Link>
            <Link
              href="https://www.instagram.com/p/DGLEyhEN4Yu/?igsh=cnR2bnhjMWV2cWFt"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gold-foreground transition-all duration-500 dark:hover:text-white"
            >
              <IoLogoInstagram size={35} />
            </Link>
            <Link
              href="https://x.com/incubatorhive?s=21&t=pQ4xziLcRY2Dvreppcix0A"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gold-foreground transition-all duration-500 dark:hover:text-white"
            >
              <IoLogoTwitter size={35} />
            </Link>
            <Link
              href="https://www.tiktok.com/@thehivehub.ng?_t=ZM-8tzU9BU9YX7&_r=1"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gold-foreground transition-all duration-500 dark:hover:text-white"
            >
              <BsTiktok size={35} />
            </Link>
            <Link
              href="https://chat.whatsapp.com/IfoO1ik8FGvE7oXuiioAbk"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gold-foreground transition-all duration-500 dark:hover:text-white"
            >
              <BsWhatsapp size={35} />
            </Link>
          </div>
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
