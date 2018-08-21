
const filtersReducerDefaultState = {
  selectedHourEntries: []
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_HOUR_ENTRY':
      return {
        selectedHourEntries: [
          ...state.selectedHourEntries,
          action.hourEntry
        ]
      };
    case 'REMOVE_SELECTED_HOUR_ENTRY': 
      return {
        selectedHourEntries:
          state.selectedHourEntries.filter((hourEntry) => {
            return hourEntry.id !== action.id
          })
      };
    default:
      return state;
  }
};

export default filtersReducer;