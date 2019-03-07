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
* Setup higher order component to feed info to whatever displays the genius info
* ~~Setup auto recheck for song change on spotify~~ -might need to refine further
* Setup deployment pipeline
    - Figure out how to set redirect URL in build vs development
* Performance enhancements, lower page load times
* Better error handling

## Future Enhancements
* Animate transition from lyric line to detail

## Resources Used
* Initalizing tailwind - https://medium.com/@mikeeeeeeey/create-react-app-tailwind-css-feat-postcss-631d9e33ba8c
* Spotify auth - https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13 

## Ideas for deployment
* Netifly
* AWS (might be good to learn anyways)

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
