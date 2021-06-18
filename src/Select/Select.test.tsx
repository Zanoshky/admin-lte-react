import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Select } from './Select';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select options={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
