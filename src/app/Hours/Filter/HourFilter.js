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
import moment from "moment";

export class HourFilter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      startDate: props.filters.startDate,
      endDate: props.filters.endDate,
      client: props.filters.client,
      project: props.filters.project,
      invoiced: props.filters.invoiced,
      checked: props.filters.invoiced === 'yes',
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
  };

  onProjectChange = (e) => {
    const project = e.target.value;
    this.setState(() => ({ project }));
  };

  onInvoicedChange = (e) => {
    const checked = e.target.checked;
    this.setState(() => ({ checked }));
    if (checked) {
      this.setState(() => ({ invoiced: 'yes' }));
    } else {
      this.setState(() => ({ invoiced: 'no' }));
    }
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
    this.setState(() => ({ invoiced: '', checked : false, client : '', project: '',
      startDate: moment().startOf('month'), endDate: moment().endOf('month') }));
  };

  render() {
    const { startDate, endDate, focused, client, project, checked } = this.state;
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
            type="checkbox"
            name="invoiced"
            id="invoiced"
            checked={checked}
            onChange={this.onInvoicedChange}
          />
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
    projectList: state.projects
  };
};

export default connect(mapStateToProps)(HourFilter);
