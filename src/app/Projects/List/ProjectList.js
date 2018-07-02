import React from 'react';
import { selectProjects } from '../../Projects';
import { connect } from 'react-redux';
import Table from '../../../ui/Table/Table';
import TableHeaderCell from '../../../ui/Table/TableHeaderCell';
import ProjectListItem from './ProjectListItem';
import TableHeaderRow from '../../../ui/Table/TableHeaderRow';
import { sortByFinished, sortByPrice, sortByTitle } from '../actions/filters';
import {selectClientById} from "../../Clients/selectors/clients";

export class ProjectList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { projects, dispatch, clients } = this.props;
    return (
      <Table>
        <TableHeaderRow>
          <TableHeaderCell>
            client
          </TableHeaderCell>
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
          const client = selectClientById(project.client, clients);
          return <ProjectListItem key={project.id} project={project} client={client} />
        })}
      </Table>
    )
  }

}

const mapStateToProps = ((state) => {
  return {
    projects: selectProjects(state.projects, state.projectFilters),
    projectFilters: state.projectFilters,
    clients: state.clients
  }
});

export default connect(mapStateToProps)(ProjectList);