"use client"

import { motion } from "motion/react"

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  /** Rotates through yellow/cyan/pink — pass a different index per section
   *  so the page doesn't read as monotone. Defaults to yellow. */
  accent?: "yellow" | "cyan" | "pink"
}

const ACCENT_FILL: Record<NonNullable<Props["accent"]>, string> = {
  yellow: "nb-fill-yellow",
  cyan: "nb-fill-cyan",
  pink: "nb-fill-pink",
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "yellow",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : ""}
    >
      <div
        className={`nb-tilt-2 nb-block-sm inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider ${ACCENT_FILL[accent]}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase tracking-wider text-cyan-400 sm:text-4xl text-balance">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
