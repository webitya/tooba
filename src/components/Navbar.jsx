"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload, FiMail, FiBriefcase, FiLinkedin } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  // Dynamic styling based on the active page theme
  const bgClass = isAbout ? "bg-[#F4F1E9]/88" : "bg-[#F7F5F1]/85";
  const logoFont = isAbout ? "font-display font-medium italic" : "font-serif font-semibold";
  const linkFont = isAbout ? "font-body font-medium uppercase tracking-[0.08em] text-[13px]" : "font-sans font-medium text-sm";
  const hoverColor = isAbout ? "hover:text-[#5A2D1C]" : "hover:text-accent";

  return (
    <nav className={`sticky top-0 z-50 flex items-center justify-between flex-wrap gap-4 px-[clamp(24px,6vw,96px)] py-5 ${bgClass} backdrop-blur-md border-b border-hairline transition-all duration-300`}>
      <Link href="/" className={`${logoFont} text-xl tracking-tight text-ink hover:opacity-80 transition-opacity`}>
        {isAbout ? "Tooba Ameer" : <>Tooba Ameer<span className={isAbout ? "text-[#5A2D1C]" : "text-accent"}>.</span></>}
      </Link>
      
      <div className={`flex flex-wrap gap-x-7 gap-y-3 ${linkFont}`}>
        <Link 
          href="/#work" 
          className={`text-ink/80 ${hoverColor} hover:opacity-100 transition-colors flex items-center gap-1`}
        >
          {!isAbout && <FiBriefcase />} Work
        </Link>
        <Link 
          href="/about" 
          className={`${pathname === "/about" ? (isAbout ? "text-[#5A2D1C] opacity-100" : "text-accent opacity-100") : "text-ink/80"} ${hoverColor} hover:opacity-100 transition-colors`}
        >
          About
        </Link>
        <Link 
          href="/resume" 
          className={`text-ink/80 ${hoverColor} hover:opacity-100 transition-colors flex items-center gap-1`}
        >
          {!isAbout && <FiDownload />} Resume
        </Link>
        <a 
          href="https://www.linkedin.com/in/tooba-ameer" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`text-ink/80 ${hoverColor} hover:opacity-100 transition-colors flex items-center gap-1`}
        >
          {!isAbout && <FiLinkedin />} LinkedIn
        </a>
        <a 
          href="mailto:hello@toobaameer.co.uk" 
          className={`text-ink/80 ${hoverColor} hover:opacity-100 transition-colors flex items-center gap-1`}
        >
          {!isAbout && <FiMail />} Contact
        </a>
      </div>
    </nav>
  );
}
