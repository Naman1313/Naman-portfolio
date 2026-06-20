"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import { EXPERIENCES } from "@/lib/portfolio-data"
import { SectionHeader } from "./section-header"

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="My Work Experience."
          description="Roles, internships, and active contributions where I deliver real outcomes."
          accent="cyan"
        />

        <div ref={containerRef} className="relative mt-16 md:mt-24">
          {/* Solid vertical line (background) */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-1 bg-border/50 md:left-1/2 md:-translate-x-1/2"
          />

          {/* Filling vertical line */}
          <motion.div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-1 bg-[var(--nb-ink)] origin-top md:left-1/2 md:-translate-x-1/2 z-0"
            style={{ scaleY }}
          />

          <ol className="space-y-14 md:space-y-20">
            {EXPERIENCES.map((exp, i) => {
              const rightSide = i % 2 === 0
              const accents = ["nb-fill-yellow", "nb-fill-cyan", "nb-fill-pink"] as const
              const accentClass = accents[i % accents.length]
              const tilts = ["nb-tilt-2", "nb-tilt2", "nb-tilt-1"] as const
              const tiltClass = tilts[i % tilts.length]
              return (
                <motion.li
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16"
                >
                  {/* Dot on timeline */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-6 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--nb-ink)] bg-background md:left-1/2"
                  >
                    {exp.active && (
                      <span className="absolute h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                    )}
                    <span className="h-2 w-2 rounded-full bg-[var(--nb-ink)]" />
                  </span>

                  {/* Card Container */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      rightSide ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  >
                    <div className="nb-block hover-3d-card relative block w-full rounded-md nb-surface p-6 text-left sm:p-8">
                      {/* Tilted date badge */}
                      <div
                        className={`nb-block-sm ${accentClass} ${tiltClass} absolute -top-4 left-6 inline-flex items-center gap-1.5 rounded-md px-3 py-1 font-mono text-[11px] font-bold`}
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                        {exp.active && (
                          <span className="nb-block-sm inline-flex items-center gap-1.5 rounded-md bg-background px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
                            </span>
                            Active
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-foreground">
                        {exp.role}
                      </h3>

                      <div className="mt-1 flex items-center gap-2 text-sm font-medium text-foreground/70">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>

                      <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {exp.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3 text-left">
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                            <span className="leading-normal">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
