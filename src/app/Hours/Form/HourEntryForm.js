// import 'react-dates/initialize';
import React from 'react';
import Button from '../../../ui/Button/Button';
import {SingleDatePicker} from "react-dates";
import moment from 'moment';
import { TimePicker } from 'react-time-picker';

export class HoursForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.hourEntry ? props.hourEntry.id : '',
      client: props.hourEntry ? props.hourEntry.client : '',
      project: props.hourEntry ? props.hourEntry.project : '',
      date: props.hourEntry ? moment(props.hourEntry.date, 'DD-MM-YYYY') : moment(),
      // time: props.hourEntry ? moment(props.hourEntry.time, 'h:i') : moment(),
      invoiced: props.hourEntry ? props.hourEntry.invoiced: false,
      submitting: false,
      focused: false,
      error: ''
    };
  }

  onProjectChange = (e) => {
    const project = e.target.value;
    this.setState(() => ({ project }));
  };

  onClientChange = (e) => {
    const client = e.target.value;
    this.setState(() => ({ client }));
  };

  onDateChange = (date) => {
    this.setState(() => ({ date }));
  };

  onTimeChange = (time) => {
    this.setState(() => ({ time }));
  };

  onInvoicedChange = () => {
    const invoiced = !this.state.invoiced;
    this.setState(() => ({ invoiced }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.client) {
      this.setState(() => ({error: 'Please provide a client and a date'}));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        project: this.state.project,
        client: this.state.client,
        date: this.state.date.format('DD-MM-YYYY'),
        invoiced: this.state.invoiced,
      });
    }
  };

  render() {
    const { submitButtonLabel, projectList, clientList } = this.props;
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <select
                name="project"
                value={this.state.project}
                onChange={this.onProjectChange}
              >
                <option value="">Choose a project</option>
                {projectList.map((project) => {
                  return <option key={project.id} value={project.id}>{project.title}</option>
                })}
              </select>
            </div>
            <div className="form-group">
              <select
                name="client"
                value={this.state.client}
                onChange={this.onClientChange}
              >
                <option value="">Choose a client</option>
                {clientList.map((client) => {
                  return <option key={client.id} value={client.id}>{client.name}</option>
                })}
              </select>
            </div>
            <div className="form-group">
              <SingleDatePicker
                date={this.state.date}
                onDateChange={date => this.onDateChange(date)}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
                displayFormat="DD-MM-YYYY"
                firstDayOfWeek={1}
              />
            </div>
            <div className="form-group">
              <TimePicker />
            </div>
            <div className="form-group">
              <label htmlFor="invoiced">Invoiced</label>
              <input
                type="checkbox"
                name="invoiced"
                id="invoiced"
                checked={this.state.invoiced}
                value={this.state.invoiced}
                onChange={this.onInvoicedChange}
              />
            </div>
          <Button
            type="submit"
            color="primary"
            text={submitButtonLabel}
            disabled={!this.state.client || !this.state.date}
          />
        </form>
      </div>
    )
  }

}

export default HoursForm;