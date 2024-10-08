import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-[75dvh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-primary">
        Where <span className="text-[#ffba00]">dreams</span> take flight!
      </h1>
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="text-lg sm:text-xl md:text-2xl w-full sm:w-2/3 text-center">
          We are on a mission to empower the dreamers, the innovators, and the
          trailblazers who are ready to create change in Akure and beyond.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-y-0 sm:space-x-8 justify-center items-center mt-6">
        <Link
          href="/launch"
          className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center"
        >
          Apply to Launch Lab
        </Link>
        {/* <Link
          href="/coach"
          className="border-2 border-background hover:bg-background text-background hover:text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center min-w-max"
        >
          Get started
        </Link> */}
      </div>
    </div>
  );
}
