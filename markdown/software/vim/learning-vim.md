# Learning Vim

## Lindy Effect

- the longer a technology has been around, the more likely it is to remain in use

## buffers tabs windows

- a buffer is a file which is loaded into memory 
- a buffer in vim is like a tab in other text editors
- use :vsplit to open a new window, which is a window into the same buffer you split from 
- making a change in one buffer window will change the other buffer window as well (since they are the same buffer )
- :tabnew % will open a new tab with the current buffer
- :tabnew will open a new tab with an empty file
- buffers are how we track all of the files we currently have opened in vim
- tabs are more of a way of organizing how we navigate the buffers, or maybe have one 2 projects open at 1 time, which all the files we are editing from all the tabs will be included in our list of buffers
- gt switches between tabs 
- opening a new tab and a new buffer, and then closing that tab, will still keep that buffer in vims memory for us to continue editing
- people want to think of tabs as collections of buffers (but they are not, unfortunately)

## abbreviations

- :abb mygmail justinaawd@gmail.com = auto expands mygmail to justinaawd@gmail.com
- use ctrl+v+ space to stop the abbreviation from expanding
- use abbreviations to autocorrect commonly misspelled words
- :abb succes success 
- :abb sucess success 

## commands from vim
    
- :! ls = runs ls and displays the output
- :! touch testing.txt = creates new file named testing.txt
- :! rm testing.txt = removes testing.txt
- :com! PY3 ! python3 % = :PY3 runs current file with python3
- :comm! WC ! wc % = :WC counts words in current file

## basics

- ctrl + g to see current file you are editing
- { = move backward a paragraph
- } = move forward a paragraph 
- ( = move backward a sentence
- ) = move forward a sentence
- ctrl + f  = move page forward
- ctrl + b = move page backward
- * = search forward for current word
- # = search backward for current word
- 8 j = jump down 8 lines
- 8 k = kick up 8 lines
- 8G = move to line 8 

- ctrl o  jump back through history 
- ctrl i jump forward 

- .  go to location of last change you made
- split opens new window into same buffer
- trl w switch windows
- trl w c close window
- e! reopen current file in its initial state
- r my-snippet.txt pastes my-snippet.txt into current file 
 
- -1 "" inserts file at line 1

- noremap <space> <ctrl f> scroll down

## : commands

- :8 = go to line 8 

## regular expressions

- / = search forward from cursor position 
- ? = search backward from cursor position
- get to text by searching 
- /my-text = any word containing my-text
- /te.h = any word containing tech

## visual mode

- v = enters visual mode
- v + 3k + d = delete 3 highlighted lines

## visual line mode

- shift+v =  creates visual line
- shift+v+2j = highlight 2 lines
- shift+d = delete highlighted lines

## visual block mode

- ctrl+v  = creates visual block
- l+4j+d= deletes the 8 highlighted blocks
- l+4j+x= deletes the 8 highlighted blocks
- l+4j+c+-+esc = inserts - at 4 lines

## registers

- "+a+yy = yank current line into register a 
- "+a+p = paste line in register a

## search and replace

- :%s/replace-this/with-this/gc = confirm before replacing

## marks

- create a mark using m+LETTER
- jump back to that mark using '+LETTER


