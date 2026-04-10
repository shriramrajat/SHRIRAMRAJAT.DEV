import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import React from 'react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-mono text-white mb-6 mt-12 font-bold" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-mono text-slate-200 mb-4 mt-10 font-bold" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-mono text-slate-300 mb-4 mt-8 font-bold" {...props} />,
  p: (props: any) => <p className="text-slate-400 font-sans text-lg leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc text-slate-400 font-sans text-lg mb-6 pl-6 space-y-2 marker:text-accent" {...props} />,
  ol: (props: any) => <ol className="list-decimal text-slate-400 font-sans text-lg mb-6 pl-6 space-y-2" {...props} />,
  strong: (props: any) => <strong className="text-slate-200 font-bold" {...props} />,
  pre: (props: any) => <pre className="bg-[#08080a] border border-white/10 rounded-xl p-6 overflow-x-auto mb-6 text-sm text-slate-300 font-mono shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" {...props} />,
  code: (props: any) => {
    // Basic detection for inline code vs block code
    const isInline = typeof props.children === 'string' && !props.children.includes('\n');
    return isInline ? (
      <code className="bg-white/5 border border-white/10 text-accent font-mono px-1.5 py-0.5 rounded text-sm" {...props} />
    ) : (
      <code className="font-mono text-sm leading-relaxed" {...props} />
    );
  },
  blockquote: (props: any) => <blockquote className="border-l-4 border-accent/50 bg-accent/5 pl-6 py-4 italic text-slate-300 mb-6 rounded-r-lg" {...props} />,
};

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-accent selection:text-black overflow-hidden font-sans pb-32">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <nav className="w-full flex justify-between items-center px-6 sm:px-12 py-6 border-b border-white/5 relative z-20 backdrop-blur-md bg-black/70 sticky top-0">
        <Link href="/blog" className="font-mono text-white/50 hover:text-white transition-colors text-sm group flex items-center gap-2">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">&larr;</span> Back to Logs
        </Link>
        <span className="text-accent font-mono text-xs uppercase tracking-widest border border-accent/20 bg-accent/10 px-3 py-1 rounded-full hidden sm:block">
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </nav>

      <article className="w-full max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10">
        <header className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-4xl sm:text-6xl font-mono font-bold text-white tracking-tighter leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-slate-400 font-sans leading-relaxed">
            {post.summary}
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>
    </main>
  );
}
