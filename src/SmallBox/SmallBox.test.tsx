import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SmallBox } from './SmallBox';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmallBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
