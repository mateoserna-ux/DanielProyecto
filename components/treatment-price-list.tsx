'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import type { Treatment } from '@/lib/site-data'
import { ReservarButton } from '@/components/reservar-button'
import { ABONO_LABEL } from '@/lib/medilink'

export function TreatmentPriceList({
  treatments,
}: {
  treatments: Treatment[]
}) {
  const [selected, setSelected] = useState<Treatment | null>(null)

  return (
    <>
      <ul className="flex flex-col">
        {treatments.map((treatment, index) => (
          <li key={treatment.name}>
            <button
              type="button"
              onClick={() => setSelected(treatment)}
              className="group flex w-full items-center gap-4 py-4 text-left transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Ver más sobre ${treatment.name}`}
            >
              <ChevronRight className="hidden size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
              <span className="flex-1 text-pretty text-base leading-relaxed">
                {treatment.name}
              </span>
              <span className="shrink-0 font-semibold text-primary">
                {treatment.price}
              </span>
            </button>
            {index < treatments.length - 1 && (
              <div className="border-b border-border" />
            )}
          </li>
        ))}
      </ul>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-lg overflow-hidden p-0">
          {selected && (
            <>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selected.image || '/placeholder.svg'}
                  alt={`Referencia del tratamiento ${selected.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-pretty">
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    {selected.info}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-lg font-semibold text-primary">
                  {selected.price}
                </p>
                <ReservarButton
                  origen="dialog"
                  tratamiento={selected.name}
                  className="w-full"
                >
                  Reservar este tratamiento
                </ReservarButton>
                <p className="text-center text-sm text-muted-foreground">
                  Reservas con {ABONO_LABEL} de abono, se descuenta del total
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
