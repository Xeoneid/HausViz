"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, MousePointer2, Hand } from "lucide-react"

export function Hero() {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const scrollToTours = () => {
    document.querySelector("#tours")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6">
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
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-accent/80 tracking-wide">
            3D Gaussian Splatting · WebGL2
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.08] mb-4 max-w-4xl">
          Caminá la propiedad
          <br />
          <span className="text-accent">antes de ir a verla.</span>
        </h1>

        {/* Subhead */}
        <p className="text-[15px] sm:text-lg md:text-xl text-white/50 max-w-2xl mb-7 leading-relaxed">
          Tours 3D fotorrealistas que corren en tu navegador.
          <br className="hidden sm:block" />
          Cero apps, cero VR, cero panorámicas pixeladas.
        </p>

        {/* CTAs — full-width stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="font-semibold w-full sm:w-auto"
          >
            Agendar demo
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToTours}
            className="gap-2 w-full sm:w-auto"
          >
            Ver tours en vivo
            <ArrowDown className="h-4 w-4 opacity-60" />
          </Button>
        </div>

        {/* IFRAME — hero principal */}
        <div className="relative w-full max-w-6xl mx-auto group">
          {/* Glow ring */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Responsive aspect ratio wrapper:
              mobile portrait → 4:3 (mucho más alto, el tour se ve bien)
              tablet/desktop  → 16:9 */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden">
            {/* Loading skeleton */}
            {!iframeLoaded && (
              <div className="absolute inset-0 bg-[#111] flex items-center justify-center z-10">
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
              className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${
                iframeLoaded ? "opacity-100" : "opacity-0"
              }`}
              title="Tour 3D de ejemplo — HausViz"
            />
          </div>
        </div>

        {/* Helper text — diferenciado por dispositivo */}
        <div className="mt-3 flex items-center justify-center gap-4">
          <p className="flex items-center gap-1.5 font-mono text-[11px] text-white/25 sm:hidden">
            <Hand className="h-3 w-3" />
            tocá para caminar
          </p>
          <p className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-white/25">
            <MousePointer2 className="h-3 w-3" />
            // hacé click en cualquier punto para caminar hacia ahí — o usá WASD
          </p>
        </div>
      </div>
    </section>
  )
}
