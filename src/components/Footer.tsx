import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  collections: [
    { label: "Necklaces", href: "/collections#necklaces" },
    { label: "Earrings", href: "/collections#earrings" },
    { label: "Bangles", href: "/collections#bangles" },
    { label: "Rings", href: "/collections#rings" },
    { label: "Bridal Sets", href: "/collections#bridal" },
  ],
  company: [
    { label: "Our Heritage", href: "/about" },
    { label: "Craftsmanship", href: "/about#craftsmanship" },
    { label: "Store Locations", href: "/contact" },
    { label: "Book a Visit", href: "/contact" },
  ],
  support: [
    { label: "Care Guide", href: "#" },
    { label: "Certification", href: "#" },
    { label: "Returns & Exchange", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-purple-950 text-white/80 overflow-hidden noise-overlay">
      {/* Top ornamental gold line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500/80 to-transparent" />

      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-800/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10 lg:pt-24 lg:pb-12">
        {/* Top section: Brand + Newsletter */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16 pb-16 border-b border-white/8">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold-500/30 group-hover:ring-gold-500/60 transition-all duration-500">
                <Image
                  src="/images/logo.jpeg"
                  alt="Trimurti Saanvi Jewellers"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-white tracking-wide">
                  Trimurti Saanvi
                </p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-medium">
                  Fine Jewellers
                </p>
              </div>
            </Link>
            <p className="text-[15px] leading-relaxed text-white/45">
              Crafting timeless jewellery since three generations. Every piece
              from Trimurti Saanvi tells a story of heritage, love, and
              unparalleled craftsmanship.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-medium mb-3">
              Stay Updated
            </p>
            <p className="text-sm text-white/40 mb-4">
              Be the first to know about new collections and exclusive events.
            </p>
            {/* TODO: Connect to email service (e.g., Mailchimp, ConvertKit) */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 px-5 py-3 bg-white/6 border border-white/10 rounded-full text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/40 focus:bg-white/8 transition-all"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg shadow-gold-500/15 hover:shadow-gold-500/30 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Collections */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-6">
              Collections
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/45 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-6">
              Company
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/45 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-6">
              Support
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/45 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-6">
              Visit Us
            </h3>
            <div className="space-y-5 text-[14px] text-white/45">
              <p className="leading-relaxed">
                123 Heritage Lane, Jewellers Market
                <br />
                Mumbai, Maharashtra 400001
              </p>
              <div>
                <p className="text-white/30 text-[11px] uppercase tracking-wider mb-1">Hours</p>
                <p className="leading-relaxed">
                  Mon – Sat: 10:00 AM – 8:00 PM
                  <br />
                  Sunday: 11:00 AM – 6:00 PM
                </p>
              </div>
              <div className="space-y-2">
                <a href="tel:+916394175639" className="block hover:text-gold-400 transition-colors">
                  +91 63941 75639
                </a>
                {/* TODO: Replace with actual email */}
                <a href="mailto:hello@trimurtisaanvi.com" className="block hover:text-gold-400 transition-colors">
                  hello@trimurtisaanvi.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-white/30 tracking-wide">
            © {new Date().getFullYear()} Trimurti Saanvi Jewellers. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {[
              {
                name: "Instagram",
                icon: (
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                name: "Facebook",
                icon: (
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                name: "WhatsApp",
                icon: (
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="text-white/30 hover:text-gold-400 transition-all duration-300 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-6 text-[12px] text-white/30">
            <Link href="#" className="hover:text-gold-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
