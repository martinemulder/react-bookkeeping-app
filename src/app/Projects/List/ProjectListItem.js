import React from 'react';
import { toProjectEdit } from '../../../routes/links';
import TableRow from '../../../ui/Table/TableRow';
import TableCell from '../../../ui/Table/TableCell';
import Button from '../../../ui/Button/Button';

const ProjectListItem = ({ project, client, onEditProject }) => (
  <TableRow link={toProjectEdit(project.id)}>
    <TableCell>{project.title}</TableCell>
    <TableCell>
      {client.name}
    </TableCell>
    <TableCell>{project.price ? '€' + project.price : '?'}</TableCell>
    <TableCell>{project.finished && <i className="fas fa-check"></i>}</TableCell>
    <TableCell
      name="actions"
    >
      <Button
        name="icon"
        icon="edit"
        action={() => {
          onEditProject(project.id)
        }}
      />
    </TableCell>
  </TableRow>
);

export default ProjectListItem;