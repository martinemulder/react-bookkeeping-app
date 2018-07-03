import React from 'react';
import { connect } from 'react-redux';
import { selectHourEntries, selectTotalHours, timeToDecimal } from '../../app/Hours';

const Sidebar = (props) => (
  <div id="sidebar">
    <br />
    <h2><b>Summary</b></h2>
    <p>
      Total hours:<br />
      <b>{props.totalHours} / {props.totalHoursDecimal}</b>
    </p>
    <p>
      Total with hourly €40:<br />
      <b>€{ 40 * props.totalHoursDecimal} (€{ ((40 * props.totalHoursDecimal) * 0.21).toFixed(2)} vat)</b>
    </p>
    <p>
      Total with hourly €50:<br />
      <b>€{ 50 * props.totalHoursDecimal} (€{ ((50 * props.totalHoursDecimal) * 0.21).toFixed(2)} vat)</b>
    </p>
  </div>
);

const mapStateToProps = ((state) => {
  const totalHours = selectTotalHours(selectHourEntries(state.hourEntries, state.hourFilters));
  return {
    totalClients: state.clients.length,
    totalProjects: state.projects.length,
    totalHours: totalHours,
    totalHoursDecimal: timeToDecimal(totalHours)
  }
});

export default connect(mapStateToProps)(Sidebar);