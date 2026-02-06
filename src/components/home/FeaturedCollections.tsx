"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

/* TODO: Replace with real data from CMS (e.g. Sanity, Strapi, or custom backend) */
const collections = [
  {
    id: 1,
    title: "Bridal Heritage",
    subtitle: "Bridal Collection",
    description: "Timeless bridal sets crafted with intricate kundan and polki work for your most cherished day.",
    image: "/images/hero-1.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "Contemporary Gold",
    subtitle: "Gold Collection",
    description: "Modern gold designs that blend minimal aesthetics with traditional Indian craftsmanship.",
    image: "/images/hero-2.jpg",
    badge: "New Arrival",
  },
  {
    id: 3,
    title: "Diamond Radiance",
    subtitle: "Diamond Collection",
    description: "Certified diamonds set in 18K gold, designed to make every moment sparkle.",
    image: "/images/hero-1.jpg",
    badge: "Premium",
  },
];

export default function FeaturedCollections() {
  const gridRef = useStaggerReveal<HTMLDivElement>(150, 0.08);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#150330] relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/[0.06] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/[0.04] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          subtitle="Our Finest"
          title="Signature Collections"
          description="Every collection is a journey through India's rich jewellery tradition, reimagined for the modern connoisseur."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="reveal luxury-card group relative overflow-hidden rounded-3xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] shadow-lg shadow-black/20"
            >
              {/* Image */}
              <div className="relative h-[280px] sm:h-[340px] md:h-[420px] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-purple-950/25 to-transparent" />

                {/* Badge */}
                <span className="absolute top-5 left-5 px-4 py-1.5 bg-gold-500/85 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.22em] font-semibold rounded-full shadow-md">
                  {collection.badge}
                </span>

                {/* Bottom content on image */}
                <div className="absolute bottom-0 left-0 right-0 p-7 pb-0">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-serif text-[1.5rem] md:text-[1.65rem] text-white font-semibold mb-2 group-hover:text-gold-200 transition-colors duration-500">
                    {collection.title}
                  </h3>
                </div>
              </div>

              {/* Content below image */}
              <div className="relative p-5 sm:p-7 pt-4 sm:pt-5">
                <p className="text-[13px] text-white/40 leading-[1.75] mb-5">
                  {collection.description}
                </p>
                <span className="inline-flex items-center gap-2.5 text-[12px] text-gold-400 font-semibold uppercase tracking-[0.18em] group-hover:gap-3.5 transition-all duration-500">
                  Explore Collection
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/collections" variant="secondary" size="lg">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
