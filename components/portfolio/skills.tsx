"use client"

import { motion } from "motion/react"
import { SKILL_GROUPS } from "@/lib/portfolio-data"
import { SectionHeader } from "./section-header"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiC,
  SiPhp,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiVite,
} from "react-icons/si"
import { FaJava, FaDatabase } from "react-icons/fa"
import { BiCodeAlt } from "react-icons/bi"
import { VscVscode } from "react-icons/vsc"
import { MdOutlineSecurity, MdDesignServices, MdOutlineSchema, MdOutlineSpeed, MdPeople, MdLightbulbOutline, MdOutlineSync, MdOutlinePsychology } from "react-icons/md"

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase()
  if (s.includes("javascript")) return <SiJavascript className="text-yellow-400" />
  if (s.includes("typescript")) return <SiTypescript className="text-blue-500" />
  if (s.includes("python")) return <SiPython className="text-blue-400" />
  if (s.includes("c++")) return <SiCplusplus className="text-blue-600" />
  if (s === "c") return <SiC className="text-blue-500" />
  if (s.includes("java") && !s.includes("javascript")) return <FaJava className="text-orange-500" />
  if (s.includes("php")) return <SiPhp className="text-indigo-400" />
  if (s.includes("html")) return <SiHtml5 className="text-orange-500" />
  if (s.includes("css") && !s.includes("tailwind")) return <SiCss className="text-blue-500" />
  if (s.includes("sql") && !s.includes("mysql")) return <FaDatabase className="text-blue-400" />

  if (s.includes("react")) return <SiReact className="text-cyan-400" />
  if (s.includes("node")) return <SiNodedotjs className="text-green-500" />
  if (s.includes("express")) return <SiExpress className="text-gray-300" />
  if (s.includes("tailwind")) return <SiTailwindcss className="text-cyan-400" />
  if (s.includes("bootstrap")) return <SiBootstrap className="text-purple-500" />
  if (s.includes("jquery")) return <SiJquery className="text-blue-400" />
  if (s.includes("mongoose")) return <SiMongodb className="text-red-500" />
  if (s.includes("framer")) return <SiFramer className="text-white" />
  if (s.includes("zustand")) return <BiCodeAlt className="text-amber-500" /> 

  if (s.includes("mongo")) return <SiMongodb className="text-green-500" />
  if (s.includes("mysql")) return <SiMysql className="text-blue-400" />

  if (s === "git") return <SiGit className="text-orange-500" />
  if (s === "github") return <SiGithub className="text-white" />
  if (s.includes("postman")) return <SiPostman className="text-orange-400" />
  if (s.includes("vercel")) return <SiVercel className="text-white" />
  if (s.includes("vs code")) return <VscVscode className="text-blue-500" />
  if (s.includes("vite")) return <SiVite className="text-purple-500" />
  if (s.includes("api") || s.includes("rest")) return <MdOutlineSchema className="text-green-400" />
  
  if (s.includes("auth")) return <MdOutlineSecurity className="text-yellow-500" />
  if (s.includes("design")) return <MdDesignServices className="text-purple-400" />
  if (s.includes("schema") || s.includes("validation")) return <MdOutlineSchema className="text-blue-400" />
  if (s.includes("cach")) return <MdOutlineSpeed className="text-orange-400" />

  if (s.includes("leader")) return <MdPeople className="text-indigo-400" />
  if (s.includes("problem")) return <MdLightbulbOutline className="text-yellow-400" />
  if (s.includes("collab")) return <MdOutlineSync className="text-green-400" />
  if (s.includes("adapt")) return <MdOutlinePsychology className="text-pink-400" />

  return <BiCodeAlt className="text-muted-foreground" />
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="stack.json"
          title="The toolkit I build with."
          description="A focused stack across full-stack engineering, intelligent systems, and shipping pixel-perfect interfaces."
          accent="pink"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const accents = ["nb-fill-yellow", "nb-fill-cyan", "nb-fill-pink"] as const
            const accentClass = accents[i % accents.length]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="nb-block hover-3d-card group relative overflow-hidden rounded-md bg-card"
              >
                {/* Header bar — solid accent color, rotates per card */}
                <div className={`flex items-center justify-between border-b-2 border-[var(--nb-ink)] px-4 py-2.5 ${accentClass}`}>
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-7 w-7 place-items-center rounded-md border-2 border-[var(--nb-ink)] bg-background text-foreground">
                      <group.icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                      {group.title.toLowerCase().replace(/\s+/g, "_")}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">
                    {group.title}
                  </h3>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="nb-block-sm nb-press group/item flex items-center gap-2 rounded-md bg-background px-3 py-1.5 text-[13px] font-medium text-foreground"
                      >
                        <span className="text-base transition-transform group-hover/item:scale-110">
                          {getSkillIcon(item)}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
