import moment from 'moment';

const filtersReducerDefaultState = [{
  sortBy: 'date_desc',
  client: '',
  project: '',
  invoiced: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}];

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'RESET_FILTER':
      return {
        filtersReducerDefaultState
      };
    case 'SORT_BY_DATE':
      if (state.sortBy === 'date_asc') {
        return {
          ...state,
          sortBy: 'date_desc'
        };
      } else {
        return {
          ...state,
          sortBy: 'date_asc'
        };
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      };
    case 'SET_CLIENT':
      return {
        ...state,
        client: action.client
      };
    case 'SET_PROJECT':
      return {
        ...state,
        project: action.project
      };
    case 'SET_INVOICED':
      return {
        ...state,
        invoiced: action.invoiced
      };
    default:
      return state;
  }
};

export default filtersReducer;