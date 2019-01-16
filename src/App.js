import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import NowPlaying from './NowPlaying';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false
    };
  }

  render() {
    let mainApp;

    if (!this.state.isLoggedin) {
      mainApp = <Login />;
    } else {
      mainApp = <NowPlaying />;
    }

    return (
      <div className="App bg-black">
        <Header isLoggedIn={this.state.isLoggedin} />
        <main>
          <div className="container mx-auto mt-4">
            {mainApp}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
