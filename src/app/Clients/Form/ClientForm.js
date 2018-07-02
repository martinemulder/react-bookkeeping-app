import React from 'react';
import Button from '../../../ui/Button/Button';

export class ClientForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.client ? props.client.id : '',
      name: props.client ? props.client.name: '',
      active: props.client ? props.client.active: false,
      submitting: false,
      error: ''
    };
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onActiveChange = (e) => {
    const active = !this.state.active;
    this.setState(() => ({ active }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Please provide a name' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        active: this.state.active
      });
    }
  };

  render() {
    const { submitButtonLabel } = this.props;
    const { error, name, active } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                autoFocus
                value={name}
                onChange={this.onNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="active">Active</label>
              <input
                type="checkbox"
                name="active"
                id="active"
                checked={active}
                value={active}
                onChange={this.onActiveChange}
              />
            </div>
          <Button
            type="submit"
            color="primary"
            text={submitButtonLabel}
            disabled={!name}
          />
        </form>
      </div>
    )
  }

}

export default ClientForm;