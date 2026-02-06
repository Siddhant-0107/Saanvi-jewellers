import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-gold-500 via-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 hover:from-gold-600 hover:via-gold-600 hover:to-gold-700",
  secondary:
    "bg-purple-800 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 hover:shadow-purple-900/30",
  outline:
    "border-2 border-gold-500/70 text-gold-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 hover:shadow-lg hover:shadow-gold-500/20",
  ghost:
    "text-white/70 hover:text-gold-400 hover:bg-white/[0.06]",
};

const sizes = {
  sm: "px-5 py-2 text-[11px]",
  md: "px-7 py-3 text-[12px]",
  lg: "px-9 py-3.5 text-[13px]",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  external = false,
}: ButtonProps) {
  const baseClasses = `relative inline-flex items-center justify-center gap-2.5 uppercase tracking-[0.18em] font-semibold rounded-full transition-all duration-500 hover:-translate-y-0.5 overflow-hidden group ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      {/* Shimmer overlay for primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 z-0" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {inner}
    </button>
  );
}
