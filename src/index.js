import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import './index.css';
// import App_Old from './App_Old';
import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Tahoma,Verdana,Segoe,sans-serif; 
  }

  hr {
    border-bottom: 1px solid var(--magenta);
  }
`;

ReactDOM.render(
  <>
    <Reset />
    <GlobalStyle />
    {/* <App_Old /> */}
    <App />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
