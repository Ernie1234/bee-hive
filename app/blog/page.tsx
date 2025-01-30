import MostRecentBlog from "@/components/blogComp.tsx/MostRecentBlog";
import {
  BUSINESS_GROWTH_ITEMS,
  ENTREPRENEURSHIP_STARTUP_ITEMS,
  INNOVATION_TECHNOLOGY_ITEMS,
  MOST_RECENT_ITEMS,
} from "@/lib/data";
import Image from "next/image";

export type TItems = {
  id: number;
  src: string;
  alt: string;
  title: string;
  content: string;
};

function page() {
  return (
    <div className="min-h-dvh font-exo">
      <div className="flex md:flex-row flex-col justify-center items-center p-8 max-h-dvh gap-8 container">
        <div className="flex-1">
          <Image
            src="/images/blogs/blogHero.svg"
            alt="about_hive"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="text-xl text-gold font-primary">
            Success Story & Case Studies
          </h1>
          <h3 className="text-3xl text-white font-semibold font-primary">
            The Journey of Building a Business from Scratch: Insights from
            Cohort 1
          </h3>

          <p className="max-w-prose font-light text-sm">
            Explore the highs, lows, and invaluable lessons from the
            trailblazers of Cohort 1 as they share their experiences of starting
            a business from the ground up. From ideation to execution, gain
            insights, strategies, and inspiration to fuel your entrepreneurial
            journey.
          </p>
          <p className="text-gold-foreground">Toluwani A.</p>
        </div>
      </div>
      <MostRecentBlog
        linkTitle="View All"
        links="/most-recent"
        title="Most Recent"
        items={MOST_RECENT_ITEMS}
      />
      <div className="my-16 md:my-28">
        <MostRecentBlog
          linkTitle="View All"
          links="/business-growth-and-strategy"
          title="Business Growth & Strategy"
          items={BUSINESS_GROWTH_ITEMS}
        />
      </div>
      <div className="my-16 md:my-28">
        <MostRecentBlog
          linkTitle="View All"
          links="/business-growth-and-strategy"
          title="Entrepreneurships & startups"
          items={ENTREPRENEURSHIP_STARTUP_ITEMS}
        />
      </div>
      <div className="my-16 md:my-28">
        <MostRecentBlog
          linkTitle="View All"
          links="/business-growth-and-strategy"
          title="Innovations & Technology"
          items={INNOVATION_TECHNOLOGY_ITEMS}
        />
      </div>
    </div>
  );
}

export default page;
