[![Netlify Status](https://api.netlify.com/api/v1/badges/05b81070-9cb5-4e3d-b18c-9c57e11215e0/deploy-status)](https://app.netlify.com/sites/ecstatic-shirley-52c218/deploys)

# What's that lyric?

What's that lyric will allow you to log into your Spotify and view song information on the current song you're listening to. Built using React and styled-components. Uses the Spotify and Genius APIs.

## TODO List

- ~~Login with Spotify Credentials (need to switch to implict authentication)~~
- ~~Get song fron spotify API~~
- ~~Setup NothingPlaying screen~~
- ~~Lookup song with Genius API~~
- ~~Get song credits from Genius or Spotify?~~
  - Genius doesn't support getting lyrics from their API :(
- ~~Need to crawl API responses to figure out what info I could display~~
- ~~Reorganize components for new layout~~
- ~~Redo logic with hooks~~
- ~~Move keys to .env files~~
- Add Loading Widget
- Add functionality to refresh content when you reload the tab (possibly with service worker?)
- Refactor SongCredits.js
- Change ajax requests to axios
- ~~Setup auto recheck for song change on spotify~~ -might need to refine further
- Development Tools
  - eslint
  - prettier
- Setup deployment pipeline
  - eslint integrations
  - prettier integrations
  - Deployment
- Performance enhancements, lower page load times
- Better error handling
- Enhance UI
  - Animations
  - Better mobile responsiveness
  - Add background patterns

## Resources Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Create React Apps Docs](./create-react-app-docs.md)
- Spotify auth - https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13
