import React, { ComponentProps } from 'react';
interface IProps extends ComponentProps<any> {
  icon: string;
  title: string;
  onClick: () => void;
  active?: boolean;
  badge?: string;
  badgeColor?: 'primary' | 'success' | 'danger' | 'warning' | 'secondary';
}

export const SidebarLink = (props: IProps) => {
  const { icon, title, onClick, active, badge, badgeColor } = props;

  return (
    <li className="nav-item" onClick={onClick}>
      <span className={`nav-link ${active ? 'active' : ''}`} role="button">
        <i className={`nav-icon mr-2 ${icon}`} />
        <p>
          {title}
          {badge && (
            <span className={`right badge badge-${badgeColor}`}>{badge}</span>
          )}
        </p>
      </span>
    </li>
  );
};
