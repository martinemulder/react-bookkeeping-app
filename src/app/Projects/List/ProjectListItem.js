import React from 'react';
import { toProjectEdit } from '../../../routes/links';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';

const ProjectListItem = ({ id, title, price, finished }) => (
  <TableRow link={toProjectEdit(id)}>
      <TableCell>{title}</TableCell>
    <TableCell>€{price}</TableCell>
    <TableCell>{finished && <i className="fas fa-check"></i>}</TableCell>
  </TableRow>
);

export default ProjectListItem;