# Zsh

> the z shell

## scripts

### git

```zsh
#!/usr/bin/zsh

source venv/bin/activate
mkdocs build
cp CNAME docs/CNAME 
cp README.md docs/README.md
git add . 
git commit -m "auto deploy"
git push 
```

## loop

```sh
for x in 1 2 3 4 5 6 7 8 9; echo $x
```

## ohmyzsh

### plugins

> copybuffer

- copies current command line content with a short cut (ctrl + o)

> copy file 

```sh 
copyfile MY-FILE
```


### config 

```sh
export PATH=$PATH:/usr/local/go/bin:$HOME/.local/bin

export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="robbyrussell"

CASE_SENSITIVE="true"

plugins=( sudo fzf vi-mode colorize colored-man-pages zsh-interactive-cd zsh-autosuggestions zsh-syntax-highlighting )

source $ZSH/oh-my-zsh.sh

# cd ~D ( ~D )

hash -d D=$HOME/Documents
hash -d DP=$HOME/Documents/Projects
hash -d G=$HOME/GitHub
hash -d Gj=$HOME/GitHub/justinsgithub
hash -d Gjp=$HOME/GitHub/justinsgithub/portfolio
hash -d Gjs=$HOME/GitHub/justinsgithub/static
hash -d Gjsd=$HOME/GitHub/justinsgithub/static/docs.justintylers.com
hash -d Gjsdd=$HOME/GitHub/justinsgithub/static/docs.justintylers.com/docs


alias -g L='|less'

alias cat="/home/justin/bin/go/ccat"

alias -g NUL="> /dev/null 2>&1"

alias ls='ls --color=auto'

alias l="ls -1"

alias rm="mv --force -t ~/.archive"

alias R="\rm -rf"


alias nvim="$HOME/bin/nvim-linux64/bin/nvim"

alias vim="nvim"

alias mkdir="mkdir -pv"

alias python="python3"

alias py="python3"

alias pyvenv="python3 -m venv venv"

alias pinstall="pip install"

alias sourcevenv="source venv/bin/activate"

alias zshconfig="vim ~/.zshrc; zsh"

alias mkserve="mkdocs serve"

alias mkbuild="mkdocs build"

alias vimconfig='vim ~/.config/nvim/init.vim'

alias svimconfig='vim ~/.SpaceVim.d/init.toml'

alias weztermconfig="vim ~/.wezterm.lua"

alias promptconfig="vim ~/.config/zsh/.oh-my-zsh/custom/themes/my.zsh-theme"

alias linode="ssh example@0.0.0.0"

alias rustdocs="rustup docs --book"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

### current prompt

```sh
PS1="%F{yellow}%~ %F{red} =%F{yellow}(%#)%F{red}=> "

RPS1="%F{green}%D %F{white}%T %F{red}%n%{$reset_color%}@%F{blue}%m %h%F{yellow} %Bjobs%b %j"
```
