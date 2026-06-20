"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="bg-[#F4F1E9] text-[#1A1612]">
      {/* HERO */}
      <motion.section 
        className="px-[clamp(28px,6vw,120px)] pt-[clamp(120px,16vw,200px)] pb-[clamp(96px,12vw,160px)]"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="max-w-[1320px] mx-auto">
          <motion.span variants={fadeUp} className="font-body font-medium text-[11.5px] tracking-[0.18em] uppercase text-[#7A7468] block mb-[clamp(44px,6vw,72px)]">
            About — Tooba Ameer
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display italic font-normal text-[clamp(40px,6.5vw,92px)] leading-[1.02] tracking-[-0.018em] text-[#1A1612] max-w-[18ch] mb-[clamp(40px,5vw,56px)]">
            Design as a strategic lever — systems, judgement, and the teams that ship them.
          </motion.h1>

          <motion.div variants={fadeUp} className="max-w-[62ch]">
            <p className="font-body font-normal text-[clamp(17px,1.5vw,19px)] leading-[1.7] text-[#1A1612] mb-[22px]">
              For the last eight years I've worked across backpacks, luggage and accessories, leading products from early insight to factory execution.
            </p>
            <p className="font-body font-normal text-[clamp(17px,1.5vw,19px)] leading-[1.7] text-[#1A1612] mb-[22px]">
              My work sits at the intersection of consumer behaviour, commercial reality and manufacturing constraint — turning product strategy into things people choose, buy and carry every day.
            </p>
            <p className="font-body font-normal text-[clamp(17px,1.5vw,19px)] leading-[1.7] text-[#1A1612]">
              I've led brand transformations, built category systems that scaled across years rather than seasons, and developed products recognised for creating premium perception without premium cost structures.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-[62ch] mt-[clamp(40px,5vw,56px)]">
            <p className="font-body font-normal text-[16px] leading-[1.6] text-[#7A7468] mb-[18px]">
              Today, the question that interests me most isn't <em className="font-display italic text-[#7A7468]">"How do we design a better product?"</em>
            </p>
            <p className="font-display italic font-normal text-[clamp(24px,3vw,40px)] leading-[1.2] tracking-[-0.01em] text-[#1A1612]">
              It's "What system allows better products to keep happening?"
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 01 — WHAT THE WORK ADDS UP TO */}
      <section className="px-[clamp(28px,6vw,120px)] py-[clamp(120px,16vw,200px)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex gap-8 items-baseline mb-[clamp(48px,6vw,72px)] pb-6 border-b border-[#D6D0C2]">
            <span className="font-display italic font-normal text-[clamp(22px,2.4vw,32px)] leading-none text-[#5A2D1C] tracking-[-0.005em]">01.</span>
            <span className="font-body font-medium text-[11.5px] tracking-[0.18em] uppercase text-[#7A7468]">What the work adds up to</span>
          </div>
          <h2 className="font-display italic font-normal text-[clamp(40px,6.5vw,88px)] leading-none tracking-[-0.018em] text-[#1A1612] max-w-[20ch] mb-[clamp(40px,5vw,64px)]">
            Experience, measured in what it left behind.
          </h2>

          <div className="border-t border-[#D6D0C2] mt-2">
            {[
              { meaning: "Six-fold brand growth.", evidence: "Built on a design system that scaled from 21 to 84 SKUs across five years." },
              { meaning: "One cohort became a full age range.", evidence: "Expanded from three ranges to nine while holding a coherent design language." },
              { meaning: "Premium perception on a value-brand cost base.", evidence: "Validated by a Travel Sentry Product Award." },
              { meaning: "Built to outlast me.", evidence: "A five-year programme handed to a successor and still running." }
            ].map((item, idx) => (
              <div key={idx} className="py-[clamp(36px,4vw,52px)] border-b border-[#D6D0C2] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4 md:gap-[clamp(32px,5vw,80px)] items-baseline hover:bg-[#ECE7DA]/30 transition-colors duration-300 px-4 md:px-0">
                <div className="font-display italic font-normal text-[clamp(26px,3.2vw,42px)] leading-[1.1] tracking-[-0.012em] text-[#1A1612] max-w-[18ch]">{item.meaning}</div>
                <div className="font-body font-normal text-[16px] leading-[1.6] text-[#7A7468] max-w-[42ch]">{item.evidence}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — HOW I WORK */}
      <section className="bg-[#ECE7DA] px-[clamp(28px,6vw,120px)] py-[clamp(120px,16vw,200px)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex gap-8 items-baseline mb-[clamp(48px,6vw,72px)] pb-6 border-b border-[#D6D0C2]">
            <span className="font-display italic font-normal text-[clamp(22px,2.4vw,32px)] leading-none text-[#5A2D1C] tracking-[-0.005em]">02.</span>
            <span className="font-body font-medium text-[11.5px] tracking-[0.18em] uppercase text-[#7A7468]">How I work</span>
          </div>
          <h2 className="font-display italic font-normal text-[clamp(40px,6.5vw,88px)] leading-none tracking-[-0.018em] text-[#1A1612] max-w-[20ch] mb-[clamp(40px,5vw,64px)]">
            Four operating principles.
          </h2>

          {[
            { num: "01", title: "I start with the system.", desc: "Most product problems aren't product problems — they're system problems. The design language, the assortment architecture, the manufacturing constraints and the customer's expectations have to work together before any individual product can succeed." },
            { num: "02", title: "I make the call when constraints appear.", desc: "Every project reaches a point where something has to give — cost, complexity, speed or ambition. The quality of the outcome depends on the judgement behind those decisions, and on being willing to make them." },
            { num: "03", title: "I bring people to the decision.", desc: "The best idea rarely wins on its own. Suppliers, product managers, sourcing teams and leadership all have to see the same future before execution can happen at scale." },
            { num: "04", title: "I build work that survives handover.", desc: "Success isn't a launch. Success is the system still producing good outcomes after the original designer has moved on." }
          ].map((sub, idx) => (
            <div key={idx} className="mt-[clamp(56px,7vw,88px)]">
              <span className="font-display italic font-normal text-[clamp(20px,2.2vw,26px)] text-[#5A2D1C] block mb-3.5 tracking-[-0.005em]">{sub.num}</span>
              <h3 className="font-display italic font-normal text-[clamp(26px,3.4vw,40px)] leading-[1.1] tracking-[-0.012em] text-[#1A1612] max-w-[28ch] mb-[clamp(24px,3vw,36px)]">
                {sub.title}
              </h3>
              <div className="max-w-[62ch]">
                <p className="font-body font-normal text-[17px] leading-[1.7] text-[#1A1612] mb-6">
                  {sub.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — LEADERSHIP & COLLABORATION */}
      <section className="px-[clamp(28px,6vw,120px)] py-[clamp(120px,16vw,200px)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex gap-8 items-baseline mb-[clamp(48px,6vw,72px)] pb-6 border-b border-[#D6D0C2]">
            <span className="font-display italic font-normal text-[clamp(22px,2.4vw,32px)] leading-none text-[#5A2D1C] tracking-[-0.005em]">03.</span>
            <span className="font-body font-medium text-[11.5px] tracking-[0.18em] uppercase text-[#7A7468]">Leadership & collaboration</span>
          </div>
          <h2 className="font-display italic font-normal text-[clamp(40px,6.5vw,88px)] leading-none tracking-[-0.018em] text-[#1A1612] max-w-[20ch] mb-[clamp(40px,5vw,64px)]">
            Leading through outcomes, not headcount.
          </h2>

          <ul className="border-t border-[#D6D0C2] mt-2">
            {[
              { claim: "Led design across four brands.", detail: "Genie, Genius, Safari and Urban Jungle — different audiences, price architectures and design languages, held in one practice." },
              { claim: "Aligned the people who ship.", detail: "Suppliers, sourcing, manufacturing and product managers, brought to the same decision before anything scaled." },
              { claim: "Shaped category direction.", detail: "Influenced assortment architecture and range strategy, not just the products inside them." },
              { claim: "Owned the decisions that set the product.", detail: "CMF, form and specification — the calls that decide how a product reads and what it costs." },
              { claim: "Built systems others could use.", detail: "Reusable platforms and shared frameworks that outlived any single season." },
              { claim: "Handed the work on.", detail: "Mentored designers and handed over long-running programmes still in production." }
            ].map((item, idx) => (
              <li key={idx} className="py-[clamp(28px,3vw,40px)] border-b border-[#D6D0C2] list-none hover:pl-4 transition-all duration-300 ease-out">
                <span className="font-display italic font-normal text-[clamp(22px,2.6vw,32px)] leading-[1.15] tracking-[-0.01em] text-[#1A1612] block mb-2.5">{item.claim}</span>
                <span className="font-body font-normal text-[15.5px] leading-[1.6] text-[#7A7468] max-w-[62ch] block">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — WHAT I'M LOOKING FOR */}
      <section className="bg-[#ECE7DA] px-[clamp(28px,6vw,120px)] py-[clamp(120px,16vw,200px)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex gap-8 items-baseline mb-[clamp(48px,6vw,72px)] pb-6 border-b border-[#D6D0C2]">
            <span className="font-display italic font-normal text-[clamp(22px,2.4vw,32px)] leading-none text-[#5A2D1C] tracking-[-0.005em]">04.</span>
            <span className="font-body font-medium text-[11.5px] tracking-[0.18em] uppercase text-[#7A7468]">What I'm looking for</span>
          </div>
          <h2 className="font-display italic font-normal text-[clamp(40px,6.5vw,88px)] leading-none tracking-[-0.018em] text-[#1A1612] max-w-[20ch] mb-[clamp(40px,5vw,64px)]">
            Where I want design to sit.
          </h2>

          <div className="max-w-[62ch]">
            <p className="font-body font-normal text-[17px] leading-[1.7] text-[#1A1612] mb-6">
              I'm interested in roles where design is expected to influence more than form — shaping strategy, aligning teams, and building systems that create long-term business value.
            </p>
            <p className="font-body font-normal text-[17px] leading-[1.7] text-[#1A1612] mb-6">
              The work that interests me most sits between customer behaviour, commercial reality and product execution.
            </p>
          </div>

          <div className="my-[clamp(72px,9vw,128px)] py-[clamp(56px,7vw,96px)] border-y border-[#D6D0C2]">
            <p className="font-display italic font-normal text-[clamp(32px,5vw,64px)] leading-[1.08] tracking-[-0.015em] text-[#1A1612] max-w-[28ch]">
              That's where design becomes a strategic lever.
            </p>
          </div>

          <div className="mt-[clamp(80px,10vw,128px)] pt-8 border-t border-[#D6D0C2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 md:gap-12">
            <div><span className="font-body font-medium text-[10.5px] tracking-[0.2em] uppercase text-[#7A7468] block mb-3.5">Based</span><span className="font-body font-normal text-[14.5px] leading-[1.5] text-[#1A1612] block">UK · Full right to work</span></div>
            <div><span className="font-body font-medium text-[10.5px] tracking-[0.2em] uppercase text-[#7A7468] block mb-3.5">Available for</span><span className="font-body font-normal text-[14.5px] leading-[1.5] text-[#1A1612] block">Design Manager / Lead Product Designer</span></div>
            <div><span className="font-body font-medium text-[10.5px] tracking-[0.2em] uppercase text-[#7A7468] block mb-3.5">Mode</span><span className="font-body font-normal text-[14.5px] leading-[1.5] text-[#1A1612] block">Onsite & remote</span></div>
            <div><span className="font-body font-medium text-[10.5px] tracking-[0.2em] uppercase text-[#7A7468] block mb-3.5">Focus</span><span className="font-body font-normal text-[14.5px] leading-[1.5] text-[#1A1612] block">Systems · CMF · category strategy</span></div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#1A1612] px-[clamp(28px,6vw,120px)] py-[clamp(120px,16vw,200px)]">
        <div className="max-w-[1320px] mx-auto">
          <span className="font-body font-medium text-[11.5px] tracking-[0.18em] uppercase text-[#8B8273] block mb-10">See the work</span>
          <Link href="/#work" className="group font-display italic font-normal text-[clamp(72px,12vw,180px)] leading-[0.95] tracking-[-0.02em] text-[#F4F1E9] hover:text-[#C77449] transition-colors duration-300 inline-block">
            Selected work <span className="inline-block ml-[0.15em] group-hover:translate-x-4 transition-transform duration-300 ease-out"><FiArrowRight /></span>
          </Link>
          <p className="font-body font-normal text-[15px] text-[#C8C0AE] mt-10 max-w-[52ch] leading-[1.6]">
            Three projects — five years of building consumer products end to end. Genie, Phoenix, Sona.
          </p>
        </div>
      </section>

      <section className="px-[clamp(28px,6vw,120px)] py-[clamp(96px,12vw,160px)] border-t border-[#D6D0C2] bg-[#F4F1E9]">
        <div className="max-w-[1320px] mx-auto">
          <span className="font-body font-medium text-[11.5px] tracking-[0.18em] uppercase text-[#7A7468] block mb-12">Connect</span>
          <p className="font-display italic font-normal text-[clamp(28px,4.5vw,64px)] leading-[1.1] tracking-[-0.012em] text-[#1A1612] max-w-[18ch]">
            Hiring or curious — <Link href="/contact" className="text-[#1A1612] border-b border-[#1A1612] pb-[2px] hover:text-[#5A2D1C] hover:border-[#5A2D1C] transition-colors duration-250">hello@toobaameer.co.uk</Link>
          </p>
          <div className="flex flex-wrap gap-8 mt-[clamp(48px,6vw,72px)] pt-8 border-t border-[#D6D0C2]">
            <Link href="/" className="font-body font-medium text-[12px] tracking-[0.16em] uppercase text-[#1A1612] opacity-70 hover:opacity-100 hover:text-[#5A2D1C] transition-all duration-200">Home</Link>
            <Link href="/#work" className="font-body font-medium text-[12px] tracking-[0.16em] uppercase text-[#1A1612] opacity-70 hover:opacity-100 hover:text-[#5A2D1C] transition-all duration-200">Work</Link>
            <Link href="/resume" className="font-body font-medium text-[12px] tracking-[0.16em] uppercase text-[#1A1612] opacity-70 hover:opacity-100 hover:text-[#5A2D1C] transition-all duration-200">Resume</Link>
            <Link href="/linkedin" className="font-body font-medium text-[12px] tracking-[0.16em] uppercase text-[#1A1612] opacity-70 hover:opacity-100 hover:text-[#5A2D1C] transition-all duration-200">LinkedIn</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
