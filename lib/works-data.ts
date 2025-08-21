/**
 * 実績データを管理
 * これらはデモデータで、実際の企業ではありません
 */

import { config } from './config'

/**
 * 実績データを返す
 * @returns 実績データの配列
 */
export const getWorks = () => {
  // 汎用的な実績データ
  return [
    {
      id: 1,
      title: '居酒屋A様',
      category: '飲食業',
      description: 'メニューの魅力を最大限に引き出すデザインでテイクアウト注文が3倍に増加。',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
      features: ['メニュー表示', 'オンライン注文', '多言語対応'],
    },
    {
      id: 2,
      title: '介護施設B様',
      category: '介護・福祉',
      description: '温かみのあるデザインで入居相談が2倍に増加。',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3dc0b?w=800',
      features: ['施設紹介', '見学予約', 'スタッフ紹介'],
    },
    {
      id: 3,
      title: '寺社C様',
      category: '寺社・宗教法人',
      description: '伝統と現代を融合したデザインで参拝者への情報発信を強化。',
      image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800',
      features: ['行事案内', '御朱印情報', 'アクセス案内'],
    },
    {
      id: 4,
      title: '美容室D様',
      category: '美容業',
      description: 'スタイリッシュなデザインと予約システムで新規顧客が50%増加。',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
      features: ['予約システム', 'ギャラリー', 'スタッフ紹介'],
    },
    {
      id: 5,
      title: '工務店E様',
      category: '建設業',
      description: '施工実績を効果的に見せることで問い合わせが3倍に。',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      features: ['施工実績', 'お客様の声', '無料相談フォーム'],
    },
    {
      id: 6,
      title: 'クリニックF様',
      category: '医療',
      description: '清潔感のあるデザインと予約システムで患者満足度が向上。',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
      features: ['診療予約', '診療案内', 'アクセシビリティ対応'],
    },
  ]
}