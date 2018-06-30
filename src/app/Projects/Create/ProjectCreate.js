import React from 'react';
import { connect } from 'react-redux';
import { startAddProject } from '../actions/projects';
import ProjectForm from '../Form/ProjectForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toProjectDashboard } from '../../../routes/links';

export class ProjectCreate extends React.Component {

  onSubmit = (project) => {
    this.props.startAddProject(project);
    this.props.history.push(
      toProjectDashboard()
    )
  };

  render() {
    return (
      <AppFrame>
        <h1>Create project</h1>
        <ProjectForm
          onSubmit={this.onSubmit}
          submitButtonLabel="Create project"
        />
      </AppFrame>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  startAddProject: (project) => dispatch(startAddProject(project))
});

export default connect(undefined, mapDispatchToProps)(ProjectCreate);