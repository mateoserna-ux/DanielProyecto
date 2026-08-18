'use client'

import { useRef, useState } from 'react'
import { Play, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Reel = {
  id: string
  src: string
  caption?: string
  isUpload: boolean
}

const initialReels: Reel[] = [
  {
    id: 'oriana',
    src: '/videos/reel-oriana.mp4',
    caption: 'Esta visita merece una sola palabra: ¡histórico! Gracias por la confianza @orianagonzalezmarz',
    isUpload: false,
  },
  {
    id: 'confianza',
    src: '/videos/reel-confianza.mp4',
    caption: 'Detrás de cada resultado hay una historia, una conversación y, sobre todo, un acto de confianza.',
    isUpload: false,
  },
  {
    id: 'labios',
    src: '/videos/reel-labios.mp4',
    caption: 'Un diseño de labios puede ser ese detalle sutil que ilumina tu expresión y refresca tu rostro.',
    isUpload: false,
  },
  {
    id: 'toxina',
    src: '/videos/reel-toxina.mp4',
    caption: 'Dosis adecuada, criterio estético. Así se ve la toxina botulínica bien indicada: natural y sin perder expresión.',
    isUpload: false,
  },
]

export function VideosReels() {
  const [reels, setReels] = useState<Reel[]>(initialReels)
  const [playing, setPlaying] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFiles(files: FileList | null) {
    if (!files) return
    const next = Array.from(files)
      .filter((file) => file.type.startsWith('video/'))
      .map((file) => ({
        id: `${file.name}-${crypto.randomUUID()}`,
        src: URL.createObjectURL(file),
        isUpload: true,
      }))
    setReels((prev) => [...prev, ...next])
  }

  function removeReel(id: string) {
    setReels((prev) => {
      const target = prev.find((r) => r.id === id)
      if (target?.isUpload) URL.revokeObjectURL(target.src)
      return prev.filter((r) => r.id !== id)
    })
  }

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="text-center font-serif text-4xl font-bold text-primary text-balance md:text-5xl">
          Historias y Reels
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground text-pretty">
          Historias reales de pacientes que confiaron en el Dr. Daniel Muñoz.
        </p>

        <div className="mt-6 flex justify-center">
          <Button variant="outline" onClick={() => inputRef.current?.click()}>
            <Plus data-icon="inline-start" />
            Agregar video o reel
          </Button>
          <input
            ref={inputRef}
            type="file"
            accept="video/*"
            multiple
            className="hidden"
            onChange={(e) => {
              handleFiles(e.target.files)
              e.target.value = ''
            }}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel) => (
            <div key={reel.id} className="flex flex-col gap-3">
              <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-ink">
                {reel.isUpload || playing === reel.id ? (
                  <video
                    src={reel.src}
                    controls
                    playsInline
                    autoPlay={playing === reel.id}
                    className="size-full object-cover"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(reel.id)}
                    className="relative size-full"
                    aria-label="Reproducir video"
                  >
                    <video
                      src={reel.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="size-full object-cover opacity-90"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-16 items-center justify-center rounded-full bg-white/85 text-ink transition-transform group-hover:scale-110">
                        <Play className="size-7 translate-x-0.5 fill-current" />
                      </span>
                    </span>
                  </button>
                )}

                {reel.isUpload && (
                  <button
                    type="button"
                    onClick={() => removeReel(reel.id)}
                    className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
                    aria-label="Eliminar video"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              {reel.caption && (
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {reel.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
