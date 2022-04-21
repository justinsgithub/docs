# the C programming language

## compilation process

### source code 

- where the process starts, the files that you wrote your code in, such as hello.c

### preprocessor 

- compiler program ( gcc ) runs source code in a preprocessor to expand the code
- looks for errors, such as syntax errors
- removes comments 
- replaces Macros

### compiler 

- the expanded code from the preprocessor gives code to compiler 
- converts the high-level source code into assembly code
- assembly code is a series of instructions / logical units of operation / basic building blocks
- assembly code is still somewhat readable by humans

### assembler 

- converts assembly code into machine code ( hello.o )
- machine-readable code instead of human-readable 
- machine code / object code are instructions that computer actually understands, which a human cannot read 
- object code contains functions and symbols

### linker 

- the assembler gives code to linker which combines all the object ( .o ) files
- the object files include the ones you compiled as well as any third-party libraries used
- the object files also include shared and static libraries ( .a or .so ) files 
- the files all become one executable file, the final result of the compilation process

## C file types 

### .c 

- a source file
- contains the real source code / functions for the program
- C programming is basically a bunch if functions calling each other
- the bodies of the program as opposed to the headers of the program
- implements what you say is available in the header file

### .h 

- a header file
- not really source code for the program, but contains variable declarations for functions in the source files
- contains more so the prototype, as opposed to the implementation of the program
- tells the compiler how many functions are available to be used 
- variable declarations 
- structure declarations 
- function declarations
- macro declarations

## basic elements 

### void 

- a keyword which means nothing, can be used to specify a function that takes no input and returns no output

### comments

- not compiled by the compiler, gets ignored
- /* block comment can span multiple lines */
- // single line comment

### semicolon

- each line of code needs to end with a semicolon so that the compiler knows when a line of code ends and the next one begins

### include 

- keyword which starts with a #
- example: `#include <stdio.h>`
- caret brackets indicates that this header file is part of the standard library / a system file and will search for it where are system programs are stored 
- using double quotes signifies the header file is part of your program in our your folder in a header file you created
- used to include other header files in our program
- other header files contain additional utilities and functions that your program can use

### preprocessor 

- performs a series of steps to get code ready for compiler
- removes comments from code
- resolves all the paths of any #includes to make sure they exist
- `#include` lines are read by the preprocessor and the functions are read by the compiler
- `#define` lines are Macros which are read by the preprocessor

### define / Macro

- a Macro is signified by the define keyword
- example: `#define MYNAME 'Justin'`
- a Macro is normally named with all capital letters
- basically creates a global variable