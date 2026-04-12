"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function WorkDirectory() {
  return (
    <main className="min-h-screen relative bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-hidden font-sans">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Navigation */}
      <nav className="w-full flex justify-between items-center px-6 sm:px-12 py-8 border-b border-white/5 relative z-20">
        <Link href="/" className="font-mono text-white/50 hover:text-white transition-colors text-sm group flex items-center gap-2">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">&larr;</span> Return to Root
        </Link>
        <span className="text-white/30 font-mono text-xs uppercase tracking-widest">
          /work_directory
        </span>
      </nav>

      <div className="w-full max-w-5xl mx-auto px-6 py-16 sm:py-24 relative z-10 flex flex-col gap-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-5xl sm:text-6xl font-mono font-bold text-white tracking-tighter">
            Architectured Systems.
          </h1>
          <p className="font-sans text-slate-400 text-lg max-w-2xl">
            I don't build generic to-do apps. These are the deep-dive engineering case studies into 
            infrastructure, latency optimizations, and production-grade deployments I've built.
          </p>
        </motion.div>

        {/* Case Studies Container */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 }
            }
          }}
          className="flex flex-col gap-8"
        >
          
          {/* Project 0: RepoReady */}
          <motion.article 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="group relative border border-accent/20 bg-accent/5 backdrop-blur-sm rounded-xl overflow-hidden hover:border-accent/50 transition-colors duration-500 shadow-[0_0_15px_rgba(0,255,136,0.05)] hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-10 relative z-10">
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-mono text-white group-hover:text-accent transition-colors">RepoReady</h2>
                  <span className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-0.5 rounded-full bg-accent/10 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full animate-pulse bg-accent"></div> Primary</span>
                </div>
                <p className="text-slate-400 font-sans text-base leading-relaxed">
                  Translating your rough GitHub commits into hard-hitting resume points and verifiable engineering credibility scoring. No more underselling your commits.
                </p>
                <Link href="/repoready" className="font-mono text-sm text-accent mt-4 flex items-center gap-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  View Live Platform &rarr;
                </Link>
              </div>
              <div className="md:col-span-1 border-l border-accent/10 pl-6 hidden md:flex flex-col gap-4 justify-center">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-mono uppercase">Tech Stack</span>
                  <span className="text-sm text-white font-mono mt-1">Next.js, Tailwind, LLM API</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-mono uppercase">Focus</span>
                  <span className="text-sm text-white font-mono mt-1">Prompt Engineering, UX</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Project 1: SentinelStack */}
          <motion.article 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="group relative border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-accent/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-10 relative z-10">
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-mono text-white group-hover:text-accent transition-colors">SentinelStack</h2>
                  <span className="font-mono text-[10px] text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">High Concurrency</span>
                </div>
                <p className="text-slate-400 font-sans text-base leading-relaxed">
                  A high-performance, production-grade API Gateway engineered to handle high 
                  concurrency testing. Features connection pooling to eliminate Redis bottlenecks 
                  and robust fail-safes during simulated infrastructure outages.
                </p>
                <Link href="/work/sentinelstack" className="font-mono text-sm text-accent mt-4 flex items-center gap-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  Read Case Study &rarr;
                </Link>
              </div>
              <div className="md:col-span-1 border-l border-white/10 pl-6 hidden md:flex flex-col gap-4 justify-center">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-mono uppercase">Tech Stack</span>
                  <span className="text-sm text-white font-mono mt-1">Node.js, Redis, Docker</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-mono uppercase">Focus</span>
                  <span className="text-sm text-white font-mono mt-1">System Hardening, Throughput</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Project 2: RajatBuilds */}
          <motion.article 
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="group relative border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-slate-300 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-300/0 via-slate-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-10 relative z-10">
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-mono text-white group-hover:text-slate-300 transition-colors">Backend Playground</h2>
                  <span className="font-mono text-[10px] text-slate-400 border border-slate-500/30 px-2 py-0.5 rounded-full bg-slate-500/10">Performance Testing</span>
                </div>
                <p className="text-slate-400 font-sans text-base leading-relaxed">
                  A high-throughput backend architecture designed to blast APIs with concurrent requests and isolate exactly where they break. Case study tracking a real 98.5% latency reduction via indexing strategies on 100,000 row data sets.
                </p>
                <Link href="/work/rajatbuilds" className="font-mono text-sm text-slate-300 mt-4 flex items-center gap-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  Read Case Study &rarr;
                </Link>
              </div>
              <div className="md:col-span-1 border-l border-white/10 pl-6 hidden md:flex flex-col gap-4 justify-center">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-mono uppercase">Tech Stack</span>
                  <span className="text-sm text-white font-mono mt-1">FastAPI, PostgreSQL, Next.js</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-mono uppercase">Focus</span>
                  <span className="text-sm text-white font-mono mt-1">Concurrency, Indexing</span>
                </div>
              </div>
            </div>
          </motion.article>

        </motion.div>
      </div>
    </main>
  );
}
