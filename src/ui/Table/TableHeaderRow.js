import React from 'react';

export default class TableHeaderRow extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div className="table-header-row">
        {children}
      </div>
    )
  }

}
