import React, { Component } from 'react';
import logo from './logo.svg';
import Message from './Message';
import "./index.css"

class App extends Component<any>{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Message name="Justin" message="simple message"/>
                </header>
            </div>
        );

    }
}


export default App;
