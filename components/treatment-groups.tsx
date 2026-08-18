import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { TreatmentPriceList } from '@/components/treatment-price-list'
import { treatmentGroups } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function TreatmentGroups() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-20 md:gap-28 md:px-6 md:pb-28">
        {treatmentGroups.map((group, index) => {
          const imageRight = index % 2 === 1
          return (
            <div
              key={group.id}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={cn(
                  'relative aspect-square overflow-hidden rounded-lg',
                  imageRight ? 'lg:order-2' : 'lg:order-1',
                )}
              >
                <Image
                  src={group.image || '/placeholder.svg'}
                  alt={group.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div
                className={cn(
                  'flex flex-col gap-6',
                  imageRight ? 'lg:order-1' : 'lg:order-2',
                )}
              >
                <h3 className="font-serif text-3xl font-bold text-primary md:text-4xl">
                  {group.title}
                </h3>
                <Card className="px-6 py-2">
                  <TreatmentPriceList treatments={group.treatments} />
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
