import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#1a1512',
          color: '#cbb494',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          letterSpacing: '-0.5px',
          fontFamily: 'Georgia, serif',
          borderRadius: 6,
        }}
      >
        DM
      </div>
    ),
    {
      ...size,
    },
  )
}
