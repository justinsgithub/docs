# JavaScript Functions 

## function notation

* the 3 ways below create the same function 

```Javascript
function square(x) {
    return x * x;
}

let square = function(x){
    return x * x;
}

const square = x => x * x;
```

## the call stack 


1. greet("Harry"); runs first, jumps to first line of greet function 
2. gives control to console.log 
3. returns control to greet function
4. comes to end of function
5. returns control to call stack context
6. console.log("Bye");

```Javascript
function greet(who) {
console.log("Hello " + who);
}
greet("Harry"); // runs first, has to jump up to 1st line of function, line 2
console.log("Bye"); // runs second
```

* storing the context of the program uses computer memory
* if call stack grows too large, computer errs
* err is "out of stack space" or "too much recursion"


### blowing the stack 

!!! danger
    - this would eventually use up the computer memory going back and forth

```
function chicken() {
return egg();
}
function egg() {
return chicken();
}
console.log(chicken() + " came first.");
// → ??
```

## optional arguments

* ignores the additional true and "hedgehog" arguments

```Javascript
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```

## closure

* functions can be treated as values and used as variables
* create bindings to functions just as any other value with var, let, and const
* function local bindings are recreated everytime they are called 
* we can create bindings to a particular function call to save that instance of a local binding inside of the function call 


```Javascript
function wrapValue(n) {
let local = n;
return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


function multiplier(factor) {
return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10
```
