import Link from 'next/link'
import { config } from '@/lib/config'

export default function Home() {
  return (
    <>
      {/* ヒーローセクション - 地域名は.env.localで管理 */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-custom text-center">
          {/* メインキャッチコピー */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            中小企業・個人事業主様へ
            <br />
            <span className="text-primary">初期費用0円</span>でホームページ制作
          </h1>
          {/* サブテキスト */}
          <p className="text-xl text-gray-600 mb-4">
            月額5,500円から始められる、プロフェッショナルWeb制作サービス
          </p>
          {/* 対応エリア表示 */}
          <p className="text-sm text-gray-500 mb-8">
            {config.serviceAreaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              無料相談を申し込む
            </Link>
            <Link href="#pricing" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg">
              料金プランを見る
            </Link>
          </div>
        </div>
      </section>

      {/* サービスセクション - 3つの主要サービスを表示 */}
      <section id="services" className="py-20 bg-white">
        <div className="container-custom">
          {/* セクションタイトル */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            サービス内容
          </h2>
          {/* サービスカードのグリッドレイアウト */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ホームページ制作サービス */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow will-change-transform">
              {/* アイコン - PCモニター */}
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ホームページ制作</h3>
              <p className="text-gray-600">
                スマホ対応のレスポンシブデザイン。
                お客様のビジネスに最適なサイトを制作します。
              </p>
            </div>
            
            {/* 保守・更新サポートサービス */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow will-change-transform">
              {/* アイコン - 設定・歯車 */}
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">保守・更新サポート</h3>
              <p className="text-gray-600">
                月額料金に含まれる安心の保守サービス。
                定期的な更新もお任せください。
              </p>
            </div>
            
            {/* SEO対策サービス */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow will-change-transform">
              {/* アイコン - 稲妻（高速化） */}
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO対策</h3>
              <p className="text-gray-600">
                検索での上位表示を目指す、
                効果的なSEO対策を実施。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション - 営業資料と完全一致 */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            料金プラン
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 料金プランを動的に生成 - config.tsで管理 */}
            {config.pricing.plans.map((plan, index) => (
              <div 
                key={index}
                className={`${
                  plan.recommended 
                    ? 'bg-primary text-white transform scale-105' 
                    : 'bg-white'
                } rounded-lg shadow-lg p-8`}
              >
                {plan.recommended && (
                  <div className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    おすすめ
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">¥{plan.price}</span>
                  <span className={plan.recommended ? 'text-blue-100' : 'text-gray-600'}>/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg 
                        className={`w-5 h-5 ${
                          plan.recommended ? 'text-white' : 'text-green-500'
                        } mr-2 mt-0.5`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                    plan.recommended
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'btn-primary'
                  }`}
                >
                  申し込む
                </Link>
              </div>
            ))}

          </div>
          
          {/* 注意事項 - 営業資料と一致 */}
          <div className="mt-8 text-center">
            {config.pricing.notes.map((note, index) => (
              <p key={index} className="text-sm text-gray-600">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション - 4つの強みを紹介 */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* セクションタイトル */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            選ばれる理由
          </h2>
          {/* 理由カードのグリッドレイアウト（2列） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 理由1: 初期費用0円 */}
            <div className="flex items-start space-x-4">
              {/* 番号バッジ */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">初期費用0円</h3>
                <p className="text-gray-600">
                  通常数十万円かかる制作費用が0円。月額料金のみで始められます。
                </p>
              </div>
            </div>
            
            {/* 理由2: 全国対応サポート */}
            <div className="flex items-start space-x-4">
              {/* 番号バッジ */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">全国対応サポート</h3>
                <p className="text-gray-600">
                  関東圏を中心に全国の事業者様に対応。オンラインでのサポートも完備。
                </p>
              </div>
            </div>
            
            {/* 理由3: 充実の保守サービス */}
            <div className="flex items-start space-x-4">
              {/* 番号バッジ */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">充実の保守サービス</h3>
                <p className="text-gray-600">
                  月額料金に保守・更新が含まれているので、追加費用の心配がありません。
                </p>
              </div>
            </div>
            
            {/* 理由4: 最新技術で高速表示 */}
            <div className="flex items-start space-x-4">
              {/* 番号バッジ */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">最新技術で高速表示</h3>
                <p className="text-gray-600">
                  最新のWeb技術を使用し、高速で快適なサイトを制作します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション - 最終的なコンバージョン誘導 */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          {/* CTA見出し */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは無料相談から
          </h2>
          {/* サブテキスト */}
          <p className="text-xl mb-8">
            お客様のビジネスに最適なプランをご提案します
          </p>
          {/* CTAボタン */}
          <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  )
}