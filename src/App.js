import React, { Component } from 'react';
import GameComponent from './GameComponent/GameComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gruble</h1>
        </header>
        <GameComponent />
      </div>
    );
  }
}

export default App;
