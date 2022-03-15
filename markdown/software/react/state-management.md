# Managing State in React

- immutability = not modifying a variable after it is created

    - in Redux specifically, it means not mutating states directly

### most popular state management solutions:

- React:

    - built in state management solutions

- Redux:

    - most popular option, emphasizes one-way data flow and immutability 

    - which means every time you change state, such as changing information on a user profile, what is returned to React is a copy of the old state with just the new thing changed, not simply the modification 

    - that might sound redundant or wasteful, but there are some great benefits that include undo and redo functionality and better debuggability

- MobX:

    - appeals to those with knowledge and background in object orientated programming 

    - uses the observer pattern which allows the system to build a dependency tree among different parts of state

    - produces free rendering of components by just keeping track of what needs mutated

- Apollo and GraphQL

## existing solutions in React

### avoid prematurely adding state management packages 

- as soon as you extend beyond basically functionality there is typically some need for a state management solution

- the main reason to use a state management solution, is that it manages business logic

- presentation logic:

    - logic that is associated with how components appear on a page 

    - when should a modal pop up? 

    - when should the color of a button change?

    - does not have to do with the purpose of the application 

    - think of logic that is agnostic towards the applications purpose

- business logic:

    - handling, manipulating, and storing business objects

    - for example like in a todo app where a user needs to login, it could mean things like user accounts or items in a todo list 

    - unlike presentation logic, this is logic that is application-specific

- handling business logic is the most common use case for introducing a state management library

- figuring out where to connect presentation and business logic can be pretty tricky: 

    - we can run into all kinds of problems to solve

    - how do we persist state for users between sessions?  

    - how does React know that our data has changed and that we need to re-render the component

- state management makes opinionated decisions for us, that allow us to work in a consistent system

- if you do not use a state management system, this would mean you store every part of your business logic in a React state

    - this is not best practice 

### the power of setState()

### data fetching using only React 

### avoid the pitfall of prop drilling 

### defining context 

### using the context API 

### React Hooks: Refactoring 

## Evolution of State Management 

### Flux wars: beginnings of Redux 

### you don't need Redux 

### Redux feature

### Redux feature container

## benefits of Redux

### immutability out of the box

### benefits of Redux middleware

### where state should live in your components

### debugging with Redux

## React and Redux Alternatives

### MobX: OOJ statement approach

### Apollo Link State: state management with GraphQL
