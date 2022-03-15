# React Essentials

## components

- think of a component as being a building block, a little piece of the UI that you use to describe one part of our application 
- we create a component by creating a function, which returns JSX, or UI
- think of a component as a function that returns UI 
- we can compose these functions together to create a larger application 
- you can use components to display dynamic data 


## JSX 

- React.createElement appends elements to the DOM 
- this is not how React is normally used

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    React.createElement("ul", null, 
        React.createElement("li", null, "list item")
        React.createElement("li", null, "list item")
        React.createElement("li", null, "list item")
        React.createElement("li", null, "list item")
        React.createElement("li", null, "list item")
    ),
    document.getElementById('root')
);
```

- javascript as XML
- a language extension that allows you to write tags directly in JavaScript
- does not run in the browser natively / naturally
- if a JS file with JSX tried running in the web browser it would not work and throw errors
- this is where create-react-app comes in, using babel
- babel is a tool that is working behind the scenes
- see [babeljs.io](https://babeljs.io) compiler page to see how it works
- babel is a super useful tool that is found in a ton of different JS projects
- if you are writing JSX or some sort of new JS syntax that is not supported in older browsers, babel will do the hard work of compiling your code behind the scenes


### component properties

- every React components has access to an object called props (for properties)
- when creating React component functions, we use props for the parameters and then use the props / parameters inside of the function body
- we call functions in React using JSX syntax
- we access the props properties by using props.MYPROPERTY (dot notation) inside of our function body
- think of props being this little kind of backpack that you can place different information in for every single component
- when we render the component we pass properties like attributes / named arguments in to the component using JSX syntax
- any keywords in HTML or CSS that clash with keywords in react or use hyphens are replaced with a camel-case version


```javascript
const Header = (props) => {
    return (
        <h1>{props.name}'s Header</h1>
    )
}



const Main = (props) => {
    return (
        <p>{props.adjective}</p>
    )
}

const Footer = (props) => {
    return (
        <h3>{props.date}</h3>
    )
}

function App() {
    return (
        <div>
            <Header name="Justin"/>
            <Main adjective="so freakin awesome"/>
            <Footer date={new Date().getFullYear()}/>
        </div>
  );
}

export default App;
```


- component file names are usually capitalized
- import your own components using a relative file path
- when creating list components, they need to be created with a key, which is like a unique id and can most likely come from the id of the data you are using / mapping

### styling components 

- you can use curly braces and pass in style={style-object} as an argument to a component to style it 
- you can style by passing in className="my classes class3" as well 
- try not to use strings however, it is better assign them as variables before the return statement 



### working with lists

- to display more complex data with our components, we can use lists 
- we can use the .map() Array method to map the list items as components
- when passing in a variable as an argument we use curly braces, which is pretty much always unless we are passing in a string 
- try not to use strings in your code, make them variables first  
- each child in a list should have a unique key property
- a key is like an ID that helps keep everything in sync
- it is possible that our array items might get out of sync when rendering occurs
- particularly when something is being added to the DOM at the beginning or the middle of the list instead of the end
- there are a couple different ways we can handle this 
- one thing we can do is add an index to our map method that we can use as a key, but this is not recommended
- React documentation says using an array index as a key can cause problems when rendering the items to the DOM
- normally when working with data this should not be too much of a problem because the data will have a unique ID we can use 
- if we do not have a unique Id we can use a transformation function to map over the list and create an object
- whenever we return an object from a function like this in line, we need to wrap it in parenthesis
- keys help your data stay in sync as your application data changes over time

```javascript
const Main = (props) => {
    return (
        <div>
            <p>{props.adjective}</p>
            <ul>
            {props.myList.map((listItem) => (
                <li key={listItem.id}>{listItem.day}</li>
                ))}

            </ul>
        </div>
    )
}; 

const Footer = (props) => {
    return (
        <h3>{props.date}</h3>
    )
}

function App() {
const weekDays = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

const weekDaysObject  = weekDaysList.map((weekday, index) => ({id: index, day: weekday}))
    return (
        <div>
            <Header name="Justin"/>
            <Main myList={weekDaysObject} adjective="so freakin awesome"/>
            <Footer date={new Date().getFullYear()}/>
        </div>
  );
}
```


### using React.Fragment
- JSX must always return with a single parent node 
- text nodes count, so a one-element, one-line return would work, and without parenthesis 
- if there is more than 1 element and it spans lines, the return statement must have opening and closing parenthesis and a single parent element
- wrapping the render statement JSX with <React.Fragment></React.Fragment> or <></> can basically act as a parent div as well 


### adding images

- add images to React just like with HTML
- import the image from the relative directory path 
- use img tag with src attribute and curly braces for imported variable name 
- can also use URLS 
- img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
- always add an alt to images for the visually impaired

```javascript
import imageName from './images-dir/my-image.jpg';

const myImage = () => {
    const myImageUrl = "https://github.com/justinsgithub.png"
        return (
        <img src={myImageUrl} height={200} alt="justinsgithub image"/>
        <img src={imageName} alt="alternate description for imageName"/>
        )
    }
```


## state in the component tree

### conditional rendering

- components can be rendered conditionally
- we can choose certain components to display based on the value of whatever variables we choose in our code
- we can use terser syntax for conditional rendering ? true : veryTrue
- we can also set bind components with different attributes to variable names, for easier conditionals in some situations

```javascript
import React from "react";
import "./App.css"

const Title = (props) => {
    
    return <h1>{props.name}</h1>
}

const Header = (props) => {
    
    const justin = <Title name="justin"/>
    const notJustin = <Title name="not justin"/>

    return (
        <header>
                {props.isJustin === true ? justin : notJustin}
        </header>
    )
}

function App() {

    let isJustin = true

    return (
        <Header isJustin={isJustin}/>

  );
}

export default App;
```

### array destructuring

- a way to automatically assign variable names to array items 

```javascript
const [word1,word2,word3] = ['random', 'word','array']

console.log(word2) // 'word'

const [,,word3] = ['random', 'word','array']

console.log(word3) // 'array'
```

- often used with the props object

```javascript
import React from "react";
import "./App.css"

const Title = ({name}) => {
    
    return <h1>{name}</h1>
}

const Header = (props) => {
    
    const justin = <Title name="justin"/>
    const notJustin = <Title name="not justin"/>

    return (
        <header>
                {props.isJustin === true ? justin : notJustin}
        </header>
    )
}

function App() {

    let isJustin = true

    return (
        <Header isJustin={isJustin}/>

  );
}

export default App;
```

### handling loading states 

- when we make a http request to an API, there are 3 possible states:

    - pending / loading 
    - success 
    - failed, this can happen at times such as making a request to a broken URL

### handling states example

 ```
import React,{useState, useEffect} from "react";
import "./App.css"


function App({login}) {

    const [dataState, setDataState] = useState(null)
    const [loadingState, setLoadingState] = useState(false)
    const [errorState, setErrorState] = useState(null)

    const ghurl = "https://api.github.com/users"

    useEffect(() => {
        if(!login) return;
        setLoadingState(true);
        fetch(`${ghurl}/${login}`)
        .then(response => response.json())
        .then(setDataState)
        .then(() => setLoadingState(false))
        .catch(setErrorState)
    }, [login]);

    if (loadingState) return <h1>Loading...</h1>;
    if (errorState) return <pre>{JSON.stringify(errorState, null, 2)}</pre>;
    if (!dataState) return null;

        return(
            <>
                <div>
                    <h1>{dataState.name}</h1>
                    <h1>{dataState.login}</h1>
                    <p>{dataState.location}</p>
                    <img alt={dataState.login} src={dataState.avatar_url}/>
                </div>
            </>
        );
};

export default App;
 ```

## React router

- when creating a React application, we are creating a SPA (single page application)
- you can think of a SPA as instead of creating different files for different pages, we create a single page and javascript is going to load information and change the UI
- something that becomes tricky when creating an SPA, is somehow handling routing
- how are we gonna get users from page to page? we can use react router to help us
- when developing for web application, react-router-dom is used, react-router has tools for native applications as well 
- the router lives in the index.js file
- index.js is where you pass all the information from the router to any nested components

```shell
npm install react-router@next react-router-dom@next
```

### route properties 

- routes take in 2 arguments 
- a path argument which is the URL we want to use 
- an element argument, which is the Components we want to display at that URL
- the home component would be path="/"

### link component

- the link component takes an argument called to (to="/my-page")
- you can create a custom 404 page using path="*"

### useLocation

- a function that is going to return our current location 


```javascript 

let location = useLocation()  

```

### nested routes 

- use Outlet to setup nested routes

### index.js 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";



 //   <App login="justinsgithub"/>, document.getElementById('root'));
ReactDOM.render( 
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

```

### App.js 

```javascript 

import {Routes, Route} from "react-router-dom";
import "./App.css"

import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location } from './pages';


function App() {
    return(
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About/>}>
                            <Route path="services" element={<Services/>}/>
                            <Route path="location" element={<Location/>}/>
                            <Route path="history" element={<CompanyHistory/>}/>
                        </Route>
                        <Route path="/events" element={<Events/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<Whoops404/>}/>
                    </Routes>
                </div>
    );
};

export default App;

```


### pages.js 

```javascript 
import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation()
    return (
        <h1>whoopsies no page found at {location.pathname}</h1>
    )
}

export function Services() {
    return (
        <div>
            <h2>
                Our Services
            </h2>
        </div>
    )
}

export function CompanyHistory() {
    return (
        <div>
            <h2>
                Our Company History 
            </h2>
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h2>
                Our Location 
            </h2>
        </div>
    )
}

```

