import React from 'react';
import { toClientEdit, toHourEntryEdit, toProjectEdit } from '../../../routes/links';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';

const HoursListItem = ({hourEntry, project, client}) => (
  <TableRow
    link={toHourEntryEdit(hourEntry.id)}
  >
    <TableCell>
      {hourEntry.date}
    </TableCell>
    <TableCell
      link={toClientEdit(client.id)}
    >
      {client.name}
    </TableCell>
    <TableCell
      link={toProjectEdit(project.id)}
    >
      {project.title}
    </TableCell>
    <TableCell>{hourEntry.invoiced && <i className="fas fa-check"></i>}</TableCell>
  </TableRow>
);

export default HoursListItem;