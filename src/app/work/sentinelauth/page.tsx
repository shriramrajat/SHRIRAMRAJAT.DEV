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

export default function SentinelAuthCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-violet-500 selection:text-white overflow-hidden font-sans pb-32">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="fixed -top-1/2 -right-1/2 w-full h-full bg-violet-900/5 blur-[120px] rounded-full pointer-events-none"></div>

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
        <span className="text-violet-400 font-mono text-xs uppercase tracking-widest border border-violet-500/20 bg-violet-500/10 px-3 py-1 rounded-full hidden sm:block">
          Identity & Access Control Tier
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
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse shadow-[0_0_10px_#8b5cf6]"></div>
            <span className="font-mono text-violet-400 text-sm tracking-widest uppercase">System Specs // Case 03</span>
          </motion.div>
          
          <div className="overflow-hidden flex flex-wrap">
            {"SentinelAuth.".split("").map((char, index) => (
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
            {"A centralized, containerized identity microservice isolating security policy, session rotation, and user authorization from the core app runtime.".split(" ").map((word, i) => (
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
              <span className="text-sm font-mono text-violet-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></span> Dockerized
              </span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Stack</span>
              <span className="text-sm font-mono text-white">FastAPI · PostgreSQL · Docker Compose</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">License</span>
              <span className="text-sm font-mono text-white">MIT / Open Source</span>
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
          <div className="absolute top-0 left-0 w-1 h-full bg-violet-500"></div>
          <div className="md:col-span-3 mb-2">
            <h3 className="font-mono text-white text-2xl">Identity Isolation Architecture</h3>
            <p className="font-sans text-slate-400 mt-2 text-lg">
              SentinelAuth abstracts stateful security policies out of downstream microservices:
            </p>
          </div>
          {[
            { id: "01", text: "Decoupled Enforcement: Downstream workers only inspect JWT tokens; user state changes are contained in SentinelAuth." },
            { id: "02", text: "Revocable Sessions: Access tokens die in minutes, while database-backed refresh tokens allow immediate session kills." },
            { id: "03", text: "Visual Administration: Integrated SQLAdmin UI (/admin) allows instant user revocation and log inspections." }
          ].map((rule) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={rule.id} 
              className="flex flex-col gap-3 p-6 bg-black/40 border border-white/5 rounded-xl"
            >
              <span className="font-mono text-violet-400 text-lg">{rule.id}</span>
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
            <h2 className="text-3xl sm:text-4xl font-mono text-white">Microservice Auth Flow</h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-3xl">
              Clients exchange credentials for tokens directly at the microservice boundary. The application environment handles session rotation in the background.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="w-full bg-[#08080a] border border-white/10 rounded-2xl p-8 sm:p-16 flex flex-col items-center relative overflow-hidden">
             
             {/* Client */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-6 py-3 rounded-lg shadow-lg relative z-10 text-sm">
               Client Request (/api/v1/auth/token)
             </div>
             
             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>
             
             {/* Microservice Container */}
             <div className="border-2 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.2)] bg-violet-500/10 font-bold text-white font-mono px-8 py-4 rounded-lg relative z-10 text-center">
                SentinelAuth Container (FastAPI Spine)
             </div>

             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>

             {/* Middleware Group */}
             <div className="border border-violet-500/30 bg-violet-500/5 rounded-xl p-8 w-full max-w-2xl relative flex flex-col gap-3">
                <div className="absolute -top-3 left-6 bg-[#08080a] px-3 text-violet-400 font-mono text-sm border border-violet-500/30 rounded-full">
                  FastAPI Execution Pipeline
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">Rate Limit Middleware</span>
                    <span className="text-slate-500 mt-1">Token Bucket: 100 req/min (1.6 RPS)</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">OAuth2 Security Flow</span>
                    <span className="text-slate-500 mt-1">Resource Owner Password Grant</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">Bcrypt Salted Hash Verification</span>
                    <span className="text-slate-500 mt-1">CPU-bound decryption task</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">Async Request Logger</span>
                    <span className="text-slate-500 mt-1">Pushes log record context to DB queue</span>
                  </div>
                </div>
             </div>

             {/* Line Down */}
             <div className="h-8 w-[2px] bg-white/20"></div>

             {/* Database & Storage */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-8 py-4 rounded-lg relative z-10 w-72 text-center text-sm">
               PostgreSQL Database
               <div className="text-[10px] text-slate-400 mt-1">Users · Revocation List · Access Audits</div>
             </div>

             {/* Admin Interface Connection */}
             <div className="w-full max-w-4xl mt-16 border-t border-dashed border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#08080a] px-4 text-xs font-mono text-slate-500">Administrative Boundary</div>
               
               <div className="flex flex-col items-center gap-3 w-full border border-violet-500/20 bg-violet-500/5 p-6 rounded-xl">
                 <span className="text-violet-400 font-mono text-sm">SQLAdmin Dashboard (/admin)</span>
                 <span className="text-slate-400 text-xs text-center leading-relaxed">
                   Visual control plane to inspect users, manage roles (RBAC), and review request history.
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
            
            {/* Session Lifecycles */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-[80px] group-hover:bg-violet-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Smart Token Rotation</h3>
                  <span className="text-violet-400 text-sm font-mono mt-1 block">JWT + Database State</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-violet-500/20 bg-violet-500/10 flex items-center justify-center text-violet-400 font-mono text-xs">TR</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Access tokens are set to expire in 15 minutes. To maintain user sessions without constant password prompts, a refresh token (7-day lifespan) is stored in the database. When the client rotates the access token, the system validates the refresh token against the DB.
              </p>
              <div className="mt-auto pt-6 px-5 py-4 border-l-2 border-violet-500 bg-violet-500/5 rounded text-xs text-violet-200">
                <strong className="block text-violet-400 mb-1">Revocation Capability:</strong>
                Because refresh tokens are database-backed, administrators can instantly revoke active sessions from the dashboard in response to suspected hijacking events.
              </div>
            </motion.div>

            {/* Docker Deployment */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">One-Click Orchestration</h3>
                  <span className="text-blue-400 text-sm font-mono mt-1 block">Docker Compose Spine</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono text-xs">DK</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                To guarantee zero environment setup friction, the entire stack (FastAPI web container, PostgreSQL relational volume, environment injection files) is orchestrated through Docker Compose, isolating development state from system package pollution.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-2 rounded text-slate-300">Dockerfile Builds</span>
                <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-2 rounded text-slate-300">Volume Persistence</span>
              </div>
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
                  <span>⚠️</span> Security & Bottleneck Critique
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  <strong>The OAuth2 Password Flow Anti-Pattern:</strong><br />
                  Although SentinelAuth implements the OAuth2 password grant flow, it is now deprecated in modern production. It exposes the user&apos;s raw credentials directly to the client interface. Modern architectures must migration to Authorization Code with PKCE to bypass client-level credential handling.
                  <br /><br />
                  <strong>Database Write Amplification:</strong><br />
                  Writing observability audits directly to the transactional PostgreSQL engine is a significant throughput vulnerability. Under high concurrent login volume, writing telemetry metrics alongside database session updates causes transaction locking bottlenecks.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-16 pt-10 lg:pt-0">
                <h3 className="font-mono text-3xl text-white">Honest Scalability Path</h3>
                <ul className="text-slate-400 space-y-4 font-mono text-xs leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">[OAuth]</span> 
                    <span>Deprecated Password Flow should be replaced with OAuth2 Authorization Code + PKCE code paths.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[Limit]</span> 
                    <span>The 100 req/min (1.6 RPS) rate limiter is too low; it will choke on rapid web app navigation and fails to defend against real DDoS load (which hits network layers first).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[Telemetry]</span> 
                    <span>Request audit trails should be offloaded to OpenTelemetry hooks, logging to ClickHouse or Loki rather than querying transactional PostgreSQL.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[State]</span> 
                    <span>In-memory rate limit tracking is not distributed. Multiple backend Docker containers running SentinelAuth will fail to sync limits without a shared Redis tier.</span>
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
          <h2 className="text-3xl sm:text-4xl font-mono text-white">Secure and Decoupled?</h2>
          <p className="text-slate-400 max-w-lg text-sm">
            Read the source documentation or return back to the main case studies directory index.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/work" className="font-mono text-white border border-white/20 bg-white/5 px-8 py-3 rounded hover:bg-white/10 transition-colors text-sm">
              Work Directory
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-mono text-black bg-violet-400 px-8 py-3 rounded hover:bg-violet-350 transition-colors font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)] text-sm">
              View Repository &rarr;
            </a>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
