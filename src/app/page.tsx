"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-x-hidden font-sans">
      {/* Right Side Image Space */}
      <div className="fixed md:absolute right-0 bottom-0 w-full md:w-[45%] h-[50vh] md:h-screen pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/80 to-transparent md:bg-gradient-to-l md:from-transparent md:via-[#0c0c0f]/80 md:to-[#0c0c0f] z-10 pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-0 bottom-0 w-full h-[100%] md:h-[85%] flex items-end justify-center md:border-l md:border-white/5 bg-white/[0.01] overflow-hidden"
        >
          <div className="w-full h-full bg-zinc-900 absolute inset-0 opacity-20"></div>
          
          <div className="relative z-20 mb-8 md:mb-16 flex flex-col items-center">
            <span className="animate-pulse bg-black/50 backdrop-blur-md border border-accent/20 text-accent font-mono text-xs px-4 py-2 rounded-full">
              ["Your Portrait Image Here"]
            </span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 w-full flex min-h-screen">
        <div className="w-full md:w-[65%] lg:w-[65%] flex flex-col justify-center px-6 sm:px-12 md:pl-20 lg:pl-[12%] md:pr-12 py-16 sm:py-24">
          <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-3xl">
            
            {/* Hero Section */}
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.1 }
                }
              }}
              className="flex flex-col gap-4"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00ff88]"></div>
                <motion.p 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.03 }
                    }
                  }}
                  className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase opacity-90 flex"
                >
                  {Array.from("System Online // 2nd Year Eng @ Pune").map((char, index) => (
                    <motion.span 
                      key={index} 
                      variants={{
                        hidden: { opacity: 0, display: "none" },
                        visible: { opacity: 1, display: "inline-block" }
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              
              <div className="overflow-hidden pb-2">
                <motion.h1 
                  variants={{
                    hidden: { y: "100%", opacity: 0, rotate: 2 },
                    visible: { y: "0%", opacity: 1, rotate: 0 }
                  }}
                  transition={{ type: "spring", damping: 12, stiffness: 100 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tighter text-white"
                >
                  Shriramrajat.
                </motion.h1>
              </div>

              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xl sm:text-2xl text-slate-300 font-sans mt-2 font-medium"
              >
                I build systems that prove performance — not just functionality.
              </motion.h2>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-400 mt-4 font-sans leading-relaxed max-w-2xl flex flex-col gap-4"
              >
                <p>
                  Currently building real backend experiments to measure, break, and optimize APIs under heavy concurrent load. 
                </p>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg inline-flex flex-col gap-1 w-max">
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">Latest Execution</span>
                  <span className="font-mono text-slate-200">Latency: 979ms &rarr; 2.91ms <span className="text-emerald-400">(-98.5%)</span></span>
                </div>
                
                <div className="flex gap-4 mt-2">
                  <Link href="/work/rajatbuilds" className="text-sm font-mono text-black bg-accent px-5 py-2 rounded hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                    View Case Study
                  </Link>
                  <Link href="#" className="text-sm font-mono text-slate-300 border border-white/20 px-5 py-2 rounded hover:bg-white/10 transition-colors">
                    Try Live System
                  </Link>
                </div>
              </motion.div>
            </motion.section>

            {/* Featured Work Spotlight */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-mono text-xl text-white">Featured Project</h3>
                <span className="bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Active Build
                </span>
              </div>

              <Link href="/work/rajatbuilds">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 sm:p-8 transition-colors duration-500 hover:border-slate-400/40 hover:bg-black/60 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400/0 via-slate-400/10 to-slate-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                  
                  <div className="relative z-10 flex flex-col gap-4">
                    <h4 className="font-mono text-2xl sm:text-3xl text-white group-hover:text-slate-300 transition-colors duration-300">
                      Backend Playground
                    </h4>
                    <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed">
                      Testing 100,000 row data sets against 50 concurrent request loads to visualize bottleneck failure points and O(n) latency exhaustion.
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-slate-400 font-mono text-sm opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <span>View Full Case Study</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.section>

            {/* Directory Navigation */}
            <motion.section 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.5 }
                }
              }}
              className="flex flex-col gap-6 pt-2"
            >
              <div className="flex items-center gap-4 mb-2">
                <h3 className="font-mono text-lg text-slate-500">Directory</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
              <nav className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { path: "/work", number: "01", label: "Case Studies" },
                  { path: "/blog", number: "02", label: "Writing" },
                  { path: "/personal", number: "03", label: "Human Side" },
                  { path: "/connect", number: "04", label: "Connect" }
                ].map((link) => (
                  <Link key={link.path} href={link.path}>
                    <motion.div 
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                      }}
                      whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)", backgroundColor: "rgba(0,0,0,0.6)" }}
                      className="group h-full flex flex-col gap-2 p-5 rounded-lg border border-white/5 bg-black/40 backdrop-blur-sm transition-colors duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500"></div>
                      <div className="flex justify-between items-center w-full">
                        <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">{link.path}</span>
                        <span className="font-mono text-[10px] sm:text-xs text-slate-600 group-hover:text-accent transition-colors">{link.number}</span>
                      </div>
                      <span className="font-sans text-xs text-slate-500 mt-2">{link.label}</span>
                    </motion.div>
                  </Link>
                ))}
              </nav>
            </motion.section>

          </div>
        </div>
      </div>
    </main>
  );
}

