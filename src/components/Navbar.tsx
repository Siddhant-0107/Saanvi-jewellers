"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-purple-950/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/[0.06]"
          : "bg-gradient-to-b from-purple-950/50 to-transparent"
      }`}
    >
      {/* Top gold accent line */}
      <div
        className={`h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 lg:w-13 lg:h-13 rounded-full overflow-hidden ring-2 ring-gold-400/20 group-hover:ring-gold-400/60 transition-all duration-500 shadow-lg shadow-purple-900/10">
              <Image
                src="/images/logo.jpeg"
                alt="Trimurti Saanvi Jewellers"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p
                className={`font-serif text-[15px] sm:text-lg lg:text-xl font-semibold tracking-wide transition-all duration-500 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Trimurti Saanvi
              </p>
              <p
                className={`text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium transition-all duration-500 ${
                  isScrolled ? "text-gold-400" : "text-gold-300"
                }`}
              >
                Fine Jewellers
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-[13px] uppercase tracking-[0.18em] font-medium rounded-full transition-all duration-400 group ${
                  isActive(link.href)
                    ? isScrolled
                      ? "text-gold-400"
                      : "text-gold-300"
                    : isScrolled
                    ? "text-white/70 hover:text-white"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-500 ${
                    isActive(link.href)
                      ? "w-5 bg-gold-500"
                      : "w-0 bg-gold-500 group-hover:w-5"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Phone number */}
            <a
              href="tel:+916394175639"
              className={`text-xs tracking-wider font-medium transition-colors duration-400 ${
                isScrolled ? "text-white/50 hover:text-gold-400" : "text-white/50 hover:text-gold-300"
              }`}
            >
              +91 63941 75639
            </a>

            <div className="w-px h-6 bg-current opacity-15" />

            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2.5 px-7 py-2.5 bg-gradient-to-r from-gold-500 via-gold-500 to-gold-600 text-white text-[12px] uppercase tracking-[0.18em] font-semibold rounded-full hover:from-gold-600 hover:via-gold-600 hover:to-gold-700 transition-all duration-500 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="relative z-10">Book a Visit</span>
              <svg
                className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              {/* Shimmer overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
              isScrolled ? "text-white" : "text-white"
            }`}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="bg-purple-950/98 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-8">
          <div className="space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-4 text-[15px] uppercase tracking-[0.15em] font-medium transition-all duration-300 border-b border-white/[0.06] last:border-0 ${
                  isActive(link.href)
                    ? "text-gold-400"
                    : "text-white/80 hover:text-gold-400"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span>{link.label}</span>
                <svg className="w-4 h-4 opacity-30" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 space-y-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-[13px] uppercase tracking-[0.18em] font-semibold rounded-full shadow-lg shadow-gold-500/20"
            >
              Book a Visit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:+916394175639"
              className="flex items-center justify-center gap-2 w-full py-3 text-white/50 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +91 63941 75639
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
