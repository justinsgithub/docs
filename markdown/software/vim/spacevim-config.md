# SpaceVim

> quick and easy vim / nvim configuration

## my configuration file

> $HOME/.SpaceVim.d/init.toml

```toml
[options]
    autocomplete_method = "coc"
    autocomplete_parens = false
    automatic_update = true
    colorscheme = "molokai" # gruvbox hybrid molokai material nord one onedark palenight jellybeans srcery NeoSolarized OceanicNext SpaceVim
    default_indent = 4
    enable_guicolors = true
    enable_vimfiler_welcome = true
    expand_tab = true
    filemanager = "nerdtree" # defx vimfiler
    filetree_direction = 'left'
    search_highlight_persist = false
    project_rooter_outermost = false
    relativenumber = true
    snippet_engine = "ultisnips"
    statusline_separator = 'arrow'
    vimcompatible = false
    windows_leader = "s"
    wrap_line = true
[[layers]]
    name = "default"
[[layers]]
    name = 'autocomplete'
    auto_completion_return_key_behavior = "complete"
    auto_completion_tab_key_behavior = "smart"
[[layers]]
    name = "colorscheme"
#    random_theme = true
    #frequency = "1h"
[[layers]]
    name = 'shell'
    default_position = 'top'
    default_height = 30
[[layers]]
    name = 'lang#javascript'
#    auto_fix = true
#    enable_flow_syntax = true
#    format_on_save = true
[[layers]]
    name = 'lang#python'
    python_interpreter = '/bin/python3'
    python_file_head = [
      '#!/bin/python3',
]
[[layers]]
    name = 'lsp'
    filetypes = [
        "css",
#        "html",
        "javascript",
        "javascriptreact",
        "python",
        "sh",
        "typescript",
        "typescriptreact",
#       "vim",
        "vue",
#"rust",
    ]
#   [layers.override_cmd]
#       rust = ["rls"]
[[layers]]
    name = "format"
    format_on_save = true
    format_method = "codefmt"
[[layers]]
    name = "fzf"
[[layers]]
    name = "lang#typescript"
[[layers]]
    name = "lang#vue"
[[layers]]
    name = "lang#html"
    emmet_leader_key = "<C-e>"
    emmet_filetyps = ['html']
[[layers]]
    name = "lang#css"
[[layers]]
    name = "lang#rust"
[[layers]]
    name = "lang#vim"
[[layers]]
    name = "lang#toml"
[[layers]]
    name = "lang#sh"
[[layers]]
    name = "lang#markdown"
[[layers]]
    name = "edit"
[[layers]]
    name = "tools"
[[layers]]
    name = "ssh"
[[layers]]
    name = "sudo"
[[layers]]
    name = "treesitter"
[[layers]]
    name = "ui"
    enable_sidebar = false
    enable_scrollbar =  false
    enable_indentline = false
    enable_cursorword  = false
    indentline_char = ''
    conceallevel = 0
    concealcursor = ''
    cursorword_delay = 50
    cursorword_exclude_filetype = []
    indentline_exclude_filetyps = []
[[layers]]
    name = 'VersionControl'
[[custom_plugins]]
    repo = "mhartington/oceanic-next"
[[custom_plugins]]
    repo = 'ryanoasis/vim-devicons'
[[custom_plugins]]
    repo = 'maxmellon/vim-jsx-pretty'
[[custom_plugins]]
    repo = "lilydjwg/colorizer"
[[custom_plugins]]
    repo = 'PhilRunninger/nerdtree-visual-selection'
[[custom_plugins]]
    repo = 'PhilRunninger/nerdtree-buffer-ops'
[[custom_plugins]]
    repo = 'tiagofumo/vim-nerdtree-syntax-highlight'
[[custom_plugins]]
    repo = 'Xuyuanp/nerdtree-git-plugin'
```
