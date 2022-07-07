# the C programming language

## Memory 

### Overview

- computer programs require memory to run 
- most program crashes have something to do with memory violations
- a memory address is normally represented by hexadecimal values
- there are 3 main sections of memory, Stack, Heap, Read-only

### Stack Memory 

- simple data structures have continuous blocks of memory, or linear memory, one chunk of memory
- LIFO = Last In First Out, like a stack of papers 
- allocation happens automatically in the function call stack
- a functions local variables are stored in stack memory
- deallocation happens automatically when the function returns  
- high speed access
- normally very small and limited in size, 1 - 8 MB typically 
- stack overflow happens when all of the stack memory is exhausted 

### Heap Memory 

- a pile of memory space available for programmers to allocate and deallocate 
- allocated by programmers manually during program run time, normally using `malloc()` and pointers
- deallocated by programmers manually during program run time, normally by using `free()`
- requires more care to manage or memory leak can happen to the program 
- slower than stack memory 
- how much memory is available to use depends on your RAM

### Read-Only Memory 

- the data here is set when the memory is allocated automatically
- data here can only be read by your program, but not modified 
- any attempt to modify data in read-only memory will result in segmentation fault, (program crash)
- programmer does not need to manually manage the memory space 

## Pointer Basics 

### What is a pointer? 

- a pointer is an object in C that stores a memory address (ex. 0x9aa61c44) (hexadecimal)
- a pointer references a location in memory 
- obtaining the value pointed to by a pointer is called dereferencing a pointer
- every variable and function occupies some space in memory, which means they can all be referenced by pointers


### About Pointers

- pointers in C may seem daunting but are very interesting when you get the hang of it 
- many programming tasks can be done much easier with pointers
- pointers are required to perform dynamic memory allocation 

### Referencing a Pointer 

- declare a pointer with the `*` operator
- `int * mypointer = NULL`
- every pointer needs a data type (similar to a variable)
- pointers are given an name just like a variable 
- pointers are assigned an initial memory location to point to, which can be `NULL`

```C
int a = 90;
mypointer = &a;
```

- you can declare a pointer with the & operator
- regular variable declaration / initialization
- `&a` will evaluate to the memory address where `a` resides in
- `mypointer` references to the address that contains the value of 90

### Dereferencing a Pointer


- dereference a pointer with `*` operator 
- dereferencing a pointer is done based on the data type of the pointer 
```C 
int * mypointer = NULL;
int a = 90;
mypointer = &a;
printf("myptr rerferences to the memory address of %x\n", mypointer)
printf("myptr dererferences to the value stored at address of %d\n", *mypointer)
```
- first `printf` will print the hexadecimal memory address that `mypointer` references to
- second `printf` will print the value stored at the memory address that `mypointer` references to



## compilation process

### source code 

- where the process starts, the files that you wrote your code in, such as hello.c

### preprocessor 

- compiler program ( `gcc` ) runs source code in a preprocessor to expand the code
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

### makefile 

- instructions to compile program 
- written with shell syntax 
- `#` is used for comments 

### __FILE__

- a macro the C language provides which will give you the current files name 
- useful for debugging

### __FUNCTION__

- a macro the C language provides which will give you the current functions name 
- useful for debugging

### __LINE__

- a macro the C language provides which will give you the current line in the file name 
- useful for debugging
