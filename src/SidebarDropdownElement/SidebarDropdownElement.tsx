import React, { ComponentProps } from 'react';

import './SidebarDropdownElement.css';

interface IProps extends ComponentProps<any> {
  icon?: string;
  title?: string;
  active?: boolean;
  onClick?: () => void;
}

export const SidebarDropdownElement = (props: IProps) => {
  const { icon, title, active, onClick } = props;

  return (
    <li className="nav-item" onClick={onClick}>
      <span className={`nav-link dropdown-item ${active ? 'active' : ''}`}>
        <i className={`nav-icon ${icon}`}></i>
        <p>{title}</p>
      </span>
    </li>
  );
};

SidebarDropdownElement.defaultProps = {
  icon: 'fas fa-circle',
  title: 'Dashy',
  active: false,
  onClick: undefined,
};
