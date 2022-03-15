# TypeScript Essentials

- designed to be fully compatible with JS

- TS tooling is fully cross-platform

- TS is a superset of JS, which means it is an extension of JS, adding new features and syntax on top of the core language

## introducing TS

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
{! software/typescript/essentials/destructuring.js!}
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

```typescript
{! software/typescript/essentials/typeguard.ts !}
```

### using interfaces to describe functions

- JS are there own objects that can have their own properties and methods as well

### extending interface definitions

- you can extend definitions of 3rd party libraries when needed, such as adding a new method to an already existing interface

### defining constant values with enums

- enums in TS act pretty much the same as other languages such as java and c#

- enums are a way to define a set of meaningful and constant values that you can use to replace the ***magic*** strings and numbers that you would otherwise use

- a ***magic*** value a number or string in our code that means something, such as:
  - 1 means stop
  - 2 means slow down
  - 3 means go
  - 4 means broken
  - these values might mean something to the developer writing it, but mean nothing to future developers working on the project unless there is some good comments explaining it, or they can infer meanings by studying the code
  - enums give us a way to describe these values so they are more efficient to use for ourselves and others down the road

```typescript
{! software/typescript/essentials/enums.ts !}
```

- you can declare interfaces right inline anywhere that accepts a type, which is called an anonymous type

## classes

### understanding prototypical inheritance

- object-orientated functionality includes inheritance, abstraction, and encapsulation

- TS does not introduce the concept of a class, ECMAScript 6 did

- it is crucial to understand that although JS does have the class keyword syntax, it is all just syntactic sugar, and does not change the fact that JS is based on objects and prototypical inheritance

- JS is prototype-based programming

- prototype-based programming all starts with a special object called the prototype

- if you want to share behavior between object instances, you define that behavior on the prototype object

    - you then link other instances to that object

- in JS objects are just bags of dynamic properties, which means accessing a member of an object is not as simple as testing whether or not that member exists

    - whenever you attempt to access any member of an object, regardless of whether it is a method or a value field, JS tries as hard as it can to find the member that you are looking for 
    
    - first, JS looks for the member on the object itself, just like you asked it to 
    
    - if it finds a member with that name on the object you reference, then great. It acccess that member and its done 

    - however if JS does not find a matching member on that object, it will not give up there 

    - JS will then look at the object's prototype object to see if the member exists on that object 

    - if a member of that name exists on the prototype, then JS refers to that member and it is done

    - Otherwise it accesses the prototype's prototype, and the cycle continues all the way up the chain until reaches the root of everything, the object prototype

    - Object.prototype is actually an object that you can see and interact with 

    - if you type Object.prototype in the console, everything that you see will be available to all other JS objects 

- where does this special prototype object come from, and how and when is it assigned to my objects? 

    - most of the time the prototype is assigned to your objects for you 
    
    - the more complex answer is that there are actually quite a few ways that prototype objects get assigned 

    - when JS creates any object, even an object literal, it automatically links its prototype object to the Object.prototype, the same is true about the other 2 special types of objects, functions and arrays

    - when JS creates objects with functions and arrays, it links them to the Function.prototype and Array.prototype objects (respectively)

    - this allows all functions and arrays to share common behavior, such as all arrays having the slice method and all functions having the bind method 

- the most common way JS assigns a prototype to an object is with a constructor, which is really just a function that is called with the ***new*** keyword 

- whem you initialize an object with a ***new*** keyword, JS does 3 things:

    1. creates a new object 

    2. sets the new object's prototype to the constructor functions prototype

    3. executes the function that you called with the ***new*** keyword, referring to the new object as ***this*** within that method 


### defining a class

- classes allow you to define prototypical behavior in a much simpler way 

- original prototyping way: 

```javascript
{! software/typescript/essentials/prototyping.js !}
```

- you can use use all TS features to extend ECMAScript6 class syntax with additional static type information 

- in the prototype based syntax, the constructor function is simply the function that you attach all of the prototype behavior to 

- in order to define a constructor function using the class syntax, you simply define a method with the name ***constructor***  

- at somepoint you may need to maintain a single same value across multiple components, ot many instances of 1 type of component 

- in other languages you would refer to these kinds of variables at static members 

- for years the easiest and most common way to implement static variables was to simply create a variable in the global namespace 

- global variables are now generally considered to be considered bad practice, and avoided at all costs

- modern JS the more accepted common practice of defining a static variable is to attach it to an object, especially the function that is going to use it the most 

- prior to the ECMAScript6 syntax when creating a constructor function and attaching behavior to it via its prototype, the lastId variable would be attached directly onto the constructor function itself

- new class way with TS:

```typescript
{! software/typescript/essentials/classes.ts !}
```

### making properties smarter with accessors

- getters and setters make it easier to apply logic when changing properties inside classes / objects 

### inheriting behavior

- a statemachine is a design pattern for managing state

- use the extend keyword to extend a class

- the reason for inheriting from a base class is to extend and / or override its behavior

- you do not have to call constructor on the derived class, BUT if you do, you have to call it on the base class 

- use the super keyword to call constructor on the base class 

- make changes to methods by calling super inside of the method definition

### implementing an abstract class

- an abstract class is a class that is only created to be a base class for future classes 

- use the abstract keyword to implement an abstract class 

- use the abstract keyword before methods to define that any future derived classes need to implement their own version of that method 

- TS supports abstract classes, JS does not 

### controlling visibility with access modifiers

- the private keyword is an access modifier, used to hide members of a classfrom being accessed outside of that class

- you can apply access modifiers to any member of a Typescript class, including constructor parameters, methods, properties, static properties, getters, setters

- both the getter and the setter must be either private or public

- TS offers 3 access modifiers to describe how much you want to protect the members of your classes

- the access modifiers are private, protected, and public

- the private modifier is the most restrictive modifier of the 3 

    - placing a private modifier on a member means that only methods defined directly on the same class definition may access that member 

    - TS will complain if any other type, including types that inherit or extend from that class, attempt access the member 

- the protected modifier is smiliar to the private modifier in that only methods defined on the same class may access the member, but it expands this definition to any classes that inherit or extend from this class 

- the public modifier is the least restrictive of all
    
    - a member with public access may be accessed from any other type 
    
    - the public modifier basically just decribes the default behavior of JS 
    
    - public is the default access modifier so you probably will not see it much 

    - the 1 case you might see the public modifier more often is applying it to a constructor parameter

- JS does not actually support access modifiers

- TS is a superset of JS, which means that it does not change how JS works

- TS is able to let us use access modifiers just for development, to ensure better practices and less bugs in our code, express our intent and work with other developers and our code better in the future

### implementing interfaces

- the primary reason that interfaces exist in a statically typed langauge is to attach them to classes 

- because TS understands and implements JS native duck typing behavior, you do not actually have to do anything in order to make use of an interface 

    - by simply applying the interface to the variables and the return values in which you expect to adhere to that interface, TS will automatically inspect every object that you attempt to assign to that variable or attempt to return as a return value 

    - when the object structure matches the interface you've defined, then it really does not matter what the type of the object is, everything is fine 

    - if the object structure does not match the interface, such as missing properties or methods that the interface expects, or the type of properties do not match, TS will yell at you, that you have attempted to use an object that does not match the interface 

- even though you don't always have to apply type information for TS to work, the more explicit you are, the better

- a class can implement multiple interfaces at once 

## generics

### introducing generics

- TS offers generics, which C# and Java offer as well

- generics are a way to create functions and classes that define a behavior that can be reused across many different types, while retaining the full information about that type

- create a generic by using `<$name>` after the function name but before the parameter parenthesis, this tells TS that you will be referring to a generic type in this function and you will be referring to that type by $name 

- many people use `<T>` by covention, but any variable name is acceptable 

- with a generic type defined, it can be used throughout the method any place that a regular type would be used, like on the methods parameter

- a generic type is good for telling TS that the input type and return type of a function will always be the same 

- a generic type is not a specific type but is determined by TS each time it is used in a function to do things like ensure matching types of a parameter value and return value in a function where it could accept any time (such as a JSON.stringify function) 

- whenever you see a place in your application where you seem to be copying the same code over and over, and all you are doing differently in each version is simply changing which type you are using, then that might be a great oppurtunity to reduce that duplicated code into a single generic function 

```typescript
function clone<T>(value: T): T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
```

### creating generic classes

- generics can be applied to classes as well 

- TS treats the JS builtin Array type as a generic class 

- below is just 2 different syntax for exactly the same thing

```typescript
var syntax1: number[] = [ 1, 2, 3 ]

var syntax2: Array<number> = [ 1, 2, 3 ]
```

- generic classes are good for key value pair classes

```typescript
class KeyValuePair<Tkey, Tvalue> {

    constructor( public key: Tkey, public value: Tvalue ){}

}

let pair01 = new KeyValuePair('id', 1);
let pair02 = new KeyValuePair('joined', Date.now());
let pair03 = new KeyValuePair('name', 'jack');

let pair1 = new KeyValuePair<string, 1>('id', 1);
let pair2 = new KeyValuePair<number, Date>('joined', new Date(Date.now()));
let pair3 = new KeyValuePair<string, string>('name', 'jack');

class KeyValuePairPrinte<T, U> {
    constructor(private pairs: KeyValuePair<T, U>[]) {}

    print() {
        for (let p of this.pairs) {
            console.log(`${p.key}: ${p.value}`)
        }
    }
}

```

- a great way to group generic methods that all operate on the same types of objects

### applying generic constraints

- TS offers the concept of generic restraints that you can apply to your generic type parameters, to dissallow certain types of values

- apply generic constraints with the ***extends*** keyword

- you can place restraints on your generic types to limit the type parameters that consumers of your generic functions or classes can apply

- you cannot refer to generic parameters that you defined in the same type list

## modules

### understanding the need for modules in JS

- JS has been around for over 20 years  

- only recently has the industry started to really take JS seriously and started to apply patterns, practices, and development standards for working in the browser 

- a big problem that exists is putting all of your code in the global namespace

- putting all of your code in the global namespace encourages you to create all sorts of dependencies between components simply because you can

- global namespace is bad because:

    - encourages implicit sharing between components

    - difficult to determine component boundaries

    - difficult to determine component dependencies

- global namespace can create what is known as ***spaghetti*** code, where your entire application just becomes 1 giant ball of intertwined threads, without anyway of telling where one component begins and another ends

- to avoid spaghetti code, many first class languages have some kind of mechanism to modularize code, to keep components seperate from one another and distinguish between 2 components that may share the same name but are otherwise completely different

- learning JS design patterns is an awesome free book

- JS encapsulattion methods: 

    - module pattern / revealing module pattern 

    - namespaces

    - ECMAScript 2015 modules / module loaders

### organizing your code with namespaces

- TS offers a few ways to better encapsulate and organize your code

- namespaces is the simplest way to organize your code better 

- putting variables inside of a namespace will hide that variable from code outside of the namespace 

### using namespaces to encapsulate private members


- seperate classes into different files and place variables inside namespace to make completely private from any other code in the project

- the namepspace approach is also referred to as the "internal module approach"

### understanding the difference between internal and external modules

- internal vs external modules approach:

    - both encourage encapsulation and organization

    - internal uses namespaces to scope variables 

    - external uses the file itself to scope variables

    - all modules are only available within the namespace by default and must be exported to be available to other modules 

- TS supports CommonJS syntax and ECMAScript 2015 syntax

### using modules

- add module option to tsconfig

- CommonJS = `import Model = require('./model');`

- ECMAScript 2015 = `import * as Model from './model';` or `import { Todo, User } from './model'`


### extras

### debugging TS with source maps

- an emerging browser feature 

- allows language compilers to tell browsers where exactly a particular variable or expression lives in the original source code, regardless what that source code is 

- setting the sourceMap complier option to true creates an additional map file along with every JS file 

### decorators

- a proposed ECMAScript syntax that allow you to implement the decorator design pattern to modify the behavior of a class, method, property, or parameter in a declarative fashion 

- this powerful approach allows you to define common behavior in a central place and then easily apply it across your application to reduce duplicate code and make your code more readable and maintable, all at the same time 

- a decorator is just a function with a special signature

- decorators support 4 different targets, classes, methods, properties, parameters