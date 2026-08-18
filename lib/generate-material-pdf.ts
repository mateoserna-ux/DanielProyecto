import { jsPDF } from "jspdf"
import {
  photoSections,
  videoSection,
  dataSection,
  deliveryTips,
  type Section,
} from "@/lib/material-data"

// Replace characters that the standard PDF fonts can't render.
function clean(text: string) {
  return text
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/–/g, "-")
    .replace(/·/g, "-")
    .replace(/…/g, "...")
}

export function generateMaterialPdf() {
  const doc = new jsPDF({ unit: "mm", format: "a4" })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 18
  const contentWidth = pageWidth - margin * 2
  let y = margin

  const gold: [number, number, number] = [166, 138, 100]
  const dark: [number, number, number] = [40, 36, 32]
  const gray: [number, number, number] = [110, 110, 110]

  function ensureSpace(needed: number) {
    if (y + needed > pageHeight - margin) {
      doc.addPage()
      y = margin
    }
  }

  // Header
  doc.setTextColor(...gold)
  doc.setFont("times", "italic")
  doc.setFontSize(14)
  doc.text("Dr. Daniel Munoz", margin, y)
  y += 9

  doc.setTextColor(...dark)
  doc.setFont("times", "bold")
  doc.setFontSize(20)
  doc.text("Material para completar el sitio web", margin, y)
  y += 8

  doc.setTextColor(...gray)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  const intro = doc.splitTextToSize(
    "Listado de fotos y videos a solicitar al doctor. Marca cada punto a medida que se reciba el material.",
    contentWidth,
  )
  doc.text(intro, margin, y)
  y += intro.length * 5 + 4

  doc.setDrawColor(...gold)
  doc.line(margin, y, pageWidth - margin, y)
  y += 8

  function renderGroupTitle(title: string) {
    ensureSpace(12)
    doc.setTextColor(...dark)
    doc.setFont("times", "bold")
    doc.setFontSize(15)
    doc.text(clean(title), margin, y)
    y += 7
  }

  function renderSection(section: Section) {
    ensureSpace(14)
    doc.setTextColor(...dark)
    doc.setFont("times", "bold")
    doc.setFontSize(12)
    const titleLines = doc.splitTextToSize(clean(section.title), contentWidth)
    doc.text(titleLines, margin, y)
    y += titleLines.length * 5.5 + 1

    if (section.note) {
      doc.setTextColor(...gray)
      doc.setFont("helvetica", "italic")
      doc.setFontSize(9)
      const noteLines = doc.splitTextToSize(clean(section.note), contentWidth)
      doc.text(noteLines, margin, y)
      y += noteLines.length * 4.5 + 1
    }

    y += 1
    section.items.forEach((item) => {
      const boxSize = 3.5
      const textX = margin + boxSize + 3
      const textWidth = contentWidth - boxSize - 3

      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      const labelLines = doc.splitTextToSize(clean(item.label), textWidth)
      let detailLines: string[] = []
      if (item.detail) {
        doc.setFont("helvetica", "normal")
        detailLines = doc.splitTextToSize(clean(item.detail), textWidth)
      }
      const blockHeight = labelLines.length * 4.8 + detailLines.length * 4.4 + 3
      ensureSpace(blockHeight)

      // Checkbox
      doc.setDrawColor(...gold)
      doc.rect(margin, y - 3, boxSize, boxSize)

      doc.setTextColor(...dark)
      doc.setFont("helvetica", "bold")
      doc.text(labelLines, textX, y)
      y += labelLines.length * 4.8

      if (detailLines.length) {
        doc.setTextColor(...gray)
        doc.setFont("helvetica", "normal")
        doc.text(detailLines, textX, y)
        y += detailLines.length * 4.4
      }
      y += 3
    })
    y += 4
  }

  renderGroupTitle("Imagenes (fotos)")
  photoSections.forEach(renderSection)

  renderGroupTitle("Videos")
  renderSection(videoSection)

  renderGroupTitle("Datos a confirmar")
  renderSection(dataSection)

  // Delivery tips box
  ensureSpace(14 + deliveryTips.length * 5)
  doc.setTextColor(...dark)
  doc.setFont("times", "bold")
  doc.setFontSize(12)
  doc.text("Recomendaciones de entrega", margin, y)
  y += 7
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(...gray)
  deliveryTips.forEach((tip) => {
    ensureSpace(6)
    doc.text("-  " + clean(tip), margin, y)
    y += 5
  })

  doc.save("material-sitio-dr-daniel-munoz.pdf")
}
