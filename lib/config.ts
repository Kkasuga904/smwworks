/**
 * サイト設定を管理するコンフィグファイル
 * 汎用サイト設定
 */

export const config = {
  /**
   * サイト名
   */
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'SmartWeb Works',
  
  /**
   * サイトURL（Vercelデプロイ先）
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://smartweb-solutions.vercel.app',
  
  /**
   * 対応エリア
   */
  serviceArea: process.env.NEXT_PUBLIC_SERVICE_AREA || '関東圏',
  
  /**
   * 全国対応フラグ
   */
  nationwide: process.env.NEXT_PUBLIC_NATIONWIDE === 'true',
  
  /**
   * メタタグ情報（SEO用）
   */
  get meta() {
    return {
      title: `${this.siteName} | プロフェッショナルWeb制作`,
      description: '中小企業・個人事業主様向けWeb制作サービス。初期費用0円、月額5,500円から。全国対応でサポートします。',
      keywords: 'Web制作,ホームページ制作,初期費用0円,全国対応,中小企業,個人事業主',
    }
  },
  
  /**
   * OGP情報（SNSシェア用）
   */
  get ogp() {
    return {
      title: this.siteName,
      description: 'プロフェッショナルWeb制作 - 初期費用0円・月額5,500円から',
      url: this.siteUrl,
    }
  },
  
  /**
   * 料金プラン情報
   * 営業資料（A4 1枚）と完全一致させること
   */
  pricing: {
    catchphrase: '初期費用0円・月額5,500円から',
    plans: [
      {
        name: 'ライトプラン',
        price: '5,500',
        features: [
          '5ページまで',
          'スマホ対応',
          '基本SEO対策',
          '月1回の更新',
          'SSL対応',
        ],
      },
      {
        name: 'スタンダードプラン',
        price: '11,000',
        recommended: true,
        features: [
          '10ページまで',
          'お問い合わせフォーム',
          'アクセス解析',
          '月3回の更新',
          'Googleビジネスプロフィール対応',
          'SNS連携',
        ],
      },
      {
        name: 'プレミアムプラン',
        price: '22,000',
        features: [
          'ページ数無制限',
          'ECサイト機能',
          '高度なSEO対策',
          '無制限更新',
          '優先サポート',
          'カスタム機能開発',
        ],
      },
    ],
    notes: [
      '※初期費用0円、月額料金のみ',
      '※最低契約6ヶ月',
      '※ドメイン・サーバー費用は別途',
    ],
  },
  
  /**
   * 対応エリアの説明
   */
  get serviceAreaText() {
    return this.nationwide 
      ? `${this.serviceArea}対応（全国オンライン対応可）`
      : `${this.serviceArea}対応`
  },
  
  /**
   * サービス内容
   */
  services: [
    {
      title: 'ホームページ制作',
      description: 'スマホ対応のレスポンシブデザイン。お客様のビジネスに最適なサイトを制作します。',
      icon: 'web',
    },
    {
      title: '保守・更新サポート',
      description: '月額料金に含まれる安心の保守サービス。定期的な更新もお任せください。',
      icon: 'support',
    },
    {
      title: 'SEO対策',
      description: '検索での上位表示を目指す、効果的なSEO対策を実施。',
      icon: 'seo',
    },
  ],
  
  /**
   * UTMパラメータ付きURLを生成
   * 名刺やチラシのQRコード用
   */
  getUrlWithUtm(source: string, medium: string = 'offline', campaign: string = 'default') {
    const params = new URLSearchParams({
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
    })
    return `${this.siteUrl}?${params.toString()}`
  },
}