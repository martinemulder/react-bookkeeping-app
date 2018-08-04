import React from 'react';
import { selectHourEntries } from '../selectors/hourEntries';
import { connect } from 'react-redux';
import Table from '../../../ui/Table/Table';
import TableHeaderCell from '../../../ui/Table/TableHeaderCell';
import HourEntryListItem from './HourEntryListItem';
import TableHeaderRow from '../../../ui/Table/TableHeaderRow';
import { selectProjectById } from '../../Projects';
import { selectClientById } from '../../Clients';
import { sortByDate } from '../actions/filters';
import { toHourEntryEdit } from '../../../routes/links';
import { withRouter } from 'react-router-dom';
import { startAddHourEntry, startRemoveHourEntry } from '../actions/hourEntries';

export class HourEntryList extends React.Component {

  constructor(props) {
    super(props);
  }

  onEditHourEntry = (id) => {
    this.props.history.push(
      toHourEntryEdit(id)
    )
  };

  onDuplicateHourEntry = (hourEntry) => {
    this.props.dispatch(startAddHourEntry(hourEntry));
  };

  onHourEntryDelete = ({id}) => {
    this.props.dispatch(startRemoveHourEntry({id}));
  };

  render() {
    const { hourEntries, projects, clients, dispatch } = this.props;
    return (
      <Table>
        <TableHeaderRow>
          <TableHeaderCell>
          </TableHeaderCell>
          <TableHeaderCell
            name="date"
            action={() => {
              dispatch(sortByDate());
            }}
          >
            date
          </TableHeaderCell>
          <TableHeaderCell name="client">
            client
          </TableHeaderCell>
          <TableHeaderCell name="project">
            project
          </TableHeaderCell>
          <TableHeaderCell name="note">
            note
          </TableHeaderCell>
          <TableHeaderCell name="time">
            start
          </TableHeaderCell>
          <TableHeaderCell name="time">
            end
          </TableHeaderCell>
          <TableHeaderCell name="time">
            time
          </TableHeaderCell>
          <TableHeaderCell name="invoiced">
            invoiced
          </TableHeaderCell>
          <TableHeaderCell>
            actions
          </TableHeaderCell>
        </TableHeaderRow>
        {hourEntries.map((hourEntry) => {
          const project = selectProjectById(hourEntry.project, projects);
          const client = selectClientById(hourEntry.client, clients);
          return (
          <HourEntryListItem
            key={hourEntry.id}
            hourEntry={hourEntry}
            project={project ? project : ''}
            client={client}
            onHourEntryEdit={(id) => this.onEditHourEntry(id)}
            onHourEntryDuplicate={(hourEntry) => this.onDuplicateHourEntry(hourEntry)}
            onHourEntryDelete={({id}) => this.onHourEntryDelete({id})}
          />
          )
        })}
      </Table>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    hourEntries: selectHourEntries(state.hourEntries, state.hourFilters),
    projects: state.projects,
    clients: state.clients
  }
};

export default withRouter(connect(mapStateToProps)(HourEntryList));