#!/usr/bin/env sh
# 发生错误时停止
set -e
git init
git add -A
git commit -m 'init'
git config --local user.name "FrontDream"
git config --local user.email 1370336125@qq.com
# 如果部署到 https://{USERNAME}.github.io
git push -f git@github.com:FrontDream/FrontDream.github.io.git main
# 如果部署到 https://{USERNAME}.github.io/{REPO}
#git push -f git@github.com:{USERNAME}/{REPO}.git master
cd -
