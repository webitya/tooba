"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiClock, FiSend, FiCheck, FiCopy, FiLinkedin, FiArrowRight } from "react-icons/fi";

export default function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "hello@toobaameer.co.uk";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call for premium UI experience
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", organization: "", message: "" });
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="bg-[#F7F5F1] min-h-[calc(100vh-140px)] py-12 md:py-24 px-[clamp(20px,6vw,96px)]">
      <div className="max-w-[1240px] mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <motion.span variants={itemVariants} className="font-sans font-bold text-[11px] tracking-[0.2em] uppercase text-accent inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Get In Touch
              </motion.span>
              <motion.h1 variants={itemVariants} className="font-serif font-semibold text-[clamp(36px,5vw,60px)] leading-[1.08] text-ink tracking-tight">
                Let's discuss a project or role.
              </motion.h1>
              <motion.p variants={itemVariants} className="font-sans text-[16px] leading-[1.6] text-muted max-w-[45ch]">
                Whether you have a product development program in need of leadership, a CMF strategy alignment task, or just want to chat about consumer goods, my inbox is always open.
              </motion.p>
            </div>

            {/* Info Cards */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="group bg-white rounded-2xl border border-hairline p-5 flex items-center justify-between hover:shadow-sm transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                    <FiMail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-xs text-muted tracking-wide uppercase">Email</span>
                    <a href={`mailto:${emailAddress}`} className="font-sans font-semibold text-sm text-ink group-hover:text-accent transition-colors">
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="w-10 h-10 rounded-xl bg-[#F7F5F1] hover:bg-[#EAE7E0] border border-hairline flex items-center justify-center text-muted hover:text-ink transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <FiCheck className="text-emerald-600" /> : <FiCopy />}
                </button>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl border border-hairline p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                  <FiMapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-xs text-muted tracking-wide uppercase">Location</span>
                  <span className="font-sans font-semibold text-sm text-ink">London, United Kingdom</span>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-white rounded-2xl border border-hairline p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                  <FiClock size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-xs text-muted tracking-wide uppercase">Status</span>
                  <span className="font-sans font-semibold text-sm text-ink">Open to Select Opportunities & Advisory</span>
                </div>
              </div>
            </motion.div>

            {/* Social Redirects */}
            <motion.div variants={itemVariants} className="flex gap-4 border-t border-hairline pt-6">
              <a 
                href="/linkedin" 
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs text-ink/80 hover:text-accent uppercase tracking-wider transition-colors"
              >
                <FiLinkedin /> LinkedIn Portal
              </a>
              <span className="text-hairline">·</span>
              <a 
                href="/resume" 
                className="inline-flex items-center gap-2 font-sans font-semibold text-xs text-ink/80 hover:text-accent uppercase tracking-wider transition-colors"
              >
                View CV / Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM CONTAINER */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white border border-hairline rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[480px]"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  noValidate
                >
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-sans font-bold text-xs text-ink tracking-wide uppercase">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange}
                      placeholder="e.g. Alexander Wright"
                      className={`w-full bg-[#F7F5F1]/55 border ${errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-hairline focus:border-accent'} rounded-xl px-4 py-3 font-sans text-sm text-ink focus:outline-hidden focus:bg-white transition-all duration-200`}
                    />
                    {errors.name && <span className="font-sans text-xs text-red-500 font-semibold">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-sans font-bold text-xs text-ink tracking-wide uppercase">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange}
                      placeholder="e.g. alexander@company.com"
                      className={`w-full bg-[#F7F5F1]/55 border ${errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-hairline focus:border-accent'} rounded-xl px-4 py-3 font-sans text-sm text-ink focus:outline-hidden focus:bg-white transition-all duration-200`}
                    />
                    {errors.email && <span className="font-sans text-xs text-red-500 font-semibold">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="organization" className="font-sans font-bold text-xs text-ink tracking-wide uppercase">Organization / Brand</label>
                    <input 
                      type="text" 
                      id="organization" 
                      name="organization" 
                      value={form.organization} 
                      onChange={handleChange}
                      placeholder="e.g. Vanguard Products"
                      className="w-full bg-[#F7F5F1]/55 border border-hairline focus:border-accent rounded-xl px-4 py-3 font-sans text-sm text-ink focus:outline-hidden focus:bg-white transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-sans font-bold text-xs text-ink tracking-wide uppercase">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      value={form.message} 
                      onChange={handleChange}
                      placeholder="Let me know how we can partner up or work together..."
                      className={`w-full bg-[#F7F5F1]/55 border ${errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-hairline focus:border-accent'} rounded-xl px-4 py-3 font-sans text-sm text-ink focus:outline-hidden focus:bg-white transition-all duration-200 resize-none`}
                    />
                    {errors.message && <span className="font-sans text-xs text-red-500 font-semibold">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-2 w-full inline-flex items-center justify-center gap-2.5 bg-ink hover:bg-accent text-white font-sans font-semibold text-sm py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white/35 border-t-white animate-spin"></span>
                    ) : (
                      <>
                        <FiSend size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="flex flex-col items-center justify-center text-center p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                  >
                    <FiCheck size={32} />
                  </motion.div>
                  <h2 className="font-serif font-semibold text-2xl text-ink tracking-tight mb-2">Message sent successfully!</h2>
                  <p className="font-sans text-muted leading-relaxed text-[15px] max-w-[34ch] mb-8">
                    Thank you for reaching out. I've received your note and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-2 text-accent hover:text-ink font-sans font-semibold text-sm border-b border-accent hover:border-ink pb-[2px] transition-colors cursor-pointer"
                  >
                    Send another message <FiArrowRight />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
