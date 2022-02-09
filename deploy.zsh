#!/usr/bin/zsh

sh mkdocs build
cp ./CNAME ./docs/CNAME 
git add . 
git commit -m "$1"
git push 
