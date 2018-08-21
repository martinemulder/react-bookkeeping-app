
export const addSelectedHourEntry = (hourEntry = '') => ({
  type: 'ADD_SELECTED_HOUR_ENTRY',
  hourEntry: hourEntry
});

export const removeSelectedHourEntry = (id = '') => ({
  type: 'REMOVE_SELECTED_HOUR_ENTRY',
  id: id
});