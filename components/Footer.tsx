import Link from 'next/link'
import { config } from '@/lib/config'

// フッターコンポーネント - 地域名は.env.localで管理
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-white font-bold mb-4">{config.siteName}</h3>
            <p className="text-sm">
              プロフェッショナル<br />
              Web制作サービス
            </p>
          </div>
          
          {/* サービスリンク */}
          <div>
            <h4 className="text-white font-semibold mb-3">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Web制作
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  保守管理
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  SEO対策
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 会社情報リンク */}
          <div>
            <h4 className="text-white font-semibold mb-3">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/works" className="hover:text-white transition-colors">
                  制作実績
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* お問い合わせ情報 */}
          <div>
            <h4 className="text-white font-semibold mb-3">お問い合わせ</h4>
            <p className="text-sm mb-2">
              営業時間: 平日 9:00-18:00
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm"
            >
              無料相談はこちら
            </Link>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 {config.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}