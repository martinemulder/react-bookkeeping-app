import React from 'react';

export default class Button extends React.Component {

  render() {
    const { type, name, color, action, disabled, text} = this.props;
    return (
      <button
        type={type}
        className={name +'-button ' + color}
        onClick={action}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }

}
