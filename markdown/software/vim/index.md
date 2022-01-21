# Vim Text Editor

> Vi IMproved

non-exhaustive documentation

## about Vim
* acronym for Vi IMproved
* free and open source text editor written by Bram Moolenaar 
* was first released in 1991 for UNIX variants
* main goal was to provide enhancement to the Vi editor
* Vi editor was released 1976, by Bill Joy
* modal editor, which means it has different modes or ways to edit text
* command centric editor that is available everywhere
* Vim traditionally does not have GUI but now there is separate installer called gVim which provides GUI

## modes and features

- **command mode** is the default mode Vim starts in when first opened 
- **insert mode** is used to enter text, **press i** to start this mode
- **command line mode** is used to type commands, **press :** to start this mode
- **visual mode** is used to visually select text and run commands on selected lines or sections

## features

* memory footprint is very low
* command centric so performing complex text manipulations is quick and easy
* highly configurable and uses simple text files to store its configuration
* there are many plug-in available for Vim
* functionality can be extended in greatly using plug-ins
* supports multiple windows and can be split into multiple windows
* supports multiple buffers
* supports multiple tabs 
* supports recording features which allows to record and play Vim commands in repeated
manner

## general commands

> Vim supports h l  j  k as well as arrow keys for moving cursor

- i ( change to insert mode )
- esc ( change to command mode, default when opening Vim )
- : ( change to command line mode )
- v ( change to visual line mode )
- ZZ ( save and quit )

- h ( move cursor left )
- l ( move cursor right )
- k ( move cursor up a line )
- j ( move cursor down a line )
- 0 ( move cursor to beginning of current line )
- $ ( move cursor to end of current line )

- i ( insert, cursor starts at beginning of current character )
- I ( insert at beginning of line, cursor starts at beginning of current line )
- a ( insert / append, cursor starts after current character )
- A ( insert / append to end line, cursor starts at end of line )
- o ( insert / open, cursor starts on new line below )
- O ( insert / open, cursor starts on new line above )
- s ( substitute current character then enter insert mode )
- S ( substitute current line then enter insert mode )
- cc ( change line, delete current line then enter insert mode )
- r MYCHAR ( replaces the character under the cursor with MYCHAR )


## command-line mode

- :e Load new file in buffer for editing
- :edit Same as :e
- :e <tab> List the files for editing from current directory
- :edit <tab> Same as :e <tab>
- :edit <file-name> ( loads or creates new file with name <file-name>)
- :view <file-name> ( loads or creates new file with name <file-name> in read-only mode )
- :w ( save file )
- :w <file-name> ( save file with name <file-name>)
- :q ( quit )
- :q! ( quit without saving ) 
- :wq ( saves and quits )
- :help ( opens the help menu )


## tabs

- :tabnew <file-name> ( open <file-name> in new tab )
- :tabclose ( close current tab )
- :tabnext ( move to the next tab )
- :tabprevious ( move to the previous tab )
- :tabfirst ( move to the first tab )
- :tablast ( move to the last tab )

## buffers

- :badd <file> add <file> into new buffer )
- :bN ( switch to Nth buffer )
- :bnext ( move to the next buffer in buffer list )
- :bprevious ( move to the previous buffer in buffer list )
- :buffers ( list all buffers )
- :bfirst ( move to the first buffer )
- :blast ( move to the last buffer )
- :ball ( load all buffers )

## windows 

- :new ( open new window )
- :new <file> ( open file in new window )
