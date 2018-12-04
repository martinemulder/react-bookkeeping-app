import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Link from "react-router-dom/es/Link";

export default class AppFrame extends React.Component {

  render() {
    const { title, children, parentText } = this.props;
    const parent = this.props.parent ? this.props.parent : '';
    return (
      <div id="app-frame">
        <Header />
        <div id="page-wrap" className="content-wrap">
          <div className="content">
            <div className="page-nav">
              {parent &&
                <Link
                  to={parent}
                >
                  <i className="fas fa-arrow-left"></i> {parentText}
                </Link>
              }
            </div>
            <h1>{title}</h1>
            {children}
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }

}