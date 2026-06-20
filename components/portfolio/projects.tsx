"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight, Github, GitBranch } from "lucide-react"
import { PROJECTS } from "@/lib/portfolio-data"
import { SectionHeader } from "./section-header"

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="featured_work"
          title="Projects that ship & solve real problems."
          description="A selection of products, platforms, and experiments — from hackathons to internships."
          accent="yellow"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const slug = slugify(project.title)
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="nb-block hover-3d-card group relative flex h-full flex-col overflow-hidden rounded-md bg-card"
              >
                {/* Terminal-style header */}
                <div className="flex items-center justify-between border-b-2 border-[var(--nb-ink)] bg-secondary/40 px-4 py-2.5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="term-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="truncate font-mono text-[11px] text-muted-foreground">
                      ~/projects/{slug}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    <GitBranch className="h-3 w-3" />
                    main
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b-2 border-[var(--nb-ink)]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="streak" />

                  {project.featured ? (
                    <span className="nb-block-sm nb-tilt2 nb-fill-pink absolute left-3 top-3 rounded-md px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                      featured
                    </span>
                  ) : null}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="nb-block-sm rounded-md bg-background px-2 py-0.5 font-mono text-[10px] font-medium text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-2 border-t-2 border-[var(--nb-ink)] pt-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="nb-block-sm nb-press inline-flex flex-1 items-center justify-center gap-1.5 rounded-md nb-fill-yellow px-3 py-1.5 text-xs font-bold"
                      >
                        Live Demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                        className="nb-block-sm nb-press inline-flex items-center justify-center gap-1.5 rounded-md bg-background px-3 py-1.5 text-xs font-bold text-foreground"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span className={project.liveUrl ? "sr-only sm:not-sr-only" : ""}>
                          Code
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
