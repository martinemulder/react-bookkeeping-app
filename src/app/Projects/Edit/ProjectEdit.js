import React from 'react';
import { connect } from 'react-redux';
import { startEditProject, startRemoveProject } from '../actions/projects';
import ProjectForm from '../Form/ProjectForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toProjectDashboard } from '../../../routes/links';
import Button from '../../../ui/Button/Button';
import { selectActiveClients } from '../../Clients/selectors/clients';

export class ProjectEdit extends React.Component {

  onSubmit = (project) => {
    this.props.dispatch(startEditProject(this.props.project.id, project));
    this.props.history.push(
        toProjectDashboard()
    )
  };

  render() {
    const { project, dispatch, history, clientList } = this.props;
    return (
      <AppFrame
        title="Edit project"
        parent={toProjectDashboard()}
        parentText="back to projects"
      >
        <ProjectForm
          submitButtonLabel="Save changes"
          onSubmit={this.onSubmit}
          project={project}
          clientList={clientList}
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
    project: state.projects.find((project) => project.id === props.match.params.id),
    clientList: state.clients
  }
};

export default connect(mapStateToProps)(ProjectEdit);