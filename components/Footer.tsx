import Image from "next/image";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="flex my-2 gap-4 sm:justify-center sm:mt-0">
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
      <p>&copy; 2024 Hive Incubator. All rights reserved.</p>
      {/* <p>Powered by Jowis Entreprise Limited, Nigeria</p> */}
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16 pt-12">
        <div className="flex flex-col justify-start items-start gap-3">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                alt="logo"
                src="/images/Logo.png"
                className="w-12 lg:w-14"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-4xl font-semibold text-[#ffba00]">Hive</p>
          </div>
          <p className="text-xl text-left w-full md:w-2/5">
            The Hive Incubator is a dynamic startup business incubator located
            in Akure, Nigeria, dedicated to fueling the entrepreneurial spirit
            in the local community.
          </p>
        </div>
        <div className="flex min-w-fit gap-12 md:gap-16">
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="text-2xl font-semibold text-[#ffba00]">About Us</p>
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
            <p className="text-2xl font-semibold text-[#ffba00]">Support</p>
            <a href="#who" className="capitalize">
              Apply to Launch Lab
            </a>
            <a href="#faq" className="capitalize">
              Coach Application
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
