"use client"

import { motion } from "motion/react"
import { CERTIFICATES } from "@/lib/portfolio-data"
import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "./section-header"

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Credentials"
            title="Certificates"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="nb-block hover-3d-card flex flex-col overflow-hidden rounded-md nb-surface"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[var(--nb-ink)] bg-white p-4">
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-between p-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-foreground/90">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <p className="nb-block-sm nb-fill-yellow mt-4 inline-block rounded-md px-2 py-0.5 font-mono text-xs font-bold">
                    {cert.date}
                  </p>
                  {cert.id && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      ID: {cert.id}
                    </p>
                  )}
                </div>
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-block-sm nb-press-sm mt-6 inline-flex w-full items-center justify-center rounded-md nb-fill-yellow px-4 py-2.5 text-sm font-bold"
                >
                  VIEW CERTIFICATE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
