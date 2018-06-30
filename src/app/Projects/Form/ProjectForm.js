import React from 'react';
import Button from '../../../ui/Button/Button';

export class ProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.project ? props.project.id : '',
      title: props.project ? props.project.title: '',
      price: props.project ? props.project.price: '',
      finished: props.project ? props.project.finished: false,
      submitting: false,
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onPriceChange = (e) => {
    const price = e.target.value;
    this.setState(() => ({ price }));
  };

  onFinishedChange = (e) => {
    const finished = !this.state.finished;
    this.setState(() => ({ finished }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title) {
      this.setState(() => ({ error: 'Please provide a title' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        price: this.state.price,
        finished: this.state.finished
      });
    }
  };

  render() {
    const { submitButtonLabel } = this.props;

    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title"
                autoFocus
                value={this.state.title}
                onChange={this.onTitleChange}
              />
              <input
                type="number"
                name="price"
                id="price"
                placeholder="price"
                value={this.state.price}
                onChange={this.onPriceChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="finished">Finished</label>
              <input
                type="checkbox"
                name="finished"
                id="finished"
                checked={this.state.finished}
                value={this.state.finished}
                onChange={this.onFinishedChange}
              />
            </div>
          <Button
            type="submit"
            color="primary"
            text={submitButtonLabel}
            disabled={!this.state.title}
          />
        </form>
      </div>
    )
  }

}

export default ProjectForm;