import React from 'react';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';
import Button from '../../../ui/Button/Button';

const ClientListItem = ({client, onEditClient}) => (
  <TableRow>
    <TableCell>
      {client.name}
    </TableCell>
    <TableCell>
      {client.active &&
      <i className="fas fa-check"></i>}
    </TableCell>
    <TableCell
      name="actions"
    >
      <Button
        name="icon"
        icon="edit"
        action={() => {
          onEditClient(client.id)
        }}
      />
    </TableCell>
  </TableRow>
);

export default ClientListItem;