import React from 'react';
import selectHourEntries from '../selectors/hourEntries';
import { connect } from 'react-redux';
import Table from '../../../ui/Table/Table';
import TableHeaderCell from '../../../ui/Table/TableHeaderCell';
import HourEntryListItem from './HourEntryListItem';
import TableHeaderRow from '../../../ui/Table/TableHeaderRow';
import { selectProjectById } from '../../Projects/selectors/projects';
import { selectClientById } from '../../Clients';

export class HourEntryList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { hourEntries, projects, clients, dispatch } = this.props;
    console.log(hourEntries);
    return (
      <Table>
        <TableHeaderRow>
          <TableHeaderCell
            // action={() => {
            //   dispatch(sortByTitle());
            // }}
          >
            date
          </TableHeaderCell>
          <TableHeaderCell
            // action={() => {
            //   dispatch(sortByTitle());
            // }}
          >
            client
          </TableHeaderCell>
          <TableHeaderCell
            // action={() => {
            //   dispatch(sortByTitle());
            // }}
          >
            project
          </TableHeaderCell>
          <TableHeaderCell
            // action={() => {
            //   dispatch(sortByFinished());
            // }}
          >
            invoiced
          </TableHeaderCell>
        </TableHeaderRow>
        {hourEntries.map((hourEntry) => {
          const project = selectProjectById(hourEntry.project, projects);
          const client = selectClientById(hourEntry.client, clients);
          return <HourEntryListItem key={hourEntry.id} hourEntry={hourEntry} project={project ? project : ''} client={client} />
        })}
      </Table>
    )
  }

}

const mapStateToProps = ((state) => {
  return {
    hourEntries: selectHourEntries(state.hourEntries),
    projects: state.projects,
    clients: state.clients
  }
});

export default connect(mapStateToProps)(HourEntryList);