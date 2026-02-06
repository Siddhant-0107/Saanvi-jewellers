"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BrandStory() {
  const [imgRef] = useScrollReveal<HTMLDivElement>(0.15);
  const [textRef] = useScrollReveal<HTMLDivElement>(0.15);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#12022a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-purple-500/[0.06] rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-gold-500/[0.04] rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image Side */}
          <div ref={imgRef} className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10">
              <Image
                src="/images/craftsmanship.png"
                alt="The art of jewellery making at Trimurti Saanvi"
                width={640}
                height={800}
                className="object-cover w-full h-[380px] sm:h-[520px] lg:h-[620px]"
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/25 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 lg:-right-8 bg-white/[0.07] backdrop-blur-lg rounded-2xl shadow-xl shadow-black/20 p-4 sm:p-6 max-w-[160px] sm:max-w-[190px] border border-white/[0.1]">
              <p className="font-serif text-[2rem] text-shimmer-gold font-bold leading-none">30+</p>
              <p className="text-[11px] text-white/50 uppercase tracking-[0.2em] mt-2 leading-snug font-medium">
                Years of Master Craftsmanship
              </p>
            </div>

            {/* Decorative offset border */}
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold-500/15 rounded-3xl -z-10" />
          </div>

          {/* Text Side */}
          <div ref={textRef} className="reveal-right">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
              Our Heritage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.15] mb-6">
              Crafting Legacies,
              <br />
              <span className="text-shimmer-gold">
                One Jewel at a Time
              </span>
            </h2>

            {/* Ornamental divider */}
            <div className="ornament-divider justify-start mb-8">
              <div className="diamond" />
            </div>

            <div className="space-y-5 text-[15px] text-white/45 leading-[1.85]">
              <p>
                Trimurti Saanvi Jewellers was born from a passion that has been
                passed down through three generations. What started as a small
                workshop in the heart of India&apos;s jewellery district has
                blossomed into a trusted name synonymous with quality, artistry,
                and integrity.
              </p>
              <p>
                Every ornament we create is a masterpiece — meticulously
                designed, hand-finished, and hallmarked to the highest
                standards. We believe that jewellery is more than adornment;
                it is an emotion, a legacy, a promise worn close to the heart.
              </p>
              <p>
                From bridal collections that honour centuries-old traditions to
                contemporary designs for the modern woman, each piece carries
                the soul of our artisans and the trust of over 10,000 families.
              </p>
            </div>

            <div className="mt-10">
              <Button
                href="/about"
                variant="outline"
                size="lg"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                }
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
