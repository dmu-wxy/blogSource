#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'blog.smartdog.top' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:dmu-wxy/blogSource.git
else
  msg='来自github action的自动部署'
  githubUrl=https://dmu-wxy:${GITHUB_TOKEN}@github.com/dmu-wxy/blogSource.git
  git config --global user.name "dmu-wxy"
  git config --global user.email "2290502632@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github

# deploy to coding  https://e.coding.net/meteor7/blog/blog.git
echo 'www.smartdog.top' > CNAME  # 自定义域名
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=https://e.coding.net/meteor7/blog/blog.git
else
  codingUrl=https://meteor7:${CODING_TOKEN}@git.dev.tencent.com/blog/blog.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist
