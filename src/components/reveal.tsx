"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, type ReactNode } from "react"

/**
 * Scroll reveal for below-the-fold content.
 *
 * Uses `useInView` + an explicit `animate` target rather than `whileInView`,
 * which was leaving elements stranded at opacity 0 when they were already on
 * screen at mount. Anything above the fold should use a CSS mount animation
 * instead of this component — see the hero in globals.css.
 */
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
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0 })

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.18), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
