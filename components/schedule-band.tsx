import { ReservarButton } from '@/components/reservar-button'
import { ABONO_LABEL } from '@/lib/medilink'

export function ScheduleBand() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 pb-20 md:px-6 md:pb-24">
        <div className="rounded-lg border border-border bg-muted/60 px-6 py-8 text-center">
          <p className="font-semibold">
            Horario de atención: 9:00 - 13:00 hrs y 15:00 - 18:00 hrs
          </p>
          <p className="mt-2 text-muted-foreground text-pretty">
            Reserva tu hora online y paga un abono de {ABONO_LABEL} que se
            descuenta del valor de tu tratamiento. Sin llamadas, cuando quieras.
          </p>
          <div className="mt-6 flex justify-center">
            <ReservarButton origen="band">Reservar mi consulta</ReservarButton>
          </div>
        </div>
      </div>
    </section>
  )
}
