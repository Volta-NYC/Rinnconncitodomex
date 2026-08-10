"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { type Locale } from "@/content/business"
import { photoAlt, rinconcitoPhotos } from "@/content/images"

export function InfinitePhotoGallery({ locale }: { locale: Locale }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const cardDistance = () => {
      const card = track.querySelector<HTMLElement>(".gallery-card")
      return card ? card.offsetWidth + 20 : 340
    }

    let half = rinconcitoPhotos.length * cardDistance()
    let currentX = 0
    let targetX = 0
    let hovered = false
    let touching = false
    let passivePausedUntil = 0
    let touchLastX = 0
    let frame = 0

    const pausePassive = (ms = 1400) => {
      passivePausedUntil = Date.now() + ms
      targetX = currentX
    }

    const resize = () => {
      half = rinconcitoPhotos.length * cardDistance()
    }

    const wheel = (event: WheelEvent) => {
      if (!hovered) return
      event.preventDefault()
      pausePassive()
      targetX += event.deltaY * 0.9
    }

    const touchStart = (event: TouchEvent) => {
      touchLastX = event.touches[0]?.clientX ?? 0
      touching = true
      pausePassive()
    }

    const touchMove = (event: TouchEvent) => {
      if (!touching) return
      const x = event.touches[0]?.clientX ?? touchLastX
      pausePassive()
      targetX -= (x - touchLastX) * 1.2
      touchLastX = x
    }

    const touchEnd = () => {
      touching = false
      pausePassive()
    }

    const glide = () => {
      if (!reduceMotion && !hovered && !touching && Date.now() > passivePausedUntil) {
        targetX += 0.38
      }

      currentX += (targetX - currentX) * 0.09

      if (currentX >= half) {
        currentX -= half
        targetX -= half
      }
      if (currentX < 0) {
        currentX += half
        targetX += half
      }

      track.style.transform = `translateX(${-currentX}px)`
      frame = requestAnimationFrame(glide)
    }

    const previous = () => {
      pausePassive(2200)
      targetX -= cardDistance()
    }
    const next = () => {
      pausePassive(2200)
      targetX += cardDistance()
    }

    wrap.addEventListener("mouseenter", () => {
      hovered = true
      pausePassive()
    })
    wrap.addEventListener("mouseleave", () => {
      hovered = false
    })
    wrap.addEventListener("focusin", () => pausePassive(2200))
    wrap.addEventListener("wheel", wheel, { passive: false })
    wrap.addEventListener("touchstart", touchStart, { passive: true })
    wrap.addEventListener("touchmove", touchMove, { passive: true })
    wrap.addEventListener("touchend", touchEnd, { passive: true })
    window.addEventListener("resize", resize, { passive: true })
    wrap.querySelector("[data-gallery-prev]")?.addEventListener("click", previous)
    wrap.querySelector("[data-gallery-next]")?.addEventListener("click", next)

    frame = requestAnimationFrame(glide)

    return () => {
      cancelAnimationFrame(frame)
      wrap.removeEventListener("wheel", wheel)
      wrap.removeEventListener("touchstart", touchStart)
      wrap.removeEventListener("touchmove", touchMove)
      wrap.removeEventListener("touchend", touchEnd)
      window.removeEventListener("resize", resize)
      wrap.querySelector("[data-gallery-prev]")?.removeEventListener("click", previous)
      wrap.querySelector("[data-gallery-next]")?.removeEventListener("click", next)
    }
  }, [])

  const title =
    locale === "es" ? "La mesa completa, en movimiento" : "The whole table, in motion"
  const eyebrow = locale === "es" ? "Galería" : "Gallery"
  const previous = locale === "es" ? "Foto anterior" : "Previous photo"
  const next = locale === "es" ? "Foto siguiente" : "Next photo"
  const alt = photoAlt.food[locale]
  const doubled = [...rinconcitoPhotos, ...rinconcitoPhotos]

  return (
    <section className="gallery-section">
      <div className="gallery-sticky" ref={wrapRef}>
        <div className="gallery-header">
          <span className="eyebrow eyebrow-quiet">{eyebrow}</span>
          <h2 className="display-md">{title}</h2>
        </div>

        <div className="gallery-controls" aria-label={locale === "es" ? "Ver fotos" : "Browse photos"}>
          <button className="gallery-control" type="button" aria-label={previous} data-gallery-prev>
            &#8592;
          </button>
          <button className="gallery-control" type="button" aria-label={next} data-gallery-next>
            &#8594;
          </button>
        </div>

        <div className="gallery-track-wrap">
          <div className="gallery-track" ref={trackRef}>
            {doubled.map((photo, index) => (
              <figure
                className="gallery-card"
                key={`${photo.src}-${index}`}
                aria-hidden={index >= rinconcitoPhotos.length}
              >
                <Image
                  src={photo.src}
                  alt={alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 48rem) 280px, 420px"
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
