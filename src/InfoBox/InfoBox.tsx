import React, { ComponentProps } from 'react';

interface IProps extends ComponentProps<any> {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  icon?: string;
  text?: string;
  value?: number;
  background?: boolean;
  gradient?: boolean;
  progressPercent?: number;
  progressDescription?: string;
}

export const InfoBox = (props: IProps) => {
  const {
    color,
    icon,
    text,
    value,
    background,
    gradient,
    progressPercent,
    progressDescription,
  } = props;

  const classForBox = gradient
    ? `info-box bg-gradient-${color}`
    : background
    ? `info-box bg-${color}`
    : `info-box`;
  const classForIcon =
    background || gradient ? '' : `info-box-icon bg-${color}`;

  return (
    <div className={classForBox}>
      <span className={classForIcon}>
        <i className={icon} />
      </span>
      <div className={`info-box-content`}>
        <span className={`info-box-text`}>{text}</span>
        <span className={`info-box-number`}>{value}</span>
        {progressPercent && (
          <>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="progress-description">{progressDescription}</span>
          </>
        )}
      </div>
    </div>
  );
};

InfoBox.defaultProps = {
  color: 'primary',
  icon: 'fas fa-thumbs-up',
  text: 'Messages',
  value: 1337,
  progressPercent: 70,
  progressDescription: ' 70% Increase in 30 Days',
};
