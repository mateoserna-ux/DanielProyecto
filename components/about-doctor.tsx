import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutDoctor() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
          <Image
            src="/images/doctor-portrait.png"
            alt="Retrato del Dr. Daniel Muñoz"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
            Sobre el Dr. Daniel Muñoz
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Médico cirujano y artista estético, con un máster en Medicina
            Estética y 5 años de experiencia transformando vidas a través de la
            confianza y la imagen.
          </p>
          <blockquote className="border-l-4 border-primary pl-5 text-base italic leading-relaxed text-muted-foreground">
            &quot;La medicina estética no se trata solo de cambiar un rostro,
            sino de respetar la esencia de cada paciente y realzar lo que los
            hace únicos. Me inspira acompañar a cada persona a sentirse más
            segura, más auténtica y más conectada con su belleza natural.&quot;
          </blockquote>
          <div>
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#tratamientos" />}
            >
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
