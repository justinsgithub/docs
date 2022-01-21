#  Linux Command Line

### quick Linux intro 

- Linux broadly refers to a free, open-source operating system first released by Linus Torvalds in 1991
- Linux is really just the name of the kernel
- a kernel allows software to communicate with a computers hardware
- Linux was inspired by Unix, which in turn was inspired by MINIX
- Linux is free software under the GPL (GNU General Public License)
- all Linux systems run a version of the Linux kernel
- most Linux systems use the same set of core tools called the GNU coreutils
- the combination of these tools and the kernel are referred to as GNU/Linux
- Linux distributions are operating systems that include the kernel and various other software
- Distribution maintainers make choices about how their distributions are configured and what tools they provide
- many distributions are related to each other:
    - Arch, Debian, Red Hat, Slackware, and others
    - we choose a distro based on many factors

- Debian:
    - Ubuntu  
    - Linux mint  
    - Elementary OS  
    - Kali Linux

- all distributions differ in various ways 
- the command line or shell is common to all of them 
- the Bash shell is very widely used and widely available

- Red Hat:
    - CentOS
    - Fedora
    - Red Hat Enterprise Linux

## Unix 

### what is Unix?

- an operating system
- created around 1970 by AT&T employees working at Bell Labs
- many of the Bell Labs employees were involved in the design of a mainframe operating system called MULTICS
- MULTICS = Multiplex Information and Computing Service
- back around 1970 mainframes were expensive, so users were granted timesharing slots to do their work, often by logging in from a remote terminal with less computing power 
- MULTICS was designed to manage that remote login, timesharing process
- MULTICS became a large and complex project and Bell Labs decided to pull out of it
- the employees who worked on it still liked the projects goals, so like as side project, they worked on building a smaller and simpler version
- their first version only supported a single user, so as a play on the name MULTICS, they called it UNICS
- UNICS = Uniplexed Information and Computing Service
- UNICS became able to support multiple users and was renamed Unix (not an acronym anymore)
- at this point Unix was now a main frame operating system being used by Bell Labs
- 2 events gave Unix a big boost in popularity
- in 1972 Unix was rewritten in the C programming language
- prior operating systems were typically written in Assembly, a very low-level programming language
- Assembly requires code to be written for specific computer hardware
- Assembly is very fast but it is not portable, if you wanted to take your operating system to new hardware, you had to rewrite portions of your code
- The C programming language language was originally designed to write programs for the Unix operating system
- C is a low level language, but not as low level as Assembly, and so the programs are easier to write, and they are hardware-independent 
- the developers liked C and decided to rewrite the whole Unix operating system using it, so Unix became portable to other hardware
- the next important event is the spread of Unix outside of AT&Ts Bell Labs
- a court order in an antitrust case forbid AT&T from entering the computer software business, so AT&T could not sell the Unix operating system, but they could give it away  
- if you wrote to AT&T and asked for a copy of Unix, they would give you a free license, and send you all the source code
- free high-quality software was very attractive to government agencies, corporations, and especially universities, who'd bought these expensive mainframe computers 
- Unix spread quickly and in 1975 programming was taking off and students at universities were learning to program on mainframe computers using Unix
- those students went on to work at corporations and software companies, and took their fondness of Unix with them
- since then Unix has grown an improved 

### branches and improvements

- the first public version of Unix in 1975 is often referred to as System 5
- over time more branches have been released and that still continues today 
- one of the most famous of these is the Berkeley Software Distribution (BSD)
- Linux is open source and comes in many variations, such as Red Hat, CentOS, Debian, Ubuntu, Kali, Gentoo

## command-line basics

### what is the command line? 

- allows us to interact with programs using text commands
- command-line programs can read text inputs and output text to the screen 
- command-line programs can read and write from files and the network 
- Bash is a widely used shell or command-line interpreter
- Bash was released in 1989 and is named Bourne Again SHell
- Bash builds on earlier shells, like Bourne shell and Thompson shell
- Many other shells are available, offering varying features
- Bash is widely available on Linux
- command-line interface (CLI) is any place we can enter text commands
- a shell is a piece of software that interprets typed commands and runs them
- terminal is a software that a shell program runs inside of
- these terms are easily confused with each other 

### command structure

- command option(s) argument(s)
- commands are programs that are available on a system
- when we run a command, the system takes a specific action
- many commands have short names in order to save typing
- command names can seem tricky at first
- many aspects of the command line are all about efficiency
- commands are programs that take a particular action
- options tell the command ***how*** to operate, changing the behavior of the command
- options often begin with a dash or minus sign (like -e or -s)
- options are often represented by one letter or number
- most commands offer more than 1 option
- options can be used together 
- arguments tell the command ***what*** to operate on 
- this could be files, directories, urls, etc 

### write commands in a shell at the prompt

- F11 makes terminal full screen 
- spacing matters 
- spelling command names matters
- misspelled commands usually will just fail 
- mistyped options or arguments can cause unexpected outcomes or data loss
- always double check what you've typed before you run a command
- most commands are programs installed
- many common utilities come from the GNU coreutils 
- the system provides ways for us to find programs

### finding help for commands

- Albert Einstein was credited with saying he didn't keep certain technical information in his mind because it was readily available in books
- you do not have to memorize everything
- the command ***man*** opens the manual pages
- manual pages are the built-in documentation for commands
- the highlighted line at bottom of terminal will show what line your cursor is on
- many commands also have the --help option to get help for the command 
- ***help*** command outputs help for Bash
- ***apropos*** searches through installed programs that can be used as commands and searches their descriptions for text that you provide as an argument
- apropos list will show all options for commands that perform some type of list action or that perform actions on some type of list item

### helpful keyboard shortcuts in the terminal 

- `^ = ctrl`

- tab completion:
    - automatically completes a file, command, or folder name
    - makes guesses based on the contents of the path

- text navigation shortcuts:
    - ctrl a = move to beginning of line
    - ctrl e = move to end of line
    - ctrl left = move backward a word at a time
    - ctrl right = move forward a word at a time
    - ctrl u = delete from cursor to line start 
    - ctrl k = delete from cursor to line end
    - ctrl shift c = copy selected text to clipboard
    - ctrl shift v = paste selected text from clipboard
    - up / down arrow = scroll previous commands 
    - ctrl r = search command history, ctrl r again cycles through search results
    - ctrl c = cancel command

- long commands or long series of commands can wrap at the window boundary, but these are still considered one line
- a line is any text we type at the command prompt before pressing return


## files, directories, permissions

### Linux file system

- file determines a file type 
- stat displays a files status
- in a Linux system everything is thought of as a file
- we organize these files into directories which are sometimes called folders 

- how directories are organized: 

    - working at the command line we will often need to refer to files and directories that represent the input, output, or the configurations for commands we use
    - we also need to know where commands are located on the system
    - on a Linux system files and directories are part of the file system, which defines the way the data is represented on the system's storage media
    - the file system keeps track of and represents files on the system's storage
    - Most Linux distributions follow the FHS (Filesystem Hierarchy Standard) 
    - the FHS defines where certain kinds of files are stored on the file system 
    - having files like configurations, programs, or binaries and so on in predictable locations is important to the operability to the software across Linux distributions

- each Linux system only has one file system and everything else, directories, external hard drives, network shares, and so on are represented within it 

### understanding file paths 

- in order to refer to locations on the filesystem we use a path, a string of text that represents a file or directory within the file system

### navigating the file system

- use backslash or quotes to refer to folders or files with space in them 
- ls -R recursively lists directories and subdirectories

### copy move delete files and directories

- cp = copy files, cp -R = copy directories
- mv = move or rename files
- wildcards are characters that stand for or represent patterns in text
- * = any number of characters
- ? = one character
- `mv dir1/* dir2` = moves all files from dir1 to dir2
- `mv dir1/*txt dir2` = moves all files ending in txt to dir2
- `mv dir1/*.css dir2` = moves all files ending in .css to dir2
- rm = remove file
- rm file?.txt  = removes any file starting with file and ending with .txt, that has 1 letter in between (file1.txt files.txt filer.txt file%.txt)

### find files from the command line 

- the find command:

    - finds files 
    - find ~/ -name "text\*" = finds all files & dirs with a name starting in text starting from our home dir
   - find ~/ -name "\*t\*" will find everything with t in the name
    
### understand user roles and sudo

- multiuser environment:
    - older systems didn't have the concept of separate users
    - who ever used the system was the system admin and could do whatever they want
    - modern systems allow multiple users with there own private files

- su $USERNAME = switch user to $USERNAME, will need to provide password
- root / superuser is like the admin of the system and can make any changes to the system
- sudo allows normal users with the proper privileges to make admin changes
- sudo -k = turns off superuser privileges
- sudo -s = logs into root shell 

### understand file permissions

- file permissions are the way we tell the system which users and groups of users are allowed to access any given file and in what ways
- when a user tries to access a file, the system consults the permission mode of a file and only allows the user access if they are permitted to have it 

- the sequence of letters breaks down into 3 sections
- the first section represents the user designated as owner of the file
- the second section represents a group

    - a group is a collection of users for whom we can define specific access to the file

- the third section represents the access to the file for all other users who are not the files owner or in the group designated in the group section

- each of the sections in the 9 letters breaks down into 3 letters
- rwx = read write execute
- `r--` = someone can modify the contents of a file but not modify it or execute it
- `-w-` = someone can make changes to a file but not read the contents or execute it
- `--x` = someone can run the file, as in a command or program, but not read or write it
- d may be included at the beginning of the 9 letters to signify a directory
- l may be included to signify the file is a link

```shell

rwxrwxrwx file1

rwxr-xr-x file2

```

- chmod = changes the permission mode string
- chown = changes the owner of a file
- chgrp = changes the group of a file

- chmod can be used in different ways


- octal notation: 

    - uses 3 values to represent rwx, such as (755 644 777)


    |      |read(4)|write(2)|execute(1)|result|
    |------|-------|--------|----------|------|
    |user  |r      |w       |x         |7     |
    |group |r      |-       |x         |5     |
    |others|r      |-       |x         |5     |


    |      |read(4)|write(2)|execute(1)|result|
    |------|-------|--------|----------|------|
    |user  |r      |w       |x         |7     |
    |group |r      |-       |x         |5     |
    |others|r      |-       |-         |4     |


    |      |read(4)|write(2)|execute(1)|result|
    |------|-------|--------|----------|------|
    |user  |r      |w       |x         |7     |
    |group |r      |w       |x         |7     |
    |others|r      |w       |x         |7     |

- octal table: 

    |octal value|mode|
    |-----------|----|
    |     0     |--- | 
    |     1     |--x | 
    |     2     |-w- | 
    |     3     |-wx | 
    |     4     |r-- | 
    |     5     |r-x | 
    |     6     |rw- | 
    |     7     |rwx | 


- symbolic notation: 

    - uses a shorthand for user, group, others, and all (a=r g+w o-x)


    |         |read(r)|write(w)|execute(x)| mode |
    |---------|-------|--------|----------|------|
    |user(u)  |+      |+       |x         |u+rwx |
    |group(g) |=      |        |          |g=r   |
    |others(o)|-      |        |          |o-rwx |
    |all(a)   |=      |=       |=         |a=rwx |

- `+` adds permission
- `-` removes permission
- `=` resets permissions to match new mode (removes previous mode)


- octal symbolic comparison table: 

    |octal value|   symbolic value  | result  |
    |-----------|-------------------|---------|
    | 777       |   a=rwx           |rwxrwxrwx|
    | 755       |u=rwx, g=rx, o=rx  |rwxr-xr-x|
    | 644       |u=rw, g=r, o=r     |rw-r--r--|
    | 700       |u=rwx, g-rwx, o-rwx|rwx------|

- using octal notation is similar to using symbolic = all the time

    |original mode|   symbolic value  | result  |
    |-----------|-------------------|---------|
    |rw-r--r--  |   +x              |rwxr-xr-x|
    |rwxrwxrwx  | g=w, o=r          |rwx-w-r--|
    |rwxr-----  | g+w, o+r          |rwxrw-r--|
    |rwxrwxrwx  |   a-x             |rw-rw-rw-|

### modify file permissions

- there is no single standard on default permissions in users home directory and they vary by distro
- 755, 644, 700 are common

### create hard and symbolic links

- links are files that reference other files
- used to avoid having multiple copies of the same file in different places
- we keep 1 file in 1 location, and then add a little pointer or link to other places where we want the file to appear

- 2 types of links, hard links and soft / symbolic links
- a hard link points to specific data (by inode) on the disk
- a soft link or symbolic link (symlink) points to another file
- the 2 types of links work in different ways 

```shell
ln -s source-file.txt source-file-link.txt
```
- if you edit source-file-link.txt you would be editing source-file.txt as well 
- of either file is moved, the link will break and source-file-link.txt will no longer point to source-file.txt
- source-file-link.txt would hold in memory a relative path to source-file.txt, so if either file moves, the relative path is no longer accurate

```shell
ln -s /home/user/absolute-path.txt soft-link.txt
```

- if we use an absolute path, source-file-link.txt can be moved anywhere and it will still appropriately point to source-file.txt, but moving the source-file.txt would still break the link

```
ln source-file2.txt file2-hard-link.txt
```

- all files are pointers to a spot in memory which actually contains the data
- a hard link creates another pointer to the data that the first file is pointing at 

## tasks & tools

### Unix philosophy

- tools should do 1 thing and do it well 
- in this case, doing something well means being a well behaved citizen of the ecosystem of tools that operate using text interfaces
- the tool should expect to take in a file or stream and output text in a reasonable format once it's done processing or doing whatever action that particular tool does
- this philosophy suggests that we shouldn't have tools that try to do too much
- we don't want 1 single tool or program that reads files and separates the text into another file and renames the file and compresses it into an archive when it's done, or one that tries to do everything anyone could possibly want to do 
- tools should be designed to be used together in different ways 
- the standard GNU coreutils follow this pattern
- we do not want to think of these tools as multifunction swiss army knives
- we want to think of these tools as a well-stocked kitchen of chef's tools
- we can open a can with a little Swiss Army Knife attachment, or try to chop a tomato with a tiny blade, but none of these tools would do a job particularly well, we want tools that will give us the ability to make meals we are proud of and that can work together easily and be used in different combinations to do whatever we need
- think of an assembly line where 1 machine does 1 task and the passes on to the next specialized machine, rather than 1 robot doing different tasks on the same item, it would not be nearly as efficient 
- having separate dedicated tools allows us to pick appropriate tools from our toolbox to do exactly what we need to do 
- we want to be able to incorporate the right tools into doing a task as flexibly as possible

### using pipes

- pipes take the output of 1 command and send it to another
- think of commands as little processing units that do 1 particular thing and pipes as connections between those units 
- we can use pipes to take the output of the cat command and then instead of displaying the text on the screen, pass the result to the sort command

```shell 
cat users.txt | sort -u | ...
```

- the pipe character is represented by a vertical bar

- below pipes hello to wc and tells use there is 1 line, 1 word, and 6 characters
- wc counts the invisible newline (\n) character that is at the end of every new line in a text file

```shell 
echo hello | wc
1       1       6
```

- you can pipe anything to anything else and usually it will do what you expect

### cat head tail less

- cat: 
    - concatenate means to link together
    - can be used to output text file contents to the screen or to another program
    
- head, tail: 
    - view lines from the beginning or end of a file
    - head my-file.txt = outputs first 10 lines of file
    - head -n5 my-file.txt = outputs first 5 lines of file
    - less my-file.txt = outputs last 10 lines of file
    - less -n5 my-file.txt = outputs last 5 lines of file

- less:
    - displays text one page or screenful at a time and provides navigation controls

```shell
cat -n text.txt  | tail -n5
     9	saf
    10	asdf
    11	asd
    12	f
    13	asd
```

```shell 
tail -n5 text.txt | cat -n 
     1	saf
     2	asdf
     3	asd
     4	f
     5	asd
```


### search with grep 

- grep = get regular expression
- grep command searches files for matching patterns
- match patterns can be regular expressions
- -n will output line numbers as well 
- -i will make search insensitive
- -v will only output lines NOT matching our search

```shell
1:the purple dog
4:the moon 
5:i am the blah
8:the 
10:what in the world 
11:i am the 
12:of the year
13:the 1 
14:the 2
16:the 5
```

- grep -E "[jklo]" test.txt = finds all lines containing either j k l or o
- grep -E "\w{9,}" test.txt = finds all lines containing words with 9 or more characters

### awk sed sort 

- one of the tasks of a system administrator, systems analyst, scientist, or programmer is to make use of data from various logs or outputs

- awk:
    - is commonly used to extract specific text from a file according to a rule
    - awk programs can be written from the command line or stored in a file 

- sed:
    - a stream editor
    - excels at changing data as it flows through a command pipeline, or in place in a file

- we can use either tool in a command pipeline or just by themselves

```shell
cat random-users.txt               
Name    Id    Team 
Scott   314   Purple
Ananti  991   Orange
Jian    3127  Purple 
Miguel  671   Green
Wes     1337  Orange
Anne    556   Green
```

```shell
awk '{print $2}' random-users.txt
Id
314
991
3127
671
1337
556
```

```shell
awk '{print $2 "\t" $1}' random-users.txt
Id	Name
314	Scott
991	Ananti
3127 Jian
671	Miguel
1337 Wes
556	Anne
```

```shell 
awk '{print $2 "\t" $1}' random-users.txt | sort -n
Id	Name
314	Scott
556	Anne
671	Miguel
991	Ananti
1337 Wes
3127 Jian
```

```shell
sed s/Orange/Red/ random-users.txt 
Name    Id    Team 
Scott   314   Purple
Ananti  991   Red
Jian    3127  Purple 
Miguel  671   Green
Wes     1337  Red
Anne    556   Green
```

```shell
sort random-users.txt             
Ananti  991   Orange
Anne    556   Green
Jian    3127  Purple 
Miguel  671   Green
Name    Id    Team 
Scott   314   Purple
Wes     1337  Orange
```

```shell
# sorting second column by first character
sort -k2 random-users.txt
Wes     1337  Orange
Jian    3127  Purple 
Scott   314   Purple
Anne    556   Green
Miguel  671   Green
Ananti  991   Orange
Name    Id    Team 
```

```shell
sort -k2 -n random-users.txt
Name    Id    Team 
Scott   314   Purple
Anne    556   Green
Miguel  671   Green
Ananti  991   Orange
Wes     1337  Orange
Jian    3127  Purple 
```

- rev = prints text in reverse sequence 
- tac = concatenates or displays files in reverse
- tr = translates or modifies individual characters according to arguments

### tar and zip archives

- in the early days of computer systems and still today, data that needed to be archived for safe keeping was recorded to back-up tapes and stored in a closet or basement (or ideally in a more suitable and secure location)
- in order to store files on a linear medium like tape, files are recorded to the tape 1 after another, in sequence, like songs on an audio cassette 
- instead of using a tape, we can also create a file that contains other files in this sequence
- .tar = tape archive files
- .tar files are common for distributing, sharing, and archiving files on linux systems
- it is much easier (in many ways), to send 1 large file than several small files
- .tar files often do not involve any compression, but there are ways to incorporate compression into a .tar file 
- compression tries to reduce the size of a file using some mathematical tricks
- if using compression with a tar archive, you will often see that the file is named with and extension to indicate what kind of compression is being used
- compressed formats = .tar.gz, .tgz, .tar.bz2, + others
- .tar.gz, .tgz = a tar file with g-zipped compression
- .tar.bz2 = a tar file with b-zipped compression

```shell
tar -cvf new-tar.tar my-folder

# -c option says create an archive
# -v option tells tar to be verbose
# -f options tells tar to output the tar to specified file name
```

```shell
tar -caf new-gz-tar.tar.gz my-folder

# -a option says use compression method specified by file extension (.gz)
```

```shell
tar -caf new-bz-tar.tar.bz2 my-folder

# works with other compression methods such as b-zipped as well
```

```shell
tar -xf my-tar.tar.gz -C tar-directory

# unpacks tar to specified directory
```

- the zip and unzip commands can create and open compressed data archive files called zip files
- the zip format is more cross platform friendly

```shell
zip -r my-zip.zip my-folder

# -r option to zip directory and all files inside
```

```shell
unzip my-zip.zip
```

```shell
unzip my-zip.zip -d my-zip-directory
```

### output redirection

- text in a shell travels through 1 of 3 streams
- text can be redirected to the screen or to files

|         stream        |number|    usage    |
|-----------------------|------|-------------|
|standard input(stdin)  |  0   | text input  |
|standard output(stdout)|  1   | text output |
|standard error(stdin)  |  2   | error text  |

```shell
ls
CNAME  code-examples  deploy.sh  docs  mkdocs.yml  README.md  requirements.txt  src  venv
```

```shell
ls > std-output.txt
```

```shell 
ls fake-file        
ls: cannot access 'fake-file': No such file or directory
```

```shell 
ls fake-file > std-output.txt        
ls: cannot access 'fake-file': No such file or directory
```

```shell 
ls fake-file 2> std-err.txt        
```

```shell
>std-err.txt 

# erases std-err.txt contents 
```

- `>` replaces content in file
- `>>` adds to content in file

### environment variables and PATH

- env = look at environment variables, such as PATH
- echo $PATH = outputs PATH variable
- PATH = a list of files or directories where the shell looks for commands / programs / scripts
- which = shows location of specified command
- we can modify where the system looks for executables
- sometimes when adding software we might want to add the path to that software (like nvm, cargo)
- we can edit PATH in ~/.bash_profile ~/.bashrc ~/.zshrc among other places

## more advanced topics

### Linux distribution info

- find files with distribution release information

```shell
ls -l /etc/*release
-rw-r--r-- 1 root root 104 Aug  4 07:53 /etc/lsb-release
lrwxrwxrwx 1 root root  21 Jan  5 09:33 /etc/os-release -> ../usr/lib/os-release
```

```shell 
cat /etc/lsb-release           
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=20.04
DISTRIB_CODENAME=focal
DISTRIB_DESCRIPTION="Ubuntu 20.04.3 LTS"
```

```shell 
cat /etc/os-release 
NAME="Ubuntu"
VERSION="20.04.3 LTS (Focal Fossa)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 20.04.3 LTS"
VERSION_ID="20.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=focal
UBUNTU_CODENAME=focal
```

- uname = find version of linux kernel in use

```shell
uname -a          
Linux justin-HP-Laptop-15-dw1xxx 5.11.0-46-generic #51~20.04.1-Ubuntu SMP Fri Jan 7 06:51:40 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
```

```shell
uname -r
5.11.0-46-generic
```

### hardware and disk information

- memory information

```shell
free -h 
              total        used        free      shared  buff/cache   available
Mem:          3.6Gi       1.9Gi       153Mi       271Mi       1.6Gi       1.2Gi
Swap:         2.0Gi       862Mi       1.2Gi
```

- cat /proc/cpuinfo = output processor resources

- df = report file system disk space usage

```shell
df -h 
Filesystem      Size  Used Avail Use% Mounted on
udev            1.8G     0  1.8G   0% /dev
tmpfs           374M  1.7M  372M   1% /run
/dev/sda2       117G   54G   58G  49% /
tmpfs           1.9G     0  1.9G   0% /dev/shm
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           1.9G     0  1.9G   0% /sys/fs/cgroup
/dev/loop2       56M   56M     0 100% /snap/core18/2253
/dev/loop1      128K  128K     0 100% /snap/bare/5
/dev/loop4       56M   56M     0 100% /snap/core18/2284
/dev/loop0      218M  218M     0 100% /snap/code/85
/dev/loop3       62M   62M     0 100% /snap/core20/1270
/dev/loop5      100M  100M     0 100% /snap/core/11993
/dev/loop6      165M  165M     0 100% /snap/gnome-3-28-1804/161
/dev/loop7       33M   33M     0 100% /snap/snapd/12704
/dev/loop8      128K  128K     0 100% /snap/hello-world/29
/dev/loop9       29M   29M     0 100% /snap/muccadoro/3
/dev/loop10      99M   99M     0 100% /snap/neovide/120
/dev/loop11      72M   72M     0 100% /snap/lunatask/8
/dev/loop12     128K  128K     0 100% /snap/software-boutique/54
/dev/loop13      66M   66M     0 100% /snap/gtk-common-themes/1519
/dev/loop14      44M   44M     0 100% /snap/snapd/14295
/dev/loop15      11M   11M     0 100% /snap/nvim/1722
/dev/loop16      64M   64M     0 100% /snap/pomotroid/6
/dev/sda1       511M  5.3M  506M   2% /boot/efi
tmpfs           374M   80K  374M   1% /run/user/1000
```

- lshw = list hardware


### package manager

- apt search tree = searches for all packages with tree in name or description
- apt show tree = shows information for package tree
