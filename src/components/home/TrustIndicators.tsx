"use client";

import { useStaggerReveal } from "@/hooks/useScrollReveal";

const trustItems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "BIS Hallmarked",
    description: "Every piece is BIS 916 certified for guaranteed purity and authenticity.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "3 Generations",
    description: "Over 30 years of mastering the art of fine Indian jewellery.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Handcrafted",
    description: "Each design is thoughtfully handcrafted by skilled artisans with meticulous attention.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Trusted by 10,000+",
    description: "Families across India trust Trimurti Saanvi for their most cherished celebrations.",
  },
];

export default function TrustIndicators() {
  const containerRef = useStaggerReveal<HTMLDivElement>(100, 0.12);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#12022a] relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="reveal group text-center px-3 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10 rounded-2xl border border-white/[0.06] hover:border-gold-500/20 hover:bg-white/[0.04] transition-all duration-600"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/[0.06] text-gold-400 mb-4 sm:mb-6 group-hover:bg-gold-500/15 group-hover:text-gold-300 group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/[0.06]">
                {item.icon}
              </div>
              <h3 className="font-serif text-[14px] sm:text-[17px] text-white font-semibold mb-1.5 sm:mb-2.5 tracking-wide">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-[13px] text-white/40 leading-[1.6] sm:leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
