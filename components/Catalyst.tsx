import Link from "next/link";

export default function Catalyst() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-[75dvh]">
      <h1 className="text-5xl font-semibold font-primary">
        Be a <span className="text-[#ffba00]">Catalyst</span>
      </h1>
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="text-xl w-full text-center">
          Are you passionate about mentoring and guiding the next generation of
          entrepreneurs? We seek experienced coaches to share their knowledge
          and expertise, helping to shape the future of innovative startups.
          Partner with us and inspire the trailblazers of tomorrow.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-y-0 sm:space-x-8 justify-center items-center mt-6">
        <Link
          href="/coach"
          className="bg-background hover:bg-background/95 text-foreground text-lg px-14 py-3 rounded-full transition-all duration-500 w-full text-center"
        >
          Join us now
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
