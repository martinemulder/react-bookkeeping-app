import React from 'react';
import { toProjectEdit } from '../../../routes/links';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';

const ProjectListItem = ({ project, client }) => (
  <TableRow link={toProjectEdit(project.id)}>
    <TableCell>{client.name}</TableCell>
    <TableCell>{project.title}</TableCell>
    <TableCell>€{project.price}</TableCell>
    <TableCell>{project.finished && <i className="fas fa-check"></i>}</TableCell>
  </TableRow>
);

export default ProjectListItem;