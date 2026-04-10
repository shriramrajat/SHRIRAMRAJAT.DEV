"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function PersonaPage() {
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
          System Identity
        </span>
      </motion.nav>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10 flex flex-col gap-32"
      >
        
        {/* The Thesis */}
        <motion.section variants={fadeUp} className="flex flex-col gap-6 max-w-4xl">
          <div className="flex gap-3 items-center">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#00ff88]"></div>
            <span className="font-mono text-accent text-sm tracking-widest uppercase">The Thesis</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-mono font-bold text-white tracking-tighter leading-tight">
            I refuse to be a <br className="hidden sm:block"/>
            <span className="text-slate-600">ticket-taker.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 font-sans leading-relaxed mt-4 max-w-3xl">
            Most engineers wait for a product manager to hand them a Jira ticket. I build the entire product. 
            As a student in Pune, my focus isn't on securing a standard 9-to-5—it is on architecting Micro-SaaS tools, optimizing backend pipelines, and building systems with undeniable taste.
          </p>
        </motion.section>

        {/* System Initialization (Python Trace) */}
        <motion.section variants={fadeUp} className="flex flex-col gap-8 w-full max-w-4xl -mt-10">
          <div className="bg-[#08080a] border border-white/10 rounded-2xl p-4 sm:p-8 font-mono shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
            <div className="flex gap-2 mb-6 pb-4 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
              }}
              className="text-[10px] sm:text-sm leading-loose text-slate-300 overflow-x-auto"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }}><span className="text-blue-400 font-bold">class</span> <span className="text-yellow-200">Rajat</span>:</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-4 sm:pl-8"><span className="text-blue-400 font-bold">def</span> <span className="text-purple-400">__init__</span>(<span className="text-slate-400">self</span>):</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-pink-400">self</span>.name <span className="text-accent">=</span> <span className="text-emerald-400">"Rajat Shriram"</span></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-pink-400">self</span>.roles <span className="text-accent">=</span> [<span className="text-emerald-400">"Backend Infrastructure Engineer"</span>, <span className="text-emerald-400">"API Gateway & Systems"</span>, <span className="text-emerald-400">"DevOps"</span>]</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-pink-400">self</span>.location <span className="text-accent">=</span> <span className="text-emerald-400">"Pune, India 🇮🇳"</span></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-pink-400">self</span>.current <span className="text-accent">=</span> <span className="text-emerald-400">"SentinelStack — API Gateway with auth, rate limiting, and observability"</span></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-pink-400">self</span>.learning <span className="text-accent">=</span> [<span className="text-emerald-400">"Distributed Systems"</span>, <span className="text-emerald-400">"System Design"</span>, <span className="text-emerald-400">"Advanced DSA"</span>]</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-pink-400">self</span>.interests <span className="text-accent">=</span> [<span className="text-emerald-400">"Backend architecture"</span>, <span className="text-emerald-400">"System performance"</span>, <span className="text-emerald-400">"Photography"</span>]</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-pink-400">self</span>.fun_fact <span className="text-accent">=</span> <span className="text-emerald-400">"I like breaking systems under load to understand them ⚡"</span></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-4 sm:pl-8 mt-4"><span className="text-blue-400 font-bold">def</span> <span className="text-purple-400">say_hi</span>(<span className="text-slate-400">self</span>):</motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} className="pl-8 sm:pl-16 mt-1"><span className="text-yellow-200">print</span>(<span className="text-emerald-400">"Let's scale something incredible together 🚀"</span>)</motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Operating Stack Matrix */}
        <motion.section variants={fadeUp} className="flex flex-col gap-8 w-full border-t border-white/5 pt-12">
          <div className="flex justify-between items-end border-b border-light/5 pb-4 border-white/5">
            <h2 className="text-3xl font-mono text-white">The Operating Matrix</h2>
            <span className="font-mono text-slate-500 text-sm hidden sm:block">Production Tooling</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Base Languages */}
            <div className="flex flex-col gap-4 border border-white/5 bg-[#121215] p-6 rounded-2xl group hover:border-slate-500/30 transition-colors shadow-lg">
              <h3 className="font-mono text-lg text-slate-300 border-b border-white/5 pb-2">Core Base</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm text-slate-400">
                <li className="flex items-center gap-3"><span className="text-blue-400 font-bold">Python</span> (FastAPI)</li>
                <li className="flex items-center gap-3"><span className="text-emerald-500 font-bold">Node/TS</span> (Next.js Edge)</li>
                <li className="flex items-center gap-3"><span className="text-orange-400 font-bold">Java/C++</span></li>
                <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">SQL</span> (Queries)</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="flex flex-col gap-4 border border-white/5 bg-[#121215] p-6 rounded-2xl group hover:border-accent/30 transition-colors shadow-lg">
              <h3 className="font-mono text-lg text-slate-300 border-b border-white/5 pb-2">Architecture</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm text-slate-400">
                <li className="flex items-center gap-3"><span className="text-teal-400 font-bold">FastAPI</span> (Async APIs)</li>
                <li className="flex items-center gap-3"><span className="text-pink-500 font-bold">Pydantic</span> (Validation)</li>
                <li className="flex items-center gap-3"><span className="text-red-500 font-bold">SQLAlchemy</span> (ORM)</li>
                <li className="flex items-center gap-3"><span className="text-white font-bold">Next.js</span> (Full-stack UI)</li>
              </ul>
            </div>

            {/* Data & Cloud */}
            <div className="flex flex-col gap-4 border border-white/5 bg-[#121215] p-6 rounded-2xl group hover:border-emerald-500/30 transition-colors shadow-lg">
              <h3 className="font-mono text-lg text-slate-300 border-b border-white/5 pb-2">Data & State</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm text-slate-400">
                <li className="flex items-center gap-3"><span className="text-blue-300 font-bold">PostgreSQL</span> (Relational)</li>
                <li className="flex items-center gap-3"><span className="text-red-500 font-bold">Redis</span> (Memory)</li>
                <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold">Supabase</span> (Backend)</li>
                <li className="flex items-center gap-3"><span className="text-amber-400 font-bold">Firebase</span> (NoSQL)</li>
              </ul>
            </div>

            {/* DevOps & Observability */}
            <div className="flex flex-col gap-4 border border-white/5 bg-[#121215] p-6 rounded-2xl group hover:border-orange-500/30 transition-colors shadow-lg">
              <h3 className="font-mono text-lg text-slate-300 border-b border-white/5 pb-2">DevOps / CI</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm text-slate-400">
                <li className="flex items-center gap-3"><span className="text-blue-400 font-bold">Docker</span> (Containers)</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">Prometheus</span> (Metrics)</li>
                <li className="flex items-center gap-3"><span className="text-amber-600 font-bold">Grafana</span> (Dashboards)</li>
                <li className="flex items-center gap-3"><span className="text-white font-bold">Linux/Bash</span> (Deployment)</li>
              </ul>
            </div>

          </div>
        </motion.section>


        {/* The Visual Engine (Photography Bento Box) */}
        <motion.section variants={fadeUp} className="flex flex-col gap-8 relative">
          <div className="flex justify-between items-end border-b border-white/5 pb-4">
            <h2 className="text-3xl font-mono text-white">The Visual Edge <span className="text-accent opacity-50">()</span></h2>
            <span className="font-mono text-slate-500 text-sm hidden sm:block">Photography & Aesthetics</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] sm:auto-rows-[350px]">
            {/* Bento Grid layout */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-[#121215] border border-white/5 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              {/* Replace URL with your actual photography later */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 blur-[2px] group-hover:blur-0"></div>
              <div className="absolute bottom-6 left-6 z-20 flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <p className="font-mono text-slate-300 text-sm tracking-widest uppercase">Urban Geometry</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-[#121215] border border-white/5 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600573472592-401b48b5ab3d?q=80&w=1969&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 blur-[2px] group-hover:blur-0 grayscale group-hover:grayscale-0"></div>
              <div className="absolute bottom-6 left-6 z-20 flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <p className="font-mono text-slate-300 text-sm tracking-widest uppercase">Monochromatic</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-[#121215] border border-white/5 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl transition-opacity duration-700 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center text-accent/50 group-hover:text-accent group-hover:border-accent transition-all duration-300">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                 </div>
              </div>
              <div className="absolute bottom-6 left-6 z-20 flex gap-3 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <p className="font-mono text-slate-300 text-sm tracking-widest uppercase">Composition</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-gradient-to-br from-[#121215] to-[#0c0c0f] border border-white/5 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl p-8 sm:p-12 flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542382257-80dedb722d88?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="relative z-20 flex flex-col gap-4">
                <p className="font-sans font-bold text-white text-3xl">Engineering with Taste</p>
                <div className="w-12 h-[2px] bg-accent"></div>
                <p className="font-sans text-slate-300 text-lg max-w-xl leading-relaxed mt-2 group-hover:text-white transition-colors duration-300">
                  It's not enough for backend systems to be fast. If the visual layer lacks taste, the product loses credibility instantly. I actively shoot photography to train my eye for UI/UX composition, lighting, and framing. Code without design is invisible.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* The Entrepreneurial Engine */}
        <motion.section variants={fadeUp} className="flex flex-col gap-8 pb-12">
           <div className="flex justify-between items-end border-b border-white/5 pb-4">
            <h2 className="text-3xl font-mono text-white">The Entrepreneurial Matrix</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="border border-white/5 bg-white/[0.02] p-8 sm:p-10 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-[100px] group-hover:bg-purple-500/20 transition-all duration-700"></div>
               <h3 className="font-mono text-2xl text-white">Micro-SaaS Philosophy</h3>
               <p className="text-slate-400 leading-relaxed font-sans text-lg mt-2">
                 I do not believe in spending 6 months building in stealth. I build, I ship, and I test the market instantly. <span className="text-white">RepoReady</span> is concrete proof of this execution pipeline—finding a real developer pain point, shipping a landing page, and deploying an automated solution before most competitors finish their figma files.
               </p>
             </div>

             <div className="border border-white/5 bg-white/[0.02] p-8 sm:p-10 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
               <h3 className="font-mono text-2xl text-white">Backend First, Always</h3>
               <p className="text-slate-400 leading-relaxed font-sans text-lg mt-2">
                 Beautiful frontends without powerful infrastructure are hollow. My goal as a founder and systems engineer is to optimize raw data pipelines, deterministic observability, and concurrent traffic flow so the UI actually performs exactly as promised.
               </p>
             </div>
           </div>
        </motion.section>

        {/* The Graveyard (Scrapped Projects) */}
        <motion.section variants={fadeUp} className="flex flex-col gap-8 pb-12 border-t border-white/5 pt-12">
           <div className="flex justify-between items-end border-b border-light/5 pb-4 border-white/5">
            <h2 className="text-3xl font-mono text-white">The Graveyard</h2>
            <span className="font-mono text-slate-500 text-sm hidden sm:block">Scrapped Code & Failures</span>
           </div>
           
           <div className="grid grid-cols-1 gap-4">
             <div className="border border-red-500/10 bg-red-500/5 p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-start sm:items-center relative overflow-hidden group hover:bg-red-500/10 transition-colors">
               <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 text-red-500 font-mono flex flex-col items-center justify-center rounded shrink-0">
                 <span className="text-xl font-bold">☠</span>
               </div>
               <div className="flex flex-col gap-2 w-full">
                 <div className="flex justify-between items-center w-full">
                   <h3 className="font-mono text-xl text-white line-through decoration-red-500/50">Serverless Auth Wrapper</h3>
                   <span className="text-slate-500 font-mono text-xs">Killed: 2025</span>
                 </div>
                 <p className="text-slate-400 font-sans text-sm">
                   <span className="text-red-400 font-bold">Autopsy:</span> Built a wrapper over Firebase auth for fast API integration. Abandoned after realizing Supabase Edge Functions solved the exact same problem with stronger SQL types. Forced me to deeply learn the Postgres ecosystem.
                 </p>
               </div>
             </div>

             <div className="border border-red-500/10 bg-red-500/5 p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-start sm:items-center relative overflow-hidden group hover:bg-red-500/10 transition-colors">
               <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 text-red-500 font-mono flex flex-col items-center justify-center rounded shrink-0">
                 <span className="text-xl font-bold">☠</span>
               </div>
               <div className="flex flex-col gap-2 w-full">
                 <div className="flex justify-between items-center w-full">
                   <h3 className="font-mono text-xl text-white line-through decoration-red-500/50">Local LLM Chat UI</h3>
                   <span className="text-slate-500 font-mono text-xs">Killed: 2025</span>
                 </div>
                 <p className="text-slate-400 font-sans text-sm">
                   <span className="text-red-400 font-bold">Autopsy:</span> Spent 3 weeks building a highly-animated chat UI. Realized my entire product was just an API wrapper with zero defensible backend moat. Terminated the project and shifted strictly to hard algorithmic execution (the birth of RepoReady).
                 </p>
               </div>
             </div>
           </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
