import React from 'react';
import { connect } from 'react-redux';
import { startAddProject } from '../actions/projects';
import ProjectForm from '../Form/ProjectForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toProjectDashboard } from '../../../routes/links';
import { selectActiveClients } from '../../Clients/selectors/clients';

export class ProjectCreate extends React.Component {

  onSubmit = (project) => {
    this.props.dispatch(startAddProject(project));
    this.props.history.push(
      toProjectDashboard()
    )
  };

  render() {
    const { clientList } = this.props;
    return (
      <AppFrame
        title="Create project"
        parent={toProjectDashboard()}
        parentText="back to projects"
      >
        <ProjectForm
          onSubmit={this.onSubmit}
          submitButtonLabel="Create project"
          clientList={clientList}
        />
      </AppFrame>
    )
  }

}

const mapStateToProps = ((state) => {
  return {
    clientList: state.clients
  }
});

export default connect(mapStateToProps)(ProjectCreate);