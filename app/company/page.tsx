import SEOHead from '@/components/SEOHead'

export default function Company() {
  return (
    <>
      <SEOHead
        title="会社情報"
        description="SmartWeb Worksの会社概要、サービス理念、代表者情報について"
        path="/company"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              会社情報
            </h1>
            <p className="text-xl text-gray-600">
              中小企業のデジタル化を支援するプロフェッショナル集団
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* 会社概要 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                会社概要
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">会社名</h3>
                    <p className="text-gray-600">SmartWeb Works</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">設立</h3>
                    <p className="text-gray-600">2024年</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">事業内容</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• ホームページ制作・運営</li>
                      <li>• Web保守・管理サービス</li>
                      <li>• SEO対策・集客支援</li>
                      <li>• デジタルマーケティング支援</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">対応エリア</h3>
                    <p className="text-gray-600">関東圏（オンライン対応も可能）</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">営業時間</h3>
                    <p className="text-gray-600">平日 9:00-18:00</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">お問い合わせ</h3>
                    <p className="text-gray-600">info@smwworks.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* サービス理念 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                サービス理念
              </h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    「すべての事業者にプロフェッショナルなWebサイトを」
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    初期費用の負担なく、月額制でプロ品質のWebサイトを提供。<br />
                    中小企業・個人事業主様のデジタル化を支援し、<br />
                    ビジネスの成長をサポートいたします。
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">初期費用0円</h4>
                    <p className="text-gray-600 text-sm">
                      高額な初期投資なしで<br />
                      プロ品質のサイトを
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔧</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">保守込み</h4>
                    <p className="text-gray-600 text-sm">
                      月額料金に保守・更新<br />
                      サポートが含まれています
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">完全対応</h4>
                    <p className="text-gray-600 text-sm">
                      PC・スマホ・タブレット<br />
                      すべてのデバイスに対応
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* お客様への約束 */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">
                お客様への約束
              </h2>
              <div className="space-y-4 text-lg">
                <p>✓ しつこい営業は一切いたしません</p>
                <p>✓ 透明性のある料金体系</p>
                <p>✓ 迅速で丁寧なサポート対応</p>
                <p>✓ お客様の事業成長を第一に考えた提案</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}