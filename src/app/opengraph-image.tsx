import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Coup d’Épaule — L’IA et l’automatisation au service des associations';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#FAF6EF',
          padding: '80px',
          border: '16px solid #2F5D4E',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#2F5D4E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '28px',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1F2A24',
              letterSpacing: '-0.5px',
            }}
          >
            Coup d’Épaule
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 600,
              color: '#1F2A24',
              lineHeight: 1.15,
              maxWidth: '950px',
            }}
          >
            L’IA et l’automatisation pratiques au service des associations.
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#5B6660',
              fontFamily: 'sans-serif',
              maxWidth: '850px',
            }}
          >
            Accompagnement bénévole 100 % gratuit · Sobriété numérique · Radar Financements publics
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '32px',
            borderTop: '2px solid #E2D9CB',
            fontSize: '18px',
            color: '#2F5D4E',
            fontFamily: 'sans-serif',
            fontWeight: 600,
          }}
        >
          <span>coupdepaule.fr</span>
          <span>Initiative citoyenne loi 1901</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
