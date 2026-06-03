"use client"

// Adapted from React Bits PillNav for Next.js
// Changes vs original:
//  - "use client" directive (required for App Router hooks)
//  - react-router-dom Link → next/link
//  - logo prop is optional; falls back to logoAlt text
//  - Mobile dropdown uses position:fixed top-16 so it clears the fixed header
//  - Hamburger lines use pillTextColor (visible on dark bg)
//  - handleLogoLeave added for clean GSAP reset
//  - Default ease updated to GSAP v3 syntax (power3.out)
//  - Outer div is relative (positioning delegated to the parent nav wrapper)

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

export type PillNavItem = {
  label: string
  href: string
  ariaLabel?: string
}

export interface PillNavProps {
  logo?: string
  logoAlt?: string
  items: PillNavItem[]
  activeHref?: string
  className?: string
  ease?: string
  baseColor?: string
  pillColor?: string
  hoveredPillTextColor?: string
  pillTextColor?: string
  onMobileMenuClick?: () => void
  initialLoadAnimation?: boolean
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.out',
  baseColor = '#111',
  pillColor = '#1e1e1e',
  hoveredPillTextColor = '#fff',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = false,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([])
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([])
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([])
  const logoElRef = useRef<HTMLElement | null>(null)
  const logoTweenRef = useRef<gsap.core.Tween | null>(null)
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const navItemsRef = useRef<HTMLDivElement | null>(null)
  const logoAnchorRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return

        const pill = circle.parentElement as HTMLElement
        const rect = pill.getBoundingClientRect()
        const { width: w, height: h } = rect
        const R = ((w * w) / 4 + h * h) / (2 * h)
        const D = Math.ceil(2 * R) + 2
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
        const originY = D - delta

        circle.style.width = `${D}px`
        circle.style.height = `${D}px`
        circle.style.bottom = `-${delta}px`

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        })

        const label = pill.querySelector<HTMLElement>('.pill-label')
        const hoverLabel = pill.querySelector<HTMLElement>('.pill-label-hover')

        if (label) gsap.set(label, { y: 0 })
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 })

        const index = circleRefs.current.indexOf(circle)
        if (index === -1) return

        tlRefs.current[index]?.kill()
        const tl = gsap.timeline({ paused: true })

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0)
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0)
        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0)
        }

        tlRefs.current[index] = tl
      })
    }

    layout()
    window.addEventListener('resize', layout)
    document.fonts?.ready.then(layout).catch(() => {})

    const menu = mobileMenuRef.current
    if (menu) gsap.set(menu, { visibility: 'hidden', opacity: 0 })

    if (initialLoadAnimation) {
      const anchor = logoAnchorRef.current
      const navItems = navItemsRef.current
      if (anchor) {
        gsap.set(anchor, { scale: 0 })
        gsap.to(anchor, { scale: 1, duration: 0.6, ease })
      }
      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' })
        gsap.to(navItems, { width: 'auto', duration: 0.6, ease })
      }
    }

    return () => window.removeEventListener('resize', layout)
  }, [items, ease, initialLoadAnimation])

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: 'auto' })
  }

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: 'auto' })
  }

  const handleLogoEnter = () => {
    const el = logoElRef.current
    if (!el) return
    logoTweenRef.current?.kill()
    if (logo) {
      gsap.set(el, { rotate: 0 })
      logoTweenRef.current = gsap.to(el, { rotate: 360, duration: 0.25, ease, overwrite: 'auto' })
    } else {
      logoTweenRef.current = gsap.to(el, { scale: 1.06, duration: 0.15, ease })
    }
  }

  const handleLogoLeave = () => {
    const el = logoElRef.current
    if (!el) return
    logoTweenRef.current?.kill()
    logoTweenRef.current = gsap.to(el, { scale: 1, rotate: 0, duration: 0.2, ease })
  }

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen
    setIsMobileMenuOpen(next)

    const hamburger = hamburgerRef.current
    const menu = mobileMenuRef.current

    if (hamburger) {
      const [l1, l2] = Array.from(hamburger.querySelectorAll('.hamburger-line'))
      if (next) {
        gsap.to(l1, { rotation: 45, y: 3.5, duration: 0.3, ease })
        gsap.to(l2, { rotation: -45, y: -3.5, duration: 0.3, ease })
      } else {
        gsap.to(l1, { rotation: 0, y: 0, duration: 0.3, ease })
        gsap.to(l2, { rotation: 0, y: 0, duration: 0.3, ease })
      }
    }

    if (menu) {
      if (next) {
        gsap.set(menu, { visibility: 'visible' })
        gsap.fromTo(menu, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.25, ease })
      } else {
        gsap.to(menu, {
          opacity: 0, y: -8, duration: 0.18, ease,
          onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
        })
      }
    }

    onMobileMenuClick?.()
  }

  // Hash links and external URLs → plain <a>; internal Next.js routes → <Link>
  const isPlainAnchor = (href: string) =>
    href.startsWith('#') ||
    href.startsWith('http') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '40px',
    '--pill-pad-x': '16px',
    '--pill-gap': '3px',
  } as React.CSSProperties

  const pillClasses =
    'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-medium text-[13px] leading-[0] tracking-[0.1px] whitespace-nowrap cursor-pointer'

  return (
    <div className={`relative flex items-center w-full md:w-auto ${className}`} style={cssVars}>
      <nav className="w-full md:w-max flex items-center justify-between md:justify-start" aria-label="Primary">

        {/* Logo */}
        <a
          href="/"
          ref={logoAnchorRef}
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
          aria-label="Inicio"
          className="rounded-full inline-flex items-center justify-center overflow-hidden shrink-0"
          style={
            logo
              ? { width: 'var(--nav-h)', height: 'var(--nav-h)', background: 'var(--base)' }
              : { height: 'var(--nav-h)', background: 'var(--base)', padding: '0 14px' }
          }
        >
          {logo ? (
            <img
              src={logo}
              alt={logoAlt}
              ref={el => { logoElRef.current = el }}
              className="w-full h-full object-cover block"
            />
          ) : (
            <span
              ref={el => { logoElRef.current = el }}
              className="font-mono text-[14px] font-semibold tracking-tight"
              style={{ color: resolvedPillTextColor }}
            >
              {logoAlt}
            </span>
          )}
        </a>

        {/* Desktop pill list */}
        <div
          ref={navItemsRef}
          className="relative hidden md:flex items-center rounded-full ml-2"
          style={{ height: 'var(--nav-h)', background: 'var(--base)' }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href
              const pillStyle: React.CSSProperties = {
                background: 'var(--pill-bg)',
                color: 'var(--pill-text)',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)',
              }

              const inner = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{ background: 'var(--base)', willChange: 'transform' }}
                    aria-hidden="true"
                    ref={el => { circleRefs.current[i] = el }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span className="pill-label relative z-[2] inline-block leading-[1]" style={{ willChange: 'transform' }}>
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{ color: 'var(--hover-text)', willChange: 'transform, opacity' }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-2.5 h-2.5 rounded-full z-[4]"
                      style={{ background: 'var(--base)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              )

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isPlainAnchor(item.href) ? (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={pillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={pillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {inner}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-[5px] cursor-pointer shrink-0"
          style={{ width: 'var(--nav-h)', height: 'var(--nav-h)', background: 'var(--base)' }}
        >
          <span className="hamburger-line block w-[18px] h-[1.5px] rounded origin-center" style={{ background: resolvedPillTextColor }} />
          <span className="hamburger-line block w-[18px] h-[1.5px] rounded origin-center" style={{ background: resolvedPillTextColor }} />
        </button>
      </nav>

      {/* Mobile dropdown — fixed so it always clears the sticky header */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed top-[64px] left-3 right-3 rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.5)] z-[998] origin-top"
        style={{ background: baseColor, border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <ul className="list-none m-0 p-[5px] flex flex-col gap-[3px]">
          {items.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3.5 px-5 text-[14px] font-medium rounded-[50px] transition-colors duration-150"
                style={{ background: pillColor, color: resolvedPillTextColor }}
                onMouseEnter={e => { e.currentTarget.style.color = hoveredPillTextColor }}
                onMouseLeave={e => { e.currentTarget.style.color = resolvedPillTextColor }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PillNav
