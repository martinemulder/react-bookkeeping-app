import React from 'react';
import {Link} from 'react-router-dom';

export default class TableRow extends React.Component {

  render() {
    const link = this.props.link ? this.props.link : '';
    return (
      <Link
        className={"table-row " + (link ? 'active': 'not-active')}
        to={link}
      >
        {this.props.children}
      </Link>
    )
  }

}
