import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Entrepreneurs() {
  return (
    <div className="my-16 container">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/Icons/Communities.svg"
          alt="philosophy"
          className="w-8"
          width={100}
          height={100}
        />
        <h2 className="font-primary font-semibold text-gold text-xl">
          Entrepreneurs
        </h2>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 md:gap-16 mx-auto">
        <div className="flex flex-col flex-1 gap-8">
          <h4 className="text-white text-xl">
            Empowering Businesses to Innovate and Grow
          </h4>
          <p className="max-w-prose text-white">
            Discover the range of businesses thriving at The Hub, supported by
            our modern facilities and collaborative spaces.
          </p>
          <Button
            variant="hiveYellow"
            className="max-w-fit font-primary"
            size="lg"
            asChild
          >
            <Link href="/entrepreneurs">See Businesses</Link>
          </Button>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Image
            src="/images/Entrepreneurs.svg"
            alt="about_hive"
            className="w-2/3"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default Entrepreneurs;
