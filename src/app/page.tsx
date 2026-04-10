import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-x-hidden">
      {/* Right Side Image Space */}
      <div className="fixed md:absolute right-0 bottom-0 w-full md:w-[45%] h-[50vh] md:h-screen pointer-events-none z-0">
        {/* Soft gradient text-fade on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/80 to-transparent md:bg-gradient-to-l md:from-transparent md:via-[#0c0c0f]/80 md:to-[#0c0c0f] z-10 pointer-events-none"></div>
        
        {/* The visual image placeholder */}
        <div className="absolute right-0 bottom-0 w-full h-[100%] md:h-[85%] flex items-end justify-center md:border-l md:border-white/5 bg-white/[0.01] overflow-hidden">
          {/* Temporary placeholder background. Replace with your actual picture! */}
          <div className="w-full h-full bg-zinc-900 absolute inset-0 opacity-20"></div>
          
          <div className="relative z-20 mb-8 md:mb-16 flex flex-col items-center">
            <span className="animate-pulse bg-black/50 backdrop-blur-md border border-accent/20 text-accent font-mono text-xs px-4 py-2 rounded-full">
              ["Your Portrait Image Here"]
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full flex min-h-screen">
        {/* Left Aligned Content Column */}
        {/* Adjusted pl to match your yellow line, increased width to 65% so the grid fits */}
        <div className="w-full md:w-[65%] lg:w-[65%] flex flex-col justify-center px-6 sm:px-12 md:pl-20 lg:pl-[12%] md:pr-12 py-16 sm:py-24">
          {/* Restored breadth to max-w-3xl */}
          <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-3xl">
            
            {/* Hero Section */}
            <section className="flex flex-col gap-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00ff88]"></div>
                <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase opacity-90">
                  System Online // 2nd Year Eng @ Pune
                </p>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tighter text-white">
                Shriramrajat.
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-300 font-sans mt-2 font-medium">
                Rejecting the 9-5. Building products with taste.
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mt-4 font-sans leading-relaxed max-w-2xl">
                I don&apos;t want a cubicle. I want to build tools that matter. 
                Currently obsessed with clean code, dark interfaces, and micro-SaaS architecture.
              </p>
            </section>

            {/* Featured Work Spotlight */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-mono text-xl text-white">Featured Product</h3>
                <span className="bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded">
                  Active Project
                </span>
              </div>

              <Link href="/repoready" className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-accent/40 hover:bg-black/60">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                
                <div className="relative z-10 flex flex-col gap-4">
                  <h4 className="font-mono text-2xl sm:text-3xl text-white group-hover:text-accent transition-colors duration-300">
                    RepoReady
                  </h4>
                  <p className="font-sans text-slate-400 text-base sm:text-lg leading-relaxed">
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
            <section className="flex flex-col gap-6 pt-2">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="font-mono text-lg text-slate-500">Directory</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
              {/* Restored 4 columns and text size */}
              <nav className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { path: "/work", number: "01", label: "Case Studies" },
                  { path: "/blog", number: "02", label: "Writing" },
                  { path: "/personal", number: "03", label: "Human Side" },
                  { path: "/connect", number: "04", label: "Connect" }
                ].map((link) => (
                  <Link 
                    key={link.path} 
                    href={link.path} 
                    className="group flex flex-col gap-2 p-5 rounded-lg border border-white/5 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500"></div>
                    <div className="flex justify-between items-center w-full">
                      <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">{link.path}</span>
                      <span className="font-mono text-[10px] sm:text-xs text-slate-600 group-hover:text-accent transition-colors">{link.number}</span>
                    </div>
                    {/* Reverted descriptive text addition to prevent grid squeezing */}
                    <span className="font-sans text-xs text-slate-500 mt-2">{link.label}</span>
                  </Link>
                ))}
              </nav>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

