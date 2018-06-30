import React from 'react';
import { selectProjects } from '../../Projects';
import { connect } from 'react-redux';
import Table from '../../../ui/Table/Table';
import TableHeaderCell from '../../../ui/Table/TableHeaderCell';
import ProjectListItem from './ProjectListItem';
import TableHeaderRow from '../../../ui/Table/TableHeaderRow';
import { sortByFinished, sortByPrice, sortByTitle } from '../actions/filters';

export class ProjectList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { projects, dispatch } = this.props;
    console.log(projects);
    return (
      <Table>
        <TableHeaderRow>
          <TableHeaderCell
            action={() => {
              dispatch(sortByTitle());
            }}
          >
            title
          </TableHeaderCell>
          <TableHeaderCell
            action={() => {
              dispatch(sortByPrice());
            }}
          >
            price
          </TableHeaderCell>
          <TableHeaderCell
            action={() => {
              dispatch(sortByFinished());
            }}
          >
            finished
          </TableHeaderCell>
        </TableHeaderRow>
        {projects.map((project) => {
          return <ProjectListItem key={project.id} {...project} />
        })}
      </Table>
    )
  }

}

const mapStateToProps = ((state) => {
  return {
    projects: selectProjects(state.projects, state.projectFilters),
    projectFilters: state.projectFilters
  }
});

export default connect(mapStateToProps)(ProjectList);