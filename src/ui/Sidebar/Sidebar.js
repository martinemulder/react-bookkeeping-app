import React from 'react';
import { connect } from 'react-redux';

const Sidebar = (props) => (
  <div id="sidebar">
    <h2>Summary</h2>
    <ul>
      <li>Total clients: {props.totalClients}</li>
      <li>Total projects: {props.totalProjects}</li>
    </ul>
  </div>
);

const mapStateToProps = ((state) => {
  return {
    totalClients: state.clients.length,
    totalProjects: state.projects.length
  }
});

export default connect(mapStateToProps)(Sidebar);