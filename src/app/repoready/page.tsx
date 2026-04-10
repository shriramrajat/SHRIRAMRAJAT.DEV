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
            {"Turns your undocumented, messy GitHub projects into a recruiter-ready resume asset, complete with an engineering score (0-100) and an exact improvement roadmap.".split(" ").map((word, i) => (
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
            <Link href="https://repoready.online" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-accent text-black font-mono font-bold px-8 py-4 rounded-xl overflow-hidden w-full"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Launch Analyzer <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </motion.button>
            </Link>
            
            <Link href="/blog" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white font-mono px-8 py-4 rounded-xl border border-white/5 transition-colors w-full shadow-2xl"
              >
                Read Architecture
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* Terminal Trace & Before/After Demo */}
        <section className="relative w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 border-t border-b border-white/5 py-16">
          
          {/* Left: Terminal Streaming UI */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.6 } }
            }}
            className="bg-[#08080a] border border-white/5 rounded-2xl p-6 font-mono text-sm shadow-2xl flex flex-col gap-3 relative overflow-hidden h-full"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50"></div>
            <div className="flex gap-2 mb-2 pb-4 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 shadow-inner"></div>
            </div>
            
            <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex gap-4 text-slate-400">
              <span className="text-emerald-500/50 shrink-0">~%</span>
              <span className="text-white">repoready analyze github.com/user/project</span>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex gap-4 text-slate-500 mt-2">
              <span className="text-transparent shrink-0">~%</span>
              <span>[engine] Scanning for CI/CD, Test Coverage, and Deployments...</span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex gap-4 text-slate-500">
              <span className="text-transparent shrink-0">~%</span>
              <span>[llm] Generating Impact-driven Resume Bullets...</span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex gap-4 text-slate-500">
              <span className="text-transparent shrink-0">~%</span>
              <span>[roadmap] Plotting actionable improvement path...</span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex gap-4 mt-2">
              <span className="text-transparent shrink-0">~%</span>
              <span className="text-accent font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#00ff88]"></span> 
                Execution Graded: 84/100 (Production Ready).
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Before / After Comparison */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 0.8 } }
            }}
            className="flex flex-col gap-4 h-full"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500"
            >
              <span className="absolute top-4 right-4 text-[10px] font-mono text-red-400/50 uppercase tracking-widest border border-red-500/20 px-2 py-0.5 rounded">Typical Resume Point</span>
              <p className="font-mono text-slate-300 text-sm mt-4">&gt; "Built a React app."</p>
            </motion.div>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              className="flex justify-center -my-3 relative z-10"
            >
              <div className="w-8 h-8 rounded-full bg-[#0c0c0f] border border-white/10 flex items-center justify-center text-slate-500 font-mono text-xs shadow-xl">
                &darr;
              </div>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.95, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden group shadow-[0_0_30px_rgba(0,255,136,0.05)] h-full hover:shadow-[0_0_50px_rgba(0,255,136,0.1)] hover:border-emerald-500/40 transition-all duration-500"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               
               <span className="absolute top-4 right-4 text-[10px] font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-500/10 z-10">RepoReady Translated Format</span>
               <div className="mt-8 flex flex-col gap-3 relative z-10">
                 <div className="flex items-center gap-3">
                   <div className="px-2 py-1 bg-accent/20 border border-accent/40 rounded text-accent font-mono text-xs font-bold shadow-[0_0_10px_rgba(0,255,136,0.2)] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all">Score: 84/100</div>
                   <div className="text-slate-400 text-xs font-mono">Developer Ready</div>
                 </div>
                 <div className="flex items-start gap-4 mt-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_5px_#00ff88] group-hover:animate-pulse"></div>
                   <p className="font-sans text-slate-200 leading-relaxed text-sm xl:text-base">
                     Architected a full-stack Next.js client featuring authenticated user state, pushing active database updates securely via Supabase RPCs.
                   </p>
                 </div>
                 <div className="mt-2 text-xs font-mono text-slate-500 pt-3 border-t border-white/5 flex gap-2 items-center group-hover:text-slate-400 transition-colors">
                   <span className="text-yellow-500 group-hover:text-yellow-400 transition-colors">Roadmap:</span> Add a CI/CD pipeline via GitHub actions to hit Elite level (90+).
                 </div>
               </div>
            </motion.div>
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
                { title: "Repo Signal Scanner", slug: "signal-scanner", desc: "Reads deep into your project directory. Extracts tech stacks, structure, and critical engineering signals like CI/CD implementations and tests.", icon: "01" },
                { title: "Credential Scoring System", slug: "credential-scoring", desc: "Outputs a verifiable 0-100 score mapping directly to your hireability (Beginner → Elite Production Level).", icon: "02" },
                { title: "Semantic Resume Gen", slug: "semantic-resume", desc: "OpenRouter LLMs translate 'built react app' into metric-driven logic: 'Architected a React/Next.js client...'", icon: "03" },
                { title: "Growth Roadmap Engine", slug: "growth-roadmap", desc: "Automated coaching that pinpoints exactly what you need to build next to hit a perfect 100/100 recruiter score.", icon: "04" },
              ].map((card, idx) => (
                <Link key={idx} href={`/blog/${card.slug}`} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -8, scale: 1.01, borderColor: "rgba(0, 255, 136, 0.4)" }}
                    className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 sm:p-10 rounded-3xl flex flex-col gap-4 relative overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)] h-full"
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

                    <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 relative z-10">
                      Read Engineering Log &rarr;
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
