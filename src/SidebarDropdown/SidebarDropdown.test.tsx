import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SidebarDropdown } from './SidebarDropdown';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidebarDropdown />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
