import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="h-20 border-b border-black border-solid">
          <div className="container mx-auto pt-5">
            <h1>What's That Lyric?</h1>
          </div>
        </header>
        <main className="main-viewport">
          <div className="container mx-auto mt-4">
            Text
          </div>
        </main>
        <footer className="h-10 bg-grey">

        </footer>
      </div>
    );
  }
}

export default App;
