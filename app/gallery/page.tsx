import Image from "next/image";

import Newsletter from "@/components/blogComp.tsx/Newsletter";
import Link from "next/link";

interface EItems {
  id: number;
  src: string;
}

type ItemType = {
  title: string;
  items: EItems[];
};

const SUCCESSFUL_STARTUP_GALLERY = [
  {
    id: 1,
    src: "/images/gallery/gallery1.svg",
  },
  {
    id: 2,
    src: "/images/gallery/gallery2.svg",
  },
  {
    id: 3,
    src: "/images/gallery/gallery3.svg",
  },
  {
    id: 4,
    src: "/images/gallery/gallery4.svg",
  },
  {
    id: 5,
    src: "/images/gallery/gallery5.svg",
  },
  {
    id: 6,
    src: "/images/gallery/gallery6.svg",
  },
];

function page() {
  return (
    <div className="min-h-dvh font-exo space-y-8 md:space-y-12 mt-8">
      <div className="container flex flex-col gap-8">
        <GalleryCard
          title="Success Startups"
          items={SUCCESSFUL_STARTUP_GALLERY}
        />
        <Link
          className="p-2 border border-gold text-gold mx-auto bg-gold/30"
          href="/gallery#"
        >
          Load More
        </Link>
      </div>
      <div className="container flex flex-col gap-8">
        <GalleryCard
          title="Workshops & Masterclasses"
          items={SUCCESSFUL_STARTUP_GALLERY}
        />
        <Link
          className="p-2 border border-gold text-gold mx-auto bg-gold/30"
          href="/gallery#"
        >
          Load More
        </Link>
      </div>
      <div className="container flex flex-col gap-8">
        <GalleryCard
          title="Community & Network"
          items={SUCCESSFUL_STARTUP_GALLERY}
        />
        <Link
          className="p-2 border border-gold text-gold mx-auto bg-gold/30"
          href="/gallery#"
        >
          Load More
        </Link>
      </div>
      <div className="container flex flex-col gap-8">
        <GalleryCard
          title="Success & Celebrations"
          items={SUCCESSFUL_STARTUP_GALLERY}
        />
        <Link
          className="p-2 border border-gold text-gold mx-auto bg-gold/30"
          href="/gallery#"
        >
          Load More
        </Link>
      </div>
      <Newsletter />
    </div>
  );
}

const GalleryCard = ({ items, title }: ItemType) => {
  return (
    <div className="mx-auto w-full">
      <p className="text-gold font-primary">{title}</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Image
            src={item.src}
            alt={title + item.id}
            className="h-auto w-full object-cover hover:scale-105 duration-300 transition-all ease-in"
            width={500}
            height={500}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
