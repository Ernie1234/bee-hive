"use client";

import { CalendarClock, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div className="p-8 rounded-lg flip__card">
      <div className="flip-card__side--front flip-card__side">
        <div className="flex justify-between">
          <h2 className="text-white text-3xl mb-4">Launch Lab 2024</h2>
        </div>
        <div className="flex items-center bg-muted-foreground/30 w-fit mb-4 rounded-full">
          <div className="p-2 bg-muted-foreground/50 rounded-full">
            <CalendarClock size={24} />
          </div>
          <p className="mx-4 text-xl">About the Event</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-display text-2xl flex flex-col text-muted-foreground">
            Application opens
            <span className="text-[#ffba00] font-primary"> August 5th</span>
          </p>
          <p className="font-display text-2xl  flex flex-col text-muted-foreground">
            Pitch Day
            <span className="text-[#ffba00] font-primary"> August 30th</span>
          </p>
        </div>
        <p className="font-display text-2xl  flex flex-col text-muted-foreground">
          Application closes
          <span className="text-[#ffba00] font-primary"> August 11th</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-start items-center mt-8 gap-5 w-full">
          <Link
            href="/launch-application-form"
            className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-xl transition-all duration-500 w-fit text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="flip_card__side--back flip-card__side">
        <div className="flex flex-col items-center flex-1">
          <p className="text-2xl">Hive Incubator</p>
          <div className="p-12">
            <Image
              src="/images/Logo.png"
              alt="Overview"
              // layout="fill"
              objectFit="cover"
              quality={100}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
