"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Sparkles, Mail, GitBranch, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiFramer,
  SiExpress,
  SiGit,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { MdOutlinePsychology, MdOutlineSchema } from "react-icons/md"

const STACK = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Python", icon: SiPython, color: "text-blue-400" },
  { name: "Java", icon: FaJava, color: "text-orange-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "AI / ML", icon: MdOutlinePsychology, color: "text-pink-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-foreground" },
  { name: "Express", icon: SiExpress, color: "text-muted-foreground" },
  { name: "REST", icon: MdOutlineSchema, color: "text-green-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Background — flat dotted grid only, no blur orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-60" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="nb-block-sm mb-6 inline-flex items-center gap-2 rounded-md nb-fill-yellow px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span>$</span> available_for: internships and freelance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl"
            >
              Naman <span className="text-gradient">Chaudhary</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              <span className="text-brand">&gt;</span> Full-Stack Developer{" "}
              <span className="text-foreground/40">·</span> AI/ML Enthusiast{" "}
              <span className="text-foreground/40">·</span> Problem Solver
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg"
            >
              I build intelligent systems and seamless digital experiences —
              from MERN platforms and blockchain pipelines to deep learning
              workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="nb-block nb-press group relative h-12 overflow-hidden rounded-md nb-fill-yellow px-6 font-semibold hover:bg-[var(--nb-yellow)]"
              >
                <a href="#projects">
                  <Sparkles className="h-4 w-4" />
                  View Projects
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="nb-block-sm nb-press h-12 rounded-md bg-card px-6 text-foreground hover:bg-card"
              >
                <a href="/cv.pdf" download="Naman_Chaudhary_CV.pdf">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="nb-block-sm nb-press h-12 rounded-md bg-card px-6 text-foreground hover:bg-card"
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Stats / quick facts — tilted sticky notes */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 grid max-w-2xl grid-cols-2 gap-5 md:grid-cols-3"
            >
              {[
                { k: "B.Tech CSE", v: "VIT Bhopal · 2024–28", accent: "nb-fill-yellow", tilt: "nb-tilt-1" },
                { k: "5+", v: "Featured projects", accent: "nb-fill-cyan", tilt: "nb-tilt1" },
                { k: "2", v: "Active roles", accent: "nb-fill-pink", tilt: "nb-tilt-2" },
              ].map((s) => (
                <div
                  key={s.k}
                  className={`nb-block nb-press ${s.accent} ${s.tilt} rounded-md px-4 py-4`}
                >
                  <div className="font-display text-lg font-semibold">
                    {s.k}
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] opacity-80">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: code window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="nb-block hover-3d-card relative overflow-hidden rounded-md nb-surface">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b-2 border-[var(--nb-ink)] bg-secondary px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="term-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    naman.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <GitBranch className="h-3 w-3" />
                  main
                </div>
              </div>

              {/* code body */}
              <pre className="relative overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
                <code className="block">
                  <span className="text-muted-foreground">{"// developer.ts"}</span>
                  {"\n"}
                  <span className="text-brand">const</span>{" "}
                  <span className="text-foreground">dev</span>{" "}
                  <span className="text-muted-foreground">=</span> {"{"}
                  {"\n  "}
                  <span className="text-foreground/90">name</span>:{" "}
                  <span className="text-brand-2">&apos;Naman Chaudhary&apos;</span>,
                  {"\n  "}
                  <span className="text-foreground/90">stack</span>: [
                  <span className="text-brand-2">&apos;MERN&apos;</span>,{" "}
                  <span className="text-brand-2">&apos;AI/ML&apos;</span>],
                  {"\n  "}
                  <span className="text-foreground/90">focus</span>: [
                  <span className="text-brand-2">&apos;DSA&apos;</span>,{" "}
                  <span className="text-brand-2">&apos;System Design&apos;</span>,{" "}
                  <span className="text-brand-2">&apos;DL&apos;</span>],
                  {"\n  "}
                  <span className="text-foreground/90">edu</span>:{" "}
                  <span className="text-brand-2">&apos;VIT Bhopal · CSE&apos;</span>,
                  {"\n  "}
                  <span className="text-foreground/90">coffee</span>:{" "}
                  <span className="text-brand-2">true</span>,
                  {"\n  "}
                  <span className="text-foreground/90">building</span>:{" "}
                  <span className="text-brand-2">&apos;the future&apos;</span>,
                  {"\n"}
                  {"}"}
                  {"\n\n"}
                  <span className="text-muted-foreground">{"// say hi 👋"}</span>
                  {"\n"}
                  <span className="text-foreground">naman</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-brand">connect</span>
                  <span className="text-muted-foreground">()</span>
                  <span className="caret" />
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Tech ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative mt-16 overflow-hidden border-y-2 border-[var(--nb-ink)] py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex w-max animate-marquee gap-10 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {[...STACK, ...STACK].map((t, i) => (
              <span key={`${t.name}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                <t.icon className={`h-4 w-4 ${t.color}`} />
                {t.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono text-[11px] text-muted-foreground"
        >
          ↓ scroll
        </motion.div>
      </div>
    </section>
  )
}
