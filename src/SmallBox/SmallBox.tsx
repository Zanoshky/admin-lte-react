import React, { ComponentProps } from 'react';

interface IProps extends ComponentProps<any> {
  text?: string;
  value?: string | number;
  isPercentage?: boolean;
  icon?: string;
  color?: string;
  loading?: boolean;
  reportText?: string;
  reportAction?: () => void;
}

export const SmallBox = (props: IProps) => {
  const {
    color,
    icon,
    text,
    value,
    isPercentage,
    reportText,
    reportAction,
    loading,
  } = props;

  return (
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>
          {value}
          {isPercentage && <sup>&#37;</sup>}
        </h3>
        <p>{text}</p>
      </div>
      <div className="icon">
        <i className={icon} />
      </div>
      {reportAction && (
        <span
          onClick={reportAction}
          className="small-box-footer"
          style={{ cursor: 'pointer' }}
        >
          {reportText} <i className="fas fa-arrow-circle-right" />
        </span>
      )}
      {loading && (
        <div className="overlay">
          <i className="fas fa-sync-alt fa-spin" />
        </div>
      )}
    </div>
  );
};

SmallBox.defaultProps = {
  text: 'Marko',
  value: 100,
  isPercentage: false,
  icon: 'fas fa-users',
  color: 'primary',
  loading: false,
  reportText: 'More info',
  reportAction: undefined,
};
