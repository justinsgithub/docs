# Modern Projects with React

## overview

### why use React ecosystem

- a bit of a learning curve
- might seem a little cumbersome at first
- vanilla React was created as a way to create performant, modular user interfaces
- when it comes to the MVC, Reacts main concern falls squarely into the view portion
- provides straight-forward powerful way to take some data and display it in the users browser
- as well as efficiently update what the user sees whenever the data changes
- when it comes to how we load, store and manipulate that data that we are displaying, React does not really provide us with much guidance (which is somewhat on purpose)
- the idea behind the lack of opinion is that it allows React developers to make their own decision with respect to the best way to load data into their own application and tailor React to their exact use case
- React is purposefully designed to make their own data management decisions
- takes alot of experiment and thought to get right and in practice React developers do not put much thought into these decisions 
- the end result is that all of this logic ends up getting crammed straight into the components themselves
- this means that in a React application we end up witht these huge tangled up components that contain all the logic for loading and managing their own data
- can make projects very hard to expand and maintain
- if you have already put a lot of thought into organizing your React code, then you might not need all the tools in the React ecosystem

### separation of concerns

- this is the main idea behind most React ecosystem tools
- for most React tools the main purpose is to separate concerns and organize a React project better

### React ecosystem tools

- Redux:
    - the most popular add-on in React ecosystem 
    - helps us manage the state of our React applications in an effective and relatively bug-free way
    - uses the Flux Architecture (a fancy name for a simple concept)

- Redux Thunk: 
    - allows us to separate out the so-called side effects of our application
    - side effects are permanent changes such as modifying user data on a server, or uploading an article for example
    - network requests, etc
    - the idea is that this avoids us putting the logic directly inside out components (separation of concerns)
    - our components are meant to display our data and that is it 
    - components should not be worrying about making network requests and Thunk gives us a place to put this logic

- selectors (Reselect):
    - abstract away the details of how our data is stored in the state

- styled components: 
    - a better way of styling our components instead of using separate CSS files, particularly when the appearance of a component depends on the state in some way


## basic project

### building React project from scratch 

- without create-react-app 

- what do we need to create a React app?:

    1. index.html, sent to the client and what React renders our app into
    2. support for ES6, to use modern JS syntax
    3. webpack, to build our app and use things like CSS styles, and serve our app during development
    4. root component, the base of our component tree, like a container that holds the rest of our application components
    5. react-hot-loader, to see the changes that we make to our app immediately in development without having to refresh our app everytime


### React entry point

- create and setup directory that will hold React project

```shell
mkdir ~/react-project
cd ~/react-project 
npm init -y 
git init 
mkdir public
mkdir src
touch public/index.html
```

- index.html

```html
{! react/modern-projects/frontend/public/index.html !}
```

### supporting ES6

- `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react` 


- create babel.rc file 

```javascript
{! react/modern-projects/frontend/.babelrc !}
```

### index.js and App component

- npm i react react-dom

- App.js 

```javascript
{! react/modern-projects/frontend/src/App.js !}
```

- index.js 

```javascript
{! react/modern-projects/frontend/src/index.js !}
```

### building & serving with webpack

### hot-reloading with react-hot-loader

### sample app 

### todoList component 

### todoListItem component 

### newTodoForm component

## Redux

## side effects

## selectors

## styled-components

## testing
