import React, { ComponentProps } from 'react';

import './SidebarDropdown.css';

interface IProps extends ComponentProps<any> {
  icon?: string;
  title?: string;
}

export const SidebarDropdown = (props: IProps) => {
  const { icon, title } = props;

  const [isMenuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <li
      key={'SidebarDropdown-' + Math.random()}
      className={`nav-item has-treeview ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <span
        tabIndex={0}
        onKeyPress={() => setMenuOpen(!isMenuOpen)}
        onClick={() => setMenuOpen(!isMenuOpen)}
        style={{ cursor: 'pointer' }}
        className={`nav-link ${isMenuOpen ? 'bg-default' : ''}`}
      >
        <i className={`nav-icon ${icon}`} />
        <p>
          {title}
          <i className="right fas fa-angle-left" />
        </p>
      </span>
      <ul className="nav nav-treeview">{props.children}</ul>
    </li>
  );
};

SidebarDropdown.defaultProps = {
  icon: 'fas fa-tachometer-alt',
  title: 'Dashboard',
};
