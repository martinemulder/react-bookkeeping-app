import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import Routes, { history } from './routes/Routes';
import { startSetClients } from './app/Clients/actions/clients';
import { startSetProjects } from './app/Projects/actions/projects';
import { startSetHourEntries } from './app/Hours/actions/hourEntries';
import { firebase } from './firebase/firebase';
import { toHoursDashboard, toLogin } from './routes/links';
import { login, logout } from './app/Login/actions/auth';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));

    store.dispatch(startSetClients()).then(() => {
      store.dispatch(startSetProjects()).then(() => {
        store.dispatch(startSetHourEntries()).then(() => {
          renderApp();
          if (history.location.pathname === '/') {
            history.push(toHoursDashboard());
          }
        })
      })
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push(toLogin());
  }
});
