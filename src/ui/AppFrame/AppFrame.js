import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Link from "react-router-dom/es/Link";

export default class AppFrame extends React.Component {

  render() {
    const { title, children } = this.props;
    const parent = this.props.parent ? this.props.parent : '';
    return (
      <div id="app-frame">
        <Header />
        <div className="content-wrap page-wrap">
          <div className="content">
            <div className="page-nav">
              <Link
                to={parent}
              >
                <i className="fas fa-arrow-left"></i> back to hour entries
              </Link>
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