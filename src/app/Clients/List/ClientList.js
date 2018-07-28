import React from 'react';
import { selectClients } from '../selectors/clients';
import { connect } from 'react-redux';
import ClientListItem from './ClientListItem';
import Table from '../../../ui/Table/Table';
import TableHeaderCell from '../../../ui/Table/TableHeaderCell';
import { sortByActive, sortByName } from '../actions/filters';
import TableHeaderRow from '../../../ui/Table/TableHeaderRow';
import { toClientEdit } from '../../../routes/links';
import { withRouter } from 'react-router-dom';

export class ClientList extends React.Component {

  constructor(props) {
    super(props);
  }

  onEditClient = (id) => {
    this.props.history.push(
      toClientEdit(id)
    )
  };

  render() {
    const { clients, dispatch } = this.props;
    return (
     <Table>
       <TableHeaderRow>
         <TableHeaderCell
           action={() => {
             dispatch(sortByName());
           }}
         >
           name
         </TableHeaderCell>
         <TableHeaderCell
           action={() => {
             dispatch(sortByActive());
           }}>
           active
         </TableHeaderCell>
         <TableHeaderCell>
           actions
         </TableHeaderCell>
       </TableHeaderRow>
        {clients.map((client) => {
          return <ClientListItem
            key={client.id}
            client = {client}
            onEditClient={(id) => this.onEditClient(id)}
          />
        })}
      </Table>
    )
  }

}

const mapStateToProps = ((state) => {
  return {
    clients: selectClients(state.clients, state.clientFilters),
    clientFilters: state.clientFilters
  }
});

export default withRouter(connect(mapStateToProps)(ClientList));