import React from 'react';
import Button from '../../../ui/Button/Button';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import { toClientCreate, toProjectCreate } from '../../../routes/links';
import { Link } from 'react-router-dom';
import { selectTotalTime } from '../selectors/hourEntries';

export class HoursForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.hourEntry ? props.hourEntry.id : '',
      client: props.hourEntry ? props.hourEntry.client : '',
      project: props.hourEntry ? props.hourEntry.project : '',
      date: props.hourEntry ? moment(props.hourEntry.date, 'DD-MM-YYYY') : moment(),
      startTime: props.hourEntry ? props.hourEntry.startTime : '',
      endTime: props.hourEntry ? props.hourEntry.endTime : '',
      totalTime: props.hourEntry ? props.hourEntry.totalTime : '',
      description: props.hourEntry ? props.hourEntry.description : '',
      invoiced: props.hourEntry ? props.hourEntry.invoiced: '',
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
    this.props.onSelectClient(client);
  };

  onDateChange = (date) => {
    this.setState(() => ({ date }));
  };

  onStartTimeChange = (e) => {
    const startTime = e.target.value;
    this.setState(() => ({ startTime }));
  };

  setStartTimeNow = () => {
    const startTime = moment().format('HH:mm');
    this.setState(() => ({ startTime }));
  };

  setEndTimeNow = () => {
    const endTime = moment().format('HH:mm');
    this.setState(() => ({ endTime }));
  };

  setTotalTime = () => {
    const { startTime, endTime } = this.state;
    if (startTime && endTime) {
      const total = selectTotalTime(startTime, endTime);
      this.setState(() => ({ totalTime: total }));
    }
  };

  onEndTimeChange = (e) => {
    const endTime = e.target.value;
    this.setState(() => ({ endTime }));
  };

  onTotalTimeChange = (e) => {
    const totalTime = e.target.value;
    this.setState(() => ({ totalTime }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onInvoicedChange = (e) => {
    const invoiced = e.target.value;
    this.setState(() => ({ invoiced }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.client || !this.state.date) {
      this.setState(() => ({error: 'Please provide a client and a date'}));
    } else {
      this.setState(() => ({ error: '' }));

      let totalTime;

      if (this.state.startTime && this.state.endTime) {
        totalTime = selectTotalTime(this.state.startTime, this.state.endTime);
      } else if (this.state.totalTime) {
        totalTime = this.state.totalTime;
      } else {
        totalTime = '';
      }

      this.props.onSubmit({
        project: this.state.project,
        client: this.state.client,
        date: this.state.date.format('DD-MM-YYYY'),
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        totalTime: totalTime,
        description: this.state.description,
        invoiced: this.state.invoiced,
      });
    }
  };

  render() {
    const { submitButtonLabel, projectList, clientList } = this.props;
    const { error, focused, client, project, date, startTime, endTime, totalTime, description, invoiced } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
          <form onSubmit={this.onSubmit} id="hour-entry-form">
            <div className="form-group">
              <div className="column column-half">
                <label htmlFor="client">
                  <i className="far fa-user"></i> Client
                </label>
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
              </div>
              <div className="column column-half last-column">
                <label htmlFor="client">
                  <i className="fas fa-wrench"></i> Project
                </label>
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
              </div>
            </div>
            <div className="form-group">
              <div className="column column-half">
                <Link
                  to={toClientCreate()}
                >
                  add new client
                </Link>
              </div>
              <div className="column column-half last-column">
                <Link
                  to={toProjectCreate()}
                >
                  add new project
                </Link>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date">
                <i className="fas fa-calendar-alt"></i> Date
              </label>
              <SingleDatePicker
                date={date}
                onDateChange={date => this.onDateChange(date)}
                focused={focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
                displayFormat="DD-MM-YYYY"
                firstDayOfWeek={1}
                isOutsideRange={() => false}
              />
            </div>
            <div className="form-group">
              <div className="column column-half">
                <label htmlFor="start-time">
                  <i className="far fa-clock"></i> Start
                </label>
                <input
                  name="start-time"
                  id="start-time"
                  value={startTime}
                  type="time"
                  onChange={this.onStartTimeChange}
                />
                <Button
                  text="now"
                  type="button"
                  name="link"
                  action={this.setStartTimeNow}
                />
              </div>
              <div className="column column-half last-column">
                <label htmlFor="end-time">
                  <i className="far fa-clock"></i> End
                </label>
                <input
                  name="end-time"
                  id="end-time"
                  value={endTime}
                  type="time"
                  onChange={this.onEndTimeChange}
                />
                <Button
                  text="now"
                  type="button"
                  name="link"
                  action={this.setEndTimeNow}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="end-time">
                <i className="far fa-clock"></i> Total
              </label>
              <input
                name="total-time"
                id="total-time"
                value={totalTime}
                type="time"
                onChange={this.onTotalTimeChange}
              />
              <Button
                text="calculate total"
                type="button"
                name="link"
                action={this.setTotalTime}
              />
            </div>
            <div className="form-group">
              <div className="column column-half">
                <label htmlFor="description">
                  <i className="fas fa-pen-alt"></i> Note
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={description}
                  placeholder="Description"
                  onChange={this.onDescriptionChange}
                />
              </div>
            </div>
            <div className="form-group">
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
                checked={invoiced === "no" || !invoiced}
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
            type="submit"
            color="primary"
            text={submitButtonLabel}
            disabled={!client || !date}
          />
        </form>
      </div>
    )
  }

}

export default HoursForm;