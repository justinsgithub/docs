import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let firstValue: string = 'justin';

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        the value of {firstValue} is {typeof firstValue} type
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
