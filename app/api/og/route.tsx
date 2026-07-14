import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Money, made simple.'

  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0B1E3D',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Teal glow */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background:
            'radial-gradient(ellipse at center, rgba(0,200,170,0.18) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* Bottom glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          right: '-100px',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(100,80,200,0.10) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '0 80px',
          textAlign: 'center',
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {/* P mark */}
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(0,200,170,0.15)',
              border: '1.5px solid rgba(0,200,170,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2.5px solid #00C8AA',
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
              }}
            />
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Paylio
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 30 ? '52px' : '64px',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Teal divider */}
        <div
          style={{
            width: '48px',
            height: '3px',
            background: '#00C8AA',
            borderRadius: '2px',
            marginBottom: '24px',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '-0.01em',
          }}
        >
          Banking, transfers, and insights built around you.
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}
