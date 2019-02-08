import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import NowPlaying from './NowPlaying';
import Footer from './Footer';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi;

class App extends Component {
  constructor(props) {
    super(props);

    const params = getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      isLoggedIn: token ? true : false, 
      nowPlaying: { name: 'Not Checked', albumArt: ''}
    };
  }

  getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }

    return hashParams;
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
        <Footer />
      </div>
    );
  }
}

export default App;
