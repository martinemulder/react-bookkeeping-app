
export const selectClients = (clients, { sortBy = '' }) => {
  return clients.sort((a,b) => {
    if (sortBy === 'name_asc') {
      return b.name < a.name ? 1 : -1;
    } else if (sortBy === 'name_desc') {
      return a.name < b.name ? 1 : -1;
    } else if (sortBy === 'active_asc') {
      return b.active < a.active ? 1 : -1;
    } else if (sortBy === 'active_desc') {
      return a.active < b.active ? 1 : -1;
    }
  });
};

export const selectActiveClients = (clients) => {
  const clientList = [];
  clients.map((client) => {
    if (client.active) {
      clientList.push(client)
    }
  });
  return clientList;
};

export const selectClientById = (id, clients) => {
  return clients.find((client) => client.id === id);
};