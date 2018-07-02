import React from 'react';
import { connect } from 'react-redux';
import { startAddClient } from '../actions/clients';
import ClientForm from '../Form/ClientForm';
import AppFrame from '../../../ui/AppFrame/AppFrame';
import { toClientDashboard } from '../../../routes/links';
import { dispatch } from 'redux';

export class ClientCreate extends React.Component {

  onSubmit = (client) => {
    this.props.startAddClient(client);
    this.props.history.push(
      toClientDashboard()
    )
  };

  render() {
    return (
      <AppFrame
        title="Create client"
        parent={toClientDashboard()}
        parentText="back to clients"
      >
        <ClientForm
          onSubmit={this.onSubmit}
          submitButtonLabel="Create client"
        />
      </AppFrame>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  startAddClient: (client) => dispatch(startAddClient(client))
});

export default connect(undefined, mapDispatchToProps)(ClientCreate);