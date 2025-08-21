import Link from 'next/link'
import { config } from '@/lib/config'

// フッターコンポーネント - 地域名は.env.localで管理
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左側：サービス情報 */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">サービス情報</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/works" className="hover:text-white transition-colors">
                  制作実績
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  会社情報
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 右側：お問い合わせ */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">お問い合わせ</h3>
            <div className="space-y-3 text-sm mb-6">
              <div>
                <strong className="text-white block mb-1">メール</strong>
                {config.email}
              </div>
              <div>
                <strong className="text-white block mb-1">営業時間</strong>
                平日 9:00-18:00
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold"
            >
              無料相談・お問い合わせ
            </Link>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 {config.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}