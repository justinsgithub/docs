# React Design Patterns



### what are design patterns?

- effective solutions to common application development challenges
- there are a lot of solutions to problems that are not effective that lead to more problems and that lead to more brittle code down the line and make your apps less performant and less maintainable
- the non-effective solutions are generally referred to as anti-patterns
- design patterns are the positive equivalent of anti-patterns, they are the most effective solutions to a given development challenge
- this pages design patterns are not referring to OOJ design patterns, they are React specific

### common challenges

- creating reusable layouts
- reusing complex logic between multiple components
- working with forms correctly 
- incorporating functional concepts into our code 

## Layout Components

### what are layout components?

- React components that deal primarily with arranging other components on the page
- some examples:

    - split screens (arranging more than one component in different sections of the page)
    - lists and items (displaying data in a list)
    - modals (just content that gets displayed over the top of the actual page)

    
- normally when creating a component (like a side nav), the normal way we would go about doing that is by including the div and the styles that go with that side nav inside the component itself
- with layout components, we split the actual layout styles into their own component and then simply display the component itself (like a side nav), inside the layout component, this separates the component itself from where the component is being displayed on the page 
- this gives us more flexibility with how we use it in the future
- the main idea with layout components is that the components we create, (the main content components of our pages), should not know or care where it is being displayed

### split-screen components 

- styled-components are a package that makes it easy to create React styled components (npm i styled-components)

- use styled components to add weight to our components like for a navbar

- App.js

```javascript
{! software/react/design-patterns/src/split-screen-components/App.js !}
```

- SplitScreen.js

```javascript
{! software/react/design-patterns/src/split-screen-components/SplitScreen.js !}
```

## list components


-  App.js

```javascript
{! software/react/design-patterns/src/lists/App.js!}
```

- NumberedList.js

```javascript
{! software/react/design-patterns/src/lists/NumberedList.js !}
```

- RegularList.js

```javascript
{! software/react/design-patterns/src/lists/RegularList.js !}
```

- SmallPersonListItem.js

```javascript
{! software/react/design-patterns/src/lists/person/SmallPersonListItem.js !}
```

- LargePersonListItem.js

```javascript
{! software/react/design-patterns/src/lists/person/LargePersonListItem.js !}
```

- SmallProductListItem.js

```javascript
{! software/react/design-patterns/src/lists/product/SmallProductListItem.js !}
```

- LargeProductListItem.js

```javascript
{! software/react/design-patterns/src/lists/product/LargeProductListItem.js !}
```
### modal components

- when most people go to add modals to the react application, most times, the first thing they do is install react modal, or some similar package
- this is not necessary and it is easy to implement your own

## container components

### what are container components?

### server instructions 

### CurrentUserLoader component

### UserLoader component

### ResourceLoader component

### DataSource component

### loading data from localStorage

## controlled and uncontrolled components

### controlled vs uncontrolled components

### uncontrolled forms

### controlled forms

### controlled modals

### uncontrolled boarding flows

### collecting onboarding data 

### controlled onboarding flows

## higher-order components

### what are higher-order components

### printing props with HOCs

### loading data with HOCs

### modifying data with HOCs

### creating forms with HOCs

### higher-order component improvements

## custom hooks patterns 

### what are custom hooks?

### useCurrentUser hooks

### getCurrentUser hook 

### useUser hook

### useResource hook 

### useDataSource hook 

## functional programming and React 

### what is functional programming? 

### recursive components

### component composition

### partially applied components

