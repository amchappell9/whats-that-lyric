# What's that lyric?
* What's that lyric? will allow you to log into spotify and then show the lyrics to the song that you are listening to. 
* Will use Spotify API and Genius API
* Built with React
* Will use Tailwind for styling

## TODO List
* ~~Install Tailwind~~
* ~~Configure Tailwind~~
* ~~Plan styling~~
* ~~Rough styling~~
* ~~Login with Spotify Credentials (need to switch to implict authentication)~~
* ~~Get song fron spotify API~~
* ~~Setup NothingPlaying screen~~
* ~~Lookup song with Genius API~~
* Get song credits from Genius or Spotify?
* Genius doesn't support getting lyrics from their API :( 
* ~~Need to crawl API responses to figure out what info I could display~~
* Reorganize components for new layout
* Change ajax requests to axios
* Setup higher order component to feed info to whatever displays the genius info
* ~~Setup auto recheck for song change on spotify~~ -might need to refine further
* Setup deployment pipeline
    - Figure out how to set redirect URL in build vs development
* Performance enhancements, lower page load times
* Better error handling
* Redo UI
* Setup eslint
* Use Typescript
* Add animations


## Future Enhancements
* Animate transition from lyric line to detail

## Resources Used
* [Create React Apps Docs](./create-react-app-docs.md)
* Initalizing tailwind - https://medium.com/@mikeeeeeeey/create-react-app-tailwind-css-feat-postcss-631d9e33ba8c
* Spotify auth - https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13 

## Ideas for deployment
* Netifly
* AWS (might be good to learn anyways)
* Adding cloudflare?

### Tailwind
* Configuration is in tailwind.config.js
* Custom styles are in /src/styles/index.css
* Complied output is generated on run/build and outputed to /src/index.css

## Troubleshooting
* postcss TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string - never figured this out. Apparantly it's some issue with windows and node. Decided to run tailwind complier manually any time there's a change now

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Possible tools/ideas
* Animations - https://github.com/react-spring/react-spring
* Deployment - https://medium.com/@adhasmana/how-to-deploy-react-and-node-app-on-aws-a-better-approach-5b22e2ed2da2