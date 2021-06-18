import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InfoBox } from './InfoBox';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InfoBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
