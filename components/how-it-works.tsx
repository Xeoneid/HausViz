const steps = [
  {
    n: "01",
    title: "Capturamos.",
    body: "Vamos con cámara LiDAR. ~30–45 min en una propiedad de 80 m². Sin instalaciones, sin remarcar paredes.",
  },
  {
    n: "02",
    title: "Procesamos.",
    body: "El modelo 3D se entrena en la nube con Gaussian Splatting. 24–48 hs. Vos no hacés nada.",
  },
  {
    n: "03",
    title: "Pulimos.",
    body: "Limpiamos artefactos, alineamos pisos, recortamos exteriores. El resultado final es lo que se publica.",
  },
  {
    n: "04",
    title: "Publicamos.",
    body: "Te pasamos el link. Embebelo en tu listing, mandalo por WhatsApp, ponelo en el QR del cartel.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
          // proceso
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-14">
          Cómo funciona.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[22px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ n, title, body }) => (
              <div key={n} className="relative flex flex-col gap-4">
                {/* Step number */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent/70 bg-accent/[0.08] border border-accent/20 rounded-md px-2 py-1 shrink-0">
                    {n}
                  </span>
                  <div className="hidden sm:block lg:hidden h-px flex-1 bg-white/[0.08]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
