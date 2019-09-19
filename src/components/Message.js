import React from 'react';

/**
 * A component that renders a simple message from props.
 */
class Message extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

export default Message;
