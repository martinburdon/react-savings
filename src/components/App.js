import React, { Component, Fragment } from 'react';
import List from 'components/List.js';
import { ins, outs } from 'sample-data.js';

class App extends Component {
  state = {
    ins,
    outs
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
        <section>
          <List items={this.state.ins} />
          <List items={this.state.outs} />
        </section>
      </Fragment>
    );
  }
}

export default App;
