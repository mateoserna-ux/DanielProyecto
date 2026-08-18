"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateMaterialPdf } from "@/lib/generate-material-pdf"
import {
  photoSections,
  videoSection,
  dataSection,
  deliveryTips,
  type Section,
} from "@/lib/material-data"

function SectionBlock({ section }: { section: Section }) {
  return (
    <div className="break-inside-avoid">
      <h3 className="font-serif text-lg font-semibold text-foreground">
        {section.title}
      </h3>
      {section.note ? (
        <p className="mt-1 text-sm italic text-muted-foreground">{section.note}</p>
      ) : null}
      <ul className="mt-3 flex flex-col gap-3">
        {section.items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 rounded-[4px] border border-primary"
            />
            <span className="text-sm leading-relaxed text-foreground">
              <span className="font-medium">{item.label}</span>
              {item.detail ? (
                <span className="block text-muted-foreground">{item.detail}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function MaterialChecklist() {
  return (
    <main className="min-h-dvh bg-background px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-xl text-primary">Dr. Daniel Muñoz</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
              Material para completar el sitio web
            </h1>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Listado de fotos y videos a solicitar al doctor. Marca cada punto a
              medida que se reciba el material.
            </p>
          </div>
          <Button onClick={() => generateMaterialPdf()}>
            <Download data-icon="inline-start" />
            Descargar PDF
          </Button>
        </div>

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Imágenes (fotos)
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            {photoSections.map((section) => (
              <SectionBlock key={section.title} section={section} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-foreground">Videos</h2>
          <div className="mt-6">
            <SectionBlock section={videoSection} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Datos a confirmar
          </h2>
          <div className="mt-6">
            <SectionBlock section={dataSection} />
          </div>
        </section>

        <section className="mt-12 rounded-lg bg-muted p-6">
          <h2 className="font-serif text-lg font-semibold text-foreground">
            Recomendaciones de entrega
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            {deliveryTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
