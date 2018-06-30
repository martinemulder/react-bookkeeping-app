// Clients

export function toClientCreate() {
  return '/create-client';
}

export function toClientEdit(id) {
  return `/edit-client/${id}`;
}

export function toClientDashboard() {
  return '/clients';
}

// Projects

export function toProjectDashboard() {
  return '/projects';
}

export function toProjectCreate() {
  return '/create-project';
}

export function toProjectEdit(id) {
  return `/edit-project/${id}`;
}

// Hours

export function toHoursDashboard() {
  return '/';
}

export function toHourEntryCreate() {
  return '/create-hour-entry';
}

export function toHourEntryEdit(id) {
  return `/edit-hour-entry/${id}`;
}