import React from 'react';

export default class TableCell extends React.Component {

  render() {
    return (
      <div className="table-cell">
        {this.props.children}
      </div>
    )
  }

}
