import QRCode from '@/components/QRCode'
import { config } from '@/lib/config'

// QRコード生成ページ（営業資料・名刺用）
export default function QRPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-center mb-12">
          営業ツール用QRコード
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">名刺用</h2>
            <QRCode source="meishi" size={150} />
            <p className="text-sm text-gray-600 mt-4">
              utm_source=meishi
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">チラシ用</h2>
            <QRCode source="chirashi" size={150} />
            <p className="text-sm text-gray-600 mt-4">
              utm_source=chirashi
            </p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">営業資料用</h2>
            <QRCode source="eigyo-shiryo" size={150} />
            <p className="text-sm text-gray-600 mt-4">
              utm_source=eigyo-shiryo
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">使い方</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>上記のQRコードを名刺や営業資料に印刷</li>
            <li>アクセス時にUTMパラメータで流入元を自動追跡</li>
            <li>ランディングページへ誘導</li>
          </ol>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>対応エリア: <strong>{config.serviceArea}</strong></p>
        </div>
      </div>
    </div>
  )
}