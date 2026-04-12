"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ConnectPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { name: "GitHub", handle: "@shriramrajat", url: "https://github.com/shriramrajat", role: "Open Source Codebases & API Architectures", color: "hover:border-white/40 shadow-white/5", icon: "🐙" },
    { name: "LinkedIn", handle: "Rajat Shriram", url: "https://linkedin.com/in/shriramrajat", role: "Professional Network & Business Log", color: "hover:border-[#0077B5]/50 shadow-[#0077B5]/5", icon: "💼" },
    { name: "X (Twitter)", handle: "@shriramrajat", url: "https://x.com/shriramrajat", role: "Short-form Systems Logging", color: "hover:border-white/30 shadow-white/5", icon: "🐦" },
    { name: "Email", handle: "rajatshriram7@gmail.com", url: "mailto:rajatshriram7@gmail.com", role: "Direct Secure Channel", color: "hover:border-red-500/40 shadow-red-500/5", icon: "✉️" },
    { name: "Instagram", handle: "@shriramrajat", url: "https://instagram.com/shriramrajat", role: "Visual Edge & Photography", color: "hover:border-pink-500/40 shadow-pink-500/5", icon: "📸" },
  ];

  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-hidden font-sans pb-32">
       {/* Background Noise/Grid */}
       <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-between items-center px-6 sm:px-12 py-6 border-b border-light/5 relative z-20 backdrop-blur-md bg-black/70 sticky top-0 border-white/5"
      >
        <Link href="/" className="font-mono text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">&larr;</span> Return Home
        </Link>
        <span className="text-emerald-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full hidden sm:block">
          Command Center
        </span>
      </motion.nav>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10 flex flex-col gap-24"
      >
         {/* Live Telemetry Header */}
         <motion.section variants={fadeUp} className="flex flex-col gap-6 max-w-4xl">
           <div className="flex gap-3 items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></div>
            <span className="font-mono text-red-500 text-sm tracking-widest uppercase">Live Connection Matrix</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-mono font-bold text-white tracking-tighter leading-tight">
            Initiate <br className="hidden sm:block"/>
            <span className="text-slate-600">Handshake.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <div className="px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 rounded-lg flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               <span className="font-mono text-emerald-500 text-[10px] sm:text-sm">Status: Accepting Remote Roles</span>
            </div>
            <div className="px-4 py-2 border border-white/10 bg-white/5 rounded-lg flex items-center gap-3">
               <span className="font-mono text-slate-400 text-[10px] sm:text-sm">Local Server Time: <span className="text-white">{time || "00:00:00 IST"}</span></span>
            </div>
          </div>
         </motion.section>

         {/* Communication Relays */}
         <motion.section variants={fadeUp} className="flex flex-col gap-8 w-full">
            <div className="flex justify-between items-end border-b border-light/5 pb-4 border-white/5">
              <h2 className="text-2xl sm:text-3xl font-mono text-white">Communication Relays</h2>
              <span className="font-mono text-slate-500 text-sm hidden sm:block">Network Topology</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {socials.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                  <div className={`p-6 h-full border border-white/5 bg-[#121215] rounded-xl flex flex-col gap-4 group transition-all duration-300 ${social.color} hover:-translate-y-1 hover:shadow-2xl`}>
                    <div className="flex justify-between items-center w-full">
                      <span className="font-mono text-3xl group-hover:scale-110 transition-transform origin-left">{social.icon}</span>
                      <span className="font-mono text-xs text-slate-500 group-hover:text-white transition-colors">{social.handle}</span>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-mono text-xl text-white border-b border-white/5 pb-2 mb-2 group-hover:border-white/20 transition-colors">{social.name}</h3>
                      <p className="text-slate-400 font-sans text-sm">{social.role}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
         </motion.section>

         {/* Secured Assets */}
         <motion.section variants={fadeUp} className="flex flex-col gap-8 w-full border-t border-white/5 pt-12">
            <div className="flex justify-between items-end border-b border-light/5 pb-4 border-white/5">
              <h2 className="text-2xl sm:text-3xl font-mono text-white">Secured Assets</h2>
              <span className="font-mono text-slate-500 text-sm hidden sm:block">Encrypted Downloads</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="border border-white/10 bg-gradient-to-br from-[#1a1a20] to-[#0c0c0f] p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[80px] group-hover:bg-accent/20 transition-all duration-700"></div>
                 <div className="flex flex-col gap-3 relative z-10">
                   <h3 className="font-mono text-2xl text-white">Curriculum Vitae</h3>
                   <p className="text-slate-400 font-sans text-sm max-w-sm">
                     Download the formalized JSON of my career, infrastructure stack, and architectural decisions.
                   </p>
                 </div>
                 {/* Replace this href later with your actual resume public URL */}
                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0 w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-mono font-bold text-sm tracking-wider uppercase rounded hover:bg-accent hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all duration-300">
                      Pull PDF
                    </button>
                 </a>
               </div>
            </div>
         </motion.section>

      </motion.div>
    </main>
  );
}
