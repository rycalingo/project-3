import React, { Component } from 'react';

// import logo from './logo.svg';

import './assets/css/styles.css';

class App extends Component {
  state = {
    response: ''
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  callApi = async () => {
    const response = await fetch('/api/public');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="pad-wrapper">
            <p>HERE!</p>
        </div>
      </div>
    );
  }
}

export default App;