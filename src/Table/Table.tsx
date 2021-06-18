import React, { ComponentProps } from 'react';

interface Header {
  class?: string;
  label: string;
}

interface IProps extends ComponentProps<any> {
  label?: string;
  thead: Header[];
  tbody: any;
}

export const Table = (props: IProps) => {
  const formulateHeader = () => {
    return props.thead.map(header => {
      return (
        <th
          key={'TableHead-' + Math.random()}
          className={header.class || undefined}
        >
          {header.label}
        </th>
      );
    });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="table-responsive">
          <table className="table table-valign-middle table-sm table-borderless">
            <thead>
              {props.label && (
                <tr>
                  <th className="text-center" colSpan={props.thead.length}>
                    {props.label}
                  </th>
                </tr>
              )}
              <tr>{formulateHeader()}</tr>
            </thead>
            <tbody>{props.tbody}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Table.defaultProps = {
  thead: [{ label: 'Label' }],
  tbody: [],
};
