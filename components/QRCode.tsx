'use client'

import { useEffect, useState } from 'react'
import { config } from '@/lib/config'

interface QRCodeProps {
  source: string // 名刺, チラシ, 営業資料 など
  size?: number
}

// QRコード生成コンポーネント（地域名変更時は自動的にURL更新）
export default function QRCode({ source, size = 200 }: QRCodeProps) {
  const [qrUrl, setQrUrl] = useState('')
  
  useEffect(() => {
    // UTMパラメータ付きURLを生成
    const targetUrl = config.getUrlWithUtm(source, 'offline', 'qr')
    // QRコード生成API（Google Charts API）
    const qrApiUrl = `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(targetUrl)}`
    setQrUrl(qrApiUrl)
  }, [source, size])
  
  if (!qrUrl) return null
  
  return (
    <div className="inline-block">
      <img 
        src={qrUrl} 
        alt={`QRコード - ${source}用`}
        width={size}
        height={size}
      />
      <p className="text-xs text-gray-500 text-center mt-2">
        QRコード
      </p>
    </div>
  )
}