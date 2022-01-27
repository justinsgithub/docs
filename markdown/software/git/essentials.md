# Git Essentials

- Git helps you to manage the code in a project as you develop new features, helps to find and fix problems, and simplifies collaboration with other developers, whether working in an office or remotely 

## what is Git?

- software that tracks changes you make to files and directories
- keeps track of project versions

### version control 

- Git is a VCS (version control system) or SCM (source code management) tool
- VCS and SCM are often used pretty interchangeably

### history behind Git

- there are 5 different VCS that predate Git
- SCCS = Source Code Control System:
    - 1972: closed source, free with Unix
    - stored original version and sets of changes
    - was not the first but first to become popular 
    - released in 1972 and was developed by AT&T
    - it was bundled free with the Unix operating system
    - Unix was also free so it spread quickly to places such as universities and SCCS went along with it 
    - universities taught their students version control using SCCS so when they left the university to go work in jobs, the VCS they were familiar with and that they took with them was SCCS
    - SCCS saves the original document but then instead of saving the whole document a second time, it just saves a snapshot of what the changes were
    
- SCCS stayed dominant until the early 80's, when RCS was developed 

- RCS = Revision Control System:
    - 1982: open source
    - made lots of improvements over SCCS
    - it was cross platform whereas SCCS was Unix only
    - with the rise of the personal computer it was important to have a version control system that would also work on PCs
    - it was also more intuitive, had a cleaner syntax with fewer commands and more features
    - most importantly it was faster and alot of the speed increase came from the fact that it used a smarter storage strategy than SCCS
    - RCS kept the most recent file in it's whole form and it you wanted to go backwards in time and you wanted previous versions, then you applied the change snapshots to go in reverse
    - this new tracking method was alot faster because most of the time you want to look at the most current document

- a problem with RCS and SCCS were they only allowed work on 1 file at a time, which CVS allowed you to do 

- CVS = Concurrent Versions System: 
    - 1986 - 1990: open source 
    - multiple files, entire project
    - multi-user repositories
    - could put the repo on a remote server and more than 1 user can work on the same file at the same time, they can work concurrently

- SVN = Apache Subversion:
    - 2000: open source 
    - track text and images
    - tracked file changes collectively 
    - watched changes to a directory as a whole
    - actually took snapshots of the directory, not just the files
    - tracked the changes of a directory
    - would change the entire project and all files back to a previous version instead of just a single file at a time

- BitKeeper SCM:
    - 2000: closed source, proprietary
    - had a free community version
    - a company owned it and sold it
    - it had distributed version control
    - the free version was used for the source code management of the Linux kernel from 2002 to 2005
    - it was controversial to use a proprietary SCM for an open-source project
    - in 2005 the community version stopped being free

- Git:
    - April 2005 
    - created by Linus Torvalds, written from scratch to replace BitKeeper 
    - distributed version control
    - open-source and free software
    - faster than other SCM's (100 times in some cases)
    - better safeguards against data corruption


- Git had an explosion in popularity
- GitHub launched in 2008 to host Git repositories 
- in 2009 there were over 50,000 repositories with 100,000 users
- in 2011 there were over 2 million repos, over 1 million users
- 2018 GitHub purchased by Microsoft
- 2019 over 57 million repos, over 28 million users

### about distributed version control 

- different users each maintain their own repositories instead of working from a central repo
- changes are stored as sets or patches 
- focused on tracking changes, not the versions of the documents
- previous VCS would track the changes to get from version to version of each different file 
- Git focuses on these change sets and capturing those sets as discrete units
- those change sets can be exchanged between repositories
- "merge in change sets" or "apply patches"
- no single master repository 
- many working copies, each with their own combination of change sets
- no need to communicate with a central server, faster, no network access required to submit changes
- no single point of failure
- encourages participation and forking of projects 
- developers can work independently, make improvements or fix bugs, submit change sets for inclusion or rejection

## Git setup 

### basic configuration

- 3 places Git stores configuration information, depending how widely we want these configurations to apply
- system level configuration:
    - /etc/gitconfig
    - these are configs that will apply to every user of this user by default
    - each user can override it with their own custom configurations, but these are the default if they don't

- user level config:
    - ~/.gitconfig
    - configs that will apply only to a single user, which is going to be most of us, most of the time, working as a single user on a machine
    
- project level config:
    - my-project/.git/config 
    - we can have configurations that apply only to that project

- git provides commands to edit configs easily
- git config --system 
- git config --global 
- git config (inside of a project directory)

- git config --global user.name "first-name last-name"
- git config --global user.email "my-email@example.com"
- git config --global core.editor "vim"
- git config --global color.ui true

- git config --list = lists all possible configurations

- git config user.name = shows name 
- git config user.email = shows email

### auto-completion

- go to https://github.com/git/git/tree/master/contrib/completion
- click on git-completion for your shell 
- follow instructions 
- do the same for git-prompt.sh as well

### Git help

- a useful tool for finding out more information about git
- git help $SUBJECT-YOU-NEED-HELP-ON
- gives you a convenient interface to access manual pages

## Getting Started 

### initialize a repository 


```shell 
git init
Initialized empty Git repository in /home/justin/Projects/avim/.git/
```

### where git files are stored

```shell 
ls -l .git
total 112
drwxr-xr-x 2 justin justin  4096 Jan 18 15:36 branches
-rw-r--r-- 1 justin justin   267 Jan 18 15:36 config
-rw-r--r-- 1 justin justin    73 Jan 18 15:36 description
-rw-r--r-- 1 justin justin    21 Jan 18 15:36 HEAD
drwxr-xr-x 2 justin justin  4096 Jan 18 15:36 hooks
-rw-r--r-- 1 justin justin 70921 Jan 18 15:36 index
drwxr-xr-x 2 justin justin  4096 Jan 18 15:36 info
drwxr-xr-x 3 justin justin  4096 Jan 18 15:36 logs
drwxr-xr-x 4 justin justin  4096 Jan 18 15:36 objects
-rw-r--r-- 1 justin justin   112 Jan 18 15:36 packed-refs
drwxr-xr-x 5 justin justin  4096 Jan 18 15:36 refs
```

- git centralizes everything into this one directory

###  committing

- git add . = adds all files to be committed 
- git commit -m "committing"

- make changes 
- add changes 
- commit changes 

- commit messages: 
    - short single-line summary (less than 50 characters)
    - optionally followed by a blank line and a more complete description
    - keep lines in longer descriptions less than 72 characters
    - write commit messages in present tense not past tense
    - "fix for a bug" or "fixes a bug" not "fixed a bug"
    - bullet points are usually asterisk or hyphen 
    - can add tracking numbers from bugs or support requests
    - can develop shorthand for organization 
    - "[css,js]"
    - "bugfix:"
    - "#38405 -"
    - bad: "fix typo", good: "add missing hyphen in project section of HTML"

- got log = shows project commit history
- got log -n5 = shows 5 most recent project commit history
- got log --grep="bug fix" shows commits with bug fix in message
- got log since=2022-01-010 shows commits since specified date
- got log until=2022-01-010 shows commits that happened up until specified date
- got log author="first-name" shows commits by authors with specified name
- every commit is given a unique id


## Git concepts and architecture 

### the three trees 

- repository, staging index, working
- make changes in working add files to staging and then commit to repository
- git only tracks changes that are committed 

### Git workflows

- make changes in working tree, add completed changes to staging tree, commit changes we want finalized

### hash values (SHA-1)

- Git generates a checksum (the hash value) for each change set 
- checksum algorithms convert data into a simple number, which we call a checksum
- the same data put into the same mathematical algorithm always returns the same result or the same checksum
- we call it a checksum because we can check and make sure that it's the same
- checksum is used to provide data integrity 
- data integrity is fundamental
- changing data would change checksum 
- Gits data integrity features are not included in all VCS
- each hash value is not only unique, it is directly tied to the contents that are inside of it 
- Git uses the SHA-1 hash algorithm 
- people refer to this value as being the SHA value (S-H-A)
- 40-character hexadecimal string

### the HEAD pointer 

- HEAD is a reference variable Git maintains
- pointer to tip of current branch in repo
- last state of repo, what was last checked out 
- points to parent of next commit where writing commit takes place
- the repository has nothing to do with the staging index or working directory, it is a way of tracking the current position in the repo
- a good metaphor for the HEAD is the playback and record head on a cassette tape recorder 
    - as we start recording audio, the tape moves past the HEAD and it records onto it 
    - when the record head is stopped, is the place that it will start recording again if we press record a second time
    - we can move around, move the head to different places, we can fast forward and rewind
    - wherever the head is positioned when we hit record again, that is where it is going to start recording
    - the HEAD pointer in Git is very similar

- by default the branch we are working on is the master branch, which is our main branch
- when you make a new commit, the HEAD points to that commit

## make changes to files 

### add files 

- shows the status of repo 
- untracked files mean they are not added to the repository and Git knows nothing about them
- `git add` moves files to staging directory
- `git reset HEAD <file>` to unstage files

```shell 
git status
```

### edit files

### view changes with diff 

### view only stages changes 

### delete files 

### move and rename files

## use Git with a real project

### the Explore California website

### initialize Git 

### view file edits 

### stage and commit shortcut 

### view a commit

### compare commits

### multiline commit messages 

### make atomic commits 

## undo changes 

### undo working directory changes 

### unstage files

### amend commits 

### retrieve old versions 

### revert a commit 

### remove untracked files

## ignore files

### use .gitignore files

### ideas on what to ignore

### globally ignored files

### ignore tracked files

### track empty directories
