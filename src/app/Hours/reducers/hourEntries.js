const hoursReducerDefaultState = [];

const hoursReducer = (state = hoursReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_HOUR_ENTRY':
      return [
        ...state,
        action.hourEntry
      ];
    case 'REMOVE_HOUR_ENTRY':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_HOUR_ENTRY':
      return state.map((hourEntry) => {
        if (hourEntry.id === action.id) {
          return {
            ...hourEntry,
            ...action.updates
          }
        } else {
          return hourEntry;
        }
      });
    case 'SET_HOUR_ENTRIES':
      return action.hourEntries;
    default:
      return state;
  }
};

export default hoursReducer;