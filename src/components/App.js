import React from 'react';
import Message from './Message';

/**
 * Root component for the application.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  render() {
    return <Message text={this.state.text} />;
  }
}

export default App;
