'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#inicio"
          className="font-serif text-xl text-primary md:text-2xl"
        >
          Dr. Daniel Muñoz
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-foreground/90 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button nativeButton={false} render={<a href="#contacto" />}>
            Agendar Evaluación
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-white/10 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-foreground/90 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button
            nativeButton={false}
            className="mt-2 w-full"
            render={<a href="#contacto" onClick={() => setOpen(false)} />}
          >
            Agendar Evaluación
          </Button>
        </nav>
      </div>
    </header>
  )
}
