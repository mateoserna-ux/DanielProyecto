import Image from 'next/image'
import { featuredTreatments } from '@/lib/site-data'

export function FeaturedTreatments() {
  return (
    <section id="galeria" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="text-center font-serif text-4xl font-bold text-balance md:text-5xl">
          Tratamientos destacados
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredTreatments.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-5 text-center font-serif text-2xl font-bold text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
