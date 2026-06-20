"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/portfolio-data"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t-2 border-[var(--nb-ink)]">
      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Naman <span className="text-gradient">Chaudhary</span>
        </a>
        <p className="text-sm text-muted-foreground">
          Built by Naman Chaudhary · © {year} · Designed & developed with
          care.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="nb-block-sm nb-press-sm grid h-9 w-9 place-items-center rounded-md bg-background text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="nb-block-sm nb-press-sm grid h-9 w-9 place-items-center rounded-md bg-background text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={SOCIAL_LINKS.email}
            aria-label="Email"
            className="nb-block-sm nb-press-sm grid h-9 w-9 place-items-center rounded-md bg-background text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
