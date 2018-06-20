import React, { Component, Fragment } from 'react';
import List from 'components/List.js';

class App extends Component {
  state = {
    in: [
      {
        label: 'Salary',
        amount: 10000
      }
    ],
    out: [
      {
        label: 'Mortgage',
        amount: 100
      }
    ]
  };

  addAmount = () => {

  }

  removeAmount = () => {

  }

  editAmount = () => {

  }

  render() {
    return (
      <Fragment>
        <h1>React Savings</h1>
        <List items={this.state.in} />
        <List items={this.state.out} />
      </Fragment>
    );
  }
}

export default App;
