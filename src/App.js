import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SpotifyWebApi from 'spotify-web-api-js';

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Loading from './Loading';
import NothingPlaying from './NothingPlaying';
import NowPlaying from './NowPlaying';
import SongInfo from './SongInfo';

const spotifyApi = new SpotifyWebApi();
const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotifyStateKey = process.env.REACT_APP_SPOTIFY_STATE_KEY;
const redirect_uri = window.location.origin;
const spotifyScope = 'user-read-playback-state';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

// API calls to genius can be made like this: api.genius.com/search?q=Kendrick%20Lamar&access_token=accessTokenValue
const geniusClientAccessToken =
  process.env.REACT_APP_GENIUS_CLIENT_ACCESS_TOKEN;

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

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4fr;
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4fr;
  }
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Move to custom hooks?
    const getNowPlaying = () => {
      setIsLoading(true);

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
          setIsLoading(false);
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
          setIsLoading(false);
        });
    };

    if (token) {
      spotifyApi.setAccessToken(token);

      getNowPlaying();
    }
  }, [token]);

  let content;

  if (!isAuthenticated) {
    content = <Login handleLogin={redirectToSpotifyAuth} />;
  } else if (isLoading) {
    content = <Loading />;
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

export default App;
