import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <div className="content-wrap">
      <NavLink activeClassName="active" to="/" exact={true}>hours</NavLink>
      <NavLink activeClassName="active" to="/clients">clients</NavLink>
      <NavLink activeClassName="active" to="/projects">projects</NavLink>
    </div>
  </header>
);

export default Header;