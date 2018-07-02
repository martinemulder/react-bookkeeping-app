import database from '../../../firebase/firebase';
import moment from 'moment';

// SET_HOURS
export const setHourEntries = (hourEntries) => ({
  type: 'SET_HOUR_ENTRIES',
  hourEntries
});

export const startSetHourEntries = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/hourEntries`).once('value').then((snapshot) => {
      const hourEntries = [];

      snapshot.forEach((childSnapshot) => {
        hourEntries.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setHourEntries(hourEntries));
    });
  };
};

// ADD_HOURS
export const addHourEntry = (hourEntry) => ({
  type: 'ADD_HOUR_ENTRY',
  hourEntry
});

export const startAddHourEntry = (hourEntryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      client = undefined,
      project = undefined,
      date = '',
      startTime = '',
      endTime = '',
      totalTime = '',
      description = '',
      invoiced = false
    } = hourEntryData;
    const hourEntry = { project, client, date, startTime, endTime, totalTime, description, invoiced };

    return database.ref(`users/${uid}/hourEntries`).push(hourEntry).then((ref) => {
      dispatch(addHourEntry({
        id: ref.key,
        ...hourEntry
      }));
    });
  };
};

// REMOVE_HOURS
// Parameter is object with id property
export const removeHourEntry = ({ id } = {}) => ({
  type: 'REMOVE_HOUR_ENTRY',
  id
});

export const startRemoveHourEntry = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/hourEntries`).child(id).remove().then(() => {
      dispatch(removeHourEntry({ id }));
    });
  };
};

// EDIT_HOURS
export const editHourEntry = (id, updates) => ({
  type: 'EDIT_HOUR_ENTRY',
  id,
  updates
});

export const startEditHourEntry = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/hourEntries`).child(id).update(updates).then(() => {
      dispatch(editHourEntry(id, updates));
    });
  };
};