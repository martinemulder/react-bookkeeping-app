import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { startLogout } from '../../app/Login/actions/auth';
import { connect } from 'react-redux';

const Header = ({startLogout}) => (
  <header>
    <div className="content-wrap">
      <NavLink activeClassName="active" to="/hours" exact={true}>hours</NavLink>
      <NavLink activeClassName="active" to="/clients">clients</NavLink>
      <NavLink activeClassName="active" to="/projects">projects</NavLink>
      <Button name="logout" action={startLogout} text="log out" />
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);