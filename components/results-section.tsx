import Image from 'next/image'
import { Button } from '@/components/ui/button'

const cards = [
  {
    title: 'Ver Galería',
    description: 'Explora nuestros casos de éxito',
    image: '/images/resultado-galeria.png',
    cta: 'Ver más',
    href: '#galeria',
  },
  {
    title: 'Agendar Consulta',
    description: 'Comienza tu transformación hoy',
    image: '/images/resultado-agendar.png',
    cta: 'Reservar ahora',
    href: '#contacto',
  },
]

export function ResultsSection() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="text-center font-serif text-4xl font-bold text-balance md:text-5xl">
          Resultados que hablan por sí mismos
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative flex min-h-80 flex-col items-center justify-center overflow-hidden rounded-lg p-8 text-center"
            >
              <Image
                src={card.image || '/placeholder.svg'}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative flex flex-col items-center gap-4">
                <h3 className="font-serif text-3xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-white/85">{card.description}</p>
                <Button
                  variant="secondary"
                  nativeButton={false}
                  render={<a href={card.href} />}
                >
                  {card.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
