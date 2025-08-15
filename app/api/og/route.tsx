import { ImageResponse } from 'next/og'
import { config } from '@/lib/config'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #0ea5e9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 20, fontWeight: 'bold' }}>
          {config.siteName}
        </div>
        <div style={{ fontSize: 36, textAlign: 'center', maxWidth: 900 }}>
          初期費用0円・月額5,500円から
        </div>
        <div style={{ fontSize: 28, marginTop: 20 }}>
          プロフェッショナルWeb制作サービス
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}