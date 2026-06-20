"use client"

import { useState, type FormEvent } from "react"
import { motion } from "motion/react"
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { SectionHeader } from "./section-header"
import { SOCIAL_LINKS } from "@/lib/portfolio-data"

function FloatingField({
  id,
  label,
  type = "text",
  textarea,
  required,
}: {
  id: string
  label: string
  type?: string
  textarea?: boolean
  required?: boolean
}) {
  const baseClasses =
    "nb-block-sm peer w-full rounded-md bg-background px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all placeholder-transparent focus:shadow-[5px_5px_0_0_var(--nb-yellow)]"

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={label}
          required={required}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          required={required}
          className={baseClasses}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-muted-foreground/80 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-brand"
      >
        {label}
      </label>
    </div>
  )
}

export function Contact() {
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
      ; (e.target as HTMLFormElement).reset()
    toast.success("Message sent!", {
      description: "Thanks for reaching out — I’ll get back to you soon.",
    })
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great together."
          description="Got a project, a role, or just want to say hi? Drop a message — I read every one."
          accent="cyan"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="nb-block hover-3d-card relative overflow-hidden rounded-md nb-surface p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">
                Reach out directly.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Open to internships, freelance, hackathon collabs, and
                interesting AI/ML problems.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="nb-block-sm nb-press-sm group flex items-center gap-3 rounded-md bg-background p-3"
                  >
                    <span className="nb-block-sm grid h-9 w-9 place-items-center rounded-md nb-fill-yellow">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        Email
                      </span>
                      <span className="block font-medium">
                        namanvit2028@gmail.com
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="nb-block-sm nb-press-sm group flex items-center gap-3 rounded-md bg-background p-3"
                  >
                    <span className="nb-block-sm grid h-9 w-9 place-items-center rounded-md nb-fill-cyan">
                      <Github className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        GitHub
                      </span>
                      <span className="block font-medium">@Naman1313</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="nb-block-sm nb-press-sm group flex items-center gap-3 rounded-md bg-background p-3"
                  >
                    <span className="nb-block-sm grid h-9 w-9 place-items-center rounded-md nb-fill-pink">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        LinkedIn
                      </span>
                      <span className="block font-medium">in/naman1313</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            onSubmit={onSubmit}
            className="nb-block hover-3d-card relative space-y-4 rounded-md nb-surface p-6 sm:p-8 md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FloatingField id="name" label="Your name" required />
              <FloatingField
                id="email"
                label="Email address"
                type="email"
                required
              />
            </div>
            <FloatingField id="subject" label="Subject" />
            <FloatingField id="message" label="Your message" textarea required />

            <button
              type="submit"
              disabled={submitting}
              className="nb-block nb-press relative inline-flex h-11 w-full items-center justify-center gap-2 rounded-md nb-fill-yellow px-6 text-sm font-bold disabled:opacity-70 sm:w-auto"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {submitting ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
