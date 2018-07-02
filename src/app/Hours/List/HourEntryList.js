import React from 'react';
import { selectHourEntries } from '../selectors/hourEntries';
import { connect } from 'react-redux';
import Table from '../../../ui/Table/Table';
import TableHeaderCell from '../../../ui/Table/TableHeaderCell';
import HourEntryListItem from './HourEntryListItem';
import TableHeaderRow from '../../../ui/Table/TableHeaderRow';
import { selectProjectById } from '../../Projects/selectors/projects';
import { selectClientById } from '../../Clients';
import { sortByDate } from '../actions/filters';

export class HourEntryList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { hourEntries, projects, clients, dispatch } = this.props;
    return (
      <Table>
        <TableHeaderRow>
          <TableHeaderCell
            action={() => {
              dispatch(sortByDate());
            }}
          >
            date
          </TableHeaderCell>
          <TableHeaderCell>
            client
          </TableHeaderCell>
          <TableHeaderCell>
            project
          </TableHeaderCell>
          <TableHeaderCell>
            note
          </TableHeaderCell>
          <TableHeaderCell>
            start
          </TableHeaderCell>
          <TableHeaderCell>
            end
          </TableHeaderCell>
          <TableHeaderCell
          >
            time
          </TableHeaderCell>
          <TableHeaderCell>
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
    hourEntries: selectHourEntries(state.hourEntries, state.hourFilters),
    projects: state.projects,
    clients: state.clients
  }
});

export default connect(mapStateToProps)(HourEntryList);