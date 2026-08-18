'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Reel = {
  id: string
  src: string
  poster?: string
  isUpload: boolean
}

const initialReels: Reel[] = [
  {
    id: 'default-1',
    src: '',
    poster: '/images/reel-thumb.png',
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
          Videos y Reels
        </h2>

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

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] w-full max-w-xs overflow-hidden rounded-lg bg-ink"
            >
              {reel.isUpload || playing === reel.id ? (
                <video
                  src={reel.src}
                  controls
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
                  {reel.poster && (
                    <Image
                      src={reel.poster || '/placeholder.svg'}
                      alt="Miniatura de reel"
                      fill
                      className="object-cover opacity-90"
                      sizes="320px"
                    />
                  )}
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
          ))}
        </div>
      </div>
    </section>
  )
}
