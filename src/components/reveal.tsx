"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      // Fire as soon as any sliver enters, with generous bottom margin, so tall
      // sections are never caught mid-fade and read as blank while scrolling.
      viewport={{ once: true, amount: 0, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.18), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
