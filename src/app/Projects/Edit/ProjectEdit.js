import React from 'react';
import { connect } from 'react-redux';
import { startEditProject, startRemoveProject } from '../actions/projects';
import ProjectForm from '../Form/ProjectForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toProjectDashboard } from '../../../routes/links';
import Button from '../../../ui/Button/Button';

export class ProjectEdit extends React.Component {

  onSubmit = (project) => {
    this.props.dispatch(startEditProject(this.props.project.id, project));
    this.props.history.push(
        toProjectDashboard()
    )
  };

  render() {
    const { project, dispatch, history } = this.props;
    return (
      <AppFrame>
        <h1>Edit project</h1>
        <ProjectForm
          submitButtonLabel="Save changes"
          onSubmit={this.onSubmit}
          project={project}
        />
        <Button
          text="Remove this project"
          name="remove"
          color="remove"
          action={() => {
            dispatch(startRemoveProject({id: project.id}));
            history.push(toProjectDashboard());
          }}
        />
      </AppFrame>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    project: state.projects.find((project) => project.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(ProjectEdit);