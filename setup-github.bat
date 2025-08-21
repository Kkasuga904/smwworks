@echo off
echo GitHub Personal Access Tokenを入力してください:
set /p TOKEN=

echo %TOKEN% > token.txt
gh auth login --with-token < token.txt
del token.txt

echo リポジトリを作成しています...
gh repo create smwworks --public --source=. --remote=origin

echo コードをプッシュしています...
git branch -M main
git push -u origin main

echo 完了しました！
echo リポジトリURL: https://github.com/%USERNAME%/smwworks
pause