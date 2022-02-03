#!/usr/bin/zsh

mkdocs build
cp ./CNAME ./docs/CNAME 
git add . 
git commit -m "auto deploy"
git push 

