import React from 'react';

export default class Button extends React.Component {

  render() {
    const { type, name, color, action, disabled, text, icon} = this.props;
    return (
      <button
        type={type}
        className={name +'-button ' + color}
        data-icon={icon}
        onClick={action}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }

}
