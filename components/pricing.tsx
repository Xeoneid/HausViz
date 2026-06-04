"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import BorderGlow from "@/components/border-glow"

const tiers = [
  {
    name: "Tour único",
    price: "$XXX",
    period: "",
    description: "Para probar el formato o publicar una sola propiedad.",
    features: [
      "Una propiedad",
      "Captura + procesamiento",
      "Hosting 12 meses",
      "Link compartible",
      "Soporte por email",
    ],
    cta: "Empezar",
    highlight: false,
  },
  {
    name: "Inmobiliaria",
    price: "$XXX",
    period: "/mes",
    description: "Para equipos que publican propiedades de forma regular.",
    features: [
      "Hasta 5 propiedades nuevas/mes",
      "Branding propio en el viewer",
      "Soporte WhatsApp prioritario",
      "Dashboard de analytics",
      "Embed en tu sitio",
    ],
    cta: "Agendar demo",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Hablemos.",
    period: "",
    description: "Para proyectos a escala o con requerimientos específicos.",
    features: [
      "Edificios enteros",
      "Integración API",
      "White-label completo",
      "Cobertura fuera de AMBA",
      "SLA y contrato",
    ],
    cta: "Contactar",
    highlight: false,
  },
]

export function Pricing() {
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="precios" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
          // precios
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-3">
          Sin letra chica.
        </h2>
        <p className="text-white/40 mb-12 text-sm">
          Los precios se completan antes del lanzamiento. Escribinos para una cotización ahora.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative ${tier.highlight ? "order-first md:order-none" : ""}`}
            >
              {tier.highlight && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-block font-mono text-[10px] text-black bg-accent px-3 py-0.5 rounded-b-md tracking-wide font-semibold">
                    RECOMENDADO
                  </span>
                </div>
              )}

              <BorderGlow
                backgroundColor={tier.highlight ? "#0d1810" : "#111111"}
                borderRadius={16}
                glowColor="152 100 50"
                colors={["#00ff88", "#00cc6a", "#004d29"]}
                glowRadius={55}
                glowIntensity={tier.highlight ? 1.4 : 1.0}
                edgeSensitivity={25}
                coneSpread={22}
                fillOpacity={tier.highlight ? 0.45 : 0.3}
                animated={false}
                className="h-full"
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-white/60 mb-1">{tier.name}</p>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-3xl font-bold text-white">{tier.price}</span>
                      {tier.period && (
                        <span className="text-white/40 text-sm font-mono">{tier.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">{tier.description}</p>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                            tier.highlight ? "text-accent" : "text-white/30"
                          }`}
                        />
                        <span className="text-sm text-white/55">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.highlight ? "primary" : "secondary"}
                    onClick={scrollToContact}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
