import React, { ComponentProps } from 'react';

interface IProps extends ComponentProps<any> {
  logo?: string;
  title?: string;
  onClick?: () => void;
}

export const SidebarUser = (props: IProps) => {
  const { logo, title, onClick } = props;

  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex" onClick={onClick}>
      <div className="image">
        <img src={logo} className="img-circle elevation-2" alt="User" />
      </div>
      <div className="info">
        <span className="d-block">{title}</span>
      </div>
    </div>
  );
};

SidebarUser.defaultProps = {
  logo: 'https://via.placeholder.com/150',
  title: 'Marko Zanoški',
  onClick: () => null,
};
