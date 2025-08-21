@echo off
echo GitHubリポジトリにプッシュします...
git remote remove origin 2>nul
git remote add origin https://github.com/YOUR_USERNAME/smwworks.git
git branch -M main
git push -u origin main
echo 完了しました！
pause