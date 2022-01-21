# Lua NeoVim

## directory structure

```shell 
.
├── init.lua
├── LICENSE
├── lua
│   └── user
│       ├── alpha.lua
│       ├── autocommands.lua
│       ├── autopairs.lua
│       ├── bufferline.lua
│       ├── cmp.lua
│       ├── colorscheme.lua
│       ├── comment.lua
│       ├── gitsigns.lua
│       ├── impatient.lua
│       ├── indentline.lua
│       ├── keymaps.lua
│       ├── lsp
│       │   ├── handlers.lua
│       │   ├── init.lua
│       │   ├── lsp-installer.lua
│       │   ├── null-ls.lua
│       │   └── settings
│       │       ├── jsonls.lua
│       │       └── sumneko_lua.lua
│       ├── lualine.lua
│       ├── nvim-tree.lua
│       ├── options.lua
│       ├── plugins.lua
│       ├── project.lua
│       ├── telescope.lua
│       ├── toggleterm.lua
│       ├── treesitter.lua
│       └── whichkey.lua
├── plugin
│   └── packer_compiled.lua
└── README.md
```

## config files

### nvim-tree.lua

```lua 
{! configs/nvim/lua/user/nvim-tree.lua !}
```

- keymaps.lua

```lua 
{! configs/nvim/lua/user/keymaps.lua !}
```
### plugins.lua

- ~/.config/nvim/lua/user/plugins.lua

- packer.nvim for plugin manager

- install plugins here

```lua 
{! configs/nvim/lua/user/plugins.lua !}
```

### colorscheme.lua

- set colorscheme in ~/.config/nvim/lua/user/colorscheme.lua
- :colorscheme TAB will show you list of built in colorschemes
- custom colorscheme directory = ~/.local/share/nvim/site/pack/packer/start/colorschemes

```lua 
{! configs/nvim/lua/user/colorscheme.lua !}
```

### bufferline.lua

```lua 
{! configs/nvim/lua/user/bufferline.lua !}
```

## details

### setup

```shell
mv ~/.config/nvim ~/.config/oldnvim
git clone git@github.com:ChristianChiarulli/Neovim-from-scratch.git ~/.config/nvim
```
- neovim will look for the ~/.config/nvim/init.lua file first and run any commands / configurations it finds in there

- ~/.config/nvim/init.lua sources the files in ~/.config/nvim/lua/user to keep configurations modular and organized

- ~/.config/nvim/lua/user can be renamed to anything but it needs to have its own namespace or it might have mess with NeoVim setup

- config directory is ~/.config/nvim
- ~/.config/nvim/init.lua is entry point
- ~/.local/share/nvim is where neovim plugins keep their code
- when requiring a directory, it automatically looks for init.lua
- gt switches between tabs 
- Bdelete closes current buffer without closing Vim 
- bdelete closes buffer and Vim
- right click a buffer to close it instead of open it 

### LSP

- Language Server Protocol

- :LspInstalllInfo shows available language servers
