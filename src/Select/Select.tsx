import React, { ComponentProps } from 'react';

import './Select.css';

interface IOption {
  text: string;
  value: string;
}

interface IOptions extends Array<IOption> {}

interface IProps extends ComponentProps<any> {
  id?: string;
  name?: string;
  icon?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: any;
  required?: boolean;
  options: IOptions;
}

export const Select = (props: IProps) => {
  const listOptions = () => {
    return (
      props.options.length > 0 &&
      props.options.map((option: any, indexRow: number) => (
        <option key={indexRow} value={option.value}>
          {option.text}
        </option>
      ))
    );
  };

  const element = (
    <select
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      className={`form-control`}
      placeholder={props.placeholder}
      required={props.required || false}
      autoComplete={props.autocomplete}
    >
      {listOptions()}
    </select>
  );

  return (
    <div className="form-row">
      <div className="col mb-3">
        <div className="form-group">
          {!props.icon && <>{element}</>}
          {props.icon && (
            <div className="input-group">
              {element}
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className={props.icon} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
