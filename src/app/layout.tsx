import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Trimurti Saanvi Jewellers | Luxury Indian Jewellery",
    template: "%s | Trimurti Saanvi Jewellers",
  },
  description:
    "Discover exquisite handcrafted jewellery at Trimurti Saanvi Jewellers. From timeless gold necklaces to contemporary diamond designs, every piece tells a story of heritage and elegance.",
  keywords: [
    "luxury jewellery",
    "Indian jewellery",
    "gold necklace",
    "diamond jewellery",
    "bridal jewellery",
    "Trimurti Saanvi",
    "handcrafted jewellery",
    "kundan jewellery",
    "polki jewellery",
  ],
  openGraph: {
    title: "Trimurti Saanvi Jewellers | Luxury Indian Jewellery",
    description:
      "Exquisite handcrafted jewellery – where heritage meets elegance.",
    type: "website",
    locale: "en_IN",
    siteName: "Trimurti Saanvi Jewellers",
    // TODO: Add production URL and OG image
    // url: "https://trimurtisaanvi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
