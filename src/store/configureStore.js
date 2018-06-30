import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import clientsReducer from '../app/Clients/reducers/clients';
import projectsReducer from '../app/Projects/reducers/projects';
import clientFiltersReducer from '../app/Clients/reducers/filters';
import projectFiltersReducer from '../app/Projects/reducers/filters';
import hoursReducer from '../app/Hours/reducers/hourEntries';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      clients: clientsReducer,
      projects: projectsReducer,
      hourEntries: hoursReducer,
      clientFilters: clientFiltersReducer,
      projectFilters: projectFiltersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
