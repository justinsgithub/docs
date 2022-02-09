import './App.css';
import {Container} from './components/Container';
import {Greet} from './components/Greet';
import {Person} from './components/Person';
import {PersonList} from './components/PersonList';
import {Status} from './components/Status';
import {Heading} from './components/Heading';
import {SubHeading} from './components/SubHeading';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {Box} from './components/context/Box';
import {ThemeContextProvider} from './components/context/ThemeContext';
import {AdminContextProvider} from './components/context/AdminContext';
import {Admin} from './components/context/Admin';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { GroceryList } from './components/generics/GroceryList';
import { RandomNumber } from './components/restriction/RandomNumber';
import { TicTacToe } from './components/templateliterals/TicTacToe';
import { CustomButton } from './components/html/Button';
import { Content } from './components/polymorphic/Content';

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

