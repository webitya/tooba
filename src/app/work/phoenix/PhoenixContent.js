"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiAward } from "react-icons/fi";

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

export default function PhoenixContent() {
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
            Case study · Phoenix · Safari Industries · 2023—25
          </motion.span>
          <motion.h1 variants={fadeUp} className="display-xl mb-4">
            Phoenix
          </motion.h1>
          
          <div className="hero-body grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div variants={fadeUp} className="hero-body-text lg:col-span-6">
              <p className="hero-tagline font-display italic text-3xl mb-6 text-accent">
                A premium read on a value cost base.
              </p>
              <p className="lede BL text-lg leading-relaxed text-ink mb-4">
                Safari is one of India's three largest luggage makers, and its strength is also its ceiling: the market reads it as value, not desire. The brief for Phoenix was to break that — to land a genuinely premium feel at a <em className="lead">₹9,999</em> retail price and a <em className="lead">$30</em> manufacturing cost.
              </p>
              <p className="lede BL text-lg leading-relaxed text-muted">
                You can't buy premium for $30. So I had to build it instead — from the things that cost nothing extra: finish, proportion, restraint and detail.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-body-figure lg:col-span-6">
              <div className="figure group">
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="overflow-hidden">
                    <img 
                      src="/Project Images/Phoenix/portfolio-01-phoenix.jpg" 
                      alt="Fig. 01 — Finished Phoenix trolley" 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                    <div className="flex items-center gap-2 mb-1">
                      <FiAward className="text-accent" />
                      <span className="fig-num font-bold text-xs uppercase block text-muted">
                        Fig. 01 · Hero product photography
                      </span>
                    </div>
                    <span className="fig-desc text-sm italic text-ink">
                      The finished Phoenix trolley — 8-wheel, tonal black, brushed-metal hardware.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="stats-strip grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-hairline pt-8 mt-12">
            {[
              { n: "$30", lbl: "FOB cost target — held" },
              { n: "₹9,999", lbl: "Premium retail tier landed" },
              { n: "Winner", lbl: "Travel Sentry Product Awards 2025" },
              { n: "Sole", lbl: "Designer · concept to production" }
            ].map((stat, idx) => (
              <div key={idx} className="stat-cell border border-hairline bg-white/40 hover:bg-white p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="stat-n block text-accent font-serif text-3xl font-bold mb-2">{stat.n}</span>
                <span className="stat-lbl text-xs text-muted font-semibold uppercase tracking-wider">{stat.lbl}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="hero-meta grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-hairline pt-8 mt-12">
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Role</span>
              <span className="v text-sm font-semibold text-ink">Sole designer — concept to production</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Scope</span>
              <span className="v text-sm font-semibold text-ink">Product · CMF · Construction · Specification</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Category</span>
              <span className="v text-sm font-semibold text-ink">8-wheel laptop trolley</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Recognition</span>
              <span className="v text-sm font-semibold text-ink text-accent">Winner — Favourite Softside Luggage</span>
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
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">01.</span>
            <span className="label ml-2">The brief</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            A brief that contradicted itself.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                The brief came from the marketing and product team, not from me. It asked for premium fabric and no prints, a detailed organiser, a lockable laptop and tablet compartment, and — tellingly — dimensions matched to the <strong>Samsonite Sefton</strong>. The aspiration was written into the spec.
              </p>
              <p>
                Then came the two numbers that defined the whole project: a target retail price of <strong>₹9,999</strong> and a target <strong>$30 FOB</strong> — the cost to make and ship each unit. For Safari, ₹9,999 is the top of its range. For a Samsonite feel, $30 a unit is almost nothing.
              </p>
              <p className="font-semibold text-accent italic">
                The brief, read honestly, was a contradiction: deliver the perception of a premium brand on the cost structure of a value one.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6 figure group">
              <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <div className="overflow-hidden">
                  <img 
                    src="/Project Images/Phoenix/portfolio-02-views.jpg" 
                    alt="Fig. 02 — The original brief" 
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                  <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 02 · Artefact — the original brief</span>
                  <span className="fig-desc text-sm italic text-ink">Desired features, "premium fabric, no prints," Sefton dimensions, and the price and cost targets.</span>
                </div>
              </div>
            </motion.div>
          </div>
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
            <span className="label ml-2">The problem</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            You can't buy premium at thirty dollars a unit.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl space-y-6 text-ink">
            <p>
              Leather shells, aluminium frames, polycarbonate — the materials people associate with premium luggage — were all off the table at this cost.
            </p>
            <p>
              So I reframed the brief. If premium couldn't come from spend, it had to come from the things that cost nothing extra: <em>finish, restraint, proportion, and detail.</em>
            </p>
            <p className="font-semibold text-accent italic">
              Premium as a design decision, not a materials budget.
            </p>
          </motion.div>
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
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">03.</span>
            <span className="label ml-2">Design principles</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Four rules I held the whole way.
          </motion.h2>

          <motion.div variants={stagger} className="framework framework--4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", head: "Restraint over accent", body: "Stop decorating. A premium object looks like it isn't trying." },
              { num: "02", head: "Tonal over colour", body: "Difference through material and texture, not a bright highlight." },
              { num: "03", head: "Finish over material", body: "If I can't change the fabric, I change every metal touchpoint." },
              { num: "04", head: "Make it makeable", body: "Manufacturability is a design input, not a problem handed downstream." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="fw-cell group border border-hairline bg-white/40 hover:bg-white hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="num block text-accent font-mono font-bold text-lg mb-4">{item.num}</span>
                  <span className="head block text-sm font-bold uppercase tracking-wider text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {item.head}
                  </span>
                  <span className="body block text-sm text-muted leading-relaxed">{item.body}</span>
                </div>
              </motion.div>
            ))}
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
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">04.</span>
            <span className="label ml-2">Exploration</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Two roads I walked away from.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              Premium isn't the first idea — it's what's left after you delete the wrong ones. Two early concepts taught me what Phoenix shouldn't be.
            </p>
          </motion.div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <motion.div variants={fadeUp} className="subsection lg:col-span-6 mt-0">
                <span className="subsection-num">a.</span>
                <h3 className="subsection-title">A full-PU front.</h3>
                <div className="body-prose text-ink space-y-4">
                  <p>
                    The fastest way to look premium was to clad the whole front face in PU faux leather, and I built that version first. But a business trolley lives a hard life — dragged through airports, knocked at security, stacked into overheads — and a large faux-leather face is exactly where that shows.
                  </p>
                  <p>
                    It scuffs, scratches and tears, and a marked "premium" panel reads cheaper than honest polyester ever would. Premium that can't survive its own use isn't premium. I walked away from the full-PU front; where the faux leather finally went, and why, is the first of the hard decisions below.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="lg:col-span-6 figure group">
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="overflow-hidden">
                    <img 
                      src="/Project Images/Phoenix/portfolio-02-exploration.jpg" 
                      alt="Fig. 03 — Rejected concept" 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                    <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 03 · Rejected concept</span>
                    <span className="fig-desc text-sm italic text-ink">Early concept showing red zipper accent — deliberately walked away from.</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-hairline/60">
              <motion.div variants={fadeUp} className="subsection lg:col-span-5 mt-0">
                <span className="subsection-num">b.</span>
                <h3 className="subsection-title">The construction was the problem, not the pocket.</h3>
                <div className="body-prose text-ink">
                  <p>
                    The protruding pockets stayed — they're a strong design choice and a signature of the final bag. What I moved on from was the <em>construction</em>: pockets stitched directly onto a plain front panel.
                  </p>
                  <p>
                    Visually it left the pockets sitting like applied objects, and structurally it carried a real production risk on curved seams over a flat face. I committed instead to the direction where the pockets are framed end to end by a PU trim line — cleaner, less complex, more finesse, and a build the factory could run consistently.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="lg:col-span-7 figure-grid grid grid-cols-1 sm:grid-cols-2 gap-4 my-0">
                <div className="figure group">
                  <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[300px]">
                    <div className="overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                      <img 
                        src="/Project Images/Phoenix/phoenix-four-zones-board.png" 
                        alt="Fig. 04a — Rejected applied to panel" 
                        className="max-h-full max-w-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-3 bg-paper-deep text-left w-full border-t border-hairline min-h-[90px]">
                      <span className="fig-num font-bold text-[10px] uppercase block text-muted mb-0.5">Fig. 04a · Rejected — applied to panel</span>
                      <span className="fig-desc text-xs italic text-ink">Protruding pockets stitched directly to plain front panel.</span>
                    </div>
                  </div>
                </div>
                
                <div className="figure group">
                  <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[300px]">
                    <div className="overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                      <img 
                        src="/Project Images/Phoenix/portfolio-01-phoenix.jpg" 
                        alt="Fig. 04b — Committed framed pockets" 
                        className="max-h-full max-w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-3 bg-paper-deep text-left w-full border-t border-hairline min-h-[90px]">
                      <span className="fig-num font-bold text-[10px] uppercase block text-muted mb-0.5">Fig. 04b · Committed — framed</span>
                      <span className="fig-desc text-xs italic text-ink">PU trim line framing pockets edge to edge.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <p className="text-center text-xs text-muted italic mt-2">From "applied objects on a panel" to "framed within a trim line."</p>
          </div>
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
            <span className="label ml-2">The hard decisions</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Three decisions that made Phoenix possible.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              At $30 a unit you cannot make everything premium. The project lived or died on where the money went — and on what I was willing to sacrifice to put it there. Three calls did the heavy lifting.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="framework framework--3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                head: "Spend where hands land",
                body: "The premium budget went into one place: the brushed-metal hardware family and PU leather on the faces a hand actually touches — top handle, lower front, back panel. Everything else stayed ordinary polyester.",
                why: "A shopper reads premium through what they touch and see up close, not through panels they never handle. Concentrating spend at the touchpoints buys more perceived quality per rupee than spreading it thin.",
                traded: "Traded: faux leather across the whole face, for premium exactly where it's felt."
              },
              {
                num: "02",
                head: "Reuse the construction, fix what's wrong with it",
                body: "Phoenix started from a previously-launched Safari construction (the laptop and tablet bay carried over from Brighton) rather than a new one — but I reworked the corner radii so the proportion read sharper and more deliberate.",
                why: "A new architecture means new patterns, sampling and sign-off, and that cost comes straight out of the finish budget. Reusing a proven construction sent every premium rupee into detailing rather than a new build — and correcting the radii bought a considered stance without paying to engineer one.",
                traded: "Traded: a fully bespoke silhouette, for a corrected existing one with the savings redirected into finish."
              },
              {
                num: "03",
                head: "Buy signal, not decoration",
                body: "I dropped the bright accent and consolidated every metal part — logo, zippers, pullers, rivets — into a single brushed-metal language.",
                why: "A bright accent reads as 'feature,' not premium; one coherent metal language reads as considered. Pay for what reads premium, cut what only looks busy.",
                traded: "Traded: the loud 'look how much you get for the money' cue some Safari buyers shop on. To a value shopper a busy bag can itself signal value, so going quiet was a real commercial risk — one the bag offsets through function, not noise: three face pockets and heavy internal organisation still read as 'a lot of bag' without the clutter."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="fw-cell group border border-hairline bg-white/40 hover:bg-white hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="num block text-accent font-mono font-bold text-lg mb-4">{item.num}</span>
                  <span className="head block text-sm font-bold uppercase tracking-wider text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {item.head}
                  </span>
                  <span className="body block text-sm text-muted leading-relaxed mb-4">{item.body}</span>
                  <p className="text-xs text-ink/80 leading-relaxed bg-[#ECE7DA]/30 p-3 rounded-lg mb-4"><strong className="text-accent">Why:</strong> {item.why}</p>
                </div>
                <div className="border-t border-hairline/60 pt-3 mt-auto">
                  <span className="text-[11px] text-muted italic block"><strong className="font-semibold text-accent">Tradeoff:</strong> {item.traded}</span>
                </div>
              </motion.div>
            ))}
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
              <span className="label ml-2">Aligning the team</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              A different read on premium.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose space-y-6 text-ink">
              <p>
                Leadership and product management initially favoured the louder cues the category trains buyers to expect — red logo accents, full-PU front pockets, the Samsonite Sefton vocabulary. They weren't wrong about the references; those signals do work.
              </p>
              <p>
                The question I needed the team to consider was whether they were the <em>right</em> signals at this price, on this brand. Two conversations decided how premium Phoenix would actually look — and both were settled by putting evidence next to opinion.
              </p>
              <div className="space-y-4 pt-4">
                <p><strong>a. The red accent — show, don't argue.</strong> Rather than push back in a meeting, I built both versions — with and without the red — and put them side by side. Stripped of the accent, the bag instantly read more premium, and the team aligned on the quieter direction quickly.</p>
                <p><strong>b. Premium has to survive ownership.</strong> The same team wanted both front pockets in full PU leather. I framed it through use: pockets that flex every day would crease, and within a few months that "premium" PU would make the bag read cheaper, not richer. We kept PU on faces that stay taut and removed it from the ones that move.</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-5 bg-white/40 border border-hairline rounded-2xl p-8 shadow-sm">
            <div className="pull-quote border-l-4 border-accent pl-6 py-2">
              <p className="font-display italic text-2xl text-accent leading-relaxed">
                "The moment I removed the red, the bag stopped looking like it was trying."
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
            <span className="label ml-2">The material system</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Premium, rebuilt as finish.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-5 text-ink space-y-6">
              <p>
                With the base fabric fixed by cost, I treated every other surface as a lever. The body stays a single tonal black; the only "colour" is a Pantone Cool Grey 7C stitch, kept on the panels and deliberately off the pockets, handles and smart sleeve so the seams read as tailoring, not decoration.
              </p>
              <p>
                PU leather goes only on the faces a hand actually touches — the top handle, the lower front, the back panel.
              </p>
              
              <div className="pt-6 border-t border-hairline/60">
                <h3 className="font-semibold text-lg uppercase tracking-wider mb-4">One hardware family:</h3>
                <div className="space-y-3 text-sm">
                  <p><strong>01 · Metal logo:</strong> A solid badge, not a printed mark.</p>
                  <p><strong>02 · Brushed zippers:</strong> Metal pulls with a brushed finish across the pockets.</p>
                  <p><strong>03 · Matched pullers:</strong> One puller language head to toe.</p>
                  <p><strong>04 · Metal rivets:</strong> The same brushed tone at every stress point.</p>
                  <p><strong>05 · Tonal stitch:</strong> Cool grey on black — visible, not loud.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-7 figure group">
              <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src="/Project Images/Phoenix/portfolio-03-cmf.jpg" 
                    alt="Fig. 05 — Production CMF" 
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                  <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 05 · Production CMF · face-by-face breakdown</span>
                  <span className="fig-desc text-sm italic text-ink">Body fabric, trim stitch, PU placement and hardware allocation, documented to specification.</span>
                </div>
              </div>
              <p className="figure-caption text-xs text-muted italic mt-4">The restraint is documented face by face, so the factory builds it the same way every time.</p>
            </motion.div>
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
            <span className="label ml-2">Form &amp; proportion</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Designed by ratio, not by eye.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                The front face is built on a unit grid — twin pockets at five units wide with a two-unit gap, the body laid out at twelve units tall by fourteen wide. Proportion is one of the quietest premium signals there is, and the cheapest to get wrong, so I specified it rather than eyeballed it.
              </p>
              <p>
                Down to the details: a lifted, edge-stitched top handle, a neoprene base, two corner guards, an 8-wheel trolley, and a smart-sleeve clearance specified to the millimetre. Built on Safari's existing Brighton construction so it could reach production without bespoke tooling.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6 bg-white border border-hairline rounded-2xl p-8 shadow-sm flex flex-col justify-center min-h-[300px]">
              <div className="border border-dashed border-accent/40 bg-paper/30 p-6 rounded-xl text-center">
                <span className="fig-num font-mono text-xs font-bold text-accent uppercase block mb-2">Fig. 06 · Proportion grid</span>
                <span className="fig-type text-sm font-bold text-ink uppercase tracking-wider block mb-2">Front Face dimensioned Overlay</span>
                <p className="fig-desc text-sm italic text-muted leading-relaxed max-w-md mx-auto">
                  Pockets at 5 units wide with 2-unit gap, body at 12 × 14 units. Reworked corner radii to ensure a sharp, modern posture.
                </p>
              </div>
              <p className="figure-caption text-xs text-muted italic mt-4 text-center">The grid isn't decoration. It's the proportion that reads premium before any material does.</p>
            </motion.div>
          </div>
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
            <span className="label ml-2">The experience</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Where the bag earns its price.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              A premium bag whispers "we thought about you" the moment it opens. Phoenix opens in two stages: the front panel folds down on webbing straps to reveal a dedicated laptop and tablet compartment, then the main compartment behind it.
            </p>
            <p>
              Inside: an RFID-blocking fabric pocket, a dedicated power-bank pocket, a wet pouch, mesh organisation throughout, and number-5 reverse zips. And one controlled indulgence — the red I took off the outside, brought back <em>inside</em> as a single webbing pull with a gun-metal key holder, where the accent costs little and the delight is private. Restraint outside, a small reward within — the same colour, moved to where it reads as care rather than as a value cue.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="figure-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/Project Images/Phoenix/portfolio-05-interior.jpg", num: "Fig. 07a · Interior — laptop compartment", desc: "Front panel folded down, dedicated laptop and tablet bay." },
              { src: "/Project Images/Phoenix/portfolio-06-opening.jpg", num: "Fig. 07b · Interior — organisation", desc: "Main compartment with mesh organisation, RFID pocket, wet pouch." },
              { src: "/Project Images/Phoenix/portfolio-08-outcome.jpg", num: "Fig. 07c · Interior — the indulgence", desc: "Red webbing pull with gun-metal key holder." }
            ].map((fig, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="figure group"
              >
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="overflow-hidden">
                    <img 
                      src={fig.src} 
                      alt={fig.num} 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline min-h-[90px]">
                    <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">{fig.num}</span>
                    <span className="fig-desc text-xs italic text-ink">{fig.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">10.</span>
              <span className="label ml-2">Production</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              Premium that survives the factory.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose text-ink space-y-6">
              <p>
                The trickiest moment in the build was the front pockets. An earlier version had them stitched directly onto a plain front panel — visually unframed, structurally risky: curved seams on a flat face pucker, slow the sewing line, and fail QC.
              </p>
              <p>
                Rather than try to engineer around that build, I committed to a different construction — extending a PU trim line edge to edge so the pockets sit inside a frame, not on top of a panel. The framed version reads more resolved <em>and</em> sews clean.
              </p>
              <p>
                Around it, every component was drawn from families Safari already tooled — Aphrodite hardware, Polaris wheel caps, a Ballpark trolley — so nothing premium needed new tooling. The whole thing went to the factory as a 13-page technical pack, complete enough to build without me in the room.
              </p>
              <p className="text-sm text-muted">
                Finish also had to win a cost argument. Sourcing pushed back on the metal hardware at $30 FOB, so the components were reworked to hold the look without the spend — the rivets, for instance, are hollow-cored: the same brushed face, less metal, a lighter bag.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-3 gap-4 mt-8">
              {[
                { n: "$30", lbl: "FOB held" },
                { n: "13", lbl: "Page spec pack" },
                { n: "0", lbl: "Accent colours" }
              ].map((c, i) => (
                <div key={i} className="border border-hairline bg-white/40 p-4 rounded-xl text-center">
                  <span className="text-xl font-bold font-serif text-accent block">{c.n}</span>
                  <span className="text-[10px] text-muted uppercase font-semibold block mt-1">{c.lbl}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-7 figure group">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                <img 
                  src="/Project Images/Phoenix/phoenix-four-zones-board.png" 
                  alt="Fig. 08 — Spec pack" 
                  className="max-h-full max-w-full object-contain p-4 group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 08 · Artefact — the spec pack</span>
                <span className="fig-desc text-sm italic text-ink">Snapshot of the 13-page manufacturing pack, written for the factory to build without me in the room.</span>
              </div>
            </div>
          </motion.div>
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
            <span className="label ml-2">How it shipped</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Design sat alongside production, not upstream of it.
          </motion.h2>

          <motion.div variants={stagger} className="framework framework--5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: "01", head: "Product management", body: "Set the cost, retail tier and feature list. The agreement we built: features earn their place against the FOB; restraint isn't a missing feature." },
              { num: "02", head: "Category & marketing", body: "Owned the shelf and the channel forecast. Brought them into the alignment early — colour direction, hardware family, packaging — so the launch case wasn't a surprise." },
              { num: "03", head: "Sourcing", body: "Negotiated against the $30 FOB. Where they pushed back on hardware cost, we re-engineered (hollow-cored rivets, brushed face preserved) rather than re-styled." },
              { num: "04", head: "Factory development", body: "Flagged the curved-seam risk on the unframed pocket version early enough to redirect the build, not patch it. The framed-pocket construction we committed to improved both the read and the line speed." },
              { num: "05", head: "Manufacturing partner", body: "Built the bag in China. The 13-page spec pack was written for them to build without me in the room — but the relationship survived Canton Fair visits and sample rounds." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="fw-cell group border border-hairline bg-white/40 hover:bg-white hover:shadow-md rounded-xl p-5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="num block text-accent font-mono font-bold text-lg mb-3">{item.num}</span>
                  <span className="head block text-xs font-bold uppercase tracking-wider text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {item.head}
                  </span>
                  <span className="body block text-xs text-muted leading-relaxed">{item.body}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 12 & 13 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">12.</span>
              <span className="label ml-2">Outcome</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-6">
              A value brand, holding a premium read.
            </motion.h2>
            <motion.div variants={fadeUp} className="body-prose text-ink space-y-4">
              <p>
                Phoenix was made deliberately in low volume — an expensive product on a cautious forecast — and demand ran ahead of it. It has sold through and reordered, and sells out fast across Safari's own site, Amazon, Flipkart and Myntra whenever it returns to stock.
              </p>
              <p>
                It also took first in its category — <em>Favourite Soft Side Luggage</em> — at the Travel Sentry Product Awards 2025.
              </p>
              <p className="text-muted">
                The clearest verdict was internal: the tonal, restraint-led approach didn't stay with one bag. Safari carried the same design language into its slings and laptop bags — a single brief's answer became a direction.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">13.</span>
              <span className="label ml-2">Business impact</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-6">
              Design that earned pricing power.
            </motion.h2>
            <motion.div variants={fadeUp} className="body-prose text-ink space-y-4">
              <p>
                Phoenix was briefed at a ₹9,999 retail tier. Internal confidence in landing that price was cautious — Safari's market read is value, and the premium positioning was untested in the category.
              </p>
              <p>
                Retail acceptance ran well ahead of forecast, and sell-through outperformed the cautious case. On ecommerce, the realised price moved past ₹10,000 without losing traction — strengthening contribution margin against plan.
              </p>
              <p className="text-accent font-semibold italic">
                Design didn't just deliver the product; it created the conditions for the brand to price and position differently.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 14 */}
      <motion.section 
        className="case-section py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">14.</span>
            <span className="label ml-2">Reflection</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            What to push next, and what to take into the next brief.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                If a future brief loosened the cost, the first thing I'd change isn't the hardware — it's the base fabric itself, so premium runs through the whole shell and not only the faces a hand finds.
              </p>
              <p>
                Phoenix sold out — but in deliberately small numbers, and with few reviews behind it. The honest open question is whether restraint <em>scales</em>: did the quiet version win on merit, or because it stayed a low-volume, self-selecting buy? Before assuming quiet always reads as premium to a value-brand shopper, I'd test it against a louder version at shelf, at real volume.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6 bg-paper-deep border border-hairline rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">What I take into the next brief:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { h: "Proportion before detail", d: "Get the silhouette right and most of the work is done." },
                  { h: "Surface discipline", d: "Every seam, stitch and panel line earns its place." },
                  { h: "Material honesty", d: "Invest in the few signals the hand and eye trust, and don't fake the rest." },
                  { h: "Visual noise reduction", d: "Remove the opportunities for inconsistency rather than decorate around them." }
                ].map((rule, idx) => (
                  <div key={idx} className="bg-white/40 p-4 rounded-xl">
                    <span className="font-bold text-xs uppercase block mb-1 text-ink">{rule.h}</span>
                    <p className="text-xs text-muted leading-relaxed">{rule.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 15 & 16 */}
      <motion.section 
        className="case-section py-20 bg-paper-deep border-t border-b border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">15.</span>
            <span className="label ml-2">Role &amp; scope</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            What I made, honestly.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink space-y-6">
              <p>
                Sole designer on Phoenix, from a marketing brief to a production-ready specification. The visualisation here is mine; AI was used only to communicate finish and intent, never to engineer the product.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted">
                <li>Interrogated the brief and named its core contradiction.</li>
                <li>Concept exploration and the decision to remove colour in favour of material.</li>
                <li>CMF system — body, trim, PU placement, and brushed-metal hardware family.</li>
                <li>Form, proportion, and construction on the Brighton platform.</li>
                <li>13-page manufacturing spec pack and factory hand-off.</li>
                <li>Aligned product, sourcing, factory, and category teams.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6 bg-white/40 border border-hairline rounded-2xl p-8 shadow-sm">
              <div className="pull-quote border-l-4 border-accent pl-6 py-2">
                <p className="font-display italic text-lg text-accent leading-relaxed">
                  "Phoenix taught me that 'premium' isn't a material — it's a system where no single touchpoint betrays the price."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Section 16 */}
          <div className="border-t border-hairline pt-12 mt-12">
            <motion.div variants={fadeUp} className="section-marker mb-6">
              <span className="num text-accent font-bold">16.</span>
              <span className="label ml-2">Additional products shipped</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              Phoenix is one of several products I've taken to market.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
              <p>
                The operating principles behind Phoenix — constraint-led decisions, CMF as the primary lever, form direction held through development — have applied across multiple launches. Below is a selection of work currently live in retail and D2C.
              </p>
            </motion.div>

            {/* Display portfolio-04-scaling.jpg if it exists */}
            <motion.div variants={fadeUp} className="figure group mb-12">
              <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src="/Project Images/Phoenix/portfolio-04-scaling.jpg" 
                    alt="Fig. 09 — Additional Products Shipped" 
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                  <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 09 · Scaling the portfolio</span>
                  <span className="fig-desc text-sm italic text-ink">Form languages, ribbed architectures, and CMF developments across trolleys and collaborations.</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-12">
              <div>
                <h3 className="font-semibold text-lg uppercase tracking-wider text-accent mb-6">Original design — form, CMF, development.</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { brand: "Safari · Hard-shell trolley", name: "Astra Neo", desc: "Lead designer — form direction, ribbed surface architecture, colour-accent CMF and development. Engineering CAD in collaboration.", link: "https://www.flipkart.com" },
                    { brand: "Genius · Hard-shell trolley", name: "Theo", desc: "Lead designer — form concept, youth-lifestyle CMF direction and development across the Genius range. Engineering CAD in collaboration.", link: "https://www.amazon.in" },
                    { brand: "Genie · Hard-shell trolley", name: "Scarlett", desc: "Lead designer — diagonal wave shell concept, ombré CMF direction and full product development. Engineering CAD in collaboration.", link: "https://www.geniebags.com" }
                  ].map((p, i) => (
                    <div key={i} className="border border-hairline bg-white/40 hover:bg-white hover:shadow-md p-6 rounded-xl transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                      <div>
                        <span className="text-[10px] text-muted uppercase tracking-wider block mb-1">{p.brand}</span>
                        <h4 className="font-serif italic font-bold text-xl mb-2 text-ink">{p.name}</h4>
                        <p className="text-xs text-muted leading-relaxed mb-4">{p.desc}</p>
                      </div>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent hover:text-[#432014] inline-flex items-center gap-1 mt-auto">
                        View Retailer <FiArrowRight />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-hairline/60 pt-12">
                <h3 className="font-semibold text-lg uppercase tracking-wider text-accent mb-6">CMF &amp; creative direction.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { brand: "Safari · Printed hard-shell trolley", name: "Hue", desc: "CMF direction — print concept, ink-wash pattern development and colourway selection across the range. ~8,000 units sold monthly on Flipkart (June–September 2025).", link: "https://www.flipkart.com" },
                    { brand: "Safari × Manyavar · Wedding collaboration", name: "Eterna", desc: "Creative direction — established the look, feel and visual identity of the collaboration. CMF, surface detailing and brand tone defined under my direction. Final execution led by the team following my departure.", link: "https://www.safaribags.com" }
                  ].map((p, i) => (
                    <div key={i} className="border border-hairline bg-white/40 hover:bg-white hover:shadow-md p-6 rounded-xl transition-all duration-300 flex flex-col justify-between min-h-[200px]">
                      <div>
                        <span className="text-[10px] text-muted uppercase tracking-wider block mb-1">{p.brand}</span>
                        <h4 className="font-serif italic font-bold text-xl mb-2 text-ink">{p.name}</h4>
                        <p className="text-xs text-muted leading-relaxed mb-4">{p.desc}</p>
                      </div>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent hover:text-[#432014] inline-flex items-center gap-1 mt-auto">
                        View details <FiArrowRight />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bottom Navigation */}
      <section className="next-project border-t border-hairline py-16 bg-white/30">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="label text-[10px] uppercase tracking-widest text-muted block mb-1">Previous case study</span>
            <Link 
              className="next-project-link inline-flex items-center gap-2 font-serif text-3xl font-semibold text-ink hover:text-accent transition-colors duration-200" 
              href="/work/genie"
            >
              <FiArrowLeft className="text-xl" /> Genie
            </Link>
            <p className="desc text-xs text-muted leading-relaxed mt-2">
              Growing a school-bag brand up with its customer. Rebranding &amp; scaling.
            </p>
          </div>

          <div className="text-right">
            <span className="label text-[10px] uppercase tracking-widest text-muted block mb-1">Next case study</span>
            <Link 
              className="next-project-link inline-flex items-center gap-2 font-serif text-3xl font-semibold text-ink hover:text-accent transition-colors duration-200" 
              href="/work/sona"
            >
              Sona <FiArrowRight className="text-xl" />
            </Link>
            <p className="desc text-xs text-muted leading-relaxed mt-2 text-left md:text-right">
              Designing the hour before sleep. Speculative ecosystem concept.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
