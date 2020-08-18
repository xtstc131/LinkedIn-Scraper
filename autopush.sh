#!/bin/zsh
cd ~/Documents/GitHub/tacocat
DATE_N=`date "+%Y-%m-%d %H:%M:%S"`
node index.js

git add .
git commit -m "${DATE_N} Update"

git push
exit 0