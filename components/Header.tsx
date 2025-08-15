'use client'

import Link from 'next/link'
import { useState } from 'react'
import { config } from '@/lib/config'

// ヘッダーコンポーネント - 地域名は.env.localで管理
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ - 地域名を動的に表示 */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">{config.siteName}</span>
          </Link>

          {/* PC用ナビゲーション - lg以上で表示 */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              ホーム
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-primary transition-colors">
              サービス
            </Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-primary transition-colors">
              料金プラン
            </Link>
            <Link href="/works" className="text-gray-700 hover:text-primary transition-colors">
              制作実績
            </Link>
            <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
              無料相談
            </Link>
          </nav>

          {/* モバイル・タブレットメニューボタン - lg未満で表示 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              // 閉じるアイコン（X）
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // ハンバーガーメニューアイコン
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* モバイル・タブレットメニュー - lg未満で表示 */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <Link 
              href="/" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link 
              href="/#services" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link 
              href="/#pricing" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              料金プラン
            </Link>
            <Link 
              href="/works" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              制作実績
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}