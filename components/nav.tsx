"use client"

import { useState, useEffect } from "react"
import PillNav from "@/components/pill-nav"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Tours en vivo",  href: "#tours"        },
  { label: "Precios",        href: "#precios"       },
  { label: "FAQ",            href: "#faq"           },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <PillNav
          logoAlt="HausViz"
          items={NAV_ITEMS}
          baseColor="#161616"
          pillColor="#242424"
          pillTextColor="rgba(255,255,255,0.5)"
          hoveredPillTextColor="#00ff88"
          ease="power3.out"
          initialLoadAnimation={false}
        />

        {/* Desktop CTA — on mobile the PillNav hamburger handles navigation */}
        <Button
          size="sm"
          onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
          className="hidden md:flex font-mono text-xs shrink-0"
        >
          Agendar demo
        </Button>
      </div>
    </header>
  )
}
