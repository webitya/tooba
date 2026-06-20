"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiLinkedin, FiCopy, FiCheck, FiArrowRight, FiArrowLeft, FiBriefcase, FiAward } from "react-icons/fi";

export default function LinkedInContent() {
  const [copied, setCopied] = useState(false);
  const profileUrl = "https://www.linkedin.com/in/tooba-ameer";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="bg-[#F7F5F1] min-h-[calc(100vh-140px)] py-12 md:py-20 px-4 md:px-8 flex items-center justify-center">
      <motion.div 
        className="max-w-[640px] w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Link */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted hover:text-accent font-sans font-medium text-sm transition-colors"
          >
            <FiArrowLeft /> Back to home
          </Link>
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-3xl border border-hairline p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
        >
          {/* Subtle Decorative Gradient Backdrop */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#0A66C2]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Heading Section */}
          <div className="flex flex-col gap-4 mb-8">
            <span className="font-sans font-bold text-[11px] tracking-[0.2em] uppercase text-accent inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Professional Portal
            </span>
            <h1 className="font-serif font-semibold text-3xl md:text-4xl leading-tight text-ink tracking-tight">
              Let's connect on LinkedIn
            </h1>
            <p className="font-sans text-muted leading-relaxed text-[16px] max-w-[50ch]">
              I lead physical product development and range strategy across bags, luggage, and accessories. Feel free to reach out for advisory roles, professional inquiries, or just to expand your network.
            </p>
          </div>

          {/* Key Value Pill Group */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            <div className="flex items-center gap-1.5 bg-[#F7F5F1] border border-hairline text-ink font-sans font-medium text-[13px] px-3.5 py-1.5 rounded-full">
              <FiBriefcase className="text-accent" /> Design & Development Manager
            </div>
            <div className="flex items-center gap-1.5 bg-[#F7F5F1] border border-hairline text-ink font-sans font-medium text-[13px] px-3.5 py-1.5 rounded-full">
              <FiAward className="text-accent" /> Travel Sentry Award Winner
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary LinkedIn CTA */}
            <a 
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white font-sans font-semibold text-base py-4 px-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <FiLinkedin size={20} className="transition-transform group-hover:scale-110" />
              Connect with Tooba
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary Copy Link Action */}
            <button 
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 bg-[#F7F5F1] hover:bg-[#EAE7E0] border border-hairline text-ink font-sans font-semibold text-sm px-6 py-4 rounded-2xl transition-colors duration-250 cursor-pointer min-w-[170px]"
            >
              {copied ? (
                <>
                  <FiCheck className="text-emerald-600" />
                  Copied!
                </>
              ) : (
                <>
                  <FiCopy />
                  Copy profile link
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Selected Work Quick Access */}
        <motion.div variants={itemVariants} className="mt-10">
          <div className="border-t border-hairline pt-6 mb-6">
            <h2 className="font-serif font-semibold text-lg text-ink tracking-tight">Explore my case studies</h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                title: "Genie",
                desc: "₹17 Cr → ₹100 Cr+ brand scale strategy",
                href: "/work/genie"
              },
              {
                title: "Phoenix",
                desc: "Travel Sentry award-winning business trolley",
                href: "/work/phoenix"
              },
              {
                title: "SONA",
                desc: "Systems concept for the hour before sleep",
                href: "/work/sona"
              }
            ].map((proj, i) => (
              <Link 
                key={i}
                href={proj.href}
                className="flex items-center justify-between p-4 rounded-2xl border border-hairline bg-white/50 backdrop-blur-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-sm transition-all duration-350 group"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-serif font-semibold text-[15px] text-ink group-hover:text-accent transition-colors">
                    {proj.title}
                  </span>
                  <span className="font-sans text-xs text-muted">
                    {proj.desc}
                  </span>
                </div>
                <FiArrowRight className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-350" />
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
