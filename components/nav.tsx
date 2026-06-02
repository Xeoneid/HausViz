"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Tours en vivo", href: "#tours" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

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
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-[15px] font-semibold tracking-tight text-white hover:text-accent transition-colors"
        >
          HausViz
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-sm text-white/55 hover:text-white transition-colors duration-150"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            size="sm"
            onClick={() => handleNav("#contacto")}
            className="font-mono text-xs"
          >
            Agendar demo
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.06] px-4 pb-5">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left py-3 text-sm text-white/60 hover:text-white border-b border-white/[0.04] last:border-0 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("#contacto")}
              className="mt-3 w-full font-mono text-xs"
            >
              Agendar demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
