set -e

npm run build

cd docs/.vuepress/dist

git init

git add .

git commit -m "自动部署"

git push -f https://e.coding.net/meteor7/blog/blog.git master

cd - # 退回开始所在目录

pause