# Node.js Essentials 

## what is Node.js?

### Node.js history

- has been around for about a decade and one of the most powerful JS tools available
- created by Ryan Dahl in 2009 as a JS runtime based on Chrome's v8 Engine 
- in 2011 NPM version 1 was released to allow for sharing of open source node libraries

    - this marked a huge shift in the way that code was shared and maintained and it started to submit Node.js as a huge player in the ecosystem

- after some infighting in the community about implementation and project management the Node.js Foundation was formed in 2015
    - the foundation is made up of several large companies including IBM, Microsoft, PayPal, and Groupon 
    - it is referred to as a collaborative project at the Linux Foundation
    - you can find the Node.js Foundation on GitHub
    - you can find the [Node.js project itself](https://github.com/nodejs), it is an open source project on GitHub

### How Node.js works

- Apache web server, is multi-threaded, a single thread waits for the file system to finish reading files before it can do anything else
    - we refer to this as blocking

- Node.js is single threaded, Node.js is behaves asynchronously
    - non-blocking event-driven IO
    - a single thread that will respond to events in the order that they are raise 
    - this thread behaves asynchronously, it does not have to wait for resources to finish doing what they're doing before our thread can do anything else 
    - if the thread gets too busy it can duplicate and create a new thread to help

- Node.js is single threaded, all users are sharing the same thread 
- events are raised and recorded in an event queue and then handled in the order that they were raised
- Node.js is asynchronous, which means it can do more than one thing at a time
- this ability to multi-task is what makes Node.js so fast and one of the reasons so many developers are building their web applications with Node.js

## Node globals

### the global object

- can exclude the .js when running files with node
- console = global.console 
- the global object contains all the objects, methods, etc we can use in our Node.js files with out having to import any functionality


### the require function

- allows us to use other modules in our programs
- path module gives us tools to work with path strings
- every Node.js file we create is a module, it contains it's own code
- when we want to load other modules we must use a require() function


```javascript
{!nodejs/essentials/01.js!}
```

```shell   
node code/nodejs/essentials/01.js
/home/justin/Desktop/learning-docs/code/nodejs/essentials
/home/justin/Desktop/learning-docs/code/nodejs/essentials/01.js
this filename is 01.js
26749
17.4.0

```

### argument variables with process.argv

- globally available, gives us information about the current process as well as tools to interact with that process
- process.argv is an array

```javascript
{!nodejs/essentials/02.js!}
```

```javascript
node code/nodejs/essentials/02.js argument3 argument4
[
  '/home/justin/.nvm/versions/node/v17.4.0/bin/node',
  '/home/justin/Desktop/docs/code/nodejs/essentials/02.js',
  'argument3',
  'argument4'
]
argument3 argument4
```

```javascript
{!nodejs/essentials/process-args.js!}
```

```javascript
node process-args.js --first justin --last angeles
Hello justin angeles
```


### stdout stdin

- process.stdout is a writable string and it implements a write method
- use write method to send data out of our program
- stdout needs newline (\n) characters to print a new line


```javascript
{!nodejs/essentials/questions.js!}
```
```shell
node questions.js 



 what is your name? > 
justin



 what would your rather be doing? > 
study



 what is your favorite programming language? > 
javascript


    go study justin, you can write javascript later!!

```

###  setTimeout setInterval

```javascript
{!nodejs/essentials/timer.js!}
```

```shell
node timer 2
setting a 2 second delay
25% complete 
50% complete 
75% complete 
finished
```
## Node modules

### core modules



### collect information with readline

### use readline functions

### export custom modules

### create a module

### custom events with the EventEmitter

### improve a module with EventEmitter

## file system basics

### list directory files

### read files

### write & append files

### directory creation 

### append files

### rename and remove

### rename and remove directories

## files and streams

### readable file streams 

### writeable file streams

### create child process with exec 

### create child process with spawn
