"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

function Spark({ x, y }: { x: number; y: number }) {
  const particles = Array.from({ length: 8 })

  return (
    <div
      className="pointer-events-none fixed z-[100] flex items-center justify-center"
      style={{ left: x, top: y }}
    >
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2
        const tx = Math.cos(angle) * 50
        const ty = Math.sin(angle) * 50

        return (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-foreground shadow-[0_0_10px_currentColor]"
            initial={{ x: 0, y: 0, scale: 1.5, opacity: 1 }}
            animate={{ x: tx, y: ty, scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )
      })}
      
      <motion.div
        className="absolute rounded-full border border-foreground"
        initial={{ width: 0, height: 0, opacity: 0.8 }}
        animate={{ width: 80, height: 80, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  )
}

export function DotBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random()
      setSparks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id))
      }, 800)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  const xOffset = windowSize.width ? ((mousePosition.x / windowSize.width) - 0.5) * 30 : 0
  const yOffset = windowSize.height ? ((mousePosition.y / windowSize.height) - 0.5) * 30 : 0

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden">
        {/* Moving dot grid */}
        <motion.div
          className="absolute inset-[-10%] h-[120%] w-[120%]"
          animate={{
            x: xOffset,
            y: yOffset,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{
            backgroundImage: "radial-gradient(circle at center, var(--foreground) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            opacity: 0.25,
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)"
          }}
        />
        
        {/* Interactive spotlight - Made significantly brighter and larger */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--foreground), transparent 40%)`,
            opacity: 0.15,
          }}
        />
      </div>

      {/* Click Sparks Overlay */}
      {sparks.map((spark) => (
        <Spark key={spark.id} x={spark.x} y={spark.y} />
      ))}
    </>
  )
}
