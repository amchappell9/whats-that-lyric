import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SpotifyWebApi from 'spotify-web-api-js';

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import NothingPlaying from './NothingPlaying';
import NowPlaying from './NowPlaying';
import SongInfo from './SongInfo';

const spotifyApi = new SpotifyWebApi();
const spotifyClientId = 'a0cb7862b26747b2912a710a0d98b39a';
const spotifyScope = 'user-read-playback-state';
const spotifyStateKey = 'spotify_auth_state';
const redirect_uri = 'http://localhost:3000';

// API calls to genius can be made like this: api.genius.com/search?q=Kendrick%20Lamar&access_token=WOfEtjZLwyar4cFto_v8bpb9ieA_YVbTxVJwcs7AW9yJbAuUe8La3FKSazhtIbJg
// const geniusClientId = 'JmGJFDuspgC_KGbVc340ZrWrLMKVlKUx9S3BGfhBQT65EyZPxSlokCWy3fI9onRA';
const geniusClientAccessToken =
  '2dviAh69wti7Af7J1XFb5qEE3YYfqMhG6PUV_Xy4gDjVwp0OuqgD0ygwInqs8pbG';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 1fr 50px;
`;

const StyledMain = styled.main`
  grid-row: 2;
  grid-column: 1 / 4;
  // background-color: green;
`;

const NowPlayingSubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr;
`;

const getHashParams = () => {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  e = r.exec(q);
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }

  return hashParams;
};

const generateRandomString = length => {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const redirectToSpotifyAuth = () => {
  // Build spotify url and redirect to it
  var state = generateRandomString(16);

  localStorage.setItem(spotifyStateKey, state);

  var url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(spotifyClientId);
  url += '&scope=' + encodeURIComponent(spotifyScope);
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&state=' + encodeURIComponent(state);

  window.location = url;
};

const handleLogout = () => {
  window.location = window.location.href.substr(
    0,
    window.location.href.indexOf('#')
  );
};

const App = () => {
  const params = getHashParams();
  const token = params.access_token;
  const isAuthenticated = token ? true : false;

  const [nowPlaying, setNowPlaying] = useState(null);
  const [geniusInfo, setGeniusInfo] = useState(null);
  const [nothingPlaying, setNothingPlaying] = useState(false);

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);

      getNowPlaying();
    }
  }, [token]);

  const getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState().then(response => {
      if (response) {
        setNowPlaying({
          songName: response.item.name,
          artists: response.item.artists,
          albumArt: response.item.album.images[0].url
        });
        setNothingPlaying(false);
        searchGeniusAPI(response.item.name, response.item.artists[0].name);
      } else {
        // Nothing Playing
        setNothingPlaying(true);
        setNowPlaying(null);
      }
    });
  };

  const searchGeniusAPI = (songName, artistName) => {
    const geniusSearchURL = `https://api.genius.com/search?access_token=${geniusClientAccessToken}&q=${encodeURI(
      songName
    )} ${encodeURI(artistName)}`;

    fetch(geniusSearchURL)
      .then(response => {
        return response.json();
      })
      .then(response => {
        // We're hoping that the first result is the best one
        getGeniusSongInfo(response.response.hits[0]);
      });
  };

  const getGeniusSongInfo = geniusSearchResult => {
    const lyricsURL = `https://api.genius.com${geniusSearchResult.result.api_path}?access_token=${geniusClientAccessToken}&text_format=html`;

    fetch(lyricsURL)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setGeniusInfo(response.response.song);
      });
  };

  let content;

  if (!isAuthenticated) {
    content = <Login handleLogin={redirectToSpotifyAuth} />;
  } else if (isAuthenticated && nothingPlaying) {
    content = <NothingPlaying />;
  } else if (isAuthenticated && nowPlaying && geniusInfo) {
    content = (
      <NowPlayingSubGrid>
        <NowPlaying nowPlaying={nowPlaying} songInfo={geniusInfo} />
        <SongInfo songInfo={geniusInfo} />
      </NowPlayingSubGrid>
    );
  }

  return (
    <StyledApp>
      <Header isLoggedIn={isAuthenticated} handleLogout={handleLogout} />
      <StyledMain>{content}</StyledMain>
      <Footer />
    </StyledApp>
  );
};

App.propTypes = {};

export default App;
