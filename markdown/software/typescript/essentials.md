# TypeScript Essentials 

- designed to be fully compatible with JS

- TS tooling is fully cross-platform

- TS is a superset of JS, which means it is an extension of JS, adding new features and syntax on top of the core language

### introducing TS 

- TS is a super set of the JS programming language that adds the concept of static typing to the core features of JS
- JS is and always has been a dynamically typed language
- both static and dynamic languages rely on types (definitions of data structures and behaviors to ensure their programs are correct)
- the different kinds of typed languages validate types in different ways 
- dynamic languages: 
    - aim to be much more forgiving at development time, relying on the concept of duck typing to validate that a particular object can be used a certain way 
    - duck typing refers to the idea that if it looks like a duck, walks like a duck, and quacks like a duck, it must be a duck
    - the net result of this approach is that tools do not have enough information to catch errors before the application runs

- statically typed languages: 
    - more rigid than dynamic 
    - aim to catch errors before the code is executed 
    - they do this by imposing restrictions on how you can interact with objects forcing you to clearly specify everything about the object that you are going to interact with 
    - in the static world you cannot just call a "quack" method on any object, you must first explicitly define a type that has that "quack" method as well as any parameters that need to be passed into that method, not to mention the value that the "quack" method will return to its callers

- tsconfig.json

- a configuration object with config values 
- typescript compiler automatically looks for this file when it starts and if it does it treats the whole folder and any subfolders as one project
- with this file we no longer have to tell typescript which files to watch when running `tsc -w`

```json 
{! software/typescript/essentials/tsconfig.json !}
```

## ES6 language features

### reviewing ES6 language features 

- TS provides the ability to leverage a handful of ECMAScript 6 and ES7 features that aren't yet widely supported and compile them down to ES5 compatible JS

### default / optional parameters

- allows you to specify a default value for a given a parameter

### template strings

- allows inserting variables directly into strings, gives ability to more easily programmatically render HTML to the DOM

### let and const 

- the var keyword has sometimes undesirable behavior, it is accessible outside of scopes that other languages would never make possible
- using the let keyword changes variable assignment to behave more like other programming language
- const means to create a variable and not let it change

### for...of loops 

- used to loop over an array with smoother syntax

```javascript
{! software/typescript/essentials/for-of-loop.js!}
```

### lambdas 

- the ***this*** keyword has strange behavior compared to most programming languages
- arrow functions allow us to get around the ***this*** keyword with cleaner syntax

```javascript
{! software/typescript/essentials/lambdas.ts!}
```
- arrow "lambda" functions / anonymous functions return their output automatically


### destructuring 

- the ability to assign values to multiple variable from a single object with a single statement
- think of destructuring as the reverse of creating a bunch of variables and combining them into an array
- swapping values also becomes easier, instead of having to use a temporary value to hold the first value we swap


```javascript
{! software/typescript/essentials/destructuring.ts!}
```

- can use to destructure parameters as well 

### spread operator 

- can use in a function to accept any number of arguments
- used for cleaner array syntax, such as adding and removing items, or adding 2 arrays together

### computed properties

- allows you to define a property on an object with a name that is computed dynamically at runtime
- this allows to create dynamic variable names, which can be helpful when scraping users data and you want to use each users username as its variable name, however you do not know what all the usernames are going to be yet

## type fundamentals 

### JS types 

- primitive values (immutable) = boolean, number, string
- null / undefined
- object (many thought of types are actually just different kinds of objects)
- as an object orientated lang, JS offers the ability to share properties and behaviors between different types through inheritance, called prototypical inheritance
- prototypical inheritance means that an object is defined that contains the base properties and behavior to be shared and when new instances of that type are created, JS links those new instances to the properties and behaviors of the base class
- not all JS objects must be created from a constructor that has a prototype
- an object literal is a simple way to define a JS object 
- an object literal is nothing more than a way to define an instantiate an object all at the same time 

### understanding type inference 

- static analysis means that regardless of whether you explicitly define types or not, TS looks through your code doing its best to guess / infer what type any given object could be 
- TS will automatically enforce inferred types
- TS will infer the type of function return values as well 
- when TS cannot infer what a type might be, then it just calls it the any type, which is the most dynamic and nonrestrictive type available
- the any type is basically the default dynamic type of JS
- you can use any type to reassign variables to values of different types
- you lose any and all help that TS provides when using an any type, TS would not even catch things like misspellings so the any type should only be used when absolutely necessary 
 
### specifying JS types

- the more specific you are in your intent, the better the type system can help you find mistakes

```typescript
{! software/typescript/essentials/defining-types.ts !}
```

### specifying function parameter types 

- union types allow arguments to accept multiple types with the pipe operator (|)

- TS will limit methods on union types, use instanceof operator first if needed 
    - this is known as the type-guard syntax 

```typescript
{! software/typescript/essentials/typeguard.ts !}
```

- function overloads allow us to define possible function parameter values before it is created

## custom types

- you can define custom types that describe the data structures and behavior that your application uses

- TS defines 3 ways to define a custom type, interfaces, classes and enums

### defining custom types with interfaces

- an interface acts as a contract that describes the data and the behaviors that the object exposes for others to interact with 

- interfaces are strictly used for compile-time checks only and have no effect on the code at runtime

- consider interfaces as a way to tell TS more information about objects to help you check more errors at build time, but do not ever rely on them being there at runtime 

- the first thing that typescript does when it compiles the final JS output is to strip out all of the interface definitions

- normal syntax: `var todo:Todo = {};`

- casting syntax: `var todo = <Todo>{};`

### using interfaces to describe functions

### extending interface definitions 

### defining constant values with enums

### defining anonymous types

## classes 

### understanding prototypical inheritance 

### defining a class 

### applying static properties

### making properties smarter with accessors

### inheriting behavior 

### implementing an abstract class

### controlling visibility with access modifiers

### implementing interfaces

## generics 

### introducing generics 

### creating generic classes 

### applying generic constraints

## modules

### understanding the need for modules in JS

### organizing your code with namespaces

### using namespaces to encapsulate private members 

### understanding the difference between internal and external modules 

### importing modules using CommonJS syntax

### import modules using ECMAScript 2015 syntax 

### loading external modules

## real-world application development 

### intro to sample JS app 

### converting JS code to TS

### generating declaration files

### referencing 3rd party libraries

### converting to external modules

### debugging TS with source maps

## decorators 

### implementing method decorators

### implementing class decorators

### implementing property decorators

### implementing decorator factories
