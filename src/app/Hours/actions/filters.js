
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const setStartDate = (date = '') => ({
  type: 'SET_START_DATE',
  date: date
});

export const setEndDate = (date = '') => ({
  type: 'SET_END_DATE',
  date: date
});

export const setClient = (client = '') => ({
  type: 'SET_CLIENT',
  client: client
});

export const setProject = (project = '') => ({
  type: 'SET_PROJECT',
  project: project
});

export const setInvoiced = (invoiced = '') => ({
  type: 'SET_INVOICED',
  invoiced: invoiced
});

export const resetFilter = () => ({
  type: 'RESET_FILTER'
});
