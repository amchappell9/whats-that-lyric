import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import NowPlaying from './NowPlaying';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <main>
          <div className="container mx-auto mt-4">
            {!this.state.isLoggedIn ? (
              <Login clickEvent={this.login} />
            ) : (
              <NowPlaying />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
