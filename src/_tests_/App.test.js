import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// it('renders without crashing', () => {
//   // const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
//   // ReactDOM.unmountComponentAtNode(div);
// });

it('renders login page', () => {
  act(() => {
    render(<App />, container);
  });

  // expect(container.querySelector('h1').innerText).toEqual(
  //   `"What's That Lyric?"`
  // );
});
