import React, { ComponentProps } from 'react';

interface IProps extends ComponentProps<any> {
  title?: string;
  icon?: string;
  color?: string;
  maximizable?: boolean;
  minimizable?: boolean;
  removable?: boolean;
  loading?: boolean;
  gradient?: boolean;
  outline?: boolean;
  noPadding?: boolean;
  reportTo?: () => void;
  noTitle?: boolean;
}

export const Card = (props: IProps) => {
  const {
    title,
    icon,
    color,
    maximizable,
    minimizable,
    removable,
    loading,
    gradient,
    outline,
    noPadding,
    reportTo,
    noTitle,
  } = props;

  const classForCard = gradient
    ? `card bg-gradient-${color}`
    : outline
    ? `card card-${color} card-outline`
    : `card card-${color}`;

  return (
    <div className={classForCard}>
      {!noTitle && (
        <div className="card-header">
          <h3 className="card-title">
            {icon && (
              <span>
                <i className={icon} /> &nbsp;
              </span>
            )}
            {title}
          </h3>
          {(maximizable || minimizable || removable) && (
            <div className="card-tools">
              {reportTo && (
                <button
                  onClick={reportTo}
                  type="button"
                  className="btn btn-tool"
                >
                  <i className="fas fa-external-link-alt" />
                </button>
              )}
              {maximizable && (
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="maximize"
                >
                  <i className="fas fa-expand" />
                </button>
              )}
              {minimizable && (
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
              )}
              {removable && (
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              )}
            </div>
          )}
        </div>
      )}
      <div className={noPadding ? 'card-body p-0' : 'card-body'}>
        {props.children}
      </div>
      {loading && (
        <div className="overlay">
          <i className="fas fa-sync-alt fa-spin" />
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  title: undefined,
  icon: undefined,
  color: undefined,
  maximizable: undefined,
  minimizable: undefined,
  removable: undefined,
  loading: undefined,
  gradient: undefined,
  outline: undefined,
  noPadding: undefined,
  reportTo: undefined,
};
