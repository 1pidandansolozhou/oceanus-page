import { ImageResponse } from 'next/og'

import { siteContent } from '@/data/site-content'

export const alt = `${siteContent.profile.name} Future Signal Lab`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at top left, rgba(34,211,238,0.22), transparent 28%), radial-gradient(circle at 82% 20%, rgba(251,191,36,0.18), transparent 24%), linear-gradient(180deg, #04101d 0%, #071120 48%, #030813 100%)',
          color: '#f8fbff',
          padding: '56px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '28px',
            borderRadius: '36px',
            border: '1px solid rgba(255,255,255,0.08)',
            background:
              'linear-gradient(180deg, rgba(9,16,30,0.52), rgba(9,16,30,0.22))',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 28 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                maxWidth: 760,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'center',
                  fontSize: 18,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#86e9ff',
                }}
              >
                Future Signal Lab
              </div>
              <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: '-0.08em' }}>
                {siteContent.profile.name}
              </div>
              <div style={{ fontSize: 32, lineHeight: 1.4, color: '#d7e3f4' }}>
                VC 实习生 / AI Explorer / Coffee Chat Signal
              </div>
              <div style={{ fontSize: 24, lineHeight: 1.55, color: '#93a8c7' }}>
                Bonjour，我在北京，也在继续把一级市场、AI 与个人实验串成一块更会发光的个人信号板。
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                width: 220,
              }}
            >
              {siteContent.profile.metrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    borderRadius: 24,
                    padding: '18px 20px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <span style={{ fontSize: 14, color: '#8ae7ff', letterSpacing: '0.24em' }}>
                    {metric.label}
                  </span>
                  <span style={{ fontSize: 24 }}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {siteContent.heroTags.slice(0, 4).map((tag) => (
              <div
                key={tag.id}
                style={{
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.05)',
                  fontSize: 22,
                  color: '#f8fbff',
                }}
              >
                {tag.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )
}

