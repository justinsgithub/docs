# JavaScript

## data types

* number 
* float
* infinity
* -infinity
* NaN
* string
* boolean
* undefined
* null

## binary operators

* \+  add
* \-  subtract
* \*  multiply
* /  divide
* %  remainder
* <  less than
* \>  greater then
* <= less than or equal to
* \>= greater than or equal to
* == equal to
* === equal to and same type
* and  2 truths
* ||  1 truth
* typeof type of a value
* ? ternary

!!! important
    - creating bindings with var keyword will make it global

```javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
// → 60
}
// y is not visible here
console.log(x + z);
// → 40
```

!!! important
    - creating functions using a function declaration makes it global because of hoisting


```Javascript
console.log("The future says: ", future());
// The future says: You'll never have flying cars

function future() {
return "You'll never have flying cars";
}
```

## ***var*** ***let*** ***const*** 
- three ways to create or ***declare*** variables
- they also differ in three ways, ***use***, ***scope***, ***hoisting***
- the ***use*** of a variable declaration is whether the declaration binding can be redeclared or updated

### scope

- think of a program as a building
- the ***scope*** of a variable is where in the building the variable can be accessed once it has been declared 
- each declaration has a different range of scope that depends on where they were declared
- there are three types of ***scope***, global, function, and block
- 

### var
- a ***var*** declaration can be redeclared and updated like a bin of misc items in your room
- the items can change and the bin can be relabeled to hold completely new items
- var bindings have access anywhere in a program "building"
- var can also have function scope, which is as if there is a global medicine and the testing version
- the testing version can only be accessed inside of the lab functions and do not effect the outside versions
- however the outside versions can be modified from inside any function, 

### let
- a ***let*** declaration can be updated but not redeclared
- a let declaration is like a pantry, it can be updated to hold different food items, but its not going to be relabeled to hold different items aside from food

### const 
- a ***const*** declaration is not to be updated or redeclared
- const is like a bathtub, it will always hold water and not be redeclared to hold anything besides water


## truthiness

- boolean, context, coercion

### type coercion

- javascript will sometimes change the type of your code before interpreting if its true or not 
- js will interpret 1 as true, 'any string' as true, Boolean('false') as true, 'false' as true
- 0, '', null, will be false, (falsey value)


!!! danger
    - JavaScript will try it's best to run any code you give it
    - will perform automatic type conversion if necessary
    - this can be an unwanted behavior

```Javascript
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```

## ternary operator ?

- the ternary operator is designed to make quick conditional statements
- the only operator in javascript that takes 3 operands, the test operand, the truth operand, and the false operand

```javascript
let isThisTrue = true

isThisTrue ? console.log("is it true") : console.log("it is not true"):

let username = "justin";

username === "justin" ? console.log("enter password") :
    username === "justinaawd@gmail.com" ? console.log("enter your password") :
        username = "" ? console.log("please enter username") : console.log("go away");
```

## modulus operator %

- finds the remainder of a division problem
- good for testing if the solution to a problem is even, such as fizzbuzz

```javascript
console.log(1 % 3) // →  2
console.log(6 % 3) // →  0
console.log(7 % 4) // →  3
```

## nullish coalescing ?? and logical operator ||

- the nullish coalescing operator is new since 2020
- the nullish coalescing operator is more accurate than the logical operator
- tests true / false statements
- the logical operator will stop checking condition if first statement is true
- the nullish coalescing operator will stop checking condition if first statement is false
- these can be used to create short-circuit statements


## try catch finally 

- statements used to help dealing with bugs
- try part lets you try a series of statements / functions

```javascript
try {
        console.log('this will run');
        consol.lo('this misspelling will throw error');
        console.log('this statement will not run because the above statement did not run');
        console.log('nothing else runs');
}
catch(errorObject) {
        console.log(errorObject)
        console.log(errorObject.name)
        console.log(errorObject.message)
    }
finally {
        console.log('this runs no matter what happens above');
        console.log('try catch block finished');
    }

let bug = {
        antennae: false,
        width: 2,
        height: .5,
        wings: 2,
        legs: 6,
        color: 'red',
    }

try {
        if (typeof bug.antennae !== 'boolean') throw Error('antennae is not a boolean');
        if (bug.width > 5 || but.height > 5) throw Error('bug too big');
        if (bug.legs % 2) throw Error('legs need to be in pairs');
        if (!['red', 'blue', 'brown', 'black'].includes(bug.color)) throw Error('Invalid color');
}
catch (error) {
    console.log(error.name)
}
```

## transpiling

- developers use software to convert one language to another which is known as transpiling (like translate and compile)
- the process of compiling a language while transpiling it to something else
- modern javascript is transpiled so that the newer features can be used in older browsers such as the coalescing operator
- babel is an example of a tool that does this

## spread syntax ...

- an iterable is a list-like object such as an array, that can be iterated through
- allows a short hand method of performing iterating operations

```javascript
let tasks = ['go to work'];

tasks = ['eat breakfast', ...tasks];

tasks = ['tasks', ...eat dinner];

let details = ['eggs and bacon', '8 hours', 'steak'];

let tasksWithDetails = [...tasks, ...details];
```

## Promises

- a way to make sure something happens, but only if something else has taken place
- a promise takes in a callback function that will run when the Promise finishes
- a Promise is similar to a try catch block, but for callback functions
- a Promise gives us a resolve and reject object 
- you can return a different message depending on if the Promise is resolve or rejected
- you can use this Promise whenever we want to perform a sequence of action 
- you can run the code you want executed after the promise resolves by using ".then()"
- the fetch method is an example of a promise

```javascript
const thisPromise  = new Promise(function (resolve, reject){
        if(true === true){
                resolve('resolve message')
            }
            else {
                    reject('false message')
                }
    })

thisPromise
    .then(function(message){
            console.log(message)
        }
    ).then(function(message){
        sendToLogs(message)
    }
    ).catch(function(message){
        console.log(message);
        sendToErrors(message):
        }
    ).finally(function(){
            console.log('promise finished executing')
        })
```

## Async Await

- a cleaner syntax for using Promises


```javascript
const thisPromise  = new Promise(function (resolve, reject){
        if(true === true){
                resolve('resolve message')
            }
            else {
                    reject('false message')
                }
    })

async function thisAsync() {
        try {
            const result = await myPromise;
            console.log(result);
            }
        catch(error) {
                console.log(error)
            }
            finally {
                    console.log('async function for Promise finished')
                }
    }

```
