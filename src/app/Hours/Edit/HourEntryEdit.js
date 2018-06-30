import React from 'react';
import { connect } from 'react-redux';
import { startEditHourEntry, startRemoveHourEntry } from '../actions/hourEntries';
import HourEntryForm from '../Form/HourEntryForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toHoursDashboard } from '../../../routes/links';
import Button from '../../../ui/Button/Button';

export class HoursEdit extends React.Component {

  onSubmit = (hourEntry) => {
    this.props.dispatch(startEditHourEntry(this.props.hourEntry.id, hourEntry));
    this.props.history.push(
        toHoursDashboard()
    )
  };

  render() {
    const { hourEntry, dispatch, history, projectList, project, clientList, client } = this.props;
    return (
      <AppFrame
        title="Edit Hour Entry"
        parent={toHoursDashboard()}
      >
        <HourEntryForm
          submitButtonLabel="Save changes"
          onSubmit={this.onSubmit}
          hourEntry={hourEntry}
          projectList={projectList}
          clientList={clientList}
        />
        <Button
          text="Remove this hour entry"
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
    projectList: state.projects,
    clientList: state.clients
  }
};

export default connect(mapStateToProps)(HoursEdit);