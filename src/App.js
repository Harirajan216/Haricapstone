// src/App.js
import React from 'react';
import './App.css';
import logo from './logo.svg'; // Make sure to use the correct logo path

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to My React Application!</h1>
                <p>
                    This is a simple React application.
                </p>
            </header>
        </div>
    );
}

export default App;
