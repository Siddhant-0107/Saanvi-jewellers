import Image from "next/image";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the heritage, craftsmanship, and values behind Trimurti Saanvi Jewellers. Three generations of mastering the art of fine Indian jewellery.",
};

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Artisanal Excellence",
    description:
      "Every piece is handcrafted by master artisans who have honed their skills over decades, ensuring perfection in every detail.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Certified Purity",
    description:
      "100% BIS 916 Hallmarked gold and IGI/GIA certified diamonds. We guarantee the purity and authenticity of every ornament.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Customer First",
    description:
      "From personal consultations to lifetime maintenance, we nurture lasting relationships built on trust and transparency.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    title: "Fair Pricing",
    description:
      "Transparent billing with no hidden charges. Our making charges and gold rates are displayed clearly so you shop with confidence.",
  },
];

const milestones = [
  { year: "1994", title: "The Beginning", description: "Founded with a single workshop and a dream to create the finest Indian jewellery." },
  { year: "2004", title: "Expansion", description: "Opened our first flagship showroom, bringing our artistry to a wider audience." },
  { year: "2014", title: "Diamond Collection", description: "Launched our signature diamond line with IGI and GIA certified stones." },
  { year: "2024", title: "Digital Heritage", description: "Bringing three decades of craftsmanship to the modern world while staying true to our roots." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-b from-purple-950 via-purple-900 to-[#12022a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.jpg"
            alt="About Trimurti Saanvi Jewellers"
            fill
            className="object-cover opacity-12"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/85 to-[#12022a]" />
        </div>
        <div className="absolute bottom-0 right-1/3 w-[420px] h-[420px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="noise-overlay opacity-[0.03]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5 animate-[fade-in-down_0.8s_ease_both]">
            Our Heritage
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] mb-5 sm:mb-6 animate-[fade-in-down_0.8s_0.15s_ease_both]">
            A Legacy of Brilliance
          </h1>
          <div className="ornament-divider justify-center mb-7 animate-[fade-in-down_0.8s_0.3s_ease_both]">
            <div className="diamond !bg-gold-500" />
          </div>
          <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-[1.85] animate-[fade-in-down_0.8s_0.4s_ease_both]">
            Three generations. One unwavering commitment — to craft jewellery
            that becomes a part of your family&apos;s most treasured moments.
          </p>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#12022a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-purple-500/[0.06] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gold-500/[0.04] rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                    <Image
                      src="/images/hero-1.jpg"
                      alt="Master craftsmanship"
                      width={300}
                      height={400}
                      className="object-cover w-full h-64 lg:h-80"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                    <Image
                      src="/images/hero-2.jpg"
                      alt="Jewellery workshop"
                      width={300}
                      height={250}
                      className="object-cover w-full h-48 lg:h-56"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                    <Image
                      src="/images/hero-2.jpg"
                      alt="Fine details"
                      width={300}
                      height={250}
                      className="object-cover w-full h-48 lg:h-56"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                    <Image
                      src="/images/hero-1.jpg"
                      alt="Heritage jewellery"
                      width={300}
                      height={400}
                      className="object-cover w-full h-64 lg:h-80"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative offset border */}
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold-500/15 rounded-3xl -z-10" />
            </div>

            {/* Text Content */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
                Est. 1994
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.15] mb-6">
                Born from Passion,
                <br />
                <span className="text-shimmer-gold">Built on Trust</span>
              </h2>
              <div className="ornament-divider justify-start mb-8">
                <div className="diamond" />
              </div>

              <div className="space-y-5 text-[15px] text-white/45 leading-[1.85]">
                <p>
                  The story of Trimurti Saanvi Jewellers begins in 1994, when our
                  founder — a master goldsmith with an artist&apos;s eye — opened a
                  modest workshop with a vision that jewellery should be more than
                  mere ornament. It should carry meaning, emotion, and legacy.
                </p>
                <p>
                  Today, that workshop has grown into one of the most respected names
                  in fine Indian jewellery. Our designs draw from centuries-old Indian
                  traditions — Kundan, Polki, Temple, Meenakari — while embracing
                  modern aesthetics that resonate with today&apos;s discerning
                  clientele.
                </p>
                <p>
                  What has never changed is our promise: every piece that leaves our
                  workshop is crafted with the same love and precision as the very
                  first. Because at Trimurti Saanvi, we don&apos;t just make
                  jewellery. We create heirlooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#150330] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/[0.06] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.15] mb-5">
              Our Pillars of Trust
            </h2>
            <div className="ornament-divider justify-center">
              <div className="diamond" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {values.map((value) => (
              <div
                key={value.title}
                className="luxury-card group bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 lg:p-9"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.06] text-gold-400 mb-6 group-hover:bg-gold-500/15 group-hover:text-gold-300 transition-all duration-500 border border-white/[0.06]">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl text-white font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-[14px] text-white/40 leading-[1.8]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#12022a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-4">
              Our Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.15] mb-5">
              Three Decades of Brilliance
            </h2>
            <div className="ornament-divider justify-center">
              <div className="diamond" />
            </div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-200 via-gold-400 to-gold-200 hidden md:block" />

            <div className="space-y-14 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                    <span className="inline-block px-5 py-1.5 bg-gold-500/10 text-gold-400 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full mb-3 border border-gold-500/20">
                      {milestone.year}
                    </span>
                    <h3 className="font-serif text-xl text-white font-semibold mb-2.5">
                      {milestone.title}
                    </h3>
                    <p className="text-[14px] text-white/40 leading-[1.8]">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-[#12022a] shadow-lg shadow-gold-500/25" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-950 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-900/80 to-purple-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-700/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="noise-overlay opacity-[0.03]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
            Experience the Difference
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.15] mb-6">
            Visit Our Showroom
          </h2>
          <div className="ornament-divider justify-center mb-7">
            <div className="diamond !bg-gold-500" />
          </div>
          <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-[1.85] mb-12">
            Step into our world of fine jewellery. Experience the warmth of our
            hospitality, the brilliance of our collections, and the dedication
            of our artisans — all under one roof.
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
              Plan Your Visit
            </Button>
            <Button href="/collections" variant="outline" size="lg">
              Explore Collections
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
