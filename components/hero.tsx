"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const scrollToTours = () => {
    document.querySelector("#tours")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle radial glow top-center */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.07] blur-3xl bg-accent" />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-accent/80 tracking-wide">
            3D Gaussian Splatting · WebGL2
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.08] mb-5 max-w-4xl">
          Caminá la propiedad
          <br />
          <span className="text-accent">antes de ir a verla.</span>
        </h1>

        {/* Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mb-8 leading-relaxed">
          Tours 3D fotorrealistas que corren en tu navegador.
          <br className="hidden sm:block" />
          Cero apps, cero VR, cero panorámicas pixeladas.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="font-semibold"
          >
            Agendar demo
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToTours}
            className="gap-2"
          >
            Ver tours en vivo
            <ArrowDown className="h-4 w-4 opacity-60" />
          </Button>
        </div>

        {/* IFRAME — hero principal */}
        <div className="relative w-full max-w-6xl mx-auto group">
          {/* Glow ring */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Loading skeleton */}
          {!iframeLoaded && (
            <div className="absolute inset-0 rounded-2xl bg-[#111] flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-pulse" />
                <span className="font-mono text-xs text-white/30 tracking-widest">
                  CARGANDO TOUR 3D...
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          )}

          <iframe
            src="https://superspl.at/s?id=8429e5e2&noanim"
            allow="fullscreen"
            onLoad={() => setIframeLoaded(true)}
            className={`w-full border-0 rounded-2xl transition-opacity duration-500 ${
              iframeLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ aspectRatio: "16/9" }}
            title="Tour 3D de ejemplo — HausViz"
          />
        </div>

        {/* Helper text */}
        <p className="mt-3 font-mono text-[11px] text-white/25 text-center">
          // hacé click en cualquier punto para caminar hacia ahí — o usá WASD
        </p>
      </div>
    </section>
  )
}
