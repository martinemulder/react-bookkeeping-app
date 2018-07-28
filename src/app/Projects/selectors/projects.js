
export const selectProjects = (projects, { sortBy = '' }) => {
  return projects.sort((a,b) => {
    if (sortBy === 'title_asc') {
      return b.title < a.title ? 1 : -1;
    } else if (sortBy === 'title_desc') {
      return a.title < b.title ? 1 : -1;
    } else if (sortBy === 'price_asc') {
      return b.price < a.price ? 1 : -1;
    } else if (sortBy === 'price_desc') {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'finished_asc') {
      return b.finished < a.finished ? 1 : -1;
    } else if (sortBy === 'finished_desc') {
      return a.finished < b.finished ? 1 : -1;
    }
  });
};

export const selectProjectsFromClient = (projects, { selectedClient = ''}) => {
  const clientProjects = [];

  projects.map((project) => {
    if (project.client === selectedClient && !project.finished) {
      clientProjects.push(project)
    }
  });

  return clientProjects
};

export const selectActiveProjects = (projects) => {
  const projectList = [];
  projects.map((project) => {
    if (!project.finished) {
      projectList.push(project)
    }
  });
  return projectList;
};

export const selectProjectById = (id, projects) => {
  return projects.find((project) => project.id === id);
};
