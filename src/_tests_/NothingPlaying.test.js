import React from 'react';
import ReactDOM from 'react-dom';
import NothingPlaying from '../NothingPlaying';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NothingPlaying />, div);
  ReactDOM.unmountComponentAtNode(div);
});
