import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 sm:p-12 md:p-24 selection:bg-accent selection:text-black">
      <div className="max-w-3xl w-full flex flex-col gap-16 mt-8 sm:mt-12">
        {/* Hero Section */}
        <section className="flex flex-col gap-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
            <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase opacity-90">
              System Online // 2nd Year Eng @ Pune
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold tracking-tighter text-white">
            Shriramrajat.
          </h1>
          <h2 className="text-xl sm:text-2xl text-slate-300 font-sans mt-2 font-medium">
            Rejecting the 9-5. Building products with taste.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 font-sans leading-relaxed">
            I don&apos;t want a cubicle. I want to build tools that matter. 
            Currently obsessed with clean code, dark interfaces, and micro-SaaS architecture.
          </p>
        </section>

        {/* Featured Work Spotlight */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-mono text-xl sm:text-2xl text-white">Featured Product</h3>
            <span className="bg-accent/10 border border-accent/20 text-accent font-mono text-xs px-2.5 py-1 rounded">
              Active Project
            </span>
          </div>

          <Link href="/repoready" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 transition-all duration-500 hover:border-accent/40 hover:bg-white/[0.04]">
            {/* Subtle glow background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col gap-5">
              <h4 className="font-mono text-3xl sm:text-4xl text-white group-hover:text-accent transition-colors duration-300">
                RepoReady
              </h4>
              <p className="font-sans text-slate-400 text-lg sm:text-xl leading-relaxed">
                Translating your rough GitHub commits into hard-hitting resume points + engineering credibility scoring.
              </p>
              <div className="flex items-center gap-2 mt-2 text-accent font-mono text-sm opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <span>View Full Case Study</span>
                <span>&rarr;</span>
              </div>
            </div>
          </Link>
        </section>

        {/* Directory Navigation */}
        <section className="flex flex-col gap-6 pt-4">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="font-mono text-lg text-slate-500">Directory</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { path: "/work", number: "01", label: "Case Studies", desc: "RajatBuilds & SentinelStack" },
              { path: "/blog", number: "02", label: "Writing", desc: "Technical MDX Blogs" },
              { path: "/personal", number: "03", label: "Human Side", desc: "Mobile Nature Photography" },
              { path: "/connect", number: "04", label: "Connect", desc: "X, IG, LinkedIn" }
            ].map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className="group flex flex-col gap-2 p-5 rounded-lg border border-white/5 bg-black hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500"></div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">{link.path}</span>
                  <span className="font-mono text-xs text-slate-600 group-hover:text-accent transition-colors">{link.number}</span>
                </div>
                <span className="font-sans text-xs text-slate-500 mt-2">{link.label}</span>
              </Link>
            ))}
          </nav>
        </section>
      </div>
    </main>
  );
}
