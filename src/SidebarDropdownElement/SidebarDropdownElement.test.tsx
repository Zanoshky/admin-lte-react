import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SidebarDropdownElement } from './SidebarDropdownElement';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidebarDropdownElement />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
