
const filtersReducerDefaultState = {
  sortBy: 'name_asc'
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_NAME':
      if (state.sortBy === 'name_asc') {
        return {
          ...state,
          sortBy: 'name_desc'
        };
      } else {
        return {
          ...state,
          sortBy: 'name_asc'
        };
      }
    case 'SORT_BY_ACTIVE':
      if (state.sortBy === 'active_asc') {
        return {
          ...state,
          sortBy: 'active_desc'
        };
      } else {
        return {
          ...state,
          sortBy: 'active_asc'
        };
      }
    case 'SORT_BY_FINISHED':
      if (state.sortBy === 'finished_asc') {
        return {
          ...state,
          sortBy: 'finished_desc'
        };
      } else {
        return {
          ...state,
          sortBy: 'finished_asc'
        };
      }
    default:
      return state;
  }
};

export default filtersReducer;