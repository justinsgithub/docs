# React's UI Rendering Process

- React allows you to write maintainable and performant code by using the concept of components 

- components allow you to focus on describing the UI you want, rather than focusing on the details of how the UI actually gets inserted in the page

## HTML & the DOM

- helpful to think of a web page as a document, instead of editing document with word processor, you use an api (the DOM)

## components & elements 

- components are functions and classes to describe the UI you want to ultimately end up with

- jsx is the primary way we write components, but we do not have to use jsx 

- an element is a plain object describing a component or HTML tag 

### component using jsx

```
const MyComponent = () => {
    return (
        <main>
            <h1 id="title">Look ma!</h1>
        </main>
    )

}
```

### returned element 

```javascript
{
    type: "main";
    key: null, 
    ref: null,
    "$$typeof": Symbol(react.element),
    props: {
            children: {
                    type: "h1",
                    key:null,
                    ref:null,
                    props: {
                            id: "title",
                            children: "Look ma!"
                        },
                }}}
```

- you can actually write your code like above and it would work

### type property 

- a string reference to an HTML tag (react internally calls this a dom element)
- a reference to a component, react calls this a component element (if you did import "MyComponent" at the top of a JS file, that is what would be in type)

### key property 

- used when you are manually creating a bunch of children, when you are mapping over an Array and you are generating a bunch of components from mapping 
- used to uniquely identify an element among siblings

### ref property

- reference to an actual DOM node 
- using (createRef, useRef), the value ends up here 
- you may want something referenced when you want to do something such as focus an input, or if you have a 3rd party library that is writing attributes to a DOM node and you want to access those

### $$typeof property

- a safety feature (super edge case)
- its value is always a Symbol
- with a Symbol you can pass in a String, or anything and it generates a unique anonymous "hash" (essentially, almost like a UUID)
- the idea is that this Symbol is unique to the react App itself
- cannot have a Symbol in json, returns typeof Symbol, cannot send Symbols back and forth through API calls
- the Symbol as a value is protection against cross-site scripting attacks
- react expects all elements to have this property so malicious or fake components don't get injected into code when fetching data from a server

### props property 

- the meat of the element 
- everything inside of the element
- an object, above only has 1 prop 
- children can be an object or an Array, an Array of objects which are the children elements

- we have a component, internally React creates a component instance, which ultimately generates an object like the one above
- the object that is generated is what is known as a virtual DOM
- it is really computationally expensive to write to the DOM, it is super cheap to create an object

### view an element 

```javascript
const MyComponent = (
    <main>
        <h1 id="title">Look Ma!</h1>
    </main>
)
console.log(MyComponent)
```

### shadow DOM? 

- the shadow DOM is browser technology designed for scoping variables in CSS and web components 
- not related specifically related to React

## reconciliation

- creating the virtual DOM is part of the process known as reconciliation
- reconciliation is responsible for maintaining the tree of elements when a components props or state change
- react creates a tree of elements every time the render function is called, that is ultimately what we are getting back
- to be efficient we need a way to tell what is different between the 2 trees so that we are only changing things in the DOM that need to be changed 
- reconciliation houses the diffing algorithm that determines what parts of that tree need to be replaced

### reconciliation - type change 

- below situation is such as a customer looking at a product page and then clicking to view a single product

```javascript 
<Wrapper>                   <Wrapper>
    <ProductList />    =>         <IndividualProduct />
</Wrapper>                  </Wrapper>
```

- whenever the roots of elements have different types, react tears down the whole tree and it builds a whole new tree from scratch 

- the reason for the new tree is that their type has changed

- if the type of a component object changes, everything beneath it gets blown away 

- when tearing down a tree, all DOM nodes are destroyed, component instances will receive component will unmount and the equivalent useEffect hook will fire

- the new DOM nodes are inserted to the DOM and then components will receive component will mount and then component did mount 

- functional components will have their useEffect hooks run as is appropriate

- any state associated with the old tree is lost

- React is not reusing DOM elements, it is actually destroying an recreating them every time an element gets generated so there is some stuff happening in the middle, but you can think of every DOM element correlated with a DOM node, if that element goes away, that DOM node goes away  

- reconciliation - DOM element:
    - there are some under the hood differences between what happens with native DOM elements and component elements, React makes a distinction to these 2 types of elements
    - when there is a native DOM element, a minor change is not a big deal, or adding / changing element attributes is done easily
    - with a component, when something changes in the DOM React recursively looks at each child node 1 by 1 and decides if it needs to change anything 
    - if there is a component with list item as children, react will compare li1 to li1 and only change if the li(n) is different from li(n)
    - a problem happens if a list adds a li to the beginning of the list, then React none of the li(n) will be equivalent to each other any longer and React will re-render the entire list, which may not be noticeable with a small list, but as that list grows the cost would become more noticeable
   - to avoid unnecessarily rendering any DOM elements, we can give each element a ***key*** so React compares items by it's key instead of text content


- do not make component keys the list index: 
    - if a list is reversed in the app, React will think every component changed and re-render the entire list
    - another situation is the list items content change but the index of it does not so React does not change them
    - if do not have a unique id for your data, use something like lodash which will create a UUID for each item in your data
