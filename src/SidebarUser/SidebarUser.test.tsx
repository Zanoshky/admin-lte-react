import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SidebarUser } from './SidebarUser';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidebarUser />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
