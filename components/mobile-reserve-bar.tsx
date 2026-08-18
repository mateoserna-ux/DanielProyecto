'use client'

import { useEffect, useState } from 'react'
import { ReservarButton } from '@/components/reservar-button'

/**
 * Botón de reserva fijo en la parte inferior en móvil (requisito UX).
 * Aparece tras scrollear más allá del hero para no competir con el CTA
 * de la primera pantalla. Solo visible en pantallas < md.
 */
export function MobileReserveBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-ink/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <ReservarButton origen="sticky" className="w-full">
        Reservar mi consulta
      </ReservarButton>
    </div>
  )
}
