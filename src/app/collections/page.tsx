import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore our exquisite collections of handcrafted gold, diamond, and bridal jewellery. Each piece is a masterwork of Indian heritage and contemporary elegance.",
};

const categories = [
  { id: "all", label: "All" },
  { id: "necklaces", label: "Necklaces" },
  { id: "earrings", label: "Earrings" },
  { id: "bangles", label: "Bangles" },
  { id: "rings", label: "Rings" },
  { id: "bridal", label: "Bridal Sets" },
];

const products = [
  {
    id: 1,
    title: "Maharani Kundan Necklace",
    category: "Necklaces",
    price: "₹2,85,000",
    image: "/images/collection-necklace.png",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "Chandika Diamond Studs",
    category: "Earrings",
    price: "₹1,45,000",
    image: "/images/collection-earings.png",
    badge: "New",
  },
  {
    id: 3,
    title: "Rani Haar Gold Set",
    category: "Bridal Sets",
    price: "₹5,20,000",
    image: "/images/collection-necklace.png",
    badge: "Exclusive",
  },
  {
    id: 4,
    title: "Lavanya Gold Bangles",
    category: "Bangles",
    price: "₹95,000",
    image: "/images/collection-bangles.png",
    badge: null,
  },
  {
    id: 5,
    title: "Meera Solitaire Ring",
    category: "Rings",
    price: "₹1,75,000",
    image: "/images/collection-earings.png",
    badge: "Premium",
  },
  {
    id: 6,
    title: "Ananya Temple Necklace",
    category: "Necklaces",
    price: "₹3,40,000",
    image: "/images/collection-necklace.png",
    badge: null,
  },
  {
    id: 7,
    title: "Devika Polki Choker",
    category: "Necklaces",
    price: "₹4,10,000",
    image: "/images/collection-necklace.png",
    badge: "Heritage",
  },
  {
    id: 8,
    title: "Kavya Jhumka Earrings",
    category: "Earrings",
    price: "₹68,000",
    image: "/images/collection-earings.png",
    badge: null,
  },
  {
    id: 9,
    title: "Bridal Maang Tikka Set",
    category: "Bridal Sets",
    price: "₹1,20,000",
    image: "/images/collection-bangles.png",
    badge: "Trending",
  },
];

export default function CollectionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-b from-purple-950 via-purple-900 to-[#12022a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.jpg"
            alt="Collections background"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/85 to-[#12022a]" />
        </div>
        {/* Decorative glows */}
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="noise-overlay opacity-[0.03]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5 animate-[fade-in-down_0.8s_ease_both]">
            Our Jewellery
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] mb-5 sm:mb-6 animate-[fade-in-down_0.8s_0.15s_ease_both]">
            The Complete Collection
          </h1>
          <div className="ornament-divider justify-center mb-7 animate-[fade-in-down_0.8s_0.3s_ease_both]">
            <div className="diamond !bg-gold-500" />
          </div>
          <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-[1.85] animate-[fade-in-down_0.8s_0.4s_ease_both]">
            From timeless heritage pieces to contemporary masterworks — explore
            every facet of fine Indian jewellery, crafted with love and precision.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-5 bg-purple-950/95 border-b border-white/[0.06] sticky top-20 lg:top-24 z-40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-5 sm:px-7 py-2 sm:py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full whitespace-nowrap transition-all duration-500 ${
                  cat.id === "all"
                    ? "bg-gold-500 text-white shadow-lg shadow-gold-500/15"
                    : "bg-white/[0.06] text-white/60 hover:bg-white/[0.1] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#12022a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="luxury-card group relative overflow-hidden rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08]"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="jewellery-card-overlay" />

                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-gold-500/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.15em] font-semibold rounded-full z-10 shadow-lg shadow-gold-500/20">
                      {product.badge}
                    </span>
                  )}

                  {/* Hover action */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                    <button className="w-full py-3.5 bg-white/90 backdrop-blur-md text-purple-900 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-gold-500 hover:text-white transition-colors duration-300 shadow-xl">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5 lg:p-6">
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-gold-400/80 font-semibold mb-1 sm:mb-1.5">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-sm sm:text-lg text-white font-medium mb-1 sm:mb-1.5 group-hover:text-gold-200 transition-colors duration-500">
                    {product.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-white/40 font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="px-11 py-4 border-2 border-white/[0.12] text-white/60 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full hover:border-gold-500 hover:text-gold-400 hover:bg-gold-500/10 transition-all duration-500 hover:shadow-lg hover:shadow-gold-500/10">
              Load More Pieces
            </button>
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-24 lg:py-32 bg-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-900/80 to-purple-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-700/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="noise-overlay opacity-[0.03]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
            Bespoke Service
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-white font-semibold leading-[1.15] mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <div className="ornament-divider justify-center mb-7">
            <div className="diamond !bg-gold-500" />
          </div>
          <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-[1.85] mb-12">
            Our master artisans can bring your dream jewellery to life. Share
            your vision with us, and we&apos;ll craft a one-of-a-kind piece
            exclusively for you.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-500 shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Request Custom Design
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
