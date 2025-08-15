import Image from 'next/image'
import Link from 'next/link'
import { config } from '@/lib/config'
import { getWorks } from '@/lib/works-data'

// 制作実績ページ - 地域名は.env.localで管理
export default function WorksPage() {
  // 地域名に応じた実績データを取得
  const works = getWorks()
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            制作実績
          </h1>
          <p className="text-xl text-gray-600 text-center">
            様々な業種のお客様のWeb制作を手がけています
          </p>
        </div>
      </section>

      {/* 実績一覧セクション */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 実績データを動的に表示 */}
            {works.map((work) => (
              <div key={work.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-sm">
                    {work.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {work.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            導入効果の実績
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <p className="text-gray-600">平均問い合わせ増加率</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-gray-600">制作実績</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <p className="text-gray-600">顧客満足度</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたのビジネスも成功事例に
          </h2>
          <p className="text-xl mb-8">
            まずは無料相談で、お客様に最適なプランをご提案します
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </div>
  )
}