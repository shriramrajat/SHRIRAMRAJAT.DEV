"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function RajatBuildsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-hidden font-sans pb-32">
      
      {/* Background Noise with Accent Trace */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="fixed -top-1/2 -right-1/2 w-full h-full bg-slate-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-between items-center px-6 sm:px-12 py-6 border-b border-white/5 relative z-20 backdrop-blur-md bg-black/70 sticky top-0"
      >
        <Link href="/work" className="font-mono text-white/50 hover:text-white transition-colors text-sm group flex items-center gap-2">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">&larr;</span> Back to Directory
        </Link>
        <span className="text-slate-400 font-mono text-xs uppercase tracking-widest border border-slate-500/20 bg-slate-500/10 px-3 py-1 rounded-full hidden sm:block">
          Performance Playground
        </span>
      </motion.nav>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10 flex flex-col gap-24"
      >
        
        {/* Header Section */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 }
            }
          }}
          className="flex flex-col gap-8 w-full relative"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="flex gap-3 items-center"
          >
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse shadow-[0_0_10px_#94a3b8]"></div>
            <span className="font-mono text-slate-400 text-sm tracking-widest uppercase">System Specs // Case 02</span>
          </motion.div>
          
          <div className="flex flex-wrap gap-x-6 sm:gap-x-8 overflow-hidden">
            {"Backend Playground.".split(" ").map((word, wordIndex) => (
              <div key={wordIndex} className="flex whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.h1
                    key={`${wordIndex}-${charIndex}`}
                    variants={{
                      hidden: { y: "150%", opacity: 0, rotate: 10 },
                      visible: { y: "0%", opacity: 1, rotate: 0 }
                    }}
                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold text-white tracking-tighter"
                  >
                    {char}
                  </motion.h1>
                ))}
              </div>
            ))}
          </div>

          <motion.p 
             variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.02, delayChildren: 0.8 }
              }
            }}
            className="text-xl sm:text-2xl text-slate-300 font-medium leading-relaxed inline-flex flex-wrap gap-x-[0.3em]"
          >
            {"Reducing API Latency by 98.5% without changing core application code.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                className={`inline-block ${word.includes("98.5%") ? "text-accent font-mono" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          
          {/* Live System Metrics Banner */}
          <div className="flex flex-wrap items-center gap-6 mt-4 p-6 bg-white/[0.02] border border-white/10 rounded-xl">
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Status</span>
              <span className="text-sm font-mono text-accent flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div> Live</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Stack</span>
              <span className="text-sm font-mono text-white">FastAPI · PostgreSQL · Next.js</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Deploy</span>
              <span className="text-sm font-mono text-white">Railway + Vercel</span>
            </div>
          </div>
        </motion.header>

        {/* The Problem / Solution Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Problem Block */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50 group-hover:bg-red-500 transition-colors"></div>
            <h3 className="text-2xl font-mono text-white">The O(n) Bottleneck</h3>
            <p className="text-slate-400 font-sans text-lg leading-relaxed">
              A simple API querying a PostgreSQL table initialized with <strong className="text-white">100,000 rows</strong> degraded aggressively under simulated traffic (50 concurrent users). 
            </p>
            <div className="mt-auto bg-red-500/10 border border-red-500/20 p-4 rounded-lg flex flex-col gap-2">
              <span className="font-mono text-xs text-red-400 uppercase tracking-widest">Baseline Metric</span>
              <span className="font-mono text-xl text-white">979ms Response Time</span>
              <span className="font-sans text-sm text-red-200">Full table scan (O(n)) causing severe I/O exhaustion.</span>
            </div>
          </motion.div>

          {/* Solution Block */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 group-hover:bg-accent transition-colors"></div>
            <h3 className="text-2xl font-mono text-white">The Database Index</h3>
            <p className="text-slate-400 font-sans text-lg leading-relaxed">
              By structuring queries around proper database indices, we radically shift time complexity. Performance isn't just about fast API code—it's about execution paths under load.
            </p>
            <div className="bg-black/80 font-mono text-sm text-accent p-4 rounded-lg border border-white/10 uppercase">
              CREATE INDEX idx_users_city ON users(city);
            </div>
            <div className="mt-auto bg-accent/10 border border-accent/20 p-4 rounded-lg flex flex-col gap-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">Optimized Metric</span>
              <div className="flex items-end gap-3">
                <span className="font-mono text-3xl text-white">2.91ms</span>
                <span className="font-mono text-accent pb-1">-98.5% Latency</span>
              </div>
              <span className="font-sans text-sm text-emerald-200">Complexity reduced mapping O(n) → O(log n).</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Full System Architecture Diagram */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-mono text-white">System Architecture</h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-3xl">
              The high-level execution flow generates concurrent request loads, fires them against the target API, and pipes the performance deltas directly into the observation dashboard.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="w-full bg-[#08080a] border border-white/10 rounded-2xl p-8 sm:p-16 relative flex items-center justify-center">
             
             {/* Responsive Pipeline Graph */}
             <div className="flex flex-wrap items-center justify-center gap-y-8 gap-x-2 sm:gap-x-4 font-mono w-full">
                
                {/* Input block */}
                <div className="flex flex-col items-center gap-3 relative group">
                  <div className="border border-white/20 bg-white/5 p-4 rounded flex flex-col gap-1 w-32 border-t-amber-400/50">
                    <span className="text-[10px] text-slate-500 uppercase">Input Node</span>
                    <span className="text-white text-sm">Next.js</span>
                  </div>
                  {/* Tooltip detail */}
                  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 text-xs text-slate-400 p-3 rounded pointer-events-none z-20 shadow-xl">
                    Takes API URL, Request Type, and Concurrency Level constraints.
                  </div>
                </div>

                <div className="text-slate-600">→</div>

                {/* Engine block */}
                <div className="flex flex-col items-center gap-3 relative group">
                  <div className="border-2 border-accent/60 bg-accent/10 p-5 rounded-xl shadow-[0_0_15px_rgba(0,255,136,0.1)] flex flex-col gap-1 w-40 text-center">
                    <span className="text-[10px] text-accent uppercase font-bold">Execution</span>
                    <span className="text-white text-sm">FastAPI Engine</span>
                  </div>
                  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 text-xs text-slate-400 p-3 rounded pointer-events-none z-20 shadow-xl">
                    asyncio + httpx. Fires N concurrent requests via tracking tasks.
                  </div>
                </div>

                <div className="text-slate-600">→</div>

                {/* Target API */}
                <div className="flex flex-col items-center gap-3">
                  <div className="border border-white/20 border-dashed bg-white/[0.02] p-4 rounded flex flex-col gap-1 w-32 items-center">
                    <span className="text-[10px] text-slate-500 uppercase">System</span>
                    <span className="text-slate-300 text-sm">Target API</span>
                  </div>
                </div>

                <div className="text-slate-600 hidden lg:block">→</div>

                {/* Metrics */}
                <div className="flex flex-col items-center gap-3 relative group">
                  <div className="border border-teal-500/40 bg-teal-500/10 p-4 rounded flex flex-col gap-1 w-32">
                    <span className="text-[10px] text-teal-400 uppercase">Analysis</span>
                    <span className="text-white text-sm">Metrics</span>
                  </div>
                  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 text-xs text-slate-400 p-3 rounded pointer-events-none z-20 shadow-xl">
                    Calculates average/max/min latency, requests/sec, and failure rates.
                  </div>
                </div>

                <div className="text-slate-600">→</div>

                {/* Datastore */}
                <div className="flex flex-col items-center gap-3 relative group">
                  <div className="border border-blue-500/40 bg-blue-500/10 p-4 rounded flex flex-col gap-1 w-32 border-b-blue-400/50">
                    <span className="text-[10px] text-blue-400 uppercase">State</span>
                    <span className="text-white text-sm">PostgreSQL</span>
                  </div>
                  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 text-xs text-slate-400 p-3 rounded pointer-events-none z-20 shadow-xl">
                    Stores test runs, history results, and load configurations.
                  </div>
                </div>

             </div>
          </motion.div>
        </motion.section>

        {/* Deep Dive Breakdown */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12"
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h3 className="font-mono text-2xl text-white">Load Engine (FastAPI)</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Utilizes pure `asyncio` and `httpx` to eliminate blocking behaviors. The system accepts the load configuration, generates asynchronous task wrappers, and mass-fires concurrent connections against the target endpoints. 
                <br/><br/>
                Every single request lifecycle is locally tracked for execution limits, logging start, end, and I/O status to feed the tracking arrays.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h3 className="font-mono text-2xl text-white">Aggregated Proof</h3>
              <div className="border border-white/5 bg-black/40 p-6 rounded-xl flex flex-col gap-4">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">This explicitly demonstrates:</span>
                <ul className="text-slate-300 font-sans space-y-3">
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> Designed async request mechanics holding concurrent TCP load.</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> Optimized DB execution planes resolving exact O(n) leaks.</li>
                  <li className="flex items-center gap-3"><span className="text-accent">✓</span> Full-stack pipeline deployment linking Next.js clients to Railway workers.</li>
                </ul>
              </div>
            </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex flex-col items-center justify-center text-center gap-6 py-12 border-t border-white/10"
        >
          <h2 className="text-3xl sm:text-4xl font-mono text-white">Want to break your API?</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="#" className="font-mono text-black bg-accent px-8 py-3 rounded hover:bg-emerald-400 transition-colors font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              Try the Playground
            </Link>
            <Link href="#" className="font-mono text-slate-300 border border-white/20 bg-white/5 px-8 py-3 rounded hover:bg-white/10 transition-colors">
              View Source &rarr;
            </Link>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
