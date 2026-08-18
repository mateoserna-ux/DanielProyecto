/**
 * Configuración de reservas Medilink.
 * Punto único para el link de agendamiento y el abono.
 *
 * El link general permite al paciente elegir sede y servicio dentro de Medilink.
 * Cuando se generen links por servicio, mapearlos en LINKS_POR_SERVICIO.
 */

/** Link general de agendamiento de la clínica (validado y operativo). */
export const MEDILINK_URL = 'https://ff.healthatom.io/HobaTF'

/** Abono fijo que se cobra al reservar (confirmado por el doctor). */
export const ABONO = 40000

/** Abono formateado para mostrar en la UI. */
export const ABONO_LABEL = '$40.000'

/**
 * Opcional: links de agendamiento por servicio específico.
 * Cuando se generen en Medilink (Agenda Online -> filtrar por servicio),
 * mapear aquí por nombre exacto de tratamiento para llevar al paciente directo.
 * Si un tratamiento no está aquí, usa MEDILINK_URL.
 */
export const LINKS_POR_SERVICIO: Record<string, string> = {
  // 'Diseño y Relleno de Labios Juvederm 1ml': 'https://ff.healthatom.io/xxxx',
}

export function linkParaTratamiento(nombre?: string): string {
  if (nombre && LINKS_POR_SERVICIO[nombre]) return LINKS_POR_SERVICIO[nombre]
  return MEDILINK_URL
}
