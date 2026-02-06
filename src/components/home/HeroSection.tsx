"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with enhanced overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-1.jpg"
          alt="Luxury jewellery showcase"
          fill
          className="object-cover scale-105"
          priority
          quality={95}
        />
        {/* Multi-layered gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-purple-900/75 to-purple-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-purple-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-transparent to-transparent" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(26,3,56,0.5)_100%)]" />
      </div>

      {/* Decorative Elements – floating orbs */}
      <div className="absolute top-1/4 right-[20%] w-[500px] h-[500px] bg-gold-400/[0.04] rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-[15%] w-[350px] h-[350px] bg-lavender-300/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[60%] right-[10%] w-48 h-48 bg-gold-500/[0.03] rounded-full blur-[60px] animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />

      {/* Decorative corner ornament (top-right) */}
      <div className="absolute top-32 right-12 lg:right-20 hidden lg:block opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="58" stroke="url(#gold-grad)" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="45" stroke="url(#gold-grad)" strokeWidth="0.3" />
          <defs>
            <linearGradient id="gold-grad" x1="0" y1="0" x2="120" y2="120">
              <stop offset="0%" stopColor="#d4a520" />
              <stop offset="50%" stopColor="#f5c542" />
              <stop offset="100%" stopColor="#d4a520" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-28 sm:py-36 lg:py-0 w-full">
        <div className="max-w-2xl lg:max-w-[620px]">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 stagger-1">
            <span className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-full text-gold-300 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] font-medium mb-7 sm:mb-10">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse-gold" />
              Since Three Generations
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up opacity-0 stagger-2 font-serif text-[2.25rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.75rem] font-semibold text-white leading-[1.05] mb-6 sm:mb-7 tracking-[-0.01em]">
            Where Heritage
            <br />
            <span className="text-shimmer-gold">
              Meets Elegance
            </span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up opacity-0 stagger-3 text-[15px] sm:text-[16px] md:text-[18px] text-white/55 leading-[1.8] sm:leading-[1.85] mb-10 sm:mb-12 max-w-[520px]">
            Discover handcrafted masterpieces that honour tradition while
            embracing contemporary design. Each piece from Trimurti Saanvi
            is a testament to three generations of artistry.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up opacity-0 stagger-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button
              href="/collections"
              variant="primary"
              size="lg"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              }
            >
              Explore Collections
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a Visit
            </Button>
          </div>

          {/* Mini Trust Stats */}
          <div className="animate-fade-in-up opacity-0 stagger-5 mt-14 sm:mt-20 flex flex-wrap gap-x-10 gap-y-6 sm:gap-12 border-t border-white/[0.08] pt-8 sm:pt-10">
            {[
              { value: "30+", label: "Years of Trust" },
              { value: "10K+", label: "Happy Families" },
              { value: "100%", label: "BIS Certified" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <p className="font-serif text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] text-shimmer-gold font-semibold group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-[11px] text-white/35 uppercase tracking-[0.2em] mt-1.5 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#12022a] via-[#12022a]/80 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up opacity-0 stagger-7 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/25 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold-500/40 to-transparent" />
      </div>
    </section>
  );
}
