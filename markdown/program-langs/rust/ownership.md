# Ownership

> Rust's most unique feature

## overview

- all program's have to manage the way they use a computer's memory while running
- some languages have garbage collection that constantly looks for no longer used memory as the program runs( this slows the program down )
- in some languages the programmer must explicitely allocate and free the memory when they write the program
- Rust has a unique approach to garbage collection / memory management
- memory is managed through a system of ownership with a set of rules that the compiler checks at compile time
- Rust ownership features do not slow down your program while it is running

- ownership - 
    - keeps track of what parts of code are using what data on the heap 
    - minimizes the amount of duplicate data on the heap 
    - cleans up unused data on the heap so the program does not run out of space 

## the stack and heap 

- the stack and heap are structured in different ways
- the stack and heap are parts of memory that are available for code to use at runtime
- all data stored on the stack must have a known and fixed size
- data with an unknown size at compile time must be stored on the heap instead (or a size that might change)
- the heap is for ***memory allocation*** (like a location to allow memory)
- pushing values to the stack is not considered allocating
- a stack is like going to the restaurant knowing the group is exactly two people
- a heap is like going to the restaurant only knowing it will be 5-10 people
- the couple is going to be seated much quicker and find a spot easily
- the biggger group is going to take time finding a spot
- the restaurant also sits small groups right up front in couples booths
- the restaurant sits big groups in the back rooms allocated to the party tables 
- when code calls a function the values passed into the function and the functions local variables get pushed to the stack 

### stack 

- the stack stores values in the order it gets them and removes the values the opposite way ( first in last out )
- a stack can be pictures like stacking plates  
- adding data is called ***pushing onto the stack***
- removing data is called ***popping off the stack***
- pushing to the stack is faster than allocating on the heap because the allocator never has to search for a space to save for the new data 


### heap 

- the heap is less organized 
- when putting data on the heap, a certain amount of space is requested
- the memory allocator finds an empty spot in the heap that is big enough and marks it as being used 
- after the allocator finds an empty spot which is big enough it returns a pointer
- a pointer is the address in memory for the location of the data
- the heap memory allocation process is called ***allocating on the heap*** (or just ***allocating***)
- because the pointer to the data is a known and fixed size it can be be stored on the stack 
- to get the actual data the pointer must be followed to the datas location


## ownership rules

- each value 






