import { Camera, Video, Compass } from "lucide-react"

const problems = [
  {
    icon: Camera,
    title: "Fotos.",
    body: "Lentes ultra-wide que mienten sobre el tamaño real. Editadas hasta que el monoambiente parece un loft.",
  },
  {
    icon: Video,
    title: "Videos.",
    body: "Recorrido fijo. Mirás lo que el camarógrafo decidió mostrar, no lo que vos querés ver.",
  },
  {
    icon: Compass,
    title: "Tours 360 estáticos.",
    body: "Saltás entre puntos predefinidos. No es caminar, es teleportarte mareado.",
  },
]

export function Problem() {
  return (
    <section className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">
          // el problema
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-12 max-w-lg">
          El problema con cómo se muestran las casas hoy.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {problems.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                <Icon className="h-4 w-4 text-white/50" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-base sm:text-lg font-medium text-white/80 max-w-2xl mx-auto">
            Los splats 3D resuelven los tres.{" "}
            <span className="text-accent">Caminás libre.</span>{" "}
            Lo que ves es lo que hay.
          </p>
        </div>
      </div>
    </section>
  )
}
