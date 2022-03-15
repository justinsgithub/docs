# Nvim

> Vi => Vim => Nvim

# ~/.config/nvim/init.vim

```vim
" type :h and keyword for help about that topic
" type :options for every available option

set tabstop=4 softtabstop=4
set expandtab
set smartindent
set exrc " vim will read config files from current directory
set nu
set relativenumber
set nohlsearch "gets rid of annoying consistent search highlighting
set noerrorbells
set hidden
set guicursor=
set nowrap
set smartcase
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set incsearch
set termguicolors
set scrolloff=8
set noshowmode
set completeopt=menuone,noinsert,noselect
set signcolumn=yes
set cmdheight=2 " more space to display messages
set updatetime=50 "Having a longer update time leads to noticable delays and poor user experience ( default is 4000 ms / 4 seconds)
set  shortmess+=c " no pass messages to |ins-completion-menu|
set clipboard+=unnamedplus


" The default plugin directory will be as follows:
"   - Vim (Linux/macOS): '~/.vim/plugged'
"   - Vim (Windows): '~/vimfiles/plugged'
"   - Neovim (Linux/macOS/Windows): stdpath('data') . '/plugged'

" You can specify a custom plugin directory by passing it as the argument
"   - e.g. `call plug#begin('~/.vim/plugged')`
"   - Avoid using standard Vim directory names like 'plugin'
   
" Make sure you use single quotes

" PLUG INFO AT 'https://github.com/junegunn/vim-plug

" Initialize plugin system
call plug#begin()

"Plug 'https://github.com/junegunn/vim-github-dashboard.git' Any valid git URL is allowed

Plug 'neovim/nvim-lspconfig'

Plug 'junegunn/vim-easy-align' " Shorthand notation; fetches https://github.com/junegunn/vim-easy-align

Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets' " Multiple Plug commands can be written in a single line using | separators

"Plug 'neoclide/coc.nvim' 

Plug 'nvim-telescope/telescope.nvim'

Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' } " On-demand loading

"Plug '~/my-prototype-plugin' Unmanaged plugin (manually installed and updated)

call plug#end()


" HOW TO REMAP

"mode+options KEY(s)-TO-PRESS THE-ACTION(S)-TO-EXECUTE
"nnoremap Y y$

" set key to start many shortcut actions
let mapleader = " "

"nnoremap = n(normal mode) no(no recursive) remap(re assign this key(s) to this actions(s))
nnoremap Y y$
" yank to end of line like D natural behavior
" nnoremap D d$ 


" more friendly undos 
inoremap , , <c-g>u
"inoremap = i(insert mode) no(no recursive) remap(re assign this key(s) to this actions(s))
inoremap . . <c-g>u
inoremap ! ! <c-g>u
inoremap ? ? <c-g>u

" move text more efficiently 
" implement later 
" vnoremap 
" vnoremap
" inoremap
" inoremap
" nnoremap
" nnoremap
```
