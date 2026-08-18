import { steps } from '@/lib/site-data'

export function HowToStart() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-24">
        <h2 className="text-center font-serif text-4xl font-bold text-balance md:text-5xl">
          Cómo empezar
        </h2>
        <div className="mt-14 grid gap-10 text-center md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-3">
              <span className="font-serif text-5xl text-foreground/80">
                {step.number}:
              </span>
              <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
