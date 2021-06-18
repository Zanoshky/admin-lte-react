import React, { ComponentProps } from 'react';

import './Input.css';

interface IProps extends ComponentProps<any> {
  id?: string;
  type?: string;
  name?: string;
  value?: string | number;
  icon?: string;
  min?: number;
  max?: number;
  label?: string;
  placeholder?: string;
  onChange?: (x: any) => void;
  isInvalid?: boolean;
  isInvalidHelp?: string;
  required?: boolean;
  autocomplete?: string;
}

export const Input = (props: IProps) => {
  const [showHelpOnFocus, setShowHelpOnFocus] = React.useState<boolean>(false);

  const inputElement = (
    <input
      id={props.id || ''}
      type={props.type || ''}
      name={props.name || ''}
      value={props.value || ''}
      min={props.min || undefined}
      max={props.max || undefined}
      onChange={props.onChange || (() => null)}
      onFocus={() => setShowHelpOnFocus(true)}
      className={`form-control ${
        showHelpOnFocus && props.isInvalid
          ? 'is-invalid'
          : showHelpOnFocus
          ? 'is-valid'
          : ''
      }`}
      placeholder={props.placeholder || ''}
      required={props.required || false}
      autoComplete={props.autocomplete || ''}
    />
  );

  return (
    <div className="form-row">
      <div className="col mb-3">
        {!props.icon && (
          <div className="form-group">
            {props.label && <label>{props.label}</label>}
            {inputElement}
            {showHelpOnFocus && props.isInvalid && (
              <div className="invalid-feedback">
                {props.isInvalidHelp || ''}
              </div>
            )}
          </div>
        )}
        {props.icon && (
          <div className="form-group">
            {props.label && <label>{props.label}</label>}
            <div className="input-group">
              {inputElement}
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className={props.icon} />
                </div>
              </div>
              {showHelpOnFocus && props.isInvalid && (
                <div className="invalid-feedback">
                  {props.isInvalidHelp || ''}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
