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
    </footer>
  );
}
