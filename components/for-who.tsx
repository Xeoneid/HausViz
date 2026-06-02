"use client"

import { Building2, User } from "lucide-react"

export function ForWho() {
  return (
    <section className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
          // audiencia
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-10">
          Para quién es esto.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Inmobiliarias */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 overflow-hidden hover:border-white/[0.14] transition-all duration-200">
            {/* Subtle accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/[0.04] blur-2xl pointer-events-none" />

            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] mb-6">
              <Building2 className="h-5 w-5 text-white/50" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Para inmobiliarias y desarrolladoras.
            </h3>
            <p className="text-white/45 leading-relaxed mb-6">
              Diferenciá tu listing en MercadoLibre y ZonaProp. Filtrá visitas no calificadas.
              Cerrá más rápido. Embed directo en tu sitio, sin necesitar a tu dev.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Más clics en tus listings",
                "Menos visitas sin intención real",
                "Branding propio en el viewer",
                "Embed en cualquier plataforma",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/55">
                  <span className="h-1 w-1 rounded-full bg-accent/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Compradores */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 overflow-hidden hover:border-white/[0.14] transition-all duration-200">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-accent/[0.03] blur-2xl pointer-events-none" />

            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] mb-6">
              <User className="h-5 w-5 text-white/50" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Para compradores e inquilinos.
            </h3>
            <p className="text-white/45 leading-relaxed mb-6">
              Caminá 10 propiedades en una tarde sin moverte del living. Volvé a ver la cocina
              las veces que quieras antes de ofertar. Sin presión, sin horarios.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Visitás sin salir de tu casa",
                "Revisás todos los rincones vos",
                "Compartís con quien te interese",
                "Sin horario de atención",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/55">
                  <span className="h-1 w-1 rounded-full bg-accent/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
