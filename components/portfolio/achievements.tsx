"use client"

import { motion } from "motion/react"
import { Award, Trophy, Star, Medal } from "lucide-react"
import { ACHIEVEMENTS } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { SectionHeader } from "./section-header"

export function Achievements() {
  const awards = ACHIEVEMENTS.filter((a) => a.category === "award")

  return (
    <section id="awards" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Awards"
            title="Achievements"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {awards.map((award, i) => {
            let Icon = Award
            if (award.title.includes("Gold")) Icon = Trophy
            else if (award.title.includes("Bronze")) Icon = Medal
            else if (award.title.includes("Topper")) Icon = Star
            else if (award.title.includes("Captain")) Icon = Star

            const accents = ["nb-fill-yellow", "nb-fill-cyan", "nb-fill-pink"] as const
            const accentClass = accents[i % accents.length]

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="nb-block hover-3d-card relative overflow-hidden rounded-md nb-surface p-4 text-left sm:p-6"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={cn(
                      "nb-block-sm flex h-14 w-14 shrink-0 items-center justify-center rounded-md",
                      accentClass
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold leading-tight text-foreground">
                      {award.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
