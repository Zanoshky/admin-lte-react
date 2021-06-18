import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Table } from './Table';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table thead={[]} tbody={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
