'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { linkParaTratamiento } from '@/lib/medilink'

type Origen = 'hero' | 'sticky' | 'dialog' | 'band' | 'nav'

interface Props {
  /** Nombre del tratamiento si el botón es específico (usa link por servicio). */
  tratamiento?: string
  origen: Origen
  children?: React.ReactNode
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'secondary' | 'outline'
  className?: string
}

/**
 * Botón de reserva: registra la conversión en GA4 (si existe gtag),
 * muestra un micro-estado y navega al agendamiento de Medilink en la
 * misma pestaña. Usa el Button del design system del proyecto.
 */
export function ReservarButton({
  tratamiento,
  origen,
  children = 'Agendar evaluación',
  size = 'lg',
  variant = 'default',
  className,
}: Props) {
  const [saliendo, setSaliendo] = useState(false)

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'click_reservar', {
        tratamiento: tratamiento ?? 'general',
        origen,
      })
    }
    setSaliendo(true)
    setTimeout(() => {
      window.location.href = linkParaTratamiento(tratamiento)
    }, 300)
  }

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleClick}
      disabled={saliendo}
      className={cn(className)}
    >
      {saliendo ? 'Abriendo agenda segura…' : children}
    </Button>
  )
}
