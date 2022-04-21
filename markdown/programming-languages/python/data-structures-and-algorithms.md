# Stacks Queues Deques



##  abstract data types (ADTs)

- a theoretical concept to specify what kind of data a data structure can hold and what operations are allowed on that data 
- if you were creating a new abstract data type from scratch you could decide the operations
- when working with ADT we do not need to know how to code it, but how to interact with it in the way we need to 
- 2 styles of ADTs, imperative and functional

### imperative ADTs

- mutable / changeable
- the same ADT can take on different states
- the order in which operations are executed is important

### functional ADTs

- immutable / cannot change
- separate instance of the ADT for each new state
- an operation on functional ADTs is on the current state and returns a completely new state
- the original abstract datatype is never changed 

### advantages 

- ***abstraction***, all the user needs to know is the allowable data types and allowable operations
    - understanding the implementation is not required for the user to make use of data structure

- consistency, the implementation of the data structure can change as long as the interface to the data structure stays the same
    - this ensures users do not have to change their code   

### data structures (DS) overview

- concrete implementations of ADTs, that organize and retrieve data stored in memory
- 1 ADT allowed operation = 1 function in DS class
- there is often more than 1 way to implement an ADT as a DS

## stacks

- stores a collection of items in the order in which they were added 
- like a stack of plates where only the top plate is easy to get out 
- LIFO data structure = last in, first out
- last element added is first to be removed
- any data type that can be stored in a list can be stored in a stack 
- limited access data structure because we can only access data from one place 



### common stack operations 

- push(item) = push item to top of stack 
- pop(item) = remove and return the top item
- peek(item) = return the top item without removing 
- is_empty(item) = return true if the stack is empty
- count(items) = return number of items in stack
- the "top" does not necessarily mean the top of the stack, just means where the data is inserted and deleted
- inserting and deleting data happen on the same end

### applications of the stack

- inside of computers, we use reverse polish notation for evaluating arithmetic expressions
- syntax parsing
- cold stack: in a cpu this contains frames / space for parameters and local variables for each function call that we make
- used in recursion 
- undo and redo operations in word processors
- low-level assembly programming 
- text-editor linter, which tells us if we are missing opening or closing symbol
- reversing the characters in a string 
- recursive data structure, is either empty or consists of a top item and the rest, which is a stack 

### stack example

```python
{! python/stack.py !}
```

## Queue DS

- An abstract data structure that stores items in the order in which they were added
- items are added to the back of the queue and added to the front of the queue
- a queue ADT is like a line of people waiting for something, people join the line in back and leave from the back
- FIFO, First In First Out
- the order in which people join the line is reserved
- inserting data into a queue is linear time because every item has to shift to the right, one at a time, so each item adds time to move
- adding to the queue is in constant time because it always takes the same amount of time to pop an item off the queue

### queue operations & data

- add to the queue (enqueue)
- remove from the queue (dequeue)
- is the queue empty?
- how many items are in the queue?
- what is next to be removed?

- a print queue is a good example of real world implementation, the documents are printed in the order they are sent to the machine
- a recursive data structure, it is either empty or it consists of a front item and the rest of the queue


- any data type that can be stored in a list can be stored in a queue
- limited access, because we can only access the data from 1 place (the front / top of the queue)


### queue example


```python
{! python/queue.py !}
```

## dequeue ADT 

- deque = double ended queue
- an abstract data type that resembles both a stack and a queue
- items in a deque can be added to and removed from both the back and front

### operations 

- add to the deque (front and rear)
- remove from the deque (front and rear)
- check if the queue is empty
- which item is at either end

### FIFO and LIFO 

- can use either FIFO or LIFO or BOTH
- it is up to the programmer to enforce those qualities at either end of the deck if they choose to do so 
- we can arbitrarily choose which end of the deck we want to be at the front and which we want to be at the rear
- there is not any runtime advantage from choosing one side over the other side 
- whether we want to add / remove from one side of the list or the other side of the list, it is gonna be in constant runtime or linear runtime, depending which side we choose to be the front
- any data type that can be stored in a list can be stored in a deck 
- the deque is a limited access data structure because we can only access data from either end (not the middle)
- the deque datastructure is a common way to check whether a string is a palindrome


```python
{! python/deque.py !}
```
