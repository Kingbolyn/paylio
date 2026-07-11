import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#071628',
          padding: '64px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Teal glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 68%)',
            display: 'flex',
          }}
        />

        {/* Navy glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top: logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0' }}>
          {/* Shield icon */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: '#14B8A6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(20,184,166,0.4)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M9 12l2 2.5 4-4.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            style={{
              color: 'white',
              fontSize: '26px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontFamily: 'sans-serif',
            }}
          >
            Paylio
          </span>
        </div>

        {/* Center: headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            paddingBottom: '8px',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '80px',
              fontWeight: 900,
              letterSpacing: '-0.045em',
              lineHeight: 0.95,
              fontFamily: 'sans-serif',
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
            }}
          >
            <span>Money,</span>
            <span style={{ color: '#14B8A6' }}>Made Simple.</span>
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '24px',
              fontFamily: 'sans-serif',
              marginTop: '24px',
              letterSpacing: '-0.01em',
              lineHeight: 1.4,
              maxWidth: '560px',
              display: 'flex',
            }}
          >
            Banking, transfers, and insights built around you.
          </div>
        </div>

        {/* Bottom: feature pills + attribution */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Transfers', 'Insights', 'Cards', 'Security', 'API'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '7px 18px',
                  borderRadius: '100px',
                  border: '1px solid rgba(20,184,166,0.30)',
                  backgroundColor: 'rgba(20,184,166,0.07)',
                  color: 'rgba(20,184,166,0.85)',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'sans-serif',
                  letterSpacing: '0.01em',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '14px',
              fontFamily: 'sans-serif',
              letterSpacing: '0.02em',
              display: 'flex',
            }}
          >
            by Apex Code
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
