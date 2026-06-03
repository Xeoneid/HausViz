"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

// TODO: reemplazar con IDs reales de cada propiedad
const TOUR_URL = "https://superspl.at/s?id=8429e5e2&noanim"

const tours = [
  { id: "PROPIEDAD_001", barrio: "Palermo", m2: "78m²", amb: "2 amb" },
  { id: "PROPIEDAD_002", barrio: "Recoleta", m2: "120m²", amb: "3 amb" },
  { id: "PROPIEDAD_003", barrio: "Villa Crespo", m2: "55m²", amb: "1 amb" },
  { id: "PROPIEDAD_004", barrio: "Belgrano", m2: "95m²", amb: "3 amb" },
  { id: "PROPIEDAD_005", barrio: "San Telmo", m2: "60m²", amb: "2 amb" },
  { id: "PROPIEDAD_006", barrio: "Núñez", m2: "140m²", amb: "4 amb" },
]

function TourCard({ tour }: { tour: typeof tours[0] }) {
  const [modalLoaded, setModalLoaded] = useState(false)

  return (
    <Dialog onOpenChange={() => setModalLoaded(false)}>
      <DialogTrigger asChild>
        <div className="group cursor-pointer rounded-xl border border-white/[0.07] bg-white/[0.02] active:scale-[0.98] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-200 overflow-hidden">
          {/* Thumbnail placeholder */}
          <div className="relative aspect-video bg-[#141414] flex flex-col items-center justify-center gap-2 border-b border-white/[0.06]">
            {/* Animated scan lines */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full bg-accent/40"
                  style={{ top: `${(i + 1) * 16}%` }}
                />
              ))}
            </div>

            <div className="relative font-mono text-xs text-white/30 text-center leading-relaxed px-4">
              <span className="block text-accent/60 mb-1">{tour.id}</span>
              <span className="block">{tour.barrio} · {tour.m2} · {tour.amb}</span>
            </div>

            {/* Play button — más grande en mobile para mejor touch target */}
            <div className="relative mt-2 flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-200">
              <Play className="h-5 w-5 sm:h-4 sm:w-4 text-white/50 group-hover:text-accent ml-0.5 transition-colors" />
            </div>
          </div>

          {/* Card footer */}
          <div className="px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white/80">{tour.barrio}</p>
              <p className="font-mono text-xs text-white/30 mt-0.5">
                {tour.m2} · {tour.amb}
              </p>
            </div>
            <span className="font-mono text-xs text-accent/60 bg-accent/[0.07] border border-accent/15 rounded px-2 py-0.5">
              3D
            </span>
          </div>
        </div>
      </DialogTrigger>

      {/* Modal: full-screen en mobile, centered en desktop */}
      <DialogContent className="
        fixed inset-0 w-full h-full max-w-none translate-x-0 translate-y-0 left-0 top-0 rounded-none p-0
        sm:inset-auto sm:left-[50%] sm:top-[50%] sm:w-[95vw] sm:h-auto sm:max-w-5xl
        sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-xl
        flex flex-col
      ">
        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07] shrink-0">
          <span className="font-mono text-xs text-white/40">
            {tour.id} · {tour.barrio} · {tour.m2}
          </span>
        </div>

        {/* iframe: flex-1 en mobile (llena el alto), aspect-video en desktop */}
        <div className="relative flex-1 sm:flex-none sm:aspect-[4/3] md:aspect-video bg-[#0d0d0d]">
          {!modalLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs text-white/25 animate-pulse tracking-widest">
                CARGANDO TOUR...
              </span>
            </div>
          )}
          <iframe
            src={TOUR_URL}
            allow="fullscreen"
            onLoad={() => setModalLoaded(true)}
            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${
              modalLoaded ? "opacity-100" : "opacity-0"
            }`}
            title={`Tour 3D ${tour.id}`}
          />
        </div>

        <div className="px-5 py-2.5 border-t border-white/[0.06] shrink-0">
          <p className="font-mono text-[10px] text-white/25">
            <span className="sm:hidden">tocá para caminar · pellizca para zoom</span>
            <span className="hidden sm:inline">// hacé click en cualquier punto para caminar — WASD también funciona</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ToursGallery() {
  return (
    <section id="tours" className="py-20 sm:py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
          // tours en vivo
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white/90">
            Propiedades disponibles.
          </h2>
          <p className="text-sm text-white/35 font-mono">
            // 6 de ejemplo · datos reales próximamente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
