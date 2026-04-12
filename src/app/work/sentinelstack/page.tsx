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

export default function SentinelStackCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-hidden font-sans pb-32">
      
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

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
        <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full hidden sm:block">
          High Concurrency Gateway
        </span>
      </motion.nav>

      {/* Increased breadth based on user request (max-w-6xl matches the yellow boundary lines) */}
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
          className="flex flex-col gap-6 max-w-4xl"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="flex gap-3 items-center"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
            <span className="font-mono text-emerald-500 text-sm tracking-widest uppercase">System Specs // Case 01</span>
          </motion.div>
          
          <div className="overflow-hidden flex flex-wrap">
            {"SentinelStack.".split("").map((char, index) => (
              <motion.h1
                key={index}
                variants={{
                  hidden: { y: "150%", opacity: 0, rotate: 10 },
                  visible: { y: "0%", opacity: 1, rotate: 0 }
                }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-mono font-bold text-white tracking-tighter inline-block"
              >
                {char}
              </motion.h1>
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
            className="text-xl sm:text-2xl text-slate-300 font-medium leading-relaxed mt-2 inline-flex flex-wrap gap-x-[0.3em]"
          >
            {"A production-oriented API Gateway designed to handle authentication, traffic control, and observability as first-class system concerns.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.header>

        {/* Core Philosophy Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/[0.02] border border-white/5 p-8 sm:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
          <div className="md:col-span-3 mb-2">
            <h3 className="font-mono text-white text-2xl">Design Philosophy</h3>
            <p className="font-sans text-slate-400 mt-2 text-lg">SentinelStack is built strictly on three unbreakable rules:</p>
          </div>
          {[
            { id: "01", text: "Fail gracefully, not catastrophically." },
            { id: "02", text: "Never block the request path for non-critical work." },
            { id: "03", text: "Use deterministic logic for control, AI only for explanation." }
          ].map((rule) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={rule.id} 
              className="flex flex-col gap-3 p-6 bg-black/40 border border-white/5 rounded-xl"
            >
              <span className="font-mono text-accent text-lg">{rule.id}</span>
              <p className="text-slate-200 font-medium leading-relaxed">{rule.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Visual Architecture Diagram */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-mono text-white">Gateway-First Architecture</h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-3xl">
              All cross-cutting concerns are resolved before requests reach business logic. 
              Instead of scattering logic, the gateway intercepts, authenticates, and routes everything centrally.
            </p>
          </motion.div>
          
          {/* Custom Node Diagram instead of raw Mermaid text */}
          <motion.div variants={fadeUp} className="w-full bg-[#08080a] border border-white/10 rounded-2xl p-8 sm:p-16 flex flex-col items-center relative overflow-hidden">
             
             {/* Client */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-6 py-3 rounded-lg shadow-lg relative z-10">Client Request</div>
             
             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>
             
             {/* Gateway Node */}
             <div className="border-2 border-accent shadow-[0_0_15px_rgba(0,255,136,0.2)] bg-accent/10 font-bold text-white font-mono px-8 py-4 rounded-lg relative z-10">
                Gateway (FastAPI Spine)
             </div>

             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>

             {/* Middleware Group */}
             <div className="border border-teal-500/30 bg-teal-500/5 rounded-xl p-8 w-full max-w-2xl relative flex flex-col gap-3">
                <div className="absolute -top-3 left-6 bg-[#08080a] px-3 text-teal-400 font-mono text-sm border border-teal-500/30 rounded-full">
                  Middleware Pipeline
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-sm flex items-center justify-center text-center">
                    1. Context Injection (request_id)
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-sm flex items-center justify-center text-center">
                    2. Auth (JWT Validation)
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-sm flex flex-col items-center justify-center gap-2 text-center">
                    <span>3. Rate Limiter (Token Bucket)</span>
                    <span className="text-[10px] text-red-400 font-mono px-2 py-1 bg-red-400/10 border border-red-500/20 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Redis Atomic
                    </span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-sm flex flex-col items-center justify-center gap-2 text-center">
                    <span>4. Logging Dispatch</span>
                    <span className="text-[10px] text-blue-400 font-mono px-2 py-1 bg-blue-400/10 border border-blue-500/20 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Async Queue
                    </span>
                  </div>
                </div>
             </div>

             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>

             {/* Route Handler & Response Line */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-8 py-4 rounded-lg relative z-10 w-64 text-center">
               Route Handler
             </div>

             {/* Background Workers Section connected by dashed line */}
             <div className="w-full max-w-4xl mt-16 border-t border-dashed border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#08080a] px-4 text-xs font-mono text-slate-500">Asynchronous / Observation Layer</div>
               
               <div className="flex flex-col items-center gap-3 w-full border border-blue-500/20 bg-blue-500/5 p-6 rounded-xl">
                 <span className="text-blue-400 font-mono text-sm">Background Worker</span>
                 <div className="w-[1px] h-4 bg-blue-500/50"></div>
                 <span className="bg-black border border-white/10 px-4 py-2 font-mono text-slate-300 text-sm rounded">PostgreSQL (Logs)</span>
               </div>

               <div className="flex justify-center items-center h-[2px] flex-1 bg-gradient-to-r from-blue-500/20 to-amber-500/20"></div>

               <div className="flex flex-col items-center gap-3 w-full border border-amber-500/20 bg-amber-500/5 p-6 rounded-xl">
                 <span className="text-amber-400 font-mono text-sm">Prometheus / Grafana</span>
                 <div className="w-[1px] h-4 bg-amber-500/50"></div>
                 <span className="bg-black border border-white/10 px-4 py-2 font-mono text-slate-300 text-sm rounded">Metrics Aggregation</span>
               </div>
             </div>

          </motion.div>
        </motion.section>

        {/* Deep Dive Engineering Constraint Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-mono text-white">Engineering Decisions</motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Sub System: Rate Limiting */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[80px] group-hover:bg-red-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Atomic Rate Limiting</h3>
                  <span className="text-red-400 text-sm font-mono mt-1 block">Algorithm: Token Bucket</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center text-red-500 font-mono text-xs">RL</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg">
                High concurrency causes race conditions in standard rate limiters. I shifted the Token Bucket algorithm to execute entirely within Redis as <strong className="text-slate-200">atomic Lua scripts</strong>, ensuring deterministic enforcement.
              </p>
              <div className="mt-auto pt-6 px-5 py-4 border-l-2 border-red-500 bg-red-500/5 rounded text-sm text-red-200">
                <strong className="block text-red-400 mb-1">Fail-Open Circuit Breaker:</strong>
                If Redis goes offline, the circuit breaker instantly shifts to an in-memory limit. The API never crashes just because the rate limit datastore dropped.
              </div>
            </motion.div>

            {/* Sub System: Observability */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Zero-Latency Logs</h3>
                  <span className="text-blue-400 text-sm font-mono mt-1 block">Storage: Async Pipeline</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-blue-500 font-mono text-xs">OB</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg">
                Writing incident logs to Postgres during a live request drops throughput massively. The middleware now pushes instantly to an in-memory queue—decoupling I/O wait times. A background worker drains the queue asynchronously.
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-2 rounded text-slate-300">Prometheus Hooks</span>
                <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-2 rounded text-slate-300">Grafana Tracking</span>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* Honest Limitations & Scalability Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col gap-8 pb-12"
        >
          <div className="bg-gradient-to-br from-black via-zinc-900 to-black border border-white/10 rounded-2xl p-8 sm:p-16 relative overflow-hidden shadow-2xl">
            {/* Fake grid for texture */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-50"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16">
              <div className="flex-1 flex flex-col gap-6">
                <h3 className="font-mono text-3xl text-accent flex items-center gap-3">
                  <span className="animate-pulse">⚠️</span> AI-Assisted Incident Layer
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  My core thesis: AI should explain incidents, not detect them. 
                  When Prometheus detects a hard threshold breach (e.g. error rate spikes), 
                  it triggers an LLM summarization pipeline. The AI reads the localized log buffer and outputs a human-readable diagnosis Slack alert. It remains out of the critical request path.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-16 pt-10 lg:pt-0">
                <h3 className="font-mono text-3xl text-white">Honest Scalability Path</h3>
                <ul className="text-slate-400 space-y-4 font-mono text-sm leading-relaxed">
                  <li className="flex gap-3"><span className="text-red-400 shrink-0">[Limit]</span> <span>CPU-bound bcrypt hashing currently caps throughput at ~110 RPS per worker. Needs offloading.</span></li>
                  <li className="flex gap-3"><span className="text-amber-400 shrink-0">[SPOF]</span> <span>Redis is single-node. Must upgrade to Redis Cluster.</span></li>
                  <li className="flex gap-3"><span className="text-amber-400 shrink-0">[State]</span> <span>The in-memory fallback rate limiter isn't distributed-safe across multiple Docker containers.</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
