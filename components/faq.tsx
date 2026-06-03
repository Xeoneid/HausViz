import dynamic from "next/dynamic"
import { BentoCardProps } from "@/components/magic-bento"

const MagicBento = dynamic(() => import("@/components/magic-bento"), {
  ssr: false,
  loading: () => null,
})

const faqCards: BentoCardProps[] = [
  {
    color: "#141414",
    label: "Tecnología",
    title: "¿Qué son los Gaussian Splats?",
    description:
      "Millones de elipses gaussianas en lugar de triángulos. Capta reflejos, vidrios y telas con fotorrealismo imposible para los renders poligonales tradicionales.",
  },
  {
    color: "#141414",
    label: "Compatibilidad",
    title: "¿Funciona en el celular?",
    description:
      "iPhone 12+, Android con Chrome actualizado, cualquier browser moderno con WebGL2. Sin apps, sin plugins, sin VR headset.",
  },
  {
    color: "#141414",
    label: "Integración",
    title: "¿Lo puedo embeber en mi sitio o en ZonaProp?",
    description:
      "En tu propio sitio: sí, con un iframe listo para pegar — te damos el código. En ZonaProp y MercadoLibre el embed externo está limitado, pero podés poner el link directo en la descripción o con un QR en las fotos. También funciona desde Instagram y WhatsApp.",
  },
  {
    color: "#141414",
    label: "Tiempo de entrega",
    title: "¿Cuánto tarda el link desde la captura?",
    description:
      "24–48 horas. La sesión de captura en la propiedad dura 30–45 min para un depto de 80 m². El entrenamiento corre en la nube. Te avisamos por WhatsApp cuando el link está listo.",
  },
  {
    color: "#141414",
    label: "Peso",
    title: "¿Cuánto pesa cada tour?",
    description:
      "80–200 MB para un depto de 60–90 m². Streaming progresivo: el tour es usable antes de terminar la descarga completa.",
  },
  {
    color: "#141414",
    label: "Cobertura",
    title: "¿Operan fuera del AMBA?",
    description:
      "Por ahora el equipo está en Buenos Aires. Para otras provincias o LATAM, escribinos igual — lo coordinamos o te conectamos con alguien de la red.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
          // preguntas frecuentes
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-8">FAQ.</h2>

        <MagicBento
          cards={faqCards}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={440}
          particleCount={8}
          glowColor="0, 255, 136"
        />
      </div>
    </section>
  )
}
