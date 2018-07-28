import React from 'react';

export default class TableCell extends React.Component {

  render() {
    const { name, children } = this.props;
    return (
      <div
        className={"table-cell " + name + "-cell "}
      >
        <div className="inner-table-cell">
          {children}
        </div>
      </div>
    )
  }

}
