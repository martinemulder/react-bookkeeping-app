import React from 'react';
import { toHourEntryEdit } from '../../../routes/links';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';

const HoursListItem = ({hourEntry, project, client}) => (
  <TableRow
    link={toHourEntryEdit(hourEntry.id)}
  >
    <TableCell>
      {hourEntry.date}
    </TableCell>
    <TableCell>
      {client.name}
    </TableCell>
    <TableCell>
      {project.title}
    </TableCell>
    <TableCell>
      {hourEntry.description}
    </TableCell>
    <TableCell>
      {hourEntry.startTime}
    </TableCell>
    <TableCell>
      {hourEntry.endTime}
    </TableCell>
    <TableCell>
      {hourEntry.totalTime}
    </TableCell>
    <TableCell>
      {hourEntry.invoiced && <i className="fas fa-check"></i>}
    </TableCell>
  </TableRow>
);

export default HoursListItem;