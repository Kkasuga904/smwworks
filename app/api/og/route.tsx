import { ImageResponse } from 'next/og'
import { config } from '@/lib/config'

// Edge Runtimeで動作（高速化のため）
export const runtime = 'edge'

// OGP画像を動的に生成するAPIエンドポイント
// SNSシェア時に表示される画像を自動生成
export async function GET() {
  return new ImageResponse(
    (
      // OGP画像のレイアウト定義
      <div
        style={{
          fontSize: 128,
          // ブランドカラーのグラデーション背景
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
        {/* サイト名 */}
        <div style={{ fontSize: 48, marginBottom: 20, fontWeight: 'bold' }}>
          {config.siteName}
        </div>
        {/* メインメッセージ */}
        <div style={{ fontSize: 36, textAlign: 'center', maxWidth: 900 }}>
          初期費用0円・月額5,500円から
        </div>
        {/* サブメッセージ */}
        <div style={{ fontSize: 28, marginTop: 20 }}>
          プロフェッショナルWeb制作サービス
        </div>
      </div>
    ),
    {
      // OGP画像の推奨サイズ
      width: 1200,
      height: 630,
    }
  )
}