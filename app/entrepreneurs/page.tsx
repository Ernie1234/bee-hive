import BigIdeas from "@/components/BigIdeas";
import Catalyst from "@/components/Catalyst";
import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Equity from "@/components/Equity";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Ofer from "@/components/Ofer";
import Resilience from "@/components/Resilience";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="border-b-2 min-h-dvh font-exo">
      <Navbar />
      <div className="flex md:flex-row flex-col justify-center items-center p-8 max-h-dvh">
        <div className="flex flex-col flex-1 gap-5">
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
          <Button variant="hiveYellow" size="lg" asChild>
            <Link href="/business">See Businesses</Link>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/entrepreneurs/Frame.svg"
            alt="about_hive"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="my-16 container">
        <Category />
      </div>
      <div className="my-16 container">
        <BigIdeas />
      </div>
      <div className="my-16 container">
        <Ofer />
      </div>
      <div className="my-16 container">
        <Equity />
      </div>
      <div className="my-16 container">
        <Resilience />
      </div>
      <div className="container">
        <Catalyst />
        <FAQ />
      </div>
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
