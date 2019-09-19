import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that renders a simple message from props.
 */
class Message extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
