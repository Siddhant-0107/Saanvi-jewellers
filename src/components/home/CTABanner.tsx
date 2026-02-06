"use client";

import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTABanner() {
  const [ref] = useScrollReveal<HTMLDivElement>(0.15);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#1a0338] via-[#12022a] to-[#1a0338] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/[0.04] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-400/[0.05] rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Noise overlay */}
      <div className="noise-overlay opacity-[0.015]" />

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
          Begin Your Journey
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.15] mb-6">
          Every Masterpiece Begins with
          <br />
          <span className="text-shimmer-gold">
            a Conversation
          </span>
        </h2>

        {/* Ornamental divider */}
        <div className="ornament-divider justify-center mb-7">
          <div className="diamond" />
        </div>

        <p className="text-[16px] text-white/45 leading-[1.85] max-w-2xl mx-auto mb-12">
          Visit our showroom and experience the art of fine jewellery in person.
          Our expert consultants will guide you through our exclusive collections
          and help you find — or create — the perfect piece.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            }
          >
            Book a Visit
          </Button>
          <Button
            href="https://wa.me/916394175639"
            variant="ghost"
            size="lg"
            external
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
