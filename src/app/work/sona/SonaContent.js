"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

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

export default function SonaContent() {
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
            Case study · Sona · Concept · 2025
          </motion.span>
          <motion.h1 variants={fadeUp} className="display-xl mb-4">
            Sona
          </motion.h1>
          
          <div className="hero-body grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div variants={fadeUp} className="hero-body-text lg:col-span-6">
              <p className="hero-tagline font-display italic text-3xl mb-6 text-accent">
                Designing the hour before sleep.
              </p>
              <p className="lede BL text-lg leading-relaxed text-ink">
                Most sleep products focus on sleep. Sona focuses on what happens <em className="lead">before</em> it — a concept exploring how a ceramic dock, scent compositions, an app, and a brand might help people transition out of the day and into rest.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-body-figure lg:col-span-6">
              <div className="figure group">
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="overflow-hidden">
                    <img 
                      src="/Project Images/Sona/Web banner.jpg" 
                      alt="Fig. 01 — Sona Ritual Dock" 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                    <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">
                      Fig. 01 · Hero composition
                    </span>
                    <span className="fig-desc text-sm italic text-ink">
                      The Ritual Dock in context — bedside, evening light.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="hero-meta grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-hairline pt-8 mt-12">
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Role</span>
              <span className="v text-sm font-semibold text-ink">Future-opportunity design — concept, product &amp; ecosystem vision, art direction</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Type</span>
              <span className="v text-sm font-semibold text-ink">Speculative concept</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Duration</span>
              <span className="v text-sm font-semibold text-ink">4 weeks</span>
            </div>
            <div>
              <span className="k block text-xs uppercase tracking-wider text-muted mb-1">Focus</span>
              <span className="v text-sm font-semibold text-ink">Behaviour · systems · ritual design</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 01 */}
      <motion.section 
        className="case-section py-16 border-t border-hairline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">01.</span>
            <span className="label ml-2">What this demonstrates</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Four competencies on display.
          </motion.h2>

          <motion.div variants={stagger} className="framework framework--4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                head: "Strategic foresight",
                body: "Reading a behavioural shift before the market names it — the problem is the transition out of the day, not sleep itself."
              },
              {
                num: "02",
                head: "Opportunity design",
                body: "Identifying an unowned space and defining the category that should fill it, rather than answering an existing brief."
              },
              {
                num: "03",
                head: "Ecosystem thinking",
                body: "Four parts — object, scent, app, brand — designed to hand off across one experience, not a product with accessories."
              },
              {
                num: "04",
                head: "Behavioural insight",
                body: "Designing for how people actually disengage, and refusing the tracking paradigm that makes the problem worse."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
            <span className="label ml-2">Why I pursued this project</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            A brief I chose, to ask a bigger question.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl space-y-6 text-ink">
            <p>
              Most of my work is commercial and tightly constrained — products built to ship and sell against a cost and a calendar. I took on this speculative brief deliberately, to work the muscle that day-to-day product work rarely asks for: starting from a <em>behaviour</em> rather than a brief, and designing a whole ecosystem rather than a single object.
            </p>
            <p>
              The brief set the territory — a sleep and mindfulness ritual for urban professionals who'd tried everything and distrusted brands that over-promise — and asked for a product, an app, and a campaign. I used it to answer a larger question: <em>if I could define a category from scratch, what would I choose to build, and what would I refuse to?</em>
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
            <span className="label ml-2">The opportunity</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            A market pointed at the wrong moment.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl space-y-6 text-ink">
            <p>
              The sleep market is crowded, but it is almost entirely pointed at the wrong moment. Trackers, scores, and smart mattresses measure sleep once you're in it; supplements and teas treat the body. Almost nothing is designed for the hour <em>before</em> — the transition out of a stimulated day, which is where most people actually get stuck.
            </p>
            <p>
              That gap is widening. Evenings have filled with screens engineered to hold attention, and the dominant "solution" — a sleep app on the same phone causing the problem — competes with the distraction instead of ending it. <em>The underserved user isn't the person who can't sleep. It's the person who can't stop.</em> That's an unowned category, and the bet behind Sona is that it's the one worth defining.
            </p>
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
            <span className="label ml-2">The foresight</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Three bets about behaviour.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              Before any form, I made three bets about how people actually relate to the end of the day — and pressure-tested each one: against my own reasoning, and in unstructured conversations with people I trusted to push back.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="framework framework--3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                head: "Sleep isn't the problem. Transition is.",
                body: "The evening has filled with stimulation. The hard part may not be sleeping — it's stopping.",
                q: "What if we designed the transition itself, not the sleep?"
              },
              {
                num: "02",
                head: "Awareness doesn't change behaviour.",
                body: "People already know the habits. Knowledge isn't the barrier — starting is.",
                q: "What if the goal was to make the right move easier to begin?"
              },
              {
                num: "03",
                head: "A physical ritual beats a digital reminder.",
                body: "Most sleep tools live inside the device causing the distraction. Objects occupy space and signal intent.",
                q: "Could an object help people disengage better than another screen?"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="fw-cell group border border-hairline bg-white/40 hover:bg-white hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="num block text-accent font-mono font-bold text-lg mb-4">{item.num}</span>
                  <span className="head block text-sm font-bold uppercase tracking-wider text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                    {item.head}
                  </span>
                  <span className="body block text-sm text-muted leading-relaxed mb-4">{item.body}</span>
                </div>
                <div className="border-t border-hairline pt-3 mt-auto">
                  <span className="text-xs font-display italic text-accent font-semibold block">"{item.q}"</span>
                </div>
              </motion.div>
            ))}
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
            <span className="label ml-2">Key design decisions</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            How I arrived at the ecosystem.
          </motion.h2>

          <motion.div variants={stagger} className="framework framework--3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                head: "Why physical, not an app alone?",
                body: "A screen competes with the very distraction it's meant to end. A physical object occupies space and signals intent — a reminder by existing, not by interrupting."
              },
              {
                num: "02",
                head: "Why scent?",
                body: "A cue that works without attention or a screen. Smell ties to memory and mood faster than an interface can, so it carries the ritual while the phone goes away."
              },
              {
                num: "03",
                head: "Why a dock, not a wearable or candle?",
                body: "A ritual needs a fixed place to repeat. A wearable blurs into the day; a candle has no system behind it. A dock gives the evening a spot to return to — and place is what makes a habit stick."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
              <span className="label ml-2">The strategic decision</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              No sensors. No scores. No streaks.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose space-y-6 text-ink">
              <p>
                The first idea was a quiet record of restful nights. I dropped it before building it. <em>The moment Sona scored your sleep, it would become the thing it was meant to replace</em> — another metric to optimise, another reason to reach for the phone, another way to fail at rest.
              </p>
              <p>
                So the founding decision was a refusal. In a category whose entire logic is measurement, choosing <em>not</em> to measure is the strategic bet — it's what makes Sona a different proposition rather than a softer-looking tracker. Everything else follows from that one line: the dock has no screen, the app has one job a night and then disappears, and the only thing Sona keeps is a plain record it draws no conclusions from.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-5 bg-white/40 border border-hairline rounded-2xl p-8 shadow-sm">
            <div className="pull-quote border-l-4 border-accent pl-6 py-2">
              <p className="font-display italic text-2xl text-accent leading-relaxed">
                "The discipline wasn't designing more. It was identifying what the category does by reflex — and deciding to do the opposite on purpose."
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
            <span className="label ml-2">Positioning</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            I set the world before the object.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              Before drawing a single form, I decided what Sona was <em>not</em>: not a gadget, not a wellness app, not aromatherapy. I built its world from publishing, bookmaking, photography, and type — editorial, restrained, exact — and the palette of ivory, ink, and ochre, the type, and the tone all came from here.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="figure group">
            <div className="figure-box p-0 overflow-hidden border border-hairline rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src="/Project Images/Sona/Visual World with heading .jpg" 
                  alt="Fig. 02 — Sona visual world reference board" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 02 · Reference grid · 8-up</span>
                <span className="fig-desc text-sm italic text-ink">Publishing, bookmaking, photography, type, colour, object, interior, culture — and where Sona lands.</span>
              </div>
            </div>
            <p className="figure-caption text-xs text-muted italic mt-4 text-center">Reference imagery sourced and credited; the synthesis and direction are mine.</p>
          </motion.div>
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
            <span className="label ml-2">The ecosystem</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Four parts that hand off across the evening.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              Sona isn't a single product, and it isn't a system in the operational sense — it's an ecosystem of four parts — dock, compositions, app, and brand — each owning a moment and passing to the next. I mapped the transition into five stages and gave each part a stage to hold, then hand on.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="flow grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", stage: "Arrive", desc: "The day ends. The phone is still in hand.", owner: "The moment before" },
              { num: "02", stage: "Choose", desc: "A composition sets the intent for the evening.", owner: "App + Compositions" },
              { num: "03", stage: "Begin", desc: "The paper goes on the Dock; light and scent start.", owner: "Dock" },
              { num: "04", stage: "Release", desc: "The phone goes down; the room takes over.", owner: "Dock + Brand" },
              { num: "05", stage: "Rest", desc: "Reading, stillness — sleep arrived at, not chased.", owner: "The room" }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="flow-stage p-5 border border-hairline rounded-xl bg-white/40 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="num block text-accent font-bold font-mono text-sm mb-3">{step.num}</span>
                  <span className="stage-name block font-bold text-ink text-sm uppercase tracking-wide mb-2">{step.stage}</span>
                  <p className="desc text-xs text-muted leading-relaxed mb-4">{step.desc}</p>
                </div>
                <div className="border-t border-hairline/60 pt-2 mt-auto">
                  <span className="owner text-[10px] uppercase tracking-widest text-accent font-semibold block">{step.owner}</span>
                </div>
              </motion.div>
            ))}
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
            <span className="label ml-2">The solution · Dock</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            A domestic object, not a gadget.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              The hardest decision was resisting the obvious one — a sleek tech device. The dock had to read as something you'd own, not a device you'd tend to: a ceramic stone body, warm and matte, closer to an object on a shelf than a gadget on a nightstand.
            </p>
            <p>
              That choice is behavioural, not decorative. <em>A device asks to be operated; an object simply sits there and signals intent.</em> The form had to disappear into the room so the ritual — not the technology — is what the evening returns to.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="figure-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/Project Images/Sona/Screens_/Set up 1/Dock 01.jpg", num: "Fig. 03a · Dock — top view", desc: "Ceramic body, warm matte finish." },
              { src: "/Project Images/Sona/Screens_/Set up 1/Dock 02.jpg", num: "Fig. 03b · Dock — front view", desc: "Form and proportion." },
              { src: "/Project Images/Sona/Screens_/Set up 1/Dock 03.jpg", num: "Fig. 03c · Dock — section", desc: "Internal build, mechanism, dimensions." }
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
                  <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                    <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">{fig.num}</span>
                    <span className="fig-desc text-xs italic text-ink">{fig.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="figure-caption text-xs text-muted italic mt-6 text-center">Sona Ritual Dock — views, materials, mechanism, internal build, and dimensions.</p>
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
            <span className="label ml-2">The solution · Compositions</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Packaged like a publication, not a supplement.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              The direction I explored and turned away from: I started with fragrance capsules and oils, and rejected both — each instantly recast Sona as a supplement or aromatherapy product. I moved to incense papers in a linen-wrapped box, indexed like a small publication: <em>seven compositions for seven states of mind, four papers each, across a 28-night cycle</em> — no oils, no liquids, just paper, scent, and time.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="figure-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/Project Images/Sona/The dock.png", num: "Fig. 04a · Box exterior", desc: "Linen-wrapped." },
              { src: "/Project Images/Sona/Sona Dock and compositions .png", num: "Fig. 04b · Box open", desc: "Compositions revealed." },
              { src: "/Project Images/Sona/Screens_/Set up 1/Compositions..jpg", num: "Fig. 04c · One composition", desc: "With its manual card." },
              { src: "/Project Images/Sona/Sona Compositions.png", num: "Fig. 04d · Specifications", desc: "Typography detail." }
            ].map((fig, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="figure group"
              >
                <div className="figure-box p-0 overflow-hidden border border-hairline rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="overflow-hidden aspect-square flex items-center justify-center bg-white">
                    <img 
                      src={fig.src} 
                      alt={fig.num} 
                      className="max-h-full max-w-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-3 bg-paper-deep text-left w-full border-t border-hairline min-h-[90px]">
                    <span className="fig-num font-bold text-[10px] uppercase block text-muted mb-0.5">{fig.num}</span>
                    <span className="fig-desc text-[11px] italic text-ink">{fig.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="figure-caption text-xs text-muted italic mt-6 text-center">The box, the manual card, one composition, and specifications.</p>
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
            <span className="label ml-2">Experience journey · the app</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            One flow, then the phone goes down.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              The brief asked for a companion app; the design problem was making it the kind you open once a night and then forget. A single job each evening — set the ritual, then disappear — ending in a screen that simply says: <em>set the phone down, Sona will continue.</em>
            </p>
          </motion.div>

          <motion.div variants={stagger} className="framework framework--4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", head: "Open", body: "Open Sona — it finds the Dock and picks up the ritual. No sign-up, no feed, no notifications." },
              { num: "02", head: "Set", body: "Set what the evening is for, choose tonight's composition, and set the length of the descent." },
              { num: "03", head: "Begin", body: "Place the incense paper in the Dock's vessel; the Dock recognises it and begins." },
              { num: "04", head: "Release", body: "Set the phone down. The ritual screen dims to the room and the sequence continues without you." }
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
                  <span className="body block text-xs text-muted leading-relaxed">{item.body}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="figure group">
            <div className="w-full border border-hairline rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F4F1E9] p-6">
                {[
                  "/Project Images/Sona/Screens_/Set up 1/Onboarding 1.jpg",
                  "/Project Images/Sona/Screens_/Set up 1/Onboarding 1-1.jpg",
                  "/Project Images/Sona/Screens_/Set up 1/Onboarding 1-2.jpg",
                  "/Project Images/Sona/Screens_/Set up 1/Onboarding 1-3.jpg"
                ].map((screen, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg border border-hairline shadow-sm hover:scale-[1.03] transition-transform duration-300 bg-white">
                    <img src={screen} alt={`App screen ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 05 · App screen sequence</span>
                <span className="fig-desc text-sm italic text-ink">Selected screens from the prototype — onboarding, pairing, intent, in-ritual, the 28-night cycle.</span>
              </div>
            </div>
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
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">12.</span>
            <span className="label ml-2">Working prototype</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            Click through the ritual.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div variants={fadeUp} className="body-prose lg:col-span-6 text-ink">
              <p className="mb-4">
                Beyond static screens, I built Sona's nightly flow as an interactive prototype — onboarding, set-up, and the ritual itself, click by click.
              </p>
              <p className="text-sm text-muted">
                Best viewed on desktop. Set in Source Serif 4 — a freely-available stand-in for Tiempos, the paid font specified in the design but unavailable in the AI-assisted prototyping environment.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-6">
              <div className="prototype-card border border-hairline p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="label text-[10px] font-bold uppercase tracking-wider text-accent block mb-1">Interactive prototype</span>
                  <h3 className="title text-xl font-semibold text-ink font-sans">The nightly flow, end to end.</h3>
                </div>
                <Link 
                  className="cta inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-[#432014] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300" 
                  href="/Prototype/Sona/Sona Prototype.html" 
                  target="_blank"
                >
                  Open prototype <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 13 */}
      <motion.section 
        className="case-section py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeUp} className="section-marker mb-6">
            <span className="num text-accent font-bold">13.</span>
            <span className="label ml-2">Brand &amp; campaign</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
            An editorial voice for calm.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl mb-12 text-ink">
            <p>
              The brief called for a launch campaign, so the identity had to carry beyond the product — unhurried, exact, closer to a publication than a brand, selling a feeling rather than a feature. I set it against four tensions:
            </p>
          </motion.div>

          <motion.div variants={stagger} className="framework framework--4 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { num: "01", head: "Calm, not passive" },
              { num: "02", head: "Premium, not exclusive" },
              { num: "03", head: "Ritual, not spiritual" },
              { num: "04", head: "Contemporary, not clinical" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="fw-cell group border border-hairline bg-white/40 hover:bg-white hover:border-accent/40 rounded-xl p-6 transition-all duration-300 text-center"
              >
                <span className="num block text-accent font-mono font-bold text-xs mb-2">{item.num}</span>
                <span className="head block text-sm font-bold uppercase tracking-wider text-ink group-hover:text-accent transition-colors duration-200">
                  {item.head}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="figure group">
            <div className="w-full border border-hairline rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F4F1E9] p-6">
                {[
                  "/Project Images/Sona/Social media Campaign Assets/Square post 1080×1080.jpg",
                  "/Project Images/Sona/Social media Campaign Assets/A1 Portrait.jpg",
                  "/Project Images/Sona/Social media Campaign Assets/Feed Post.jpg",
                  "/Project Images/Sona/Social media Campaign Assets/Instagram  Story or Reel cover.jpg"
                ].map((campaign, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg border border-hairline shadow-sm hover:scale-[1.03] transition-transform duration-300 bg-white">
                    <img src={campaign} alt={`Campaign asset ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
              <div className="p-4 bg-paper-deep text-left w-full border-t border-hairline">
                <span className="fig-num font-bold text-xs uppercase block text-muted mb-1">Fig. 06 · Campaign — across formats</span>
                <span className="fig-desc text-sm italic text-ink">Web, social, print — the identity carried beyond the product.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 14 */}
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
              <span className="num text-accent font-bold">14.</span>
              <span className="label ml-2">Reflection</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-3xl font-display italic mb-8">
              What this approach unlocks.
            </motion.h2>

            <motion.div variants={fadeUp} className="body-prose space-y-6 text-ink">
              <p>
                Sona is a concept, not a validated product, and I'd treat it that way: before building anything, I'd test the core bet — <em>does designing the transition actually beat optimising the sleep?</em> — small and qualitative, in real bedrooms. The commercial questions, refill economics and retention, are what I'd model before it became a product, not after.
              </p>
              <p>
                But the part that travels isn't the dock or the scent. It's <em>the method</em>: start from a behaviour the market has misread, identify the moment everyone else is designing around, and decide what to <em>refuse</em> before deciding what to build. That approach isn't specific to sleep. It's how I'd come at any category where the obvious products are all solving the wrong half of the problem — which is most of the categories worth entering.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-5 bg-white/40 border border-hairline rounded-2xl p-8 shadow-sm">
            <div className="pull-quote border-l-4 border-accent pl-6 py-2">
              <p className="font-display italic text-lg text-accent leading-relaxed">
                "Genie was a category rebuilt. Phoenix was a product made to punch above its cost. Sona is the one where I got to ask the earlier question: not how to make the thing better, but whether the category is even pointed at the right need."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 15 */}
      <motion.section 
        className="case-section py-20"
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
            What I made.
          </motion.h2>

          <motion.div variants={fadeUp} className="body-prose max-w-3xl space-y-6 text-ink">
            <p>
              Sole designer, end to end: problem framing, concept and form development, CMF, app UI and flows, brand identity and visual system, packaging, and launch campaign — brought together as an interactive prototype.
            </p>
            <p>
              Designed over four weeks from a brief set in a design certification (Job Escape). The concept, product direction and ecosystem vision are mine. I worked with AI tools through the process — to explore research directions and to build the visualisation and art direction — directing the calls throughout.
            </p>
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
              href="/work/genie"
            >
              Genie <FiArrowRight className="text-xl" />
            </Link>
            <p className="desc text-xs text-muted leading-relaxed mt-2 text-left md:text-right">
              Growing a school-bag brand up with its customer.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
