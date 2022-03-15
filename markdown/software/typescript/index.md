# TypeScript ( TS )

> static typing for JavaScript ( JS )

- npm install -g typescript
- tsc hello.ts 

## about

- the goal of TS is to be a static type checker for JS
- JS has been around for over 20 years
- JS has some peculiar runtime semantics and quirks
- managing large code bases in JS gets difficult to manage at scale
- the most common type of error that programmers write can be described as type errors
- a type error is when a certain type of value was used where a different type was expected ( 10 = 5 + '5' )
- TS is a tool that runs before JS code runs ( static ) and ensures that the types in the program are correct ( typechecked )
- when JS code is ran, the runtime knows what to do by figuring out the types of the values in the code
- the type of a value tells our code what behaviors and capabilities a binding has
- TS will also add massive editor support for auto completion and code hints

 

## benefits

> reduce mental overhead and mistakes

```javascript
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message' which is a silly mistake, which TS help avoid without thinking about it
message();
```

- we have to remember alot of mental notes for the above code 
- is message callable?
- does it have property lowercase on it?
- is toLowerCase callable?
- what does lowerCase return?
- the above questions might be a super simple block but what about a project with hundreds of lines of code and multiple files of it?


## TS vs JS errors

- TS can catch spelling errors much easier
- TS can catch uncalled functions from forgetting the closing parenthesis

```javascript 
const user = {
  name: "Daniel",
  age: 26,
};
user.location;
```
- in JS the above code would not throw an undefined error
- in TS the above code would throw a specific ***property "location" does not exist error***

