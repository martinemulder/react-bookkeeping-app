import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HourEntryDashboard} exact={true} />
        <Route path="/create-hour-entry" component={HoursCreate} />
        <Route path="/edit-hour-entry/:id" component={HoursEdit} />
        <Route path="/clients" component={ClientDashboard} />
        <Route path="/create-client" component={ClientCreate} />
        <Route path="/edit-client/:id" component={ClientEdit} />
        <Route path="/projects" component={ProjectDashboard} />
        <Route path="/create-project" component={ProjectCreate} />
        <Route path="/edit-project/:id" component={ProjectEdit} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;