import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class Message extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

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

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
