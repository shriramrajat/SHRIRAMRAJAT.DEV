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

export default function AIResumeAnalyzerCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0c0c0f] selection:bg-emerald-500 selection:text-black overflow-hidden font-sans pb-32">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      <div className="fixed -top-1/2 -right-1/2 w-full h-full bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none"></div>

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
        <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 rounded-full hidden sm:block">
          Explainable Recruitment Platform
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
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
            <span className="font-mono text-emerald-400 text-sm tracking-widest uppercase">System Specs // Case 06</span>
          </motion.div>
          
          <div className="overflow-hidden flex flex-wrap">
            {"ResumeAnalyzer.".split("").map((char, index) => (
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
            {"An recruitment analysis engine that isolates deterministic parsing and ontology skill matching from generative AI copywriting to prevent hallucination in candidate evaluation.".split(" ").map((word, i) => (
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
              <span className="text-sm font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Production-Ready
              </span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Stack</span>
              <span className="text-sm font-mono text-white">FastAPI · React (TypeScript) · PostgreSQL</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">AI Engine</span>
              <span className="text-sm font-mono text-white">OpenAI API (GPT-4o / GPT-3.5)</span>
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
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
          <div className="md:col-span-3 mb-2">
            <h3 className="font-mono text-white text-2xl">Anti-Hallucination Architecture</h3>
            <p className="font-sans text-slate-400 mt-2 text-lg">
              AI Resume Analyzer separates decision logic from language model generation:
            </p>
          </div>
          {[
            { id: "01", text: "Deterministic Extraction: Uses structural regex and heuristics rather than AI text-parsing models to identify skills and tenure lengths." },
            { id: "02", text: "Banned AI Scoring: Restricts matching to a mathematically pure, ontology-bound formula to prevent black-box scoring bias." },
            { id: "03", text: "Open Explanation: Employs generative models solely to copywrite natural explanations of mathematically calculated results." }
          ].map((rule) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={rule.id} 
              className="flex flex-col gap-3 p-6 bg-black/40 border border-white/5 rounded-xl"
            >
              <span className="font-mono text-emerald-400 text-lg">{rule.id}</span>
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
            <h2 className="text-3xl sm:text-4xl font-mono text-white">Pipeline Execution Flow</h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-3xl">
              Candidates submit resumes as PDF documents. The file is split into parsing, mathematical scoring, and copywriting tasks to block hallucinations from affecting candidate assessment.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="w-full bg-[#08080a] border border-white/10 rounded-2xl p-8 sm:p-16 flex flex-col items-center relative overflow-hidden">
             
             {/* PDF Upload */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-6 py-3 rounded-lg shadow-lg relative z-10 text-sm">
               Resume PDF Document (File Upload)
             </div>
             
             {/* Line Down */}
             <div className="h-6 w-[2px] bg-white/20"></div>
             
             {/* PDF Plumber */}
             <div className="border border-white/10 bg-black p-4 rounded text-slate-300 font-mono text-xs text-center w-64 relative z-10">
               pdfplumber Text Extraction
               <div className="text-[9px] text-slate-500 mt-0.5">Extracts character strings & layouts</div>
             </div>

             {/* Line Down */}
             <div className="h-6 w-[2px] bg-white/20"></div>

             {/* Rule-Based Parser */}
             <div className="border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-emerald-500/10 font-bold text-white font-mono px-8 py-3 rounded-lg relative z-10 text-center text-sm w-72">
                Heuristic Segmenter (Regex)
                <div className="text-[10px] text-slate-400 font-normal mt-0.5">Isolates Skills, Education, & Experience</div>
             </div>

             {/* Line Down */}
             <div className="h-6 w-[2px] bg-white/20"></div>

             {/* Ontology and Math */}
             <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-xl p-8 w-full max-w-2xl relative flex flex-col gap-4">
                <div className="absolute -top-3 left-6 bg-[#08080a] px-3 text-emerald-400 font-mono text-sm border border-emerald-500/30 rounded-full">
                  Deterministic Scoring Engine (No AI)
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">Ontology Matcher</span>
                    <span className="text-slate-500 mt-1">Cross-references terms against strictly defined SkillsMaster database</span>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded text-slate-300 font-mono text-xs flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-white">Weighted Formula Scoring</span>
                    <span className="text-slate-500 mt-1">Score = (Skill Match * 70%) + (Experience Match * 30%)</span>
                  </div>
                </div>
             </div>

             {/* Line Down */}
             <div className="h-6 w-[2px] bg-white/20"></div>

             {/* OpenAI Explanation Box */}
             <div className="border border-violet-500/30 bg-violet-500/5 rounded-xl p-6 w-full max-w-md relative flex flex-col items-center gap-2">
                <div className="absolute -top-3 left-6 bg-[#08080a] px-3 text-violet-400 font-mono text-xs border border-violet-500/30 rounded-full">
                  AI Translation Layer
                </div>
                <span className="text-white font-mono text-xs font-bold">OpenAI GPT-4o Engine</span>
                <span className="text-slate-400 text-[10px] text-center">
                  Takes math report data & skill mismatches. Generates human-readable feedback. Banned from recalculating scores.
                </span>
             </div>

             {/* Line Down */}
             <div className="h-6 w-[2px] bg-white/20"></div>

             {/* Recruiter Interface */}
             <div className="border border-white/20 bg-white/5 text-white font-mono px-8 py-3 rounded-lg relative z-10 w-64 text-center text-xs">
               Recruiter Web UI (React)
               <div className="text-[9px] text-slate-400 mt-0.5">Displays scores, metrics, & AI reports</div>
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
            
            {/* Decoupled Scoring */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Ontology-Bound Match</h3>
                  <span className="text-emerald-400 text-sm font-mono mt-1 block">SkillsMaster Database Checks</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono text-xs">OM</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                If candidate skills are parsed using raw LLM extraction, they are prone to semantic drift and fictitious languages. AI Resume Analyzer extracts candidate skills and checks them against a relational ontology master store. Unregistered skill terminology defaults to a strict verification checklist rather than allowing AI models to declare matches, guaranteeing data reproducibility.
              </p>
            </motion.div>

            {/* Explainable AI */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 border border-white/5 bg-black/40 p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-[80px] group-hover:bg-violet-500/20 transition-colors duration-700"></div>
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-mono text-white">Explainability Separation</h3>
                  <span className="text-violet-400 text-sm font-mono mt-1 block">AI as a Translator Only</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-violet-500/20 bg-violet-500/10 flex items-center justify-center text-violet-400 font-mono text-xs">XS</div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Generative AI excels at communication but fails at math and logical consistency. The system isolates GPT-4o entirely from user evaluations. The backend computes the numeric match vector (0 to 100) using a strict mathematical formula. The AI is fed this numeric report along with the matching ontology list, acting solely as a copywriter to explain the mathematical outcomes in human terms.
              </p>
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
                  <span>⚠️</span> Parsing & Evaluation Critique
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  <strong>The Fragility of Regex PDF Parsing:</strong><br />
                  While avoiding AI during parsing is meant to increase predictability, using simple regex and heuristics (via `pdfplumber`) to parse highly variable visual documents is incredibly fragile. Candidates using multi-column layouts, custom icons, styled tables, or section headers will break your heuristics, leading to missing sections and skipped experience blocks.
                  <br /><br />
                  <strong>The "Eloquent Lie" UI Risk:</strong><br />
                  Using an LLM to generate candidate reports based on mathematical outputs creates a significant blind spot. If your regex parser misses a developer&apos;s React experience, your math engine scores it as a 0. The LLM will then generate a highly fluent, professional description explaining why the candidate lacks React experience, masking the parsing bug behind a facade of artificial eloquence.
                  <br /><br />
                  <strong>Brittle Linear Formula Scoring:</strong><br />
                  Evaluating human careers using a static linear equation (`70% skills / 30% experience years`) is too rigid. It ignores project complexity, team leadership, soft skills, and career growth trajectories, resulting in high false-rejection rates.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-16 pt-10 lg:pt-0">
                <h3 className="font-mono text-3xl text-white">Honest Scalability Path</h3>
                <ul className="text-slate-400 space-y-4 font-mono text-xs leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">[Parsing]</span> 
                    <span>Heuristic parsing must be replaced with layout-aware document models (e.g. LayoutLM or semantic extraction pipelines) to reliably handle double-column and table layouts.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[Ontology]</span> 
                    <span>The static keyword ontology checks will miss synonyms and variant spellings (e.g. &quot;ReactJS&quot; vs &quot;React&quot;). The system should transition to dense vector embeddings (e.g. pgvector) for semantic matching.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-400 shrink-0">[Scoring]</span> 
                    <span>Formulaic scoring should support adjustable recruiter weights and machine learning ranking criteria to allow human-in-the-loop flexibility instead of a rigid linear score.</span>
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
          <h2 className="text-3xl sm:text-4xl font-mono text-white">Parse and explain?</h2>
          <p className="text-slate-400 max-w-lg text-sm">
            Read the source documentation or return back to the main case studies directory index.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/work" className="font-mono text-white border border-white/20 bg-white/5 px-8 py-3 rounded hover:bg-white/10 transition-colors text-sm">
              Work Directory
            </Link>
            <a href="https://github.com/shriramrajat/Ai-Resume-Analyzer" target="_blank" rel="noopener noreferrer" className="font-mono text-black bg-emerald-400 px-8 py-3 rounded hover:bg-emerald-350 transition-colors font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] text-sm">
              View Repository &rarr;
            </a>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
