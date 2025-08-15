'use client'

import { useEffect, useState } from 'react'

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState({
    userAgent: '',
    screenSize: '',
    windowSize: '',
    deviceType: '',
    networkInfo: '',
    timestamp: '',
  })

  useEffect(() => {
    const getDeviceType = () => {
      const ua = navigator.userAgent
      if (/iPhone|iPod/.test(ua)) return 'iPhone'
      if (/iPad/.test(ua)) return 'iPad'
      if (/Android/.test(ua)) return 'Android'
      if (/Windows/.test(ua)) return 'Windows'
      if (/Mac/.test(ua)) return 'Mac'
      return 'Unknown'
    }

    const getNetworkInfo = async () => {
      if ('connection' in navigator) {
        const conn = (navigator as any).connection
        return `Type: ${conn.effectiveType || 'unknown'}, Speed: ${conn.downlink || 'unknown'}Mbps`
      }
      return 'Not available'
    }

    const updateDebugInfo = async () => {
      setDebugInfo({
        userAgent: navigator.userAgent,
        screenSize: `${screen.width} x ${screen.height}`,
        windowSize: `${window.innerWidth} x ${window.innerHeight}`,
        deviceType: getDeviceType(),
        networkInfo: await getNetworkInfo(),
        timestamp: new Date().toLocaleString('ja-JP'),
      })
    }

    updateDebugInfo()
    window.addEventListener('resize', updateDebugInfo)
    
    return () => window.removeEventListener('resize', updateDebugInfo)
  }, [])

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">デバッグ情報</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">接続情報</h2>
          <div className="space-y-2">
            <div className="bg-green-50 p-4 rounded">
              <p className="font-semibold">スマホでアクセスするURL:</p>
              <p className="text-lg font-mono text-blue-600">http://192.168.200.34:3000</p>
              <p className="text-sm text-gray-600 mt-2">
                ※同じWi-Fi（192.168.200.x）に接続してください
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">デバイス情報</h2>
          <dl className="space-y-3">
            <div className="flex flex-col sm:flex-row">
              <dt className="font-semibold w-32">デバイス:</dt>
              <dd className="font-mono text-sm break-all">{debugInfo.deviceType}</dd>
            </div>
            <div className="flex flex-col sm:flex-row">
              <dt className="font-semibold w-32">画面サイズ:</dt>
              <dd className="font-mono text-sm">{debugInfo.screenSize}</dd>
            </div>
            <div className="flex flex-col sm:flex-row">
              <dt className="font-semibold w-32">ウィンドウ:</dt>
              <dd className="font-mono text-sm">{debugInfo.windowSize}</dd>
            </div>
            <div className="flex flex-col sm:flex-row">
              <dt className="font-semibold w-32">ネットワーク:</dt>
              <dd className="font-mono text-sm">{debugInfo.networkInfo}</dd>
            </div>
            <div className="flex flex-col sm:flex-row">
              <dt className="font-semibold w-32">時刻:</dt>
              <dd className="font-mono text-sm">{debugInfo.timestamp}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Agent</h2>
          <p className="font-mono text-xs break-all bg-gray-100 p-3 rounded">
            {debugInfo.userAgent}
          </p>
        </div>

        <div className="mt-6 text-center">
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            リロード
          </button>
        </div>
      </div>
    </div>
  )
}