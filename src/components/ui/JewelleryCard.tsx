import Image from "next/image";

interface JewelleryCardProps {
  image: string;
  title: string;
  category: string;
  price?: string;
  badge?: string;
}

export default function JewelleryCard({
  image,
  title,
  category,
  price,
  badge,
}: JewelleryCardProps) {
  return (
    <div className="jewellery-card luxury-card group relative rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] shadow-md shadow-black/20 transition-all duration-600">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="jewellery-card-overlay" />

        {badge && (
          <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-gold-500/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full z-10 shadow-sm">
            {badge}
          </span>
        )}

        {/* Hover action */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
          <button className="w-full py-3 bg-white/95 backdrop-blur-md text-purple-900 text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg">
            {/* TODO: Link to individual product page */}
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 pt-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-medium mb-1.5">
          {category}
        </p>
        <h3 className="font-serif text-lg text-white font-medium leading-snug mb-1.5 group-hover:text-gold-200 transition-colors duration-400">
          {title}
        </h3>
        {price && (
          <p className="text-sm text-white/40 font-medium">{price}</p>
        )}
      </div>
    </div>
  );
}
