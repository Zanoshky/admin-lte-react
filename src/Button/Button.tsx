import React, { ComponentProps } from 'react';

interface IProps extends ComponentProps<any> {
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'secondary';
  label?: string | any;
  onClick?: any;
  disabled?: boolean;
  block?: boolean;
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  flat?: boolean;
  outline?: boolean;
  gradient?: boolean;
  icon?: string;
}

export const Button = (props: IProps) => {
  const {
    type,
    color,
    label,
    onClick,
    disabled,
    block,
    sm,
    lg,
    xs,
    flat,
    outline,
    gradient,
    icon,
  } = props;

  const sizeClass = lg ? 'btn-lg ' : sm ? 'btn-sm ' : xs ? 'btn-xs ' : '';
  const flatClass = flat ? 'btn-flat ' : '';
  const disabledClass = disabled ? 'disabled ' : '';
  const colorClass = gradient
    ? `bg-gradient-${color} `
    : outline
    ? `btn-outline-${color} `
    : `btn-${color} `;
  const blockClass = block ? 'btn-block ' : '';

  const buttonClass =
    'btn ' + sizeClass + flatClass + colorClass + blockClass + disabledClass;

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClass}
      disabled={disabled || false}
    >
      {icon && (
        <>
          <i className={icon} />
          &nbsp;
        </>
      )}
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  label: 'Button',
  onClick: undefined,
  disabled: false,
  block: false,
  xs: false,
  sm: false,
  lg: false,
  flat: false,
  outline: false,
  gradient: false,
  icon: undefined,
};
