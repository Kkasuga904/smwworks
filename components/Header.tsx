'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { config } from '@/lib/config'

// ヘッダーコンポーネント - スクロール時に半透明化
export default function Header() {
  // モバイルメニューの開閉状態を管理
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // スクロール状態を管理
  const [isScrolled, setIsScrolled] = useState(false)

  // スクロールイベントハンドラー
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 shadow-md' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ - タップターゲット48px以上確保 */}
          <Link href="/" className="flex items-center space-x-2 min-h-[48px] px-2 -ml-2">
            <span className="text-xl font-bold text-gray-900">{config.siteName}</span>
          </Link>

          {/* PC用ナビゲーション - lg以上で表示 */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* ナビゲーションリンク - ホーム */}
            <Link href="/" className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium">
              ホーム
            </Link>
            {/* ナビゲーションリンク - サービス */}
            <Link href="/#services" className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium">
              サービス
            </Link>
            {/* ナビゲーションリンク - 料金プラン */}
            <Link href="/#pricing" className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium">
              料金プラン
            </Link>
            {/* ナビゲーションリンク - 制作実績 */}
            <Link href="/works" className="text-gray-700 hover:text-[#2563eb] transition-colors font-medium">
              制作実績
            </Link>
            {/* CTAボタン - 無料相談 */}
            <Link 
              href="/contact" 
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
              aria-label="無料相談を申し込む"
            >
              無料相談
            </Link>
          </nav>

          {/* モバイル・タブレットメニューボタン - lg未満で表示 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 -mr-3 min-h-[48px] min-w-[48px] hover:bg-gray-100 rounded-lg transition-colors"
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
          <nav className="lg:hidden py-4 border-t border-gray-200">
            {/* モバイルメニューリンク - ホーム */}
            <Link 
              href="/" 
              className="block py-3 px-2 text-gray-700 hover:text-[#2563eb] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}  // メニューを閉じる
            >
              ホーム
            </Link>
            {/* モバイルメニューリンク - サービス */}
            <Link 
              href="/#services" 
              className="block py-3 px-2 text-gray-700 hover:text-[#2563eb] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}  // メニューを閉じる
            >
              サービス
            </Link>
            {/* モバイルメニューリンク - 料金プラン */}
            <Link 
              href="/#pricing" 
              className="block py-3 px-2 text-gray-700 hover:text-[#2563eb] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}  // メニューを閉じる
            >
              料金プラン
            </Link>
            {/* モバイルメニューリンク - 制作実績 */}
            <Link 
              href="/works" 
              className="block py-3 px-2 text-gray-700 hover:text-[#2563eb] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}  // メニューを閉じる
            >
              制作実績
            </Link>
            {/* モバイルメニューリンク - 無料相談（CTA） */}
            <Link 
              href="/contact" 
              className="block py-3 px-2 text-[#2563eb] hover:text-[#1d4ed8] font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}  // メニューを閉じる
            >
              無料相談を申し込む
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}