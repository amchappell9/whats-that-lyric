import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import NowPlaying from './NowPlaying';
import Footer from './Footer';
import SpotifyWebApi from 'spotify-web-api-js';
import NothingPlaying from './NothingPlaying';

const spotifyApi = new SpotifyWebApi();
const clientId = 'a0cb7862b26747b2912a710a0d98b39a';
const redirect_uri = 'http://localhost:3000';
const scope = 'user-read-playback-state';
const stateKey = 'spotify_auth_state';

class App extends Component {
  constructor(props) {
    super(props);

    const params = this.getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
      this.getNowPlaying();
    }

    this.state = {
      isLoggedIn: token ? true : false, 
      nowPlaying: { 
        songName: 'Not Checked', 
        artists: [],
        albumArt: ''
      },
      nothingPlaying: false
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

  redirectToSpotifyAuth = () => {
    // Build spotify url and redirect to it
    var state = generateRandomString(16);

    localStorage.setItem(stateKey, state);

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location = url;
  }

  generateRandomString = (length) => {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        if (response) {
          this.setState({
            nowPlaying: {
              songName: response.item.name,
              artists: response.item.artists,
              albumArt: response.item.album.images[0].url
            }
          })
        } else {
          this.setState({
            nothingPlaying: true
          })
        }
      })
      .catch((error) => {
        if (error.status === 401) {
          this.getNewAccessToken();
        } else {
          console.error("Error getting getting current playback song");
        }
      })
  }

  getNewAccessToken = () => {
    console.log("Getting new access token");
  }

  render() {
    let content;

    if (!this.state.isLoggedIn) {
      content = <Login handleLogin={this.redirectToSpotifyAuth}/>;
    } else if (this.state.isLoggedIn && this.state.nothingPlaying) {
      content = <NothingPlaying />;
    } else if (this.state.isLoggedIn && this.state.nowPlaying.name !== 'Not Checked') {
      content = <NowPlaying nowPlaying={this.state.nowPlaying} />;
    }

    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <main>
          <div className="container mx-auto mt-4">
            {content}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
