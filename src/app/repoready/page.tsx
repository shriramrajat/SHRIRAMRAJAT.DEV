"use client";
import Link from "next/link";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RepoReadyPitch() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen relative bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-hidden font-sans">
      
      {/* Dynamic Animated Background Grid */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_10%,transparent_100%)]"></div>
      </motion.div>

      {/* Floating Aurora Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-64 w-[600px] h-[600px] bg-accent opacity-20 blur-[120px] rounded-full pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-12 w-[500px] h-[500px] bg-emerald-600 opacity-10 blur-[150px] rounded-full pointer-events-none z-0"
      />

      {/* Navigation */}
      <nav className="w-full flex justify-between items-center px-6 sm:px-12 py-8 border-b border-white/5 relative z-20 backdrop-blur-md bg-black/20">
        <Link href="/" className="font-mono text-white/50 hover:text-white transition-colors text-sm group flex items-center gap-2">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">&larr;</span> Return to Root
        </Link>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          className="bg-accent/10 text-accent font-mono text-xs px-3 py-1.5 rounded-full border border-accent/20 flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00ff88]"></div>
          RepoReady v1.0
        </motion.div>
      </nav>

      <div className="w-full max-w-5xl mx-auto px-6 py-24 sm:py-32 flex flex-col gap-32 relative z-10">
        
        {/* Core Value Prop */}
        <section className="flex flex-col items-center text-center gap-6">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="text-6xl sm:text-8xl md:text-9xl font-mono font-bold tracking-tighter text-white z-10 drop-shadow-2xl flex flex-col items-center"
          >
            <div className="overflow-hidden flex">
              {["Y", "o", "u", "r", "\u00A0", "C", "o", "d", "e", "."].map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { y: "150%", opacity: 0, rotate: 10 },
                    visible: { y: "0%", opacity: 1, rotate: 0 }
                  }}
                  transition={{ type: "spring", damping: 15, stiffness: 100 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            
            <motion.span 
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-4 overflow-hidden relative inline-block p-1"
            >
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-teal-300 bg-[length:200%_auto] inline-block"
              >
                Translated.
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.p 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.02, delayChildren: 1.2 }
              }
            }}
            className="max-w-2xl text-lg sm:text-2xl text-slate-400 leading-relaxed z-10 relative mt-4 inline-flex flex-wrap justify-center gap-x-[0.3em]"
          >
            {"Stop losing job applications because recruiters don't read your GitHub. RepoReady ingests your rough commits and spits out hard-hitting, metric-driven engineering resume points.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                className={`inline-block ${word.includes("hard-hitting") || word.includes("metric-driven") ? "text-white font-medium" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 z-10 w-full sm:w-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-accent text-black font-mono font-bold px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Deploy Analyzer <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white font-mono px-8 py-4 rounded-xl border border-white/5 transition-colors w-full sm:w-auto shadow-2xl"
            >
              Read Architecture
            </motion.button>
          </motion.div>
        </section>

        {/* Feature Breakdown Grid */}
        <section className="relative w-full z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-16"
          >
            <div className="flex flex-col gap-4 items-center text-center">
              <h2 className="font-mono text-3xl sm:text-5xl text-white">Under The Hood</h2>
              <p className="font-sans text-slate-500 text-lg">How we turn spaghetti code logs into hireable assets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
              {[
                { title: "AST Parsing Engine", desc: "We don't just read commit messages. We trace your syntax trees to understand logic complexity.", icon: "01" },
                { title: "Velocity Scoring", desc: "Tracking throughput metrics locally to prove you can maintain architectural speed.", icon: "02" },
                { title: "Semantic Translator", desc: "LLM-powered conversion from 'fixed nav bug' to 'Reduced layout reflows resulting in 12% faster TTL'.", icon: "03" },
                { title: "Live Sync", desc: "Direct GitHub webhooks that automatically inject new resume bullets straight to your portfolio.", icon: "04" },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.01, borderColor: "rgba(0, 255, 136, 0.4)" }}
                  className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 sm:p-10 rounded-3xl flex flex-col gap-4 relative overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                >
                  {/* Background Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
                  
                  {/* Decorative Number */}
                  <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-10 font-mono text-8xl font-bold text-accent transition-all duration-700 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6">
                    {card.icon}
                  </div>
                  
                  <h3 className="font-mono text-2xl sm:text-3xl text-white relative z-10">{card.title}</h3>
                  <p className="font-sans text-slate-400 relative z-10 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
