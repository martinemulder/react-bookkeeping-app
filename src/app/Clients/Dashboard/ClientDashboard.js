import React from 'react';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import Button from '../../../ui/Button/Button';
import ClientList from '../List/ClientList';
import { toClientCreate } from '../../../routes/links';

export class ClientDashboard extends React.Component {

  createClient = () =>{
    this.props.history.push(
      toClientCreate()
    );
  };

  render() {
    return (
      <AppFrame title="Clients">
        <Button
          name="add"
          color="primary"
          text="add new"
          action={(event) => {
            event.stopPropagation();
            this.createClient()
          }}
        />
        <ClientList />
      </AppFrame>
    )
  }

}

export default ClientDashboard;