#!/usr/bin/zsh

cp ~/.config/nvim/lua/user/*.lua ./code/configs/nvim/lua/user/
mkdocs build
cp ./CNAME ./docs/CNAME 
git add . 
git commit -m "auto deploy"
git push 

