"use client";

import { useStaggerReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride, Delhi",
    quote:
      "My bridal set from Trimurti Saanvi was the centrepiece of my wedding. The craftsmanship is extraordinary — every guest was in awe. Truly, jewellery fit for a queen.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Loyal Customer, Mumbai",
    quote:
      "I have been buying from Trimurti Saanvi for 15 years. Their integrity, quality, and designs are unmatched. They don't just sell jewellery — they build relationships.",
    rating: 5,
  },
  {
    name: "Rekha Patel",
    role: "Anniversary Gift, Pune",
    quote:
      "The diamond necklace I bought for my wife's 25th anniversary was perfection. The team helped me choose the perfect piece with such warmth and patience.",
    rating: 5,
  },
];

export default function Testimonials() {
  const gridRef = useStaggerReveal<HTMLDivElement>(180, 0.1);

  return (
    <section className="py-24 lg:py-32 bg-purple-950 relative overflow-hidden">
      {/* Noise texture */}
      <div className="noise-overlay opacity-[0.03]" />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-purple-800/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[200px] h-[400px] bg-purple-700/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-4">
            Voices of Trust
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white leading-[1.15] mb-5">
            What Our Families Say
          </h2>
          <div className="ornament-divider justify-center">
            <div className="diamond !bg-gold-500" />
          </div>
        </div>

        {/* Testimonial Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="reveal-scale group relative glass rounded-2xl p-8 lg:p-9 hover:border-gold-400/30 transition-all duration-700"
            >
              {/* Top gold accent on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-2xl" />

              {/* Quote mark */}
              <div className="text-gold-500/20 text-7xl font-serif leading-none -mb-2 select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold-400 drop-shadow-[0_0_3px_rgba(212,175,55,0.3)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/60 leading-[1.85] mb-7 text-[15px]">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-white/[0.07] pt-5 mt-auto">
                <p className="font-serif text-base text-white font-medium tracking-wide">
                  {testimonial.name}
                </p>
                <p className="text-[11px] text-gold-400/70 uppercase tracking-[0.2em] mt-1.5">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
