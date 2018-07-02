import database from '../../../firebase/firebase';

// SET_PROJECTS
export const setProjects = (projects) => ({
  type: 'SET_PROJECTS',
  projects
});

export const startSetProjects = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/projects`).once('value').then((snapshot) => {
      const projects = [];

      snapshot.forEach((childSnapshot) => {
        projects.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setProjects(projects));
    });
  };
};

// ADD_PROJECT
export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project
});

export const startAddProject = (projectData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      client = undefined,
      title = '',
      price = '',
      finished = false
    } = projectData;
    const project = { client, title, price, finished };

    return database.ref(`users/${uid}/projects`).push(project).then((ref) => {
      dispatch(addProject({
        id: ref.key,
        ...project
      }));
    });
  };
};

// REMOVE_PROJECT
// Parameter is object with id property
export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id
});

export const startRemoveProject = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/projects`).child(id).remove().then(() => {
      dispatch(removeProject({ id }));
    });
  };
};

// EDIT_PROJECT
export const editProject = (id, updates) => ({
  type: 'EDIT_PROJECT',
  id,
  updates
});

export const startEditProject = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/projects`).child(id).update(updates).then(() => {
      dispatch(editProject(id, updates));
    });
  };
};
