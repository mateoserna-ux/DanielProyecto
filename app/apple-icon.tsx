import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: '#1a1512',
          color: '#cbb494',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          letterSpacing: '-2px',
          fontFamily: 'Georgia, serif',
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
