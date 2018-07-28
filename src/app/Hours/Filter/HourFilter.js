import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import Button from '../../../ui/Button/Button';
import {
  resetFilter,
  setClient, setEndDate, setInvoiced, setProject,
  setStartDate
} from '../actions/filters';
import { selectActiveClients } from '../../Clients/selectors/clients';
import moment from 'moment';
import { setSelectedClient } from '../../Projects/actions/filters';
import { selectProjectsFromClient } from '../../Projects/selectors/projects';

export class HourFilter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      startDate: props.filters.startDate,
      endDate: props.filters.endDate,
      client: props.filters.client,
      project: props.filters.project,
      invoiced: props.filters.invoiced,
      focused: null
    };
  }

  onStartDateChange = (date) => {
    this.setState(() => ({ startDate: date }));
  };

  onEndDateChange = (date) => {
    this.setState(() => ({ endDate: date }));
  };

  onClientChange = (e) => {
    const client = e.target.value;
    this.setState(() => ({ client }));
    this.onSelectClient(client);
  };

  onSelectClient = (client) => {
    this.props.dispatch(setSelectedClient(client))
  };

  onProjectChange = (e) => {
    const project = e.target.value;
    this.setState(() => ({ project }));
  };

  onInvoicedChange = (e) => {
    const invoiced = e.target.value;
    this.setState(() => ({ invoiced }));
  };

  onActivateFilter = () => {
    this.props.dispatch(setStartDate(this.state.startDate));
    this.props.dispatch(setEndDate(this.state.endDate));
    this.props.dispatch(setClient(this.state.client));
    this.props.dispatch(setProject(this.state.project));
    this.props.dispatch(setInvoiced(this.state.invoiced));
  };

  onResetFilter = () => {
    this.props.dispatch(resetFilter());
    this.setState(() => ({ invoiced: '', client : '', project: '',
      startDate: moment().startOf('month'), endDate: moment().endOf('month') }));
  };

  render() {
    const { startDate, endDate, focused, client, project, invoiced } = this.state;
    const { clientList, projectList } = this.props;
    return (
      <div id="hour-filter">
        <div id="hour-filter-fields">
          <DateRangePicker
            startDate={startDate}
            startDateId="start-date"
            endDate={endDate}
            endDateId="end-date"
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={focused}
            onFocusChange={focused => this.setState({ focused })}
            displayFormat="DD-MM-YYYY"
            isOutsideRange={() => false}
          />
          <select
            name="client"
            value={client}
            onChange={this.onClientChange}
          >
            <option value="">Choose a client</option>
            {clientList.map((client) => {
              return <option key={client.id} value={client.id}>{client.name}</option>
            })}
          </select>
          <select
            name="project"
            value={project}
            onChange={this.onProjectChange}
          >
            <option value="">Choose a project</option>
            {projectList.map((project) => {
              return <option key={project.id} value={project.id}>{project.title}</option>
            })}
          </select>
          <label htmlFor="invoiced">Invoiced</label>
          <input
            type="radio"
            name="invoiced"
            value="yes"
            checked={invoiced === "yes"}
            onChange={this.onInvoicedChange}
          /> Yes
          <input
            type="radio"
            name="invoiced"
            value="no"
            checked={invoiced === "no"}
            onChange={this.onInvoicedChange}
          /> No
          <input
            type="radio"
            name="invoiced"
            value="n/a"
            checked={invoiced === "n/a"}
            onChange={this.onInvoicedChange}
          /> N/A
        </div>
        <Button
          text="reset filter"
          name="filter"
          color="secondary"
          action={this.onResetFilter}
        />
        <Button
          text="filter"
          name="filter"
          color="secondary"
          action={this.onActivateFilter}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    filters: state.hourFilters,
    clientList: selectActiveClients(state.clients),
    projectList: selectProjectsFromClient(state.projects, state.projectFilters)
  };
};

export default connect(mapStateToProps)(HourFilter);
