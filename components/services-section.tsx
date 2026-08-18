import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { TreatmentPriceList } from '@/components/treatment-price-list'
import { facialTreatments } from '@/lib/site-data'

export function ServicesSection() {
  return (
    <section id="tratamientos" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold text-balance md:text-6xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
            Procedimientos realizados por médicos certificados con tecnología de
            vanguardia
          </p>
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-3xl font-bold text-primary">
            Tratamientos Faciales
          </h3>
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <Card className="px-6 py-2">
              <TreatmentPriceList treatments={facialTreatments} />
            </Card>
            <div className="lg:sticky lg:top-24">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/services-facial.png"
                  alt="Médica realizando un tratamiento facial a una paciente"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
