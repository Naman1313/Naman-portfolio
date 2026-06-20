"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { GraduationCap, MapPin, Calendar, Code2, Brain, Rocket } from "lucide-react"
import { SectionHeader } from "./section-header"

const HIGHLIGHTS = [
  { icon: Code2, label: "Full-Stack" },
  { icon: Brain, label: "AI / ML" },
  { icon: Rocket, label: "Hackathons" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="About" title="A builder grounded in curiosity." accent="yellow" />

        <div className="mt-14 grid items-center gap-10 md:grid-cols-12">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative md:col-span-5"
          >
            <div className="nb-block hover-3d-card relative aspect-[4/5] overflow-hidden rounded-md nb-surface">
              <Image
                src="/portrait.jpg"
                alt="Portrait of Naman Chaudhary"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              {/* Floating badge */}
              <div className="nb-block-sm nb-tilt-1 absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md nb-surface px-4 py-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Currently
                  </div>
                  <div className="text-sm font-medium">
                    Web Dev · AI/ML · Hackathons
                  </div>
                </div>
                <div className="nb-block-sm grid h-9 w-9 place-items-center rounded-md nb-fill-yellow">
                  <Rocket className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="nb-block hover-3d-card rounded-md nb-surface p-6 sm:p-8">
              <p className="text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
                I&apos;m a Computer Science undergraduate at VIT Bhopal with strong
                foundations in software development, AI/ML, and scalable
                full-stack engineering. I love building high-impact systems
                from MERN applications and blockchain platforms to deep
                learning pipelines.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;ve contributed as a Web Development Intern at Pinnacle Labs, serving as a Co-Lead of Event Management Team at DSA Club VIT Bhopal and as a Technical Core Member for the NULL Chapter VIT Bhopal. My work blends
                clean code, intelligent systems, and real-world problem solving.
              </p>

              <div className="my-6 h-0.5 w-full bg-[var(--nb-ink)] opacity-20" />

              <dl className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 text-brand" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Education
                    </dt>
                    <dd className="text-sm">B.Tech CSE, VIT Bhopal</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 text-brand" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Years
                    </dt>
                    <dd className="text-sm">2024 — 2028</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-brand" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Based in
                    </dt>
                    <dd className="text-sm">Bhopal, India</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {HIGHLIGHTS.map((h) => (
                  <span
                    key={h.label}
                    className="nb-block-sm inline-flex items-center gap-1.5 rounded-md bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    <h.icon className="h-3.5 w-3.5 text-brand" />
                    {h.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
