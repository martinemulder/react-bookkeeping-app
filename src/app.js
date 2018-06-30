import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'react-times/css/material/default.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import Routes from './routes/Routes';
import { startSetClients } from './app/Clients/actions/clients';
import { startSetProjects } from './app/Projects/actions/projects';
import { startSetHourEntries } from './app/Hours/actions/hourEntries';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetClients()).then(() => {
  store.dispatch(startSetProjects()).then(() => {
    store.dispatch(startSetHourEntries()).then(() => {
      ReactDOM.render(jsx, document.getElementById('app'));
    })
  })
});
