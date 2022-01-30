# React Hooks

- the modern way to work with React projects is to use a feature called hooks
- hooks allow you to use state and other react features without having to write classes

## useState

- managing state in an application is the utmost importance and we can do this with Reacts function useState
- useState is a function that returns an array of 2 items, the first item is the state of our variable, and the second item is a function
- we define the first item in the array returned from useState by passing it in as an argument to useState
- create a variable that holds an array containing a variable for data and a variable that you call whenever you want to modify the data variable
- the created variable is given the value of useState, which takes an argument of the data variables initial value
- the initial value could be false to set the default state of an element to hide, so that it only shows when a user click on it
- useState allows us to track the value of an element and modify our code to do things depending on the state of the useState variable


## useReducer

- the most simple definition of a reducer function is that it takes the current state and returns a new state
- useReducer takes in two arguments, the first is a function to change the state, and the second is the initial state
- useReducer abstracts writing separate state changing functions and makes our code even more concise, thank you React
 
## useCallback

- useCallback allows us to use async functions and perform things like setState functions when its finished
- good for using the fetch command in JS

## useEffect

- typically used to manage side effects that aren't related to the components render
- things like console messages, fetching data, and sometimes animations can benefit from useEffect
- takes in a callback function and normally does something one of our applications states
- also takes in a second argument called the dependency array 
- if you pass in an empty array, the props and state inside the effect will always have the initial values
- an empty array means the effect is not going to be called again after the first render
- with an empty dependency array, the useEffect still will not run even when the state its using changes
- React will complain if we do not add any state to track to our dependency array and leave it empty

- useEffect lets you perform what are called side effects in function components
- useEffect is like the React life cycle methods componentDidMount / componentDidUpdate / componentWillUnmount
- perfect for performing data searching operations and manually changing the DOM when certain components are a result of these operations
- effect is supposed to be something like a side effect that your application doesn't normally worry about, controls React a little bit more
- useEffect can use something like a useCallback fetch function and track the fetching of the data 
- if the data changes for some reason, useEffect can track it and update our application automatically


