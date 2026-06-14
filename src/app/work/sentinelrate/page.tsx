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

export default function SentinelRateCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-indigo-500 selection:text-white overflow-hidden font-sans pb-32">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="fixed -top-1/2 -right-1/2 w-full h-full bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none"></div>

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
        <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 rounded-full hidden sm:block">
          L7 Rate Limiting Middleware
        </span>
      </motion.nav>

      {/* Case Study Container */}
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
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_#6366f1]"></div>
            <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase">System Specs // Case 04</span>
          </motion.div>
          
          <div className="overflow-hidden flex flex-wrap">
            {"SentinelRate.".split("").map((char, index) => (
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
            {"An in-application L7 decision engine for FastAPI that intercepts, resolves, and throttles client request spikes before they impact database queries.".split(" ").map((word, i) => (
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

          {/* System Metrics Banner */}
          <div className="flex flex-wrap items-center gap-6 mt-4 p-6 bg-white/[0.02] border border-white/10 rounded-xl">
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Status</span>
              <span className="text-sm font-mono text-indigo-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-450 rounded-full animate-pulse"></span> Production-Ready (Single Node)
              </span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Stack</span>
              <span className="text-sm font-mono text-white">Python · FastAPI · Pytest</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Datastore</span>
              <span className="text-sm font-mono text-white">In-Memory (Python Dict)</span>
            </div>
          </div>
        </motion.header>

        {/* Philosophy Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/[0.02] border border-white/5 p-8 sm:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
          <div className="md:col-span-3 mb-2">
            <h3 className="font-mono text-white text-2xl">Rate Limiter Philosophy</h3>
            <p className="font-sans text-slate-400 mt-2 text-lg">
              SentinelRate operates strictly on the principle of dynamic, low-overhead request policing:
            </p>
          </div>
          {[
            { id: "01", text: "Identity-Aware Policing: Automatically distinguishes authenticated JWT users from anonymous IP callers to apply separate threshold rules." },
            { id: "02", text: "Stateful Refilling: Employs the Token Bucket mathematical algorithm to allow valid client bursts while blocking persistent resource abuse." },
            { id: "03", text: "Monotonic Time Reliance: Uses time.monotonic() instead of system clock time, remaining immune to NTP adjustments and leap seconds." }
          ].map((rule) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={rule.id} 
              className="flex flex-col gap-3 p-6 bg-black/40 border border-white/5 rounded-xl"
            >
              <span className="font-mono text-indigo-400 text-lg">{rule.id}</span>
              <p className="text-slate-300 font-medium leading-relaxed text-sm">{rule.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Architecture Diagram */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-mono text-white">L7 Interception Flow</h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-3xl">
              Requests hit the ASGI server boundary and are processed synchronously inside the ASGI pipeline before any routing or handler logic executes.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="w-full bg-[#08080a] border border-white/10 rounded-2xl p-8 sm:p-16 flex flex-col items-center relative overflow-hidden">
             
             {/* Client Request */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-6 py-3 rounded-lg shadow-lg relative z-10 text-sm">
               Client Request (HTTP Headers + IP)
             </div>
             
             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>
             
             {/* ASGI Middleware Boundary */}
             <div className="border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] bg-indigo-500/10 font-bold text-white font-mono px-8 py-4 rounded-lg relative z-10 text-center text-sm">
                ASGI BaseMiddleware Pipeline
             </div>

             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>

             {/* Decision Flow */}
             <div className="border border-indigo-500/30 bg-indigo-500/5 rounded-xl p-8 w-full max-w-2xl relative flex flex-col gap-4">
                <div className="absolute -top-3 left-6 bg-[#08080a] px-3 text-indigo-400 font-mono text-sm border border-indigo-500/30 rounded-full">
                  Decisions & Math Engine
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">1. Identity Resolver</span>
                    <span className="text-slate-500 mt-1">Reads Authorization JWT (Limit: 1000/m) or Client Host IP (Limit: 100/m)</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">2. Token Refill Calculation</span>
                    <span className="text-slate-500 mt-1">Refills tokens based on elapsed monotonic time delta * refill rate</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">3. Bucket Extraction</span>
                    <span className="text-slate-500 mt-1">Check tokens remaining. If &gt;= 1, decrement and ALLOW; else BLOCK.</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">4. Lazy GC Sweeper</span>
                    <span className="text-slate-500 mt-1">Asynchronous/lazy cleanup drops keys idle for &gt; 5 mins</span>
                  </div>
                </div>
             </div>

             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>

             {/* Split Path */}
             <div className="flex justify-between items-center w-full max-w-lg gap-8 relative z-10">
                <div className="border border-red-500/30 bg-red-500/10 text-red-400 font-mono px-4 py-2 rounded text-xs text-center flex-1">
                  BLOCK (429 HTTP)
                  <div className="text-[9px] text-slate-400 mt-0.5">Appends Retry-After & rate headers</div>
                </div>
                <div className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono px-4 py-2 rounded text-xs text-center flex-1">
                  ALLOW (Forward)
                  <div className="text-[9px] text-slate-400 mt-0.5">Executes FastAPI Route Handler</div>
                </div>
             </div>

          </motion.div>
        </motion.section>

        {/* Engineering Decisions */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-mono text-white">Engineering Decisions</motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Mathematical Token Bucket */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Token Bucket Engine</h3>
                  <span className="text-indigo-400 text-sm font-mono mt-1 block">Burst-Capable Mathematical Limits</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-indigo-500/20 bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-mono text-xs">TB</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Fixed-window rate limiters create sharp, artificial boundaries (e.g. allowing 100 requests at 11:59 and another 100 at 12:00, effectively doubling the allowance). SentinelRate uses the Token Bucket model, where tokens replenish continuously. This allows short client bursts (e.g., fetching a bunch of assets) while strictly throttling sustained overload.
              </p>
            </motion.div>

            {/* Garbage Collection (GC) */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Lazy GC Sweeper</h3>
                  <span className="text-blue-400 text-sm font-mono mt-1 block">Memory Leak Prevention</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono text-xs">GC</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                If the limiter creates a state block for every unique visitor IP, memory usage grows indefinitely. SentinelRate implements a lazy sweeper that monitors access logs. During request intercepts, it runs a low-priority sweep to drop tracking buckets that have been idle for more than 5 minutes, keeping the memory footprint bounded.
              </p>
            </motion.div>

          </div>
        </motion.section>

        {/* Brutally Honest Limitations & Scalability Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col gap-8"
        >
          <div className="bg-gradient-to-br from-black via-zinc-950 to-black border border-white/10 rounded-2xl p-8 sm:p-16 relative overflow-hidden shadow-2xl">
            {/* Fake grid for texture */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-50"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16">
              
              <div className="flex-1 flex flex-col gap-6">
                <h3 className="font-mono text-3xl text-red-400 flex items-center gap-3">
                  <span>⚠️</span> Architecture & Memory Critique
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  <strong>The Python GIL Bottleneck:</strong><br />
                  Labeling an in-application Python middleware as &quot;infrastructure-grade&quot; is misleading. Because Python operates under a Global Interpreter Lock (GIL), the rate limiter runs on the same process thread as your core business logic. Parsing requests and rendering `429` responses inside the app stack still consumes valuable CPU resources. Under a DDoS attack, the application event loop will choke on rate-limiting overhead.
                  <br /><br />
                  <strong>In-Memory OOM Liability:</strong><br />
                  Under a coordinated botnet attack (millions of spoofed IPs), storing tracking state in a local Python dictionary will instantly exhaust system RAM. The lazy cleanup interval (5 minutes) is far too slow to prevent an Out-Of-Memory (OOM) kernel crash during high-velocity attacks.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-16 pt-10 lg:pt-0">
                <h3 className="font-mono text-3xl text-white">Honest Scalability Path</h3>
                <ul className="text-slate-400 space-y-4 font-mono text-xs leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">[Edge]</span> 
                    <span>True infrastructure rate limiting belongs at the network edge (e.g. Nginx, Envoy, or Cloudflare workers), completely bypassing the application stack.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[State]</span> 
                    <span>In-memory dictionary state is stateful and isolated. If you scale FastAPI to multiple containers behind a load balancer, client tracking splits, making limits easy to bypass.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[Cache]</span> 
                    <span>To support distributed containers, the local Python state must be replaced with an external Redis atomic database running Lua scripts.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex flex-col items-center justify-center text-center gap-6 py-12 border-t border-white/10"
        >
          <h2 className="text-3xl sm:text-4xl font-mono text-white">Looking for the rate limiter?</h2>
          <p className="text-slate-400 max-w-lg text-sm">
            Read the source documentation or return back to the main case studies directory index.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/work" className="font-mono text-white border border-white/20 bg-white/5 px-8 py-3 rounded hover:bg-white/10 transition-colors text-sm">
              Work Directory
            </Link>
            <a href="https://github.com/shriramrajat/SentinelRate" target="_blank" rel="noopener noreferrer" className="font-mono text-black bg-indigo-400 px-8 py-3 rounded hover:bg-indigo-350 transition-colors font-bold shadow-[0_0_15px_rgba(99,102,241,0.3)] text-sm">
              View Repository &rarr;
            </a>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
