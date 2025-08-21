# SmartWeb Works

プロフェッショナルなWeb制作サービスを提供するSmartWeb Worksの公式サイトです。

## 特徴

- 初期費用0円、月額5,500円から始められるWeb制作サービス
- 中小企業・個人事業主様向けのカスタマイズ可能なソリューション
- レスポンシブデザイン対応
- SEO最適化済み

## 技術スタック

- Next.js 15.4.6
- React 19
- TypeScript
- Tailwind CSS
- Vercel (デプロイメント)

## コンテンツファイル

- `contact-form-smwworks.html` - 統合版お問い合わせフォーム (mailto: over9131120@gmail.com)
- `landing-page.html` - LINE予約システムのランディングページ
- `simple-flyer.html` - 営業用チラシ（印刷用）
- `footer-structure.html` - フッター構成の改善案

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 でアクセス可能

## デプロイ

Vercelに自動デプロイ設定済み
ドメイン: smwworks.com

## セキュリティ

- 環境変数は `.env.local` で管理
- 個人情報は一切コミットしない
- APIキーなどの機密情報は環境変数経由で設定