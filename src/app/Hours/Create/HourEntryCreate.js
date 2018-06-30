import React from 'react';
import { connect } from 'react-redux';
import { startAddHourEntry } from '../actions/hourEntries';
import HoursForm from '../Form/HourEntryForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toHoursDashboard } from '../../../routes/links';

export class HoursCreate extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit = (hourEntry) => {
    console.log(hourEntry);
    this.props.dispatch(startAddHourEntry(hourEntry));
    this.props.history.push(
      toHoursDashboard()
    )
  };

  render() {
    const { projectList, clientList } = this.props;
    return (
      <AppFrame>
        <h1>Create hours</h1>
        <HoursForm
          onSubmit={this.onSubmit}
          submitButtonLabel="Create hours"
          projectList={projectList}
          clientList={clientList}
        />
      </AppFrame>
    )
  }

}

const mapStateToProps = ((state) => {
  return {
    projectList: state.projects,
    clientList: state.clients
  }
});

export default connect(mapStateToProps)(HoursCreate);