
const filtersReducerDefaultState = {
  sortBy: 'title_asc',
  selectedClient: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CLIENT':
      return {
        ...state,
        selectedClient: action.selectedClient
      };
    case 'SORT_BY_TITLE':
      if (state.sortBy === 'title_asc') {
        return {
          ...state,
          sortBy: 'title_desc'
        };
      } else {
        return {
          ...state,
          sortBy: 'title_asc'
        };
      }
    case 'SORT_BY_PRICE':
      if (state.sortBy === 'price_asc') {
        return {
          ...state,
          sortBy: 'price_desc'
        };
      } else {
        return {
          ...state,
          sortBy: 'price_asc'
        };
      }
    default:
      return state;
  }
};

export default filtersReducer;