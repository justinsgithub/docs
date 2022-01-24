# React & TypeScript

- `npx create-react-app --template typescript react-with-typescript`

## general

### React 

- `componentWillMount()` = will run before your component mounts

- `componentDidMount()` = will run after your component mounts

### TypeScript

- a tuple is an array that can have more than 1 type

- enums is an object with specific types, like modeling data

- readOnly = items that can only be read once and then you cannot change it 

- if you create an interface with readonly Properties, it means these props in your component can only be created once and not be changed after the fact

- HOC = Higher-Order Components, functions that take a component and return a new one 

- when you have components that are similar but have slight differences, this is a good case for an HOC

## project files


### package.json 

```json
{! software/typescript/react-with-typescript/package.json !}
```

### tsconfig.json 

```json
{! software/typescript/react-with-typescript/tsconfig.json !}
```


### index.tsx 

```typescript
{! software/typescript/react-with-typescript/src/index.tsx !}
```


### App.tsx 

```typescript
{! software/typescript/react-with-typescript/src/App.tsx !}
```

