import Link from "next/link";
import React from "react";
import { getAllPosts } from "@/lib/mdx";

export default function BlogDirectory() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-hidden font-sans pb-32">
      
      {/* Background Noise with Accent Trace */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="fixed -top-1/2 -left-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
      <nav className="w-full flex justify-between items-center px-6 sm:px-12 py-6 border-b border-white/5 relative z-20 backdrop-blur-md bg-black/70 sticky top-0">
        <Link href="/" className="font-mono text-white/50 hover:text-white transition-colors text-sm group flex items-center gap-2">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">&larr;</span> Root
        </Link>
        <span className="text-slate-400 font-mono text-xs uppercase tracking-widest border border-slate-500/20 bg-slate-500/10 px-3 py-1 rounded-full hidden sm:block">
          Engineering Logs
        </span>
      </nav>

      <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10 flex flex-col gap-12">
        <header className="flex flex-col gap-6">
          <h1 className="text-5xl sm:text-7xl font-mono font-bold text-white tracking-tighter">
            Logs.
          </h1>
          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
            Raw documentation of performance experiments, bottlenecks, and system architecture logic. No fluff. 
          </p>
        </header>

        <section className="flex flex-col gap-6 mt-8">
          {posts.length === 0 ? (
            <div className="border border-white/10 bg-black/40 text-slate-400 font-mono text-sm p-6 rounded-xl">
              [SYSTEM] No engineering logs detected.
            </div>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group relative border border-white/10 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-accent/50 transition-colors duration-500 p-6 sm:p-10 flex flex-col gap-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="text-2xl font-mono text-white group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h2>
                    <span className="text-xs font-mono text-slate-500 shrink-0 mt-2 bg-white/5 px-2 py-1 rounded border border-white/10">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 font-sans text-base leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                  
                  <div className="text-xs font-mono text-accent opacity-70 group-hover:opacity-100 mt-2 flex items-center gap-2 transition-all group-hover:translate-x-1">
                    Read Log &rarr;
                  </div>
                </article>
              </Link>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
