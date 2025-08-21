@echo off
echo GitHubにプッシュしています...
cd C:\Users\user\ichikawa-web-works
git remote set-url origin https://github.com/kkasuga/smwworks.git
git push -u origin main
echo.
echo ✅ GitHubへのプッシュが完了しました！
echo.
echo 次のステップ:
echo 1. Vercelで https://vercel.com/import にアクセス
echo 2. GitHubリポジトリ smwworks をインポート
echo 3. デプロイ後、Settings → Domains で smwworks.com を追加
echo.
pause