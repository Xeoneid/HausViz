"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

const propertyTypes = [
  "Departamento",
  "Casa",
  "PH",
  "Local / Oficina",
  "Edificio / Desarrollo",
  "Otro",
]

type FormState = {
  nombre: string
  email: string
  telefono: string
  tipo: string
}

export function ContactFooter() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "",
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: conectar Resend / Loops / Google Form
    console.log("Demo request:", form)
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    setSent(true)
  }

  return (
    <>
      {/* CTA section */}
      <section
        id="contacto"
        className="py-24 px-4 sm:px-6 border-t border-white/[0.06]"
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
            // contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4 text-balance">
            ¿Querés probar antes de contratar?
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            Agendamos una captura de demo sin costo en una de tus propiedades.
            Vos te quedás con el tour, nosotros con el testimonio.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {sent ? (
            <div className="rounded-xl border border-accent/25 bg-accent/[0.05] px-6 py-8 text-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 mb-4">
                <Send className="h-4 w-4 text-accent" />
              </div>
              <p className="font-semibold text-white mb-1">Recibimos tu mensaje.</p>
              <p className="text-sm text-white/45">
                Te contactamos en menos de 24 hs por WhatsApp o email.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder="Nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="h-10 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="h-10 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="telefono"
                  type="tel"
                  placeholder="Teléfono (opcional)"
                  value={form.telefono}
                  onChange={handleChange}
                  className="h-10 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all"
                />
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="h-10 rounded-lg border border-white/[0.1] bg-[#111] px-3.5 text-sm text-white/70 outline-none focus:border-accent/40 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Tipo de propiedad
                  </option>
                  {propertyTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#111]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full mt-1 font-semibold"
              >
                {loading ? (
                  <span className="font-mono text-sm animate-pulse">
                    Enviando...
                  </span>
                ) : (
                  "Agendar demo"
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-mono text-sm font-semibold text-white">
              HausViz
            </span>
            {/* TODO: reemplazar con email real */}
            <a
              href="mailto:hola@hausviz.com"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              hola@hausviz.com
            </a>
          </div>

          {/* Social links — TODO: reemplazar con URLs reales */}
          <div className="flex items-center gap-5">
            {[
              { label: "IG", href: "#" },
              { label: "X", href: "#" },
              { label: "LinkedIn", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-mono text-xs text-white/30 hover:text-white/70 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/[0.04]">
          <p className="font-mono text-[10px] text-white/20 text-center">
            // Hecho con Gaussian Splatting · PlayCanvas Engine · MIT-licensed
            software
          </p>
        </div>
      </footer>
    </>
  )
}
