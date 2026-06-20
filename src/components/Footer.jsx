"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  const bgClass = isAbout ? "bg-[#F4F1E9]" : "bg-[#F7F5F1]";
  const textClass = isAbout ? "font-body font-normal text-xs tracking-[0.06em] text-[#7A7468]" : "font-sans font-medium text-[13px] tracking-[0.04em] text-muted";
  const hoverClass = isAbout ? "hover:text-[#1A1612]" : "hover:text-accent";

  return (
    <footer className={`${bgClass} px-[clamp(40px,6vw,64px)] py-[clamp(40px,6vw,64px)] border-t border-hairline ${textClass}`}>
      <div className="max-w-[1320px] mx-auto flex justify-between flex-wrap gap-4">
        <div>© {new Date().getFullYear()} Tooba Ameer {isAbout ? "— Design & Development Manager" : "· Product & Development, Consumer Goods"}</div>
        
        {isAbout ? (
          <div>United Kingdom</div>
        ) : (
          <div className="flex gap-2 flex-wrap">
            <Link href="/about" className={`${hoverClass} transition-colors`}>About</Link> ·
            <Link href="/resume" className={`${hoverClass} transition-colors`}>Resume</Link> ·
            <Link href="/linkedin" className={`${hoverClass} transition-colors`}>LinkedIn</Link> ·
            <Link href="/contact" className={`${hoverClass} transition-colors`}>Contact</Link>
          </div>
        )}
      </div>
    </footer>
  );
}
