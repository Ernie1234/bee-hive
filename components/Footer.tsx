import Image from "next/image";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-hive-pattern bg-no-repeat bg-bottom pb-20 min-h-[40vw] text-center">
      <div className="flex md:flex-row flex-col justify-between gap-12 md:gap-16 pt-2">
        <div className="flex flex-col justify-start items-start gap-3">
          <p className="w-full max-w-prose text-left text-xl">
            The Hive Incubator is a vibrant hub for innovation and
            entrepreneurship, proudly located in Akure, Nigeria. We are
            passionate about empowering visionary founders and startups to
            transform their ideas into thriving businesses.
          </p>
          <div className="flex sm:justify-center gap-4 my-2 sm:mt-0 pt-12">
            <Link
              href="https://www.linkedin.com/company/the-hive-incubator/"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gray-900 dark:hover:text-white"
            >
              <IoLogoLinkedin size={35} />
            </Link>
            <Link
              href="https://www.instagram.com/thehive.incubator?igsh=emRnN25pcmhjam5q"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gray-900 dark:hover:text-white"
            >
              <IoLogoInstagram size={35} />
            </Link>
            <Link
              href="https://x.com/incubatorhive?s=21&t=pQ4xziLcRY2Dvreppcix0A"
              target="_blank"
              rel="noreferrer"
              className="text-[#9E9E9E] hover:text-gray-900 dark:hover:text-white"
            >
              <IoLogoTwitter size={35} />
            </Link>
          </div>
          <p>&copy; 5 Hive Incubator. All rights reserved.</p>
        </div>
        <div className="flex md:flex-row flex-col gap-12 md:gap-16 min-w-fit">
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="font-semibold text-[#ffba00] text-2xl">About Us</p>
            <a href="#who" className="capitalize">
              who we are
            </a>
            <a href="#faq" className="capitalize">
              FAQ
            </a>
            <a href="#contact" className="capitalize">
              contact us
            </a>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="font-semibold text-[#ffba00] text-2xl">Support</p>
            <a href="#who" className="capitalize">
              Newsletter
            </a>
            <a href="#faq" className="capitalize">
              Coach Application
            </a>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="font-semibold text-[#ffba00] text-2xl">Support</p>
            <p className="capitalize">The Hive hub behind St. Jacob{"'"}s</p>
            <p className="">Plot.4, 5 Adeloye Oladejo street,</p>
            <p className="">Alagbaka, Akure 340001</p>
            <a href="#faq" className="mt-2 text-gold capitalize">
              Email: hello@thehiveincubator.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
