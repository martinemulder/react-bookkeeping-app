import React from 'react';
import { connect } from 'react-redux';
import {startAddHourEntry, startEditHourEntry, startRemoveHourEntry} from '../actions/hourEntries';
import HourEntryForm from '../Form/HourEntryForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toHoursDashboard } from '../../../routes/links';
import Button from '../../../ui/Button/Button';
import { selectProjectsFromClient } from '../../Projects/selectors/projects';
import { setSelectedClient } from '../../Projects/actions/filters';

export class HoursEdit extends React.Component {

  state = {
    client: ''
  };

  constructor(props) {
    super(props);
    const hourEntry = this.props.hourEntry;
    this.props.dispatch(setSelectedClient(hourEntry.client))
  }

  onSubmit = (hourEntry) => {
    this.props.dispatch(startEditHourEntry(this.props.hourEntry.id, hourEntry));
    this.props.history.push(
        toHoursDashboard()
    )
  };

  onSelectClient = (client) => {
    this.props.dispatch(setSelectedClient(client))
  };

  render() {
    const { hourEntry, dispatch, history, projectList, clientList } = this.props;
    return (
      <AppFrame
        title="Edit hour entry"
        parent={toHoursDashboard()}
        parentText="back to hour entries"
      >
        <HourEntryForm
          submitButtonLabel="Save changes"
          onSubmit={this.onSubmit}
          hourEntry={hourEntry}
          projectList={projectList}
          clientList={clientList}
          onSelectClient={client => this.onSelectClient(client)}
        />
        <Button
          text="Duplicate"
          name="duplicate"
          color="secondary"
          action={() => {
            dispatch(startAddHourEntry(hourEntry));
            history.push(toHoursDashboard());
          }}
        />
        <Button
          text="Remove"
          name="remove"
          color="remove"
          action={() => {
            dispatch(startRemoveHourEntry({id: hourEntry.id}));
            history.push(toHoursDashboard());
          }}
        />
      </AppFrame>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    hourEntry: state.hourEntries.find((hourEntry) => hourEntry.id === props.match.params.id),
    projectList: selectProjectsFromClient(state.projects, state.projectFilters),
    clientList: state.clients
  }
};

export default connect(mapStateToProps)(HoursEdit);