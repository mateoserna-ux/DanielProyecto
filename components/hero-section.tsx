import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-ink text-ink-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center md:px-6">
        <h1 className="font-serif text-5xl font-bold leading-tight text-balance md:text-7xl">
          Belleza natural, resultados seguros.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-foreground/85 text-pretty md:text-xl">
          Medicina estética avanzada en Santiago, Antofagasta y Calama.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<a href="#contacto" />}>
            Agendar evaluación
          </Button>
          <Button
            size="lg"
            variant="secondary"
            nativeButton={false}
            className="bg-white/10 text-ink-foreground hover:bg-white/20"
            render={<a href="#tratamientos" />}
          >
            Ver tratamientos
          </Button>
        </div>
      </div>
    </section>
  )
}
