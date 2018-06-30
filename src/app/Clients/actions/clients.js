import database from '../../../firebase/firebase';

// SET_CLIENTS
export const setClients = (clients) => ({
  type: 'SET_CLIENTS',
  clients
});

export const startSetClients = () => {
  return (dispatch) => {
    return database.ref('clients').once('value').then((snapshot) => {
      const clients = [];

      snapshot.forEach((childSnapshot) => {
        clients.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setClients(clients));
    });
  };
};

// ADD_CLIENT
export const addClient = (client) => ({
  type: 'ADD_CLIENT',
  client
});

export const startAddClient = (clientData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      active = true
    } = clientData;
    const client = { name, active };

    return database.ref('clients').push(client).then((ref) => {
      dispatch(addClient({
        id: ref.key,
        ...client
      }));
    });
  };
};

// REMOVE_CLIENT
// Parameter is object with id property
export const removeClient = ({ id } = {}) => ({
  type: 'REMOVE_CLIENT',
  id
});

export const startRemoveClient = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref('clients').child(id).remove().then(() => {
      dispatch(removeClient({ id }));
    });
  };
};

// EDIT_CLIENT
export const editClient = (id, updates) => ({
  type: 'EDIT_CLIENT',
  id,
  updates
});

export const startEditClient = (id, updates) => {
  return (dispatch) => {
    return database.ref('clients').child(id).update(updates).then(() => {
      dispatch(editClient(id, updates));

    });
  };
};