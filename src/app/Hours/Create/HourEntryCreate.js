import React from 'react';
import { connect } from 'react-redux';
import { startAddHourEntry } from '../actions/hourEntries';
import HoursForm from '../Form/HourEntryForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toHoursDashboard } from '../../../routes/links';
import { selectProjectsFromClient } from '../../Projects/selectors/projects';
import {setSelectedClient} from "../../Projects/actions/filters";
import {selectActiveClients} from "../../Clients/selectors/clients";

export class HoursCreate extends React.Component {

  state = {
    client: ''
  };

  constructor(props) {
    super(props);
  }

  onSubmit = (hourEntry) => {
    this.props.dispatch(startAddHourEntry(hourEntry));
    this.props.history.push(
      toHoursDashboard()
    )
  };

  onSelectClient = (client) => {
    this.props.dispatch(setSelectedClient(client))
  };

  render() {
    const { projectList, clientList } = this.props;
    return (
      <AppFrame
        title="Create hour entry"
        parent={toHoursDashboard()}
        parentText="back to hour entries"
      >
        <HoursForm
          onSubmit={this.onSubmit}
          submitButtonLabel="Create hours"
          projectList={projectList}
          clientList={clientList}
          onSelectClient={client => this.onSelectClient(client)}
        />
      </AppFrame>
    )
  }

}

const mapStateToProps = ((state) => {
  return {
    projectList: selectProjectsFromClient(state.projects, state.projectFilters),
    clientList: selectActiveClients(state.clients)
  }
});

export default connect(mapStateToProps)(HoursCreate);