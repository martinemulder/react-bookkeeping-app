import React from 'react';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';
import Button from "../../../ui/Button/Button";

const HourEntryListItem = ({ hourEntry, project, client, onHourEntryEdit }) => (
  <TableRow>
    <TableCell
      name="select"
    >
      <input type="checkbox" />
    </TableCell>
    <TableCell
      name="date"
    >
      {hourEntry.date}
    </TableCell>
    <TableCell
      name="client"
    >
      {client.name}
    </TableCell>
    <TableCell
      name="project"
    >
      {project.title}
    </TableCell>
    <TableCell
      name="note"
    >
      {hourEntry.description}
    </TableCell>
    <TableCell
      name="time"
    >
      {hourEntry.startTime}
    </TableCell>
    <TableCell
      name="time"
    >
      {hourEntry.endTime}
    </TableCell>
    <TableCell
      name="time"
    >
      {hourEntry.totalTime}
    </TableCell>
    <TableCell
      name="invoiced"
    >
      {hourEntry.invoiced === 'yes' && <i className="fas fa-check"></i>}
      {hourEntry.invoiced === 'n/a' && hourEntry.invoiced}
    </TableCell>
    <TableCell
      name="actions"
    >
      <Button
        name="icon"
        icon="edit"
        action={() => {onHourEntryEdit(hourEntry.id)}}
      />
    </TableCell>
  </TableRow>
);

export default HourEntryListItem;