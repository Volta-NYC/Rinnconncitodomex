"use client"

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react"

/**
 * The site's only motion primitive: fade-and-rise on first entry.
 *
 * Deliberately hand-rolled on IntersectionObserver rather than pulled from an
 * animation library — one transition, one observer, no runtime animation loop.
 *
 * The server renders no `data-shown` attribute at all, and the CSS only hides
 * elements that carry `data-shown="false"`. So without JavaScript the page is
 * fully visible rather than a stack of invisible sections.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode
  as?: ElementType
  /** Stagger in seconds — keep under ~0.3s so a group still reads as one gesture. */
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [state, setState] = useState<"static" | "hidden" | "shown">("static")

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("shown")
      return
    }

    setState("hidden")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown")
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px 18% 0px", threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`reveal ${className}`.trim()}
      data-shown={state === "static" ? undefined : state === "shown"}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
