import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NotFoundPage from '../app/NotFoundPage';
import { ClientDashboard } from '../app/Clients';
import ClientCreate from '../app/Clients/Create/ClientCreate';
import ClientEdit from '../app/Clients/Edit/ClientEdit';
import { ProjectDashboard } from '../app/Projects';
import ProjectCreate from '../app/Projects/Create/ProjectCreate';
import ProjectEdit from '../app/Projects/Edit/ProjectEdit';
import { HourEntryDashboard } from '../app/Hours';
import HoursCreate from '../app/Hours/Create/HourEntryCreate';
import HoursEdit from '../app/Hours/Edit/HourEntryEdit';
import Login from '../app/Login/Login';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/hours" component={HourEntryDashboard} />
        <PrivateRoute path="/create-hour-entry" component={HoursCreate} />
        <PrivateRoute path="/edit-hour-entry/:id" component={HoursEdit} />
        <PrivateRoute path="/clients" component={ClientDashboard} />
        <PrivateRoute path="/create-client" component={ClientCreate} />
        <PrivateRoute path="/edit-client/:id" component={ClientEdit} />
        <PrivateRoute path="/projects" component={ProjectDashboard} />
        <PrivateRoute path="/create-project" component={ProjectCreate} />
        <PrivateRoute path="/edit-project/:id" component={ProjectEdit} />
        <PrivateRoute component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;