import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import NowPlaying from './NowPlaying';
import Footer from './Footer';
import SpotifyWebApi from 'spotify-web-api-js';
import NothingPlaying from './NothingPlaying';
import SongInfo from './SongInfo';

const redirect_uri = 'http://localhost:3000';

const spotifyApi = new SpotifyWebApi();
const spotifyClientId = 'a0cb7862b26747b2912a710a0d98b39a';
const spotifyScope = 'user-read-playback-state';
const spotifyStateKey = 'spotify_auth_state';

// API calls to genius can be made like this: api.genius.com/search?q=Kendrick%20Lamar&access_token=WOfEtjZLwyar4cFto_v8bpb9ieA_YVbTxVJwcs7AW9yJbAuUe8La3FKSazhtIbJg
// const geniusClientId = 'JmGJFDuspgC_KGbVc340ZrWrLMKVlKUx9S3BGfhBQT65EyZPxSlokCWy3fI9onRA';
const geniusClientAccessToken = 'WOfEtjZLwyar4cFto_v8bpb9ieA_YVbTxVJwcs7AW9yJbAuUe8La3FKSazhtIbJg';

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
      geniusSongInfo: null,
      nothingPlaying: false
    };
  }

  componentDidMount() {
    document.addEventListener("visibilitychange", this.handleTabBackInFocus, false);
  }

  componentWillUnmount() {
    document.removeEventListener("visibilitychange", this.handleTabBackInFocus, false);
  }

  handleTabBackInFocus = () => {
    if (this.state.isLoggedIn && !document.hidden) {
      this.getNowPlaying();
    }
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
    var state = this.generateRandomString(16);

    localStorage.setItem(spotifyStateKey, state);

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(spotifyClientId);
    url += '&scope=' + encodeURIComponent(spotifyScope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location = url;
  }

  handleLogout = () => {
    window.location = window.location.href.substr(0, window.location.href.indexOf('#'));
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
          });

          this.searchGeniusAPI(response.item.name, response.item.artists[0].name);
        } else {
          this.setState({
            nothingPlaying: true
          })
        }
      })
      .catch((error) => {
        console.error("Error getting getting current playback song");
      })
  }

  searchGeniusAPI = (songName, artistName) => {
    fetch("https://api.genius.com/search?access_token=" + geniusClientAccessToken + "&q=" + encodeURI(songName) + " " + encodeURI(artistName))
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // this.setState({
        //   geniusSongInfo: response.response.hits[0]
        // })

        this.getGeniusSongInfo(response.response.hits[0]);
      });
  }

  getGeniusSongInfo = (geniusResult) => {
    // Get URL from result
    const lyricsURL = "https://api.genius.com" + geniusResult.result.api_path + "?access_token=" + geniusClientAccessToken;

    // Call endpoint
    fetch(lyricsURL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          geniusSongInfo: response.response.song
        });
      })
  }

  render() {
    let content;

    if (!this.state.isLoggedIn) {
      content = <Login handleLogin={this.redirectToSpotifyAuth} />;
    } else if (this.state.isLoggedIn && this.state.nothingPlaying) {
      content = <NothingPlaying />;
    } else if (this.state.isLoggedIn && this.state.nowPlaying.name !== 'Not Checked' && this.state.geniusSongInfo) {
      content = (
        <React.Fragment>
          <NowPlaying nowPlaying={this.state.nowPlaying} songInfo={this.state.geniusSongInfo} />
          <SongInfo songInfo={this.state.geniusSongInfo} />
        </React.Fragment>
      );
    }

    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
        <main>
          {content}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
