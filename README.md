[![Netlify Status](https://api.netlify.com/api/v1/badges/05b81070-9cb5-4e3d-b18c-9c57e11215e0/deploy-status)](https://app.netlify.com/sites/ecstatic-shirley-52c218/deploys)

# What's that lyric?

What's that lyric will allow you to log into your Spotify and view song information on the current song you're listening to. Built using React and styled-components. Uses the Spotify and Genius APIs. Deployed using Netlify.

## To Use

On the homepage click login on the main page you'll be taken to enter your Spotify credentials and authorize the What's That Lyric app. Once you've done so you'll be shown the song you're currently playing on Spotify along side info about the song, song credits, and links to the [Genius](https://genius.com/) lyrics page.

## Tools

- Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Utilizes the [Spotify API](https://developer.spotify.com/documentation/web-api/) for current song info
- Pulls song info, credits, and links from the [Genius API](https://genius.com/developers)
- Styling done using [styled components](https://styled-components.com/)

### Known Issues

- Sometimes the genius song information is incomplete. This happens when the Genius API search doesn't match on the correct result.
