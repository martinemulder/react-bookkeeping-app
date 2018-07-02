import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {toHoursDashboard, toLogin} from './links';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to={toHoursDashboard()} />
    ) : (
      <Component {...props} />
      )
    )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);