import type { Metadata } from "next"
import { MaterialChecklist } from "@/components/material-checklist"

export const metadata: Metadata = {
  title: "Lista de material — Dr. Daniel Muñoz",
  description:
    "Listado de fotos y videos a solicitar para completar el sitio web.",
}

export default function ListaMaterialPage() {
  return <MaterialChecklist />
}
