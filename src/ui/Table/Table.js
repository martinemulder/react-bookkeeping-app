import React from 'react';

export default class Table extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div className="table">
        {children}
      </div>
    )
  }

}
