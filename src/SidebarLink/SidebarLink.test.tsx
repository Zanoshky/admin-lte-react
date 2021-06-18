import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SidebarLink } from './SidebarLink';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SidebarLink icon={''} title={''} onClick={() => {}} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
