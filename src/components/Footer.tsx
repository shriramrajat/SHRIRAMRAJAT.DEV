"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#08080a] border-t border-white/5 relative z-50 mt-auto">
      {/* Massive CTA Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-20 pb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 border-b border-light/5 pb-16 border-white/5">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-mono text-white font-bold tracking-tight">
              Stop deploying into the void. <br/> <span className="text-slate-500">Build proof.</span>
            </h2>
            <p className="font-sans text-slate-400 text-lg leading-relaxed mt-2">
              I am currently open for <span className="text-white">Backend Infrastructure</span>, <span className="text-white">API Gateway & Systems</span>, and <span className="text-white">DevOps & Observability</span> roles.
              If you value high-concurrency systems, deterministic observability, and raw backend performance, let's talk.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link href="mailto:rajat@example.com">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-[#08080a] font-mono font-bold px-6 py-3 rounded text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#08080a] animate-pulse"></div>
                  Open For Engineering Roles
                </motion.button>
              </Link>
              <Link href="https://repoready.online" target="_blank">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent text-white font-mono font-medium px-6 py-3 rounded text-sm hover:text-accent border border-white/10 transition-all"
                >
                  Launch RepoReady &rarr;
                </motion.button>
              </Link>
            </div>
          </div>
          
          <div className="border border-white/5 bg-black/40 p-6 rounded-2xl flex flex-col gap-3 min-w-[280px] shadow-2xl">
             <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2 mb-2">Live Subsystems</span>
             <Link href="https://repoready.online" target="_blank" className="font-mono text-sm text-slate-300 hover:text-accent transition-colors flex items-center justify-between w-full group py-1">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_#00ff88]"></span> 
                  RepoReady SaaS
                </div>
                <span className="text-slate-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
             </Link>
             <Link href="/work/sentinelstack" className="font-mono text-sm text-slate-300 hover:text-accent transition-colors flex items-center justify-between w-full group py-1">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 shadow-[0_0_5px_#3b82f6]"></span> 
                  SentinelStack Gateway
                </div>
                <span className="text-slate-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
             </Link>
             <Link href="/persona" className="font-mono text-sm text-slate-300 hover:text-accent transition-colors flex items-center justify-between w-full group py-1">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/80 shadow-[0_0_5px_#a855f7]"></span> 
                  System Identity
                </div>
                <span className="text-slate-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
             </Link>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-white/30 text-xs">
            © {new Date().getFullYear()} Shriramrajat. Engineered in Pune.
          </div>
          <div className="flex gap-6 font-mono text-xs tracking-wider">
            <Link href="https://github.com/shriramrajat" target="_blank" className="text-slate-400 hover:text-white transition-colors">GITHUB</Link>
            <Link href="https://linkedin.com/in/shriramrajat" target="_blank" className="text-slate-400 hover:text-white transition-colors">LINKEDIN</Link>
            <Link href="https://twitter.com/shriramrajat" target="_blank" className="text-slate-400 hover:text-white transition-colors">X(TWITTER)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
