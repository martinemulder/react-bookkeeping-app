
export const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
});

export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
});

export const setSelectedClient = (selectedClient) => ({
  type: 'SET_SELECTED_CLIENT',
  selectedClient
});