import database from '../../../firebase/firebase';

// SET_PROJECTS
export const setProjects = (projects) => ({
  type: 'SET_PROJECTS',
  projects
});

export const startSetProjects = () => {
  return (dispatch) => {
    return database.ref('projects').once('value').then((snapshot) => {
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
  return (dispatch) => {
    const {
      title = '',
      price = '',
      finished = false
    } = projectData;
    const project = { title, price, finished };

    return database.ref('projects').push(project).then((ref) => {
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
  return (dispatch) => {
    return database.ref('projects').child(id).remove().then(() => {
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
  return (dispatch) => {
    return database.ref('projects').child(id).update(updates).then(() => {
      dispatch(editProject(id, updates));
    });
  };
};