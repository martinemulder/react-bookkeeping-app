import React from 'react';

export default class TableRow extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div
        className={"table-row"}
      >
        {children}
      </div>
    )
  }

}
