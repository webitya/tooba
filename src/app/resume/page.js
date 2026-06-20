"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <main className="bg-[#EAE7E0] min-h-screen py-16 px-4 md:px-8">
      <motion.div 
        className="max-w-[850px] mx-auto flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full flex justify-between items-center bg-[#F7F5F1]/80 backdrop-blur-md p-5 rounded-2xl border border-hairline shadow-sm">
          <h1 className="font-serif font-semibold text-2xl text-ink tracking-tight">Resume</h1>
          <a 
            href="/Tooba_Ameer_CV.pdf" 
            download 
            className="flex items-center gap-2 bg-ink text-[#F7F5F1] font-sans font-medium text-sm px-6 py-3 rounded-full hover:bg-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <FiDownload /> Download PDF
          </a>
        </div>

        {/* A4 Container */}
        <div className="w-full max-w-[850px] aspect-[1/1.414] bg-white shadow-xl overflow-hidden rounded-lg border border-hairline relative">
          <iframe 
            src="/Tooba_Ameer_CV.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
            className="w-full h-full"
            title="Tooba Ameer Resume"
          />
        </div>
      </motion.div>
    </main>
  );
}
