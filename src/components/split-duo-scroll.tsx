"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"

/**
 * The split seam, driven by scroll. As the frame travels up the viewport the
 * divider slides from 34% to 66%, so one culture's duotone gives way to the
 * other. It's the brand thesis as a moving part rather than a static graphic.
 *
 * Falls back to a fixed 50% seam when reduced motion is requested.
 */
export function SplitDuoScroll({
  src,
  alt,
  sizes,
  priority = false,
}: {
  src: string
  alt: string
  sizes: string
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const raw = useTransform(scrollYProgress, [0, 1], [34, 66])
  const eased = useSpring(raw, { stiffness: 80, damping: 22, mass: 0.4 })
  const split = useTransform(eased, (value) => `${value}%`)

  return (
    <motion.div
      ref={ref}
      className="split-duo"
      style={reduce ? undefined : ({ "--split": split } as React.CSSProperties)}
    >
      <div className="duo duo-mex" aria-hidden="true">
        <Image src={src} alt="" fill sizes={sizes} priority={priority} />
      </div>
      <div className="duo duo-dom">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    </motion.div>
  )
}
