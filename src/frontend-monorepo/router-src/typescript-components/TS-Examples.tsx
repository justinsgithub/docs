import './App.css';
import {Container} from './Container';
import {Greet} from './Greet';
import {Person} from './Person';
import {PersonList} from './PersonList';
import {Status} from './Status';
import {Heading} from './Heading';
import {SubHeading} from './SubHeading';
import {Button} from './Button';
import {Input} from './Input';
import {Box} from './context/Box';
import {ThemeContextProvider} from './context/ThemeContext';
import {AdminContextProvider} from './context/AdminContext';
import {Admin} from './context/Admin';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile';
import { GroceryList } from './generics/GroceryList';
import { RandomNumber } from './restriction/RandomNumber';
import { TicTacToe } from './templateliterals/TicTacToe';
import { CustomButton } from './html/Button';
import { Content } from './polymorphic/Content';

function App() {
    const myName = {
        first: 'Justin',
        middle: 'Tyler',
        last: 'Angeles-Ward',
    }
    const siblings = [
        {
            first: 'Sierra',
            middle: 'Ashley',
            last: 'Randolph',
        },
        {
            first: 'Austin',
            middle: 'Lee',
            last: 'Randolph',
        },
        {
            first: 'Michael',
            middle: 'Gordon',
            last: 'Alvey',
        },
        {
            first: 'Grace',
            middle: 'Marjorie',
            last: 'Alvey',
        },
        {
            first: 'Anthony',
            middle: 'David',
            last: 'Alvey',
        }
    ]
  return (
    <div className="App">
        <Heading>Life OS</Heading>
        <SubHeading><Heading>Your Operating System for Life</Heading></SubHeading>
        <GroceryList groceries={['steak', 'chicken', 'apples']} onClick={grocery => console.log(grocery)}/>
        <CustomButton variant='primary' onClick={() => console.log('clicked')}>Primary Button</CustomButton>
        <CustomButton variant='secondary' onClick={() => console.log('clicked')}>Secondary Button</CustomButton>
        <RandomNumber value={10} isPositive/>
        <GroceryList groceries={[0, 1, 2]} onClick={grocery => console.log(grocery)}/>
        <Content size='lg'> Heading </Content>
        <Content size='md'> Paragraph </Content>
        <Content as='label' htmlFor='someId' size='sm' color='secondary'> Label </Content>
        <TicTacToe position='center'/>
        <AdminContextProvider> 
            <Admin />
        </AdminContextProvider>
        <Status status='success'/>  
        <Greet name="Justin" dateDay={28} month='January' year={2022} isLoggedIn={true}/>
        <ThemeContextProvider>
                <Box/>
        </ThemeContextProvider>
        <Private isLoggedIn={true} component={Profile}/>
        <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
        <Person name={myName}/>
        <Button handleClick={(event, id) => {
                console.log('button clicked, emitting event:', event, id)
            }}/>
        <Input value='' handleChange={event => console.log(event)}/>
        <PersonList names={siblings}/>
    </div>
  );
}

export default App;

