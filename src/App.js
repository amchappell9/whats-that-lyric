import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import NowPlaying from './NowPlaying';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    let mainApp;

    if (!this.state.isLoggedIn) {
      mainApp = <Login clickEvent={this.login} />;
    } else {
      mainApp = <NowPlaying />;
    }

    return (
      <div className="App bg-black">
        <Header isLoggedIn={this.state.isLoggedIn} />
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
