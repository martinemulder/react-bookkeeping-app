import React from 'react';
import { connect } from 'react-redux';
import { selectHourEntries, selectTotalHours } from '../../app/Hours/selectors/hourEntries';

const Sidebar = (props) => (
  <div id="sidebar">
    <h2>Summary</h2>
    <ul>
      <li>Total clients: {props.totalClients}</li>
      <li>Total projects: {props.totalProjects}</li>
    </ul>
    <br />
    <h2>Selected</h2>
    <ul>
      <li>Selected hours: {props.totalHours}</li>
    </ul>
  </div>
);

const mapStateToProps = ((state) => {
  return {
    totalClients: state.clients.length,
    totalProjects: state.projects.length,
    totalHours: selectTotalHours(selectHourEntries(state.hourEntries, state.hourFilters))
  }
});

export default connect(mapStateToProps)(Sidebar);