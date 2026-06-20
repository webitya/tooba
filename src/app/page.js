"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail, FiLinkedin } from "react-icons/fi";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main>

      {/* Hero Section */}
      <motion.section 
        className="px-[clamp(24px,6vw,96px)] pt-[clamp(80px,12vw,160px)] pb-[clamp(40px,6vw,72px)]"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="max-w-[1240px] mx-auto">
          <motion.div variants={fadeUp} className="font-sans font-bold text-[12.5px] tracking-widest uppercase text-accent inline-flex items-center gap-2.5 mb-7">
            <span className="w-[7px] h-[7px] bg-accent block"></span>
            Product Design · CMF · Category Strategy
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif font-semibold text-[clamp(44px,6.2vw,76px)] leading-[1.02] tracking-[-0.022em] text-ink max-w-[16ch] mb-8">
            Consumer products designed to earn their price.
          </motion.h1>
          <motion.p variants={fadeUp} className="font-sans text-[clamp(19px,1.9vw,22px)] leading-relaxed text-ink max-w-[62ch] mb-5">
            I'm Tooba Ameer, a Design & Development Manager with eight years building physical consumer products — backpacks, luggage and accessories — end to end, from consumer insight through industrial design, CMF and manufacturing to launch.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-muted max-w-[62ch]">
            The work is judged on the shelf: what it costs to make, what it sells for, and whether the customer comes back for the next one.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 border border-hairline mt-[clamp(40px,6vw,64px)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
            <div className="p-[clamp(26px,3.2vw,40px)] px-[clamp(20px,2.4vw,30px)] border-b md:border-b-0 md:border-r border-hairline bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <span className="font-serif font-semibold text-[clamp(26px,3.4vw,40px)] leading-[1.02] text-accent tracking-[-0.02em] block mb-3">~6×</span>
              <span className="font-sans font-medium text-sm leading-[1.45] text-muted">Genie brand growth as design lead, 2021–2026<br />(₹17 Cr → ₹100 Cr+)</span>
            </div>
            <div className="p-[clamp(26px,3.2vw,40px)] px-[clamp(20px,2.4vw,30px)] border-b md:border-b-0 md:border-r border-hairline bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <span className="font-serif font-semibold text-[clamp(26px,3.4vw,40px)] leading-[1.02] text-accent tracking-[-0.02em] block mb-3">Award winner</span>
              <span className="font-sans font-medium text-sm leading-[1.45] text-muted">Travel Sentry Product Award 2025 — Phoenix laptop trolley</span>
            </div>
            <div className="p-[clamp(26px,3.2vw,40px)] px-[clamp(20px,2.4vw,30px)] bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-300">
              <span className="font-serif font-semibold text-[clamp(26px,3.4vw,40px)] leading-[1.02] text-accent tracking-[-0.02em] block mb-3">8,000+/mo</span>
              <span className="font-sans font-medium text-sm leading-[1.45] text-muted">Hue printed luggage — 42,000+ verified ratings, 4.2★</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Selected Work Section */}
      <section id="work" className="px-[clamp(24px,6vw,96px)] py-[clamp(72px,10vw,160px)] bg-surface">
        <div className="max-w-[1240px] mx-auto">
          <div className="font-sans font-bold text-[12.5px] tracking-widest uppercase text-accent inline-flex items-center gap-2.5 mb-7">
            <span className="w-[7px] h-[7px] bg-accent block"></span>
            Selected work
          </div>
          
          <div className="border-t border-hairline mt-2">
            {[
              {
                link: "/work/genie",
                kicker: "Category & range strategy",
                title: "Genie",
                metric: "₹17 Cr → ₹100 Cr+",
                desc: "Growing a kids' school-bag label into a teen-and-college brand — a five-year category, range and operating-model strategy, owned end to end."
              },
              {
                link: "/work/phoenix",
                kicker: "Premium product on a value cost base",
                title: "Phoenix",
                metric: "Travel Sentry Award 2025",
                desc: "A business trolley asked to feel like a Samsonite — $30 to make, ₹9,999 on the shelf. Premium built from finish and restraint, not budget."
              },
              {
                link: "/work/sona",
                kicker: "Systems thinking & foresight",
                title: "SONA",
                metric: "Self-directed concept",
                desc: "Defining a category before it exists — a product-and-service concept for the hour before sleep. Where I ask whether a category is pointed at the right need at all."
              }
            ].map((work, idx) => (
              <motion.a 
                key={idx}
                href={work.link}
                className="group block border-b border-hairline py-[clamp(28px,4vw,46px)] hover:pl-5 transition-all duration-300 ease-out"
                whileHover={{ scale: 0.995 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="font-sans font-bold text-[11.5px] tracking-[0.14em] uppercase text-muted mb-3.5">
                  {work.kicker}
                </div>
                <div className="flex items-baseline justify-between gap-6 flex-wrap">
                  <h2 className="font-serif font-semibold text-[clamp(32px,4.2vw,52px)] leading-[1.05] tracking-[-0.016em] text-ink group-hover:text-accent transition-colors duration-300 flex items-center">
                    {work.title} 
                    <span className="inline-block ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                      <FiArrowRight size={32} />
                    </span>
                  </h2>
                  <span className="font-serif font-semibold text-[clamp(17px,1.9vw,23px)] text-accent whitespace-nowrap">
                    {work.metric}
                  </span>
                </div>
                <p className="font-sans text-[15px] leading-[1.55] text-muted mt-3 max-w-[58ch]">
                  {work.desc}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Connect Links Grid */}
          <div className="flex flex-wrap gap-3.5 mt-10">
            <Link href="/about" className="font-sans font-semibold text-[15px] text-ink border border-hairline rounded-full px-5 py-2.5 hover:border-accent hover:text-accent hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
              About
            </Link>
            <Link href="/resume" className="font-sans font-semibold text-[15px] text-ink border border-hairline rounded-full px-5 py-2.5 hover:border-accent hover:text-accent hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              <FiDownload /> Resume
            </Link>
            <a href="https://www.linkedin.com/in/tooba-ameer" target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-[15px] text-ink border border-hairline rounded-full px-5 py-2.5 hover:border-accent hover:text-accent hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="mailto:hello@toobaameer.co.uk" className="font-sans font-semibold text-[15px] text-ink border border-hairline rounded-full px-5 py-2.5 hover:border-accent hover:text-accent hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
              <FiMail /> Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
