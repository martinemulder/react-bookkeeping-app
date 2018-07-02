import React from 'react';
import Button from '../../../ui/Button/Button';

export class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.project ? props.project.id : '',
      client: props.project ? props.project.client : '',
      title: props.project ? props.project.title: '',
      price: props.project ? props.project.price: '',
      finished: props.project ? props.project.finished: false,
      submitting: false,
      error: ''
    };
  }

  onClientChange = (e) => {
    const client = e.target.value;
    this.setState(() => ({ client }));
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onPriceChange = (e) => {
    const price = e.target.value;
    this.setState(() => ({ price }));
  };

  onFinishedChange = () => {
    const finished = !this.state.finished;
    this.setState(() => ({ finished }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.client) {
      this.setState(() => ({ error: 'Please provide a title and a client' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        client: this.state.client,
        title: this.state.title,
        price: this.state.price,
        finished: this.state.finished
      });
    }
  };

  render() {
    const { submitButtonLabel, clientList } = this.props;
    const { error, client, title, price, finished } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <div className="column column-half">
                <label htmlFor="client">
                  <i className="far fa-user"></i> Client
                </label>
                <select
                  name="client"
                  value={client}
                  onChange={this.onClientChange}
                >
                  <option value="">Choose a client</option>
                  {clientList.map((client) => {
                    return <option key={client.id} value={client.id}>{client.name}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="title">
                <i className="fas fa-pen-alt"></i> Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title"
                autoFocus
                value={title}
                onChange={this.onTitleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">
                <i className="fas fa-euro-sign"></i> Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="price"
                value={price}
                onChange={this.onPriceChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="finished">
                Finished
              </label>
              <input
                type="checkbox"
                name="finished"
                id="finished"
                checked={finished}
                value={finished}
                onChange={this.onFinishedChange}
              />
            </div>
          <Button
            type="submit"
            color="primary"
            text={submitButtonLabel}
            disabled={!title}
          />
        </form>
      </div>
    )
  }

}

export default ProjectForm;