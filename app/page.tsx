import Link from 'next/link'
import { config } from '@/lib/config'

export default function Home() {
  return (
    <>
      {/* ヒーローセクション - プロフェッショナルデザイン */}
      <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 opacity-90"></div>
        {/* パターンオーバーレイ */}
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        {/* 装飾的な図形 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
        
        <div className="container-custom text-center relative z-10">
          {/* メインキャッチコピー */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl leading-tight">
            中小企業・個人事業主様へ
            <br />
            <span className="text-yellow-300 text-6xl md:text-8xl">初期費用0円</span>
            <br />
            <span className="text-5xl md:text-6xl">でホームページ制作</span>
          </h1>
          {/* サブテキスト */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium max-w-3xl mx-auto">
            月額5,500円から始められる、プロフェッショナルWeb制作サービス
          </p>
          {/* 対応エリア表示 */}
          <p className="text-lg text-white/80 mb-12">
            ✨ {config.serviceAreaText} ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse-slow">
              🚀 無料相談を今すぐ申し込む
            </Link>
            <Link href="#pricing" className="inline-block bg-white/90 backdrop-blur-xl text-gray-800 border-2 border-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-xl">
              料金プランを確認する
            </Link>
          </div>
        </div>
      </section>

      {/* サービスセクション - カード型デザイン */}
      <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
        {/* 背景パターン */}
        <div className="absolute inset-0 pattern-grid opacity-3"></div>
        
        <div className="container-custom relative z-10">
          {/* セクションタイトル */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              サービス内容
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              お客様のビジネスを成功に導く3つのサービス
            </p>
          </div>
          
          {/* サービスカード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* ホームページ制作サービス */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">ホームページ制作</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                スマホ対応のレスポンシブデザイン。
                お客様のビジネスに最適なサイトを制作します。
              </p>
            </div>
            
            {/* 保守・更新サポートサービス */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">保守・更新サポート</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                月額料金に含まれる安心の保守サービス。
                定期的な更新もお任せください。
              </p>
            </div>
            
            {/* SEO対策サービス */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="w-28 h-28 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">SEO対策</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                検索での上位表示を目指す、
                効果的なSEO対策を実施。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション - プレミアムデザイン */}
      <section id="pricing" className="py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* 装飾的な円 */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              料金プラン
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              初期費用0円、月額料金のみでスタート
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {config.pricing.plans.map((plan, index) => (
              <div 
                key={index}
                className={`${
                  plan.recommended 
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white transform scale-110 relative' 
                    : 'bg-white'
                } rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300 relative`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-black px-8 py-3 rounded-full shadow-xl">
                    🌟 人気No.1 🌟
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-6 mt-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black">¥{plan.price}</span>
                  <span className={`text-lg ${plan.recommended ? 'text-white/80' : 'text-gray-500'}`}>/月</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg 
                        className={`w-6 h-6 ${
                          plan.recommended ? 'text-yellow-300' : 'text-green-500'
                        } mr-3 mt-0.5 flex-shrink-0`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center w-full px-8 py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-white text-orange-600 hover:bg-yellow-50 shadow-xl'
                      : 'bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:shadow-xl transform hover:-translate-y-1'
                  }`}
                >
                  申し込む
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            {config.pricing.notes.map((note, index) => (
              <p key={index} className="text-gray-600 text-lg">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション - モダンカードデザイン */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              選ばれる理由
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              多くのお客様に選ばれる4つの理由
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { num: 1, title: '初期費用0円', desc: '通常数十万円かかる制作費用が0円。月額料金のみで始められます。', color: 'from-blue-500 to-purple-600' },
              { num: 2, title: '全国対応サポート', desc: '関東圏を中心に全国の事業者様に対応。オンラインでのサポートも完備。', color: 'from-green-500 to-teal-600' },
              { num: 3, title: '充実の保守サービス', desc: '月額料金に保守・更新が含まれているので、追加費用の心配がありません。', color: 'from-orange-500 to-red-600' },
              { num: 4, title: '最新技術で高速表示', desc: '最新のWeb技術を使用し、高速で快適なサイトを制作します。', color: 'from-purple-500 to-pink-600' }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 rounded-3xl hover:bg-gray-50 transition-all duration-300 hover:shadow-xl">
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl`}>
                  {item.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション - インパクトのあるデザイン */}
      <section className="py-32 relative overflow-hidden">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600"></div>
        {/* パターンオーバーレイ */}
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        {/* 装飾的な図形 */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white drop-shadow-2xl">
            まずは無料相談から
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-medium max-w-3xl mx-auto">
            お客様のビジネスに最適なプランをご提案します
          </p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 px-14 py-6 rounded-full hover:bg-yellow-50 transition-all duration-300 font-black text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105">
            🚀 今すぐ無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  )
}