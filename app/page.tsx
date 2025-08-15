import Link from 'next/link'
import { config } from '@/lib/config'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '初期費用0円のホームページ制作 | SmartWeb Works',
  description: '関東圏の中小企業・個人事業主様向けに、初期費用0円、月額5,500円からのホームページ制作サービスを提供。SEO対策・保守込み。',
  keywords: 'ホームページ制作,Web制作,初期費用0円,月額制,SEO対策,レスポンシブ対応,関東,東京,神奈川,千葉,埼玉',
}

export default function Home() {
  return (
    <>
      {/* ヒーローセクション - 高級感ある微分グラデーション */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0ea5e9] via-[#6366f1] to-[#0ea5e9] min-h-[85vh] sm:min-h-[90vh] flex items-center" aria-label="メインビジュアル">
        {/* 粒ノイズ風オーバーレイ */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        {/* コントラスト確保用オーバーレイ */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 py-20 sm:py-28">
          {/* メインキャッチコピー - 可読性最優先 */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-[-0.01em] drop-shadow-md" itemProp="headline">
            中小企業・個人事業主様へ
            <br />
            <span className="text-white">初期費用0円</span>で
            <br className="sm:hidden" />
            ホームページ制作
          </h1>
          
          {/* サブテキスト */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed">
            月額5,500円から始められる、プロフェッショナルWeb制作サービス
          </p>
          
          {/* 対応エリア */}
          <p className="mt-3 text-white/80">
            {config.serviceAreaText}
          </p>
          
          {/* 即押しCTA配置 */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-lg sm:text-xl font-bold shadow-lg shadow-blue-500/20 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
              aria-label="無料相談を申し込む"
            >
              無料相談を申し込む
            </Link>
            <Link 
              href="#pricing"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="料金プランを見る"
            >
              料金プランを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 信頼感UIバッジ - ヒーロー直下 */}
      <section className="bg-white py-12 sm:py-16" aria-label="サービスの特徴">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '📱', title: 'スマホ最適化', desc: '全デバイス対応' },
              { icon: '⚡', title: '高速表示', desc: 'Core Web Vitals' },
              { icon: '🌐', title: '独自ドメイン', desc: '.com/.jp対応' },
              { icon: '🗾', title: '関東圏対応', desc: 'オンライン全国可' }
            ].map((badge, index) => (
              <article key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-2" aria-hidden="true">{badge.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm">{badge.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{badge.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* サービスセクション - 余白統一 */}
      <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50" aria-label="サービス内容">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          {/* セクションタイトル */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              サービス内容
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様のビジネスを成功に導く3つのサービス
            </p>
          </div>
          
          {/* サービスカード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'ホームページ制作',
                desc: 'スマホ対応のレスポンシブデザイン。お客様のビジネスに最適なサイトを制作します。',
                icon: '🖥️',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                title: '保守・更新サポート',
                desc: '月額料金に含まれる安心の保守サービス。定期的な更新もお任せください。',
                icon: '⚙️',
                color: 'from-green-500 to-teal-600'
              },
              {
                title: 'SEO対策',
                desc: '検索での上位表示を目指す、効果的なSEO対策を実施。',
                icon: '📈',
                color: 'from-orange-500 to-red-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金プランセクション - 高さ統一 */}
      <section id="pricing" className="py-16 sm:py-24 bg-gray-50" aria-label="料金プラン">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              料金プラン
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              初期費用0円、月額料金のみでスタート
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {config.pricing.plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col ${
                  plan.recommended ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    おすすめ
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">¥{plan.price}</span>
                  <span className="text-gray-500 ml-2">/月</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center w-full px-6 py-3 rounded-xl font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.recommended
                      ? 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg shadow-blue-500/20 focus-visible:ring-blue-500'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus-visible:ring-gray-500'
                  }`}
                >
                  申し込む
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center space-y-2">
            {config.pricing.notes.map((note, index) => (
              <p key={index} className="text-sm text-gray-500">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="py-16 sm:py-24 bg-white" aria-label="選ばれる理由">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              選ばれる理由
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              多くのお客様に選ばれる4つの理由
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { num: '01', title: '初期費用0円', desc: '通常数十万円かかる制作費用が0円。月額料金のみで始められます。' },
              { num: '02', title: '全国対応サポート', desc: '関東圏を中心に全国の事業者様に対応。オンラインでのサポートも完備。' },
              { num: '03', title: '充実の保守サービス', desc: '月額料金に保守・更新が含まれているので、追加費用の心配がありません。' },
              { num: '04', title: '最新技術で高速表示', desc: '最新のWeb技術を使用し、高速で快適なサイトを制作します。' }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{item.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0ea5e9] via-[#6366f1] to-[#0ea5e9] relative overflow-hidden" aria-label="お問い合わせ">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
            まずは無料相談から
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            お客様のビジネスに最適なプランをご提案します
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#2563eb] hover:bg-gray-100 font-bold text-lg sm:text-xl shadow-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>

      {/* モバイル固定CTA */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-50">
        <Link 
          href="/contact" 
          className="block w-full text-center px-5 py-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold shadow-lg backdrop-blur-sm"
        >
          無料相談（最短当日返信）
        </Link>
      </div>
    </>
  )
}