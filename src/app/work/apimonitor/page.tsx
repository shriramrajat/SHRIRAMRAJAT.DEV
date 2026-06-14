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

export default function APIMonitorCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-amber-500 selection:text-black overflow-hidden font-sans pb-32">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="fixed -top-1/2 -right-1/2 w-full h-full bg-amber-900/5 blur-[120px] rounded-full pointer-events-none"></div>

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
        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest border border-amber-500/20 bg-amber-500/10 px-3 py-1 rounded-full hidden sm:block">
          Asynchronous API Observability
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
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b]"></div>
            <span className="font-mono text-amber-400 text-sm tracking-widest uppercase">System Specs // Case 05</span>
          </motion.div>
          
          <div className="overflow-hidden flex flex-wrap">
            {"APIMonitor.".split("").map((char, index) => (
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
            {"An asynchronous, decoupled log collection and diagnostics pipeline pre-calculating hourly analytics while isolating LLM-powered incident summaries from the response loop.".split(" ").map((word, i) => (
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
              <span className="text-sm font-mono text-amber-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span> Decoupled Ingestion
              </span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Stack</span>
              <span className="text-sm font-mono text-white">FastAPI · PostgreSQL · OpenAI</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Frontend UI</span>
              <span className="text-sm font-mono text-white">Vanilla JS + Chart.js</span>
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
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <div className="md:col-span-3 mb-2">
            <h3 className="font-mono text-white text-2xl">Observability Tenets</h3>
            <p className="font-sans text-slate-400 mt-2 text-lg">
              APIMonitor approaches logging and performance diagnostics with clear separation of concerns:
            </p>
          </div>
          {[
            { id: "01", text: "Decoupled Execution: Middleware extracts request metadata and immediately spawns a background worker task, freeing the main event loop to return responses instantly." },
            { id: "02", text: "Query-Safe Aggregations: Computes statistics (averages, error rates) in background jobs on scheduled timers, preventing heavy queries from scanning millions of records on UI load." },
            { id: "03", text: "Isolated Intelligence: Generative models are invoked exclusively out-of-band to summarize outage logs, keeping network delays off the client request pipeline." }
          ].map((rule) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={rule.id} 
              className="flex flex-col gap-3 p-6 bg-black/40 border border-white/5 rounded-xl"
            >
              <span className="font-mono text-amber-400 text-lg">{rule.id}</span>
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
            <h2 className="text-3xl sm:text-4xl font-mono text-white">Decoupled Ingestion Pipeline</h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-3xl">
              By separating telemetry collection from response processing, API latency is kept stable while statistical rollups compile in the background.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="w-full bg-[#08080a] border border-white/10 rounded-2xl p-8 sm:p-16 flex flex-col items-center relative overflow-hidden">
             
             {/* Client Request */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-6 py-3 rounded-lg shadow-lg relative z-10 text-sm">
               Client Request
             </div>
             
             {/* Line Down */}
             <div className="h-6 w-[2px] bg-white/20"></div>
             
             {/* FastAPI Middleware */}
             <div className="border-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-amber-500/10 font-bold text-white font-mono px-8 py-3 rounded-lg relative z-10 text-center text-sm w-72">
                FastAPI Middleware
                <div className="text-[10px] text-amber-400 font-normal mt-0.5">Launches Async Task & Returns 200 OK</div>
             </div>

             {/* Line Split */}
             <div className="flex justify-between items-stretch w-full max-w-xl relative mt-6">
                
                {/* Immediate Client Return */}
                <div className="flex flex-col items-center flex-1">
                   <div className="h-4 w-[2px] bg-white/20"></div>
                   <div className="border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-mono p-4 rounded text-xs text-center w-48 mt-2">
                     HTTP Response Delivered
                     <div className="text-[9px] text-slate-500 mt-1">Latency Overhead: ~0.15ms</div>
                   </div>
                </div>

                {/* Async Background Execution */}
                <div className="flex flex-col items-center flex-1">
                   <div className="h-4 w-[2px] bg-white/20"></div>
                   <div className="border border-amber-500/30 bg-amber-500/5 text-amber-400 font-mono p-4 rounded text-xs text-center w-48 mt-2">
                     Background Thread task
                     <div className="text-[9px] text-slate-500 mt-1">Handles I/O in event loop</div>
                   </div>
                   
                   <div className="h-6 w-[2px] bg-white/20"></div>
                   
                   {/* PostgreSQL */}
                   <div className="bg-black/80 border border-white/10 p-3 rounded text-white font-mono text-xs text-center w-44">
                     PostgreSQL Raw Logs
                     <div className="text-[9px] text-slate-500 mt-0.5">Stores latency, paths, status</div>
                   </div>

                   <div className="h-6 w-[2px] bg-white/20"></div>
                   
                   {/* Rollup Engine */}
                   <div className="border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 font-mono p-4 rounded text-xs text-center w-48">
                     APScheduler Cron Aggregator
                     <div className="text-[9px] text-slate-500 mt-1">Computes hourly aggregates</div>
                   </div>

                   <div className="h-6 w-[2px] bg-white/20"></div>
                   
                   {/* Aggregated DB Table */}
                   <div className="bg-black/80 border border-white/10 p-3 rounded text-white font-mono text-xs text-center w-44">
                     PostgreSQL Rollup Table
                     <div className="text-[9px] text-slate-500 mt-0.5">Hourly stats for fast load</div>
                   </div>
                </div>

             </div>

             {/* Out-of-band AI Diagnostics */}
             <div className="w-full max-w-4xl mt-16 border-t border-dashed border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#08080a] px-4 text-xs font-mono text-slate-500">Diagnostic Subsystem</div>
               
               <div className="flex flex-col items-center gap-3 w-full border border-amber-500/20 bg-amber-500/5 p-6 rounded-xl">
                 <span className="text-amber-400 font-mono text-sm">AI Incident Analysis</span>
                 <span className="text-slate-400 text-xs text-center leading-relaxed">
                   When the system identifies path failure clusters, it extracts localized error tracebuffers and feeds them to OpenAI/Gemini models to generate diagnoses without stalling user requests.
                 </span>
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
            
            {/* Hour aggregates */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[80px] group-hover:bg-amber-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Pre-Aggregated Stats</h3>
                  <span className="text-amber-400 text-sm font-mono mt-1 block">Avoiding Table Scans under load</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-amber-500/20 bg-amber-500/10 flex items-center justify-center text-amber-400 font-mono text-xs">PA</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Querying averages and count groups over millions of raw log entries slows down dashboard loads. I implemented a scheduling rollup job using APScheduler. It processes the previous hour&apos;s raw entries, summarizes average latency, success ratios, and request counts, and writes them to a compact aggregates table. The dashboard queries only this pre-computed table, rendering stats in milliseconds.
              </p>
            </motion.div>

            {/* Decoupled Observability */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Non-Blocking Task Dispatch</h3>
                  <span className="text-indigo-400 text-sm font-mono mt-1 block">FastAPI Background Tasks</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-indigo-500/20 bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-mono text-xs">NB</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Standard middleware blocks response delivery until databases confirm receipt of logs. APIMonitor solves this by stripping headers and status code metrics into a small JSON payload, immediately scheduling it inside FastAPI&apos;s background pool, and returning the response payload. I/O database operations run independently of client wait-time.
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
                  <span>⚠️</span> Observability & Resource Critique
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  <strong>The Async "Zero-Latency" Fallacy:</strong><br />
                  FastAPI runs async code on a single event loop thread. Spawning background log tasks does not eliminate processing overhead; it merely defers it. Under massive request volumes, the CPU cycles spent serializing log bodies and checking out PostgreSQL client sessions will starve the main application routing loop, causing transaction queues to pile up.
                  <br /><br />
                  <strong>Database Indexing Limitations:</strong><br />
                  Storing millions of raw request logs inside PostgreSQL (an OLTP engine) is an anti-pattern. Writing high-velocity logs with composite indices triggers disk write amplification and indexing lag. Eventually, database performance will crater, bottlenecking core business transactions.
                  <br /><br />
                  <strong>LLM Billing Risks:</strong><br />
                  Firing automated API calls to OpenAI/Gemini whenever exceptions spike is a massive financial and availability risk. If the system encounters a cascading network outage generating thousands of errors, it will fire thousands of expensive LLM requests simultaneously—hitting token rate limits and generating a massive API bill.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-16 pt-10 lg:pt-0">
                <h3 className="font-mono text-3xl text-white">Honest Scalability Path</h3>
                <ul className="text-slate-400 space-y-4 font-mono text-xs leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">[Store]</span> 
                    <span>Relational PostgreSQL should be replaced with ClickHouse (a column-oriented database) or Loki to index metadata while storing logs in object storage.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[Queue]</span> 
                    <span>FastAPI&apos;s in-memory background task pool is volatile. If the container crashes, all pending logs are lost. Logs should be pushed to a message broker like Redis Streams or RabbitMQ.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[AI]</span> 
                    <span>AI diagnostics must be rate-limited and run behind a circuit breaker. It should process a sampled fraction of errors, or act only on manual developer request.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[Cron]</span> 
                    <span>Running `APScheduler` inside worker nodes causes concurrent containers to duplicate aggregation tasks. Aggregations must be shifted to database triggers, ClickHouse materialized views, or Celery Beat with distributed locking.</span>
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
          <h2 className="text-3xl sm:text-4xl font-mono text-white">Observe and aggregate?</h2>
          <p className="text-slate-400 max-w-lg text-sm">
            Read the source documentation or return back to the main case studies directory index.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/work" className="font-mono text-white border border-white/20 bg-white/5 px-8 py-3 rounded hover:bg-white/10 transition-colors text-sm">
              Work Directory
            </Link>
            <a href="https://github.com/shriramrajat/api-moniter-system" target="_blank" rel="noopener noreferrer" className="font-mono text-black bg-amber-400 px-8 py-3 rounded hover:bg-amber-350 transition-colors font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)] text-sm">
              View Repository &rarr;
            </a>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
