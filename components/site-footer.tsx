'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { navLinks } from '@/lib/site-data'

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="contacto" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-primary">
              Dr. Daniel Muñoz
            </h3>
            <p className="text-muted-foreground text-pretty">
              Medicina estética con profesionalismo, seguridad y equilibrio.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold">Contacto</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              <li>Santiago - Antofagasta - Calama</li>
              <li>
                <a
                  href="tel:+56912345678"
                  className="transition-colors hover:text-primary"
                >
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@drdanielmunoz.cl"
                  className="transition-colors hover:text-primary"
                >
                  contacto@drdanielmunoz.cl
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold">Newsletter</h4>
            <p className="text-muted-foreground text-pretty">
              Recibe consejos y novedades sobre estética
            </p>
            {subscribed ? (
              <p className="text-primary">¡Gracias por suscribirte!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  required
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Tu email"
                />
                <Button type="submit">Suscribirme</Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          © 2025 Dr. Daniel Muñoz. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
