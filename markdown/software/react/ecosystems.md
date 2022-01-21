# React Ecosystems

## React ecosystem

### React is the ecosystem nucleus
- React is like the nucleus of a powerful ecosystem
- React does not try to be too many things
- has a small library or API to keep things simple
- the power lies in giving you the proper syntax and infrastructure to build your application with components everywhere
- uses props (properties / parameters) to pass data to your components  
- uses states to keep track of your current application state
- allows the community and ecosystem to address other needs you might have with your application
- it is the ecosystem that makes React so valuable

### React ecosystem electrons

- as React popularity has soared over the years a developer community has gathered around it's core and built hundreds of extensions to provide everything we need to build best in class and enterprise applications
- when you look at the electrons surrounding the React core you can see tons of functional libraries helping us achieve specific goals for applications 

- application goals: 
    - server-side rendering 
    - state management
    - mobile 
    - testing and debugging
    - animation
    - routing and navigation 
    - types
    - many others

## the electrons

### routing & navigation

- use them every day when you surf the web or navigate through an applications menu
- behind the scenes, routing basically happens as a function of navigating to different pages, or sections of a website or app
- when you browse a webpage and click on a navigation link, you are routed to a new page
- although it may seem complex initially, routing is really quite simple, when you like on a link named news, the link calls a route named news
    - the route "news", has a component named news attached to it, and the component will render that page in the browser
    - if you click on other links, the same process happens over and over again
    - on a mobile or web application it is the same when you tab or click any items that require a render for a new section or page

- best way to route is react is react-router
- [react router training](http://reacttraining.com/react-router)

### server-side rendering 

- a website normally renders on the server where it is usually hosted, or your browser, commonly called a client
- depending on the application some are rendered on the server and some on the client
- it means grabbing all of your code and representing all of your code can be done on both sides
- benefits of rendering on server-side:
    - faster
    - more secure 
    - SEO friendly

- do this in React by using ReactDomServer APIs, provided with Reacts core library
- in the server code we can use:
    - renderToString(element)
    - renderToStaticMarkup(element)

- SSR docs are on [https://facebook.github.io/react](https://facebook.github.io/react)

### state management

- when data changes or when you click on a link, the application will change to reflect these events
- think of a state as the webpage you are on before there are any changes or before you click on any links
- that is the current state of the site or application at that point in time
- when we click on a link, we change the state of the application at another point in time
- in its simplest form, state management is:
    - managing different points in time, or states for your application 

- with React, we get an object we can observe and analyze, which is called state
- so as these events occur, you see the state changing, both visually on the web page or application, and internally in the state object
- Redux, one of the leading libraries, provides us with great syntax and structure to manage out state
- Redux has actions that call reducers, which are functions that create a new state based on the previous one with the new action added to it 
- if we click the action, "get me the latest news", the reducer will copy the old list of news, add the new ones, and create a new state object with the updated news
- learn about Redux at [redux.js.org](https://redux.js.org) or take linked in learning course on the subject

### mobile

- a couple years ago Reacts team decided to remove the react web apis, called react-dom from the react library
- this opened up the possibility of using React in new environments such as mobile devices  
- react native allows building mobile applications
- react native ecosystem includes:
    - routing 
    - UI 
    - starting kits
    - IDEs 
    - testing

- checkout linkedin react native course

### animation

- research has shown that subtle, well placed animation makes the difference between an addictive application and one that just feels meh
- react has a few tools for animation, such as the transition group which is part of reacts library, which is quite simple and does not provide too many options
- if you want to push the possibilities or do a fell feature show using the 12 principles of animation then you are better off using a library such as react-motion
- react-motion offers spring, motion, and transitions, and many other ways to get your components on and off the screen 
- get started with react motion at [github.com/chenglou/react-motion](https://github.com/chenglou/react-motion)

### testing and debugging

- application development almost never goes smoothly
- React developer tools are good for when you need to inspect components to figure out what the state of your application is, or when you need to see what your state object looks like, or when you need to see what props are being passed to your component, it is built on top of your browser's development tools and it will let you see all of this information and more
- jest is good for:
    - to see if a component renders correctly with snapshots, which are great for UI tests
    - when you need to know which files are being tested, JEST provides great coverage support 
    - good when you need to validate that the proper values are returned with matchers
    - even though Jest is built by Facebook and aimed at React applications, you can also use it with many other frameworks, so the time invested in learning it is well spent

### types

- type checking
- type checking allows us to specify the type of data our variables, objects, or functions are expecting 
- adds another tool for application efficiency and bug prevention
- when pass a value that is not of the expected type accidentally, in your program it will lead to trouble
- the benefit to type checking is to eliminate alot of the common and easily avoidable bugs or better understand why your code might not work as expected
- 2 ways to get started, propTypes (by facebook) or [flow.org](http://flow.org) (also by facebook)

