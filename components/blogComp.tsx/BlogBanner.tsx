import Link from "next/link";
import { Button } from "../ui/button";

function BlogBanner() {
  return (
    <div className="flex flex-col gap-2 bg-gold justify-center items-center p-5 bg-gradient-to-r from-black via-gold-foreground to-black">
      <h4 className="">
        Registered for the Hive Incubator Entrepreneurship (COHORT 2) yet?
      </h4>
      <Button asChild variant="hiveYellow" size="lg" className="max-w-fit">
        <Link href="/launch">Register here</Link>
      </Button>
    </div>
  );
}

export default BlogBanner;
