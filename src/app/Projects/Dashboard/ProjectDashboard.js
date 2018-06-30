import React from 'react';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import Button from '../../../ui/Button/Button';
import ProjectList from '../List/ProjectList';
import { toProjectCreate } from '../../../routes/links';

export class ProjectDashboard extends React.Component {

  createProject = () =>{
    this.props.history.push(
      toProjectCreate()
    );
  };

  render() {
    return (
      <AppFrame title="Projects">
        <Button
          name="add"
          color="primary"
          text="add new"
          action={(event) => {
            event.stopPropagation();
            this.createProject()
          }}
        />
        <ProjectList />
      </AppFrame>
    )
  }

}

export default ProjectDashboard;