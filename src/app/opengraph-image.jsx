import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const alt = 'Rabea Shaban (ربيع شعبان) | Full Stack Software Engineer | MERN Stack';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  let profileBase64 = '';
  try {
    const imagePath = path.join(process.cwd(), 'public', 'profile.jpg');
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      profileBase64 = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
    }
  } catch (e) {
    console.error('Failed to load profile image for OG:', e);
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #07090e 0%, #0d1322 50%, #151d36 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
          padding: '60px 80px',
        }}
      >
        {/* Background ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.22)',
            filter: 'blur(90px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '80px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.18)',
            filter: 'blur(80px)',
          }}
        />

        {/* Left Info Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '660px',
          }}
        >
          {/* Top Pill Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              gap: '8px',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(96, 165, 250, 0.35)',
              borderRadius: '9999px',
              padding: '8px 22px',
              fontSize: '16px',
              fontWeight: 700,
              color: '#60a5fa',
              marginBottom: '20px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            MERN Stack • Next.js • AWS
          </div>

          {/* Main Name */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              letterSpacing: '-1px',
              lineHeight: 1.1,
              marginBottom: '6px',
              color: '#ffffff',
            }}
          >
            Rabea Shaban
          </div>

          {/* Arabic Name Subtitle */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#38bdf8',
              marginBottom: '16px',
            }}
          >
            ربيع شعبان
          </div>

          {/* Professional Role */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#cbd5e1',
              marginBottom: '24px',
            }}
          >
            Full Stack Software Engineer
          </div>

          {/* Tech Stack Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '28px',
            }}
          >
            {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((tech) => (
              <div
                key={tech}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#94a3b8',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#64748b',
              letterSpacing: '0.5px',
            }}
          >
            https://www.rabea-shaban.com
          </div>
        </div>

        {/* Right Photo Column */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Glowing Avatar Border */}
          <div
            style={{
              width: '330px',
              height: '330px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
              padding: '7px',
              boxShadow: '0 20px 50px rgba(59, 130, 246, 0.35)',
            }}
          >
            {profileBase64 ? (
              <img
                src={profileBase64}
                alt="Rabea Shaban"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #0d1322',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#1e293b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#60a5fa',
                }}
              >
                RS
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
