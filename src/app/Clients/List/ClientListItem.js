import React from 'react';
import { toClientEdit } from '../../../routes/links';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';

const ClientListItem = ({ id, name, active }) => (
  <TableRow link={toClientEdit(id)}>
      <TableCell>{name}</TableCell>
      <TableCell>{active && <i className="fas fa-check"></i>}</TableCell>
  </TableRow>
);

export default ClientListItem;