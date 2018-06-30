import React from 'react';
import { connect } from 'react-redux';
import { startEditClient, startRemoveClient } from '../actions/clients';
import ClientForm from '../Form/ClientForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toClientDashboard } from '../../../routes/links';
import Button from '../../../ui/Button/Button';

export class ClientEdit extends React.Component {

  onSubmit = (client) => {
    this.props.dispatch(startEditClient(this.props.client.id, client));
    this.props.history.push(
        toClientDashboard()
    )
  };

  render() {
    const { client, dispatch, history } = this.props;
    console.log(client);
    return (
      <AppFrame>
        <h1>Edit client</h1>
        <ClientForm
          submitButtonLabel="Save changes"
          onSubmit={this.onSubmit}
          client={client}
        />
        <Button
          text="Remove this client"
          name="remove"
          color="remove"
          action={() => {
            dispatch(startRemoveClient({id: client.id}));
            history.push(toClientDashboard());
          }}
        />
      </AppFrame>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.find((client) => client.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(ClientEdit);