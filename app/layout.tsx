import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HausViz — Tours 3D fotorrealistas para propiedades",
  description:
    "Caminá la propiedad antes de ir a verla. Tours 3D con Gaussian Splatting que corren en tu navegador. Sin apps, sin VR, sin panorámicas pixeladas.",
  openGraph: {
    title: "HausViz — Tours 3D fotorrealistas para propiedades",
    description:
      "Caminá la propiedad antes de ir a verla. Tours 3D fotorrealistas en WebGL2.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0a0a] min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
