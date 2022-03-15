# Getting Started w/ React


## tools for react 

- git 
- nodejs
- react developer tools
- react snippets
- js/jsx snippets
- create-react-app

```shell
npx create-react-app building-an-interface
```
### create-react-app modules

- create-react-app scaffolds a project template for you

### webpack

- a JS bundler 
- main job is to manage how our application is assembled and the loading of your different modules into an application

### babel 

- a JS compiler
- lets you write code with the latest JS features and will convert it so that it works with older browsers

### ES Lint | extension 

- a JS linter
- analyzes your code against certain rules and helps you fix them
- you may need an extension installed on your editor to use it

### Jest 

- a testing framework

### web vitals 

-a performance monitoring tool for your site
- measures: 
        - performance 
        - accessibility 
        - best practices


## external components

- in a real application you won't want to code everything from scratch, so you can install extra modules

### [tailwind CSS](https://tailwindcss.com/)

- a framework for building great looking sites, with a utility first approach
- super popular for a library like react
- installing tailwind is a little bit different from most other libraries 
- the reason is a problem with one of the libraries that tailwind uses called PostCSS
- right now create-react-app does not support PostCSS 8 
- to install for create-react-app v5.0+

    1. npm install -D tailwindcss postcss autoprefixer
    2. npx tailwindcss init -p

- creates 2 files: 

- tailwind.config.css

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
```

- postcss.config.css

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- add directives to src/index.css

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- in tailwind you usually want to wrap everything in a container class 

### [react-icons](https://react-icons.github.io/react-icons/)

- react-icons will only use the code for the specific icons that you use, unlike linking to something like font-awesome
- after installing it will be available to any of your modules
- search [react-icons website](https://react-icons.github.io/react-icons/) to find icons to use
- each icon is prefixed with the library that it comes from

```shell
npm install react-icons
```

```javascript 
import { ICONNAME1, ICONNAME2 } from 'react-icons/LIBRARY-NAME' // 'react-icons/bs' for example;

...
<ICONNAME />
```
## project configuration

- folder layout 

```shell
node_modules
package.json
package-lock.json
public
README.md
src
```

- files are put into 2 main folders, src and public

## src folder

```shell 
App.css
App.js
App.test.js
index.css
index.js
logo.svg
reportWebVitals.js
setupTests.js
```

### index.js 

- index.js is the entry point for the JS application
- index.js will import alot of code from different libraries like react and react-dom
- react is the main library for working with React
- react-dom manages how the document model works within react 
- react and react-dom are being used by Node using what is listed as dependencies in your package.json
- webpack allows an application wide CSS file by importing index.css into index.js like below 
- a configuration file for web report vitals is also included in the index.js
- import App is importing the App.js file, you can ignore extensions when you load other JS files

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- the React library is getting used inside of our render command 
- there is also some code to put React in strict mode during development
- strict mode will complain if you write potentially dangerous code
- the render command loads up the App component as a module, and looks for an item with the id of root in your index.html file, where your application will be loaded

### App.js 

- the logo being imported here will not be in the final build that is launched for the public since it is being managed by webpack
- react code is normally written in JSX which is a combination of JS and XML / HTML
- react functions return HTML with some small differences
- you can use JS code inside of the HTML by wrapping it with {curly braces}
- there are places where normal HTML keywords will have to be replaced by the JSX version, such as class
- when using the class keyword inside of HTML you have to use className instead, since class is a JS keyword
- standalone HTML tags such as br and hr need to include a closing slash

```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

### public folder

- the public folder has files that webpack will manage
- will be moved to the server when the project is deployed 
- the logo / icon files will show up when we preview our application
- robots.txt gives web crawlers information about your site
- web-crawlers are applications that search engines like google use to get more information about your websites

```shell
favicon.ico
index.html
logo192.png
logo512.png
manifest.json
robots.txt
```


### index.html 

- the index.html file is the entry point for browsers 
- index.html can be modified but webpack uses this file to inject the JS code you write, as well as React code and CSS
- inside of the root div is where your application is loaded

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

### package.json

- package.json is the file Node creates to manage a project

```json
{
  "name": "react-repo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```


### browserslist 

- helps your modules like webpack know which browsers you are targeting for the build 
- in the above package.json we are targeting browsers that are not opera mini

### .gitignore

- helps you control which files are tracked by GitHub

```shell
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
