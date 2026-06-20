"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiClock, FiSettings, FiCheckCircle } from "react-icons/fi";

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

export default function GenieContent() {
  return (
    <div className="case-study-root min-h-screen">
      
      {/* Hero Section */}
      <motion.section 
        className="band hero"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="container">
          <motion.span variants={fadeUp} className="label">
            Case study · Safari Industries · 2021—2026
          </motion.span>
          <motion.h1 variants={fadeUp} className="display-xl mb-4">
            Genie
          </motion.h1>
          
          <div className="hero-body grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="hero-body-text lg:col-span-6">
              <p className="hero-tagline font-display italic text-3xl mb-6 text-accent">
                Growing a school-bag brand up with its customer.
              </p>
              <p className="lede BL text-lg leading-relaxed text-ink mb-4">
                When I took over design for Genie in 2021, it was a kids' school-bag label. Five back-to-school seasons later it was a brand a teenager would choose for herself.
              </p>
              <p className="lede BL text-lg leading-relaxed text-muted">
                I rebuilt its design language and range so the brand could grow up with the girl carrying it — from her first big-school bag to college — and led that work end to end, from consumer research to the factory floor. Over those five years the brand grew around <em className="lead">six-fold</em> across backpacks, luggage and handbags.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-body-figure lg:col-span-6">
              <div className="figure group my-0">
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-4 bg-paper-deep text-left w-full border-b border-hairline flex justify-between items-center">
                    <div>
                      <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 01 · Baseline vs Evolution</span>
                      <span className="fig-desc text-sm italic text-ink">Pre-2022 florals (young kids) vs 2026 collection (teen &amp; college).</span>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <img 
                      src="/Project Images/Genie/evolution_before_2022_to_2026 (4).jpg" 
                      alt="Five-year transformation — Pre-2022 to 2026" 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="stats-strip grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-hairline pt-8 mt-12">
            {[
              { n: "~6×", lbl: "Brand growth\n2021—2026" },
              { n: "3 → 9", lbl: "Ranges in a\nback-to-school season" },
              { n: "21 → 84", lbl: "SKUs per\nback-to-school range" },
              { n: "1 → 6", lbl: "Sales channels\noperating model" }
            ].map((stat, idx) => (
              <div key={idx} className="stat-cell border border-hairline bg-white/40 hover:bg-white p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="stat-n block text-accent font-serif text-3xl font-bold mb-2">{stat.n}</span>
                <span className="stat-lbl text-xs text-muted font-semibold uppercase tracking-wider whitespace-pre-line">{stat.lbl}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="hero-meta grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-hairline pt-8 mt-12">
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Role</span>
              <span className="v text-sm font-semibold text-ink">Design &amp; Development Manager · sole design owner of Genie</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Scope</span>
              <span className="v text-sm font-semibold text-ink">Consumer research → range strategy → CMF → manufacturing → launch</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Categories</span>
              <span className="v text-sm font-semibold text-ink">Backpacks · teen &amp; college · soft &amp; hard luggage · handbags</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Period</span>
              <span className="v text-sm font-semibold text-ink text-accent">2021 — 2026 · five back-to-school seasons</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 01 */}
      <motion.section 
        className="case-section py-20 border-t border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">01.</span>
              <span className="label ml-2">The challenge</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              A brand that kept losing the girl it won.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose text-ink space-y-4">
              <p>
                Genie was known for one thing: school bags for little girls. The identity was narrow by design — "girl" meant florals, florals meant young, and the whole range spoke to a seven-year-old.
              </p>
              <p>
                The problem wasn't the label. It was what the label cost. Genie's range was roughly <strong>85% florals</strong> — the rest a scatter of geometric motifs with no real identity of their own. Florals meant young, and young was the whole brand. So the girl Genie won at seven aged out of it fast.
              </p>
              <p>
                Our own research was blunt: by fourteen she wanted a bag with the function of a school bag but the look of a fashion bag — and Genie didn't make that. It won a customer early and handed her to someone else a few years later.
              </p>
              <p className="font-semibold text-accent italic">
                To grow, Genie had to grow up with the girl carrying it — earn her at seven, keep her at fourteen, and still be the bag she chose for college. One brand, one design language, stretched across a customer who was changing faster than the range was.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-3 gap-4 pt-6">
              {[
                { n: "8", lbl: "Designs in inherited range" },
                { n: "85%", lbl: "Florals — by identity" },
                { n: "1", lbl: "Primary cohort (ages 7—8)" }
              ].map((c, i) => (
                <div key={i} className="border border-hairline bg-white/40 p-4 rounded-xl text-center shadow-sm">
                  <span className="text-xl font-bold font-serif text-accent block">{c.n}</span>
                  <span className="text-[10px] text-muted uppercase font-semibold block mt-1">{c.lbl}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-6 figure group my-0">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Genie/before_2022.jpg" 
                  alt="Pre-2022 Genie range" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 02 · Inherited range</span>
                <span className="fig-desc text-xs italic text-ink">Genie's full school range pre-2022. Eight designs, almost entirely florals. The honest starting point.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 02 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">02.</span>
            <span className="label ml-2">Understanding the next generation</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            The same girl, five years apart.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              Cohort insight came from a commissioned qualitative study — <strong>nine in-depth interviews across ages seven to fifteen</strong> — supported by ongoing consumer immersion across markets. We didn't ask what bag she wanted. We looked at what she already carried, what she watched, who she copied, and who decided the purchase.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="framework framework--3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { num: "Cohort 01 · Ages 7—8", head: "The fantasy world", body: "A 19″ bag carrying a tiffin, a pouch, and up to twelve books. The brand dressed it in fantasy — she was given scale she hadn't asked for and a world she had." },
              { num: "Cohort 02 · Ages 10—11", head: "The personalised bag", body: "An organiser she's filled herself: charms, keychains, stickers, a pouch tucked inside. She was personalising a bag that was never built to be personalised." },
              { num: "Cohort 03 · Ages 14—15", head: "The function-identity gap", body: "Money, lunch, a phone, books. The bag had become an accessory she carried all day, but it still looked like a school tool. A gap emerged between function and identity." }
            ].map((cohort, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="fw-cell group border border-hairline bg-white/40 hover:bg-white hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="num block text-accent font-semibold text-xs tracking-wider uppercase mb-3">{cohort.num}</span>
                  <span className="head block text-sm font-bold uppercase tracking-wider text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {cohort.head}
                  </span>
                  <span className="body block text-sm text-muted leading-relaxed">{cohort.body}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-center italic font-display text-lg text-accent max-w-lg mx-auto">
            "The audit is why the products changed. The progression is why the brand had to."
          </motion.p>
        </div>
      </motion.section>

      {/* Section 03 */}
      <motion.section 
        className="case-section py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">03.</span>
              <span className="label ml-2">Cultural signals &amp; trend forecasting</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              The trend was the input. The judgement was the work.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose text-ink space-y-6">
              <p>
                By 2023, Korean culture was visibly rising across India — K-dramas, beauty, fashion, the lot. K-drama viewership had climbed sharply, and the influence had moved past the metros, reaching smaller cities. Every competitor saw the same wave. <em>Spotting it was not the work.</em>
              </p>
              <p>
                The obvious move was K-pop. I didn't make that bet, for two reasons. First, the research had already caught it ageing: the older cohort had grown out of K-pop. Second, lead time was roughly twelve months. Anything peaking the week I briefed it could be cold by the time it reached the shelf.
              </p>
              <p className="font-semibold text-accent italic">
                So I separated two things: Fandom (idols and groups) was fast and fast-aging. Taste (muted Korean palette, soft minimalism, considered finishes) was slower and broader. I built on taste.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="framework framework--3 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { num: "01", head: "Fandom or taste?", desc: "Taste is slower and broader than idol fandom. Built on taste." },
                { num: "02", head: "Metro or mainstream?", desc: "The aesthetic was aspirational well beyond metros. Built on the broader signal." },
                { num: "03", head: "Factory cycle sync?", desc: "Idol cycles move in weeks; taste shifts move over years. Built on the slow one." }
              ].map((q, i) => (
                <div key={i} className="border border-hairline bg-white/40 p-4 rounded-xl shadow-sm text-left">
                  <span className="text-accent font-bold font-mono text-sm block mb-1">{q.num}</span>
                  <span className="font-bold text-xs uppercase block text-ink mb-1">{q.head}</span>
                  <p className="text-[11px] text-muted leading-relaxed">{q.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-6 figure group my-0">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Genie/asian_aesthetic_trend.jpg" 
                  alt="Cultural signals trend board — Asian Aesthetic" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 03 · Research &amp; Synthesis</span>
                <span className="fig-desc text-xs italic text-ink">The Asian Aesthetic trend board. Reference imagery sourced and credited; the analysis and direction are mine.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 04 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">04.</span>
              <span className="label ml-2">Translating trends into products</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              The aesthetic was the easy part. The price was the design problem.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose text-ink space-y-4">
              <p>
                By the time I briefed this range, cheap Korean-style backpacks were already on Amazon at a fraction of Genie's price point — unbranded, riding the same aesthetic. A Genie bag with a Korean feel was going to retail at a multiple of those.
              </p>
              <p className="font-semibold text-accent italic">
                The brief I set myself: make a backpack that reads as a different proposition, not a more expensive version of one she'd already seen.
              </p>
              <p>
                Which meant the Korean call couldn't sit on a single variable. Fabric, construction, palette, and features had to move together to defend the price.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 gap-4 pt-4">
              {[
                { h: "Construction", d: "A new silhouette built specifically for this line, distinct from existing shapes." },
                { h: "Fabric", d: "A disruptive material chosen for tactility and finish, shared across MOQs." },
                { h: "Palette", d: "Muted, away from the brand's pastel-and-saturated language." },
                { h: "Features & finish", d: "Detailing tuned to read as designed-on-purpose, not decorated." }
              ].map((lever, i) => (
                <div key={i} className="bg-white/40 border border-hairline p-4 rounded-xl">
                  <span className="font-bold text-xs uppercase block mb-1 text-ink">{lever.h}</span>
                  <p className="text-xs text-muted leading-relaxed">{lever.d}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-6 figure group my-0">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Genie/new_ranges_2025_2026.jpg" 
                  alt="2025 and 2026 Korean-aesthetic backpack ranges" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 04 · Shipped Range</span>
                <span className="fig-desc text-xs italic text-ink">The 2025 and 2026 ranges that came out of the taste-not-fandom call — 17″ college, 18″ teen, and the College Korea family.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 05 */}
      <motion.section 
        className="case-section py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">05.</span>
            <span className="label ml-2">Building a collection system</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Five years of growing a system.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                <strong>05a. What designs needed to exist.</strong> Each cohort got designs that read as theirs — not as a smaller or louder version of someone else's.
              </p>
              <p>
                <strong>05b. How they got built affordably.</strong> The range couldn't be a set of separate design problems. It had to be one problem with many outputs, built under three locked architecture rules.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { h: "20 component colours", d: "Body fabric, elastic, air mesh, thread — matched to one palette per season. Shared MOQs, zero SKU MOQ penalties." },
                { h: "Fixed vs Disruptive fabric", d: "~80% fixed fabric. 2—3 disruptive fabrics shared across 2—3 bags each to amortise costs." },
                { h: "Platform-and-component", d: "Designs built by varying print, palette and components on shared silhouettes." }
              ].map((rule, idx) => (
                <div key={idx} className="border border-hairline bg-white/40 p-4 rounded-xl">
                  <span className="font-bold text-xs uppercase block text-accent mb-2">Rule 0{idx+1}</span>
                  <span className="font-bold text-xs uppercase block text-ink mb-1">{rule.h}</span>
                  <p className="text-[11px] text-muted leading-relaxed">{rule.d}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 05c Data Table */}
          <motion.div variants={fadeUp} className="w-full border border-hairline rounded-2xl overflow-hidden shadow-sm bg-white mb-12">
            <div className="p-4 bg-paper-deep border-b border-hairline">
              <span className="label text-[10px] text-accent block">05c · Platform evolution</span>
              <h3 className="font-semibold text-lg text-ink font-sans">Year-by-year construction and SKU mapping</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-paper border-b border-hairline text-muted uppercase text-[10px] tracking-wider">
                    <th className="p-4 font-bold">Year</th>
                    <th className="p-4 font-bold">Phase</th>
                    <th className="p-4 font-bold">Constructions</th>
                    <th className="p-4 font-bold">Ranges</th>
                    <th className="p-4 font-bold">Designs</th>
                    <th className="p-4 font-bold">SKUs</th>
                    <th className="p-4 font-bold">Annotation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline bg-white">
                  {[
                    { year: "2022", phase: "Inherited baseline", c: "2", ranges: "3", designs: "15", skus: "21", note: "Trade only. Basic carried identity; Supreme served entry price." },
                    { year: "2023", phase: "Volume response", c: "3", ranges: "7", designs: "41", skus: "81", note: "Added 19″ Max (40L). Split CORE into HP and RC. Hero: Cool, Amore, Sass." },
                    { year: "2024", phase: "Telegraphed exit", c: "3", ranges: "7", designs: "47", skus: "90", note: "Reduced Supreme SKUs. Managed retirement ahead of dealer cuts." },
                    { year: "2025", phase: "Substitution", c: "3", ranges: "9", designs: "54", skus: "104", note: "Launched 17″ College, 18″ Teen, College Korea. Supreme retired." },
                    { year: "2026", phase: "Simplification", c: "3", ranges: "9", designs: "49 (29 mine)", skus: "84 (58 mine)", note: "Teen collapsed into 17″/19″ rhythm. System handed over to successor." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-paper/20 transition-colors duration-150">
                      <td className="p-4 font-serif font-bold text-accent">{row.year}</td>
                      <td className="p-4 font-medium text-ink">{row.phase}</td>
                      <td className="p-4">{row.c}</td>
                      <td className="p-4">{row.ranges}</td>
                      <td className="p-4">{row.designs}</td>
                      <td className="p-4">{row.skus}</td>
                      <td className="p-4 text-xs text-muted max-w-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 05d Hub Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="lg:col-span-5 bg-paper-deep border border-hairline rounded-2xl p-6">
              <span className="label text-[10px] text-accent block mb-1">05d · Operating model</span>
              <h3 className="font-semibold text-lg text-ink font-sans mb-3">Core Hub</h3>
              <p className="text-xs text-muted leading-relaxed">
                One platform architecture and sampling protocol, scaled across six distribution channels with independent price tiers and design calendars.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { ch: "CH 01", name: "Trade", sub: "Back-to-school spine" },
                { ch: "CH 02", name: "Hypermarket", sub: "V-Mart, Reliance, D-Mart" },
                { ch: "CH 03", name: "Ecom marketplace", sub: "Amazon, Flipkart, Myntra" },
                { ch: "CH 04", name: "Ecom DTC", sub: "Direct-to-consumer" },
                { ch: "CH 05", name: "Quick commerce", sub: "Blinkit" },
                { ch: "CH 06", name: "Retail", sub: "Owned stores" }
              ].map((c, idx) => (
                <div key={idx} className="border border-hairline bg-white/40 p-4 rounded-xl">
                  <span className="text-[10px] font-mono text-accent font-bold block mb-1">{c.ch}</span>
                  <span className="font-bold text-xs uppercase block text-ink mb-1">{c.name}</span>
                  <span className="text-[10px] text-muted block leading-relaxed">{c.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="figure group my-0">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Genie/the_system_2026_7.jpg" 
                  alt="2026 collection — three constructions, nine ranges, four cohorts" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 05 · Complete Ecosystem map</span>
                <span className="fig-desc text-xs italic text-ink">The 2026 collection: platform architecture. 58 of 84 SKUs designed by me, 26 by my successor.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 06 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">06.</span>
              <span className="label ml-2">Case-in-case · The 2023 split</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              When the bill of materials wouldn't bend, the architecture did.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose text-ink space-y-4">
              <p>
                The 2023 brief demanded raincover as a default feature, but the range already carried a happy pouch (coins/lip balm pouch on the outside).
              </p>
              <p>
                FOB was locked. Raincover cost fifty cents, happy pouch fifty-eight cents. Carrying both broke the budget.
              </p>
              <p>
                Every cost-down was spent. Sourcing proposed downgrading the twill fabric. We developed a PU-backed sample and verified that taking the fabric down degraded the trade signal: <em>devaluing the fabric wasn't a save, it was a brand-level surrender.</em>
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { h: "Option 01 · Rejected", d: "Raise the price. Sales pushed back; unbranded alternatives were already cheaper." },
                { h: "Option 02 · Rejected", d: "Downgrade fabric. PU-backed samples proved this killed visual and touch premium." },
                { h: "Option 03 · Chosen", d: "Split range. Two variants at the same price: CORE(HP) and CORE(RC). Held margins." }
              ].map((opt, i) => (
                <div key={i} className="border border-hairline bg-white/40 p-4 rounded-xl">
                  <span className="font-bold text-xs uppercase block text-accent mb-2">{opt.h}</span>
                  <p className="text-xs text-muted leading-relaxed">{opt.d}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-5 bg-white/40 border border-hairline rounded-2xl p-8 shadow-sm">
            <div className="pull-quote border-l-4 border-accent pl-6 py-2">
              <p className="font-display italic text-lg text-accent leading-relaxed">
                "We proposed the split. 19″ CORE became CORE(HP) and CORE(RC) — two variants that still anchor the range. The fabric stayed, and cycle margin held."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 07 */}
      <motion.section 
        className="case-section py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">07.</span>
            <span className="label ml-2">Designing backpack collections</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            The system in evidence.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <p><strong>07a. Maturing florals:</strong> Floral language matured rather than disappeared — same identity, more restraint, less literal.</p>
                <p><strong>07b. Elevated construction:</strong> Clean, soft-minimalist panels doing the visual work a print used to do. Age-up came from the build.</p>
                <p><strong>07c. Ebony:</strong> Denim look achieved through digital print. Real denim is too heavy for school; the print delivered fashion while keeping the bag light.</p>
                <p><strong>07d. Serena:</strong> Seams aligned to create clean colour-blocking. Perceived value came from precision, not decoration.</p>
                <p><strong>07e. Nightsky:</strong> Quilting and a custom puller in place of a print. Reaches the girl wanting tactile, non-graphic distinction.</p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { src: "/Project Images/Genie/flora_detail.webp", num: "Fig. 06a · Florals", desc: "Maturing the floral identity." },
                { src: "/Project Images/Genie/korea_detail.webp", num: "Fig. 06b · Construction", desc: "Elevated, minimalist panels." },
                { src: "/Project Images/Genie/Ebony.jpg", num: "Fig. 06c · Ebony", desc: "Denim texture digital print." },
                { src: "/Project Images/Genie/Serena.jpg", num: "Fig. 06d · Serena", desc: "Precision color-blocking." },
                { src: "/Project Images/Genie/Essence backpack detail.jpg", num: "Fig. 06e · Nightsky", desc: "Tactile quilting and puller." }
              ].map((fig, idx) => (
                <div key={idx} className={`figure group my-0 ${idx === 4 ? "col-span-2" : ""}`}>
                  <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="overflow-hidden aspect-video bg-white flex items-center justify-center">
                      <img 
                        src={fig.src} 
                        alt={fig.num} 
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-3 bg-paper-deep text-left w-full border-t border-hairline">
                      <span className="fig-num font-bold text-[10px] uppercase block text-muted mb-0.5">{fig.num}</span>
                      <span className="fig-desc text-xs italic text-ink">{fig.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 08 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">08.</span>
            <span className="label ml-2">Expanding into adjacent categories</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            The brand stretched across formats.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                <strong>08a. printed luggage.</strong> Hard luggage ran Palm (value), Sprout &amp; Rose (mid), and Glam (top). Soft ran Lily (entry), Bahamas (mid), and Hazel (premium).
              </p>
              <p>
                Printed luggage sold well initially but was a niche. We calibrated and transitioned to ombres, glitter films, and textures. The market widened.
              </p>
              <p>
                <strong>08b. Sourced and adapted.</strong> For professional and work totes, I customized third-party designs rather than engineering new shells. Sourcing and adapting let us expand the range in weeks instead of months, saving capital for original-design school lines.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="figure group my-0">
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[300px]">
                  <div className="overflow-hidden aspect-square bg-white flex items-center justify-center">
                    <img 
                      src="/Project Images/Genie/hazel.png" 
                      alt="Hazelprinted luggage" 
                      className="max-h-full max-w-full object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-3 bg-paper-deep text-left w-full border-t border-hairline min-h-[80px]">
                    <span className="fig-num font-bold text-[10px] uppercase block text-muted mb-0.5">Hazel · Printed era</span>
                    <span className="fig-desc text-xs italic text-ink">Heavy prints proved identity, but volume was self-limiting.</span>
                  </div>
                </div>
              </div>

              <div className="figure group my-0">
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[300px]">
                  <div className="overflow-hidden aspect-square bg-white flex items-center justify-center">
                    <img 
                      src="/Project Images/Genie/glam.png" 
                      alt="Glam solid luggage" 
                      className="max-h-full max-w-full object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-3 bg-paper-deep text-left w-full border-t border-hairline min-h-[80px]">
                    <span className="fig-num font-bold text-[10px] uppercase block text-muted mb-0.5">Glam · Texture-play era</span>
                    <span className="fig-desc text-xs italic text-ink">Ombres and solid glitter films widened demographic match.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="figure group my-0">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden aspect-video bg-white flex items-center justify-center">
                <img 
                  src="/Project Images/Genie/whitelabel_range_2026.jpg" 
                  alt="Genie white-label range 2026" 
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 07 · Professional expansion</span>
                <span className="fig-desc text-xs italic text-ink">The 2026 white-label range. Customized third-party builds; color, branding, and feature specs by me.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 09 */}
      <motion.section 
        className="case-section py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">09.</span>
            <span className="label ml-2">Designing for scale</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Holding a brand at scale.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-7 text-ink space-y-6">
              <p>
                <strong>09a. The calendar inside the calendar.</strong> Genie BTS took 12 months. December: brief. January-March: research. April: direction lock. May-August: sampling, cost-engineering. September-November: sales validation. December-January: dealer launch. February: delivery.
              </p>
              <p>
                <strong>09b. Sampling protocol redesign.</strong> Over two years, I consolidated three sampling rounds down to one locked protocol. We achieved first-round visual accuracy by doing sub-step approvals of dyes/prints, decoupling components, and creating highly accurate spec sheets.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { n: "~98%", lbl: "First-round accuracy" },
                { n: "~90%", lbl: "First-round sign-offs" },
                { n: "3 → 1", lbl: "Sampling rounds typical" },
                { n: "2 yrs", lbl: "To formalise protocol" }
              ].map((c, i) => (
                <div key={i} className="border border-hairline bg-white/40 p-4 rounded-xl text-center shadow-sm">
                  <span className="text-xl font-bold font-serif text-accent block">{c.n}</span>
                  <span className="text-[10px] text-muted uppercase font-semibold block mt-1">{c.lbl}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="figure group mb-12">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Genie/diagram_2_cycle.png" 
                  alt="Genie annual development calendar" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 08 · Development Lifecycles</span>
                <span className="fig-desc text-xs italic text-ink">Two overlapping cycles — brief-to-brief loop (12 months) and brief-to-end-of-selling lifecycle (20 months).</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              <strong>09c. Parallel calendars.</strong> Fast-turn marketplace requests (Flipkart, Amazon) ran alongside the back-to-school spine. Managing multiple lines of launch required real-time scheduling alignment.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="figure group my-0">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Genie/diagram_3_channels.png" 
                  alt="Parallel calendars across six channels" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 09 · Parallel calendars</span>
                <span className="fig-desc text-xs italic text-ink">Six channels, one operating model. Trade ran BTS; other channels ran custom calendars on the same core architecture.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 10 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">10.</span>
            <span className="label ml-2">Impact</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            What working looked like.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                <strong>10a. Amore:</strong> A multi-season property. Launched in 2023, Amore transcended a one-season prints lifecycle, returning as a core piece of brand vocabulary.
              </p>
              <p>
                <strong>10b. Cool:</strong> Survived three resets. Girls searched out Cool with Instagram screenshots, driving reorders directly at retail.
              </p>
              <p>
                <strong>10c. Market feedback:</strong> Range success was underpinned by qualitative regional market loops — feeding signals back into active builds.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6 figure group my-0">
              <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden aspect-video bg-white flex items-center justify-center">
                  <img 
                    src="/Project Images/Genie/amore hero.png" 
                    alt="Amore — multi-season property" 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                  <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 10 · Amore Property</span>
                  <span className="fig-desc text-xs italic text-ink">The Amore prints line. Representing the shift from plain school tool to lifestyle identity.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 11 */}
      <motion.section 
        className="case-section py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">11.</span>
            <span className="label ml-2">Reflection</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            What the work was actually about.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                Five years of Genie produced a range, a luggage line, and the development system that shipped them. But how it was done maps to five core components:
              </p>
              <div className="space-y-4">
                <p><strong>11a. Dealer narrative:</strong> PM and design aligned on retiree and newbuild strategies to guide dealer expectation cleanly.</p>
                <p><strong>11b. Feedbacks:</strong> Capturing regional sales metrics to shape range blueprints in real-time.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6 figure group my-0">
              <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src="/Project Images/Genie/diagram_1_platform_evolution.png" 
                    alt="Genie 2026 — the system in evidence" 
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                  <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 11 · Platform evolution blueprint</span>
                  <span className="fig-desc text-xs italic text-ink">Traced platform migrations. Transitioning sizes, platforms, and constructions across five BTS seasons.</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={stagger} className="framework framework--5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: "01", head: "Reading customer", desc: "Qualitative cohort studies. Identifying what she carries, watches, copies, and decides." },
              { num: "02", head: "Signal extraction", desc: "Trend forecasting is simple. Deciding which elements are durable enough to commit MOQ is the work." },
              { num: "03", head: "Insight systems", desc: "Silhouettes, locked palettes, platform variables — designing layouts, not bags." },
              { num: "04", head: "Scaling cohesion", desc: "Uniform brand language applied across luggage and bags. Scaling with the carrying user." },
              { num: "05", head: "Live learning", desc: "Pan-India dealer networks feeding mid-cycle corrections back to development." }
            ].map((comp, idx) => (
              <div key={idx} className="fw-cell border border-hairline bg-white/40 hover:bg-white p-5 rounded-xl transition-all duration-300 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="num block text-accent font-bold font-mono text-sm mb-3">{comp.num}</span>
                  <span className="head block text-xs font-bold uppercase tracking-wider text-ink mb-2">{comp.head}</span>
                  <p className="desc text-xs text-muted leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 12 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">12.</span>
              <span className="label ml-2">Role, scope &amp; attribution</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              What I made, honestly.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose text-ink space-y-6">
              <p>
                <strong>Design and Development Manager, Safari Industries · 2021 — February 2026.</strong> Sole design owner of Genie from 2021.
              </p>
              <div className="space-y-4 text-sm text-muted">
                <p><strong>Owned end-to-end:</strong> Brand language, range architectures, platform selections (19″ MAX, 18″ Teen, College Korea), sampling protocol optimization.</p>
                <p><strong>Led with collaboration:</strong> Hardshell luggage forms (with shell CAD designers), BTS allocation quantities (with PMs), campaign tone of voice (with marketing).</p>
                <p><strong>Partnered:</strong> Qualitative research briefs (with Matterfox), manufacturing lines (with Rider Bags, Maxbag Company).</p>
                <p><strong>Succession:</strong> Onboarded and guided Shital as co-designer from 2024 to transition the system before my departure to the UK. Shital now leads Genie.</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-6 figure group my-0">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Genie/Cohorts image.jpg" 
                  alt="Five years of Genie — closing portrait" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <div className="p-3 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-0.5">Fig. 12 · Closing portrait</span>
                <span className="fig-desc text-xs italic text-ink">Genie's brand evolution closing overview. Five back-to-school ranges.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bottom Navigation */}
      <section className="next-project border-t border-hairline py-16 bg-white/30">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="label text-[10px] uppercase tracking-widest text-muted block mb-1">Return to</span>
            <Link 
              className="next-project-link inline-flex items-center gap-2 font-serif text-3xl font-semibold text-ink hover:text-accent transition-colors duration-200" 
              href="/#work"
            >
              <FiArrowLeft className="text-xl" /> Selected Work
            </Link>
            <p className="desc text-xs text-muted leading-relaxed mt-2">
              Three projects — five years of building consumer products end to end. Genie, Phoenix, Sona.
            </p>
          </div>

          <div className="text-right">
            <span className="label text-[10px] uppercase tracking-widest text-muted block mb-1">Next case study</span>
            <Link 
              className="next-project-link inline-flex items-center gap-2 font-serif text-3xl font-semibold text-ink hover:text-accent transition-colors duration-200" 
              href="/work/phoenix"
            >
              Phoenix <FiArrowRight className="text-xl" />
            </Link>
            <p className="desc text-xs text-muted leading-relaxed mt-2 text-left md:text-right">
              A business trolley built to feel like a Samsonite — on a value brand's cost base.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
