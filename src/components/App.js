import React, { Component, Fragment } from 'react';
import List from 'components/List.js';
import AddItemForm from 'components/AddItemForm.js';
import { ins, outs } from 'sample-data.js';

class App extends Component {
  state = {
    ins,
    outs
  };

  addInItem = (payload) => {
    const ins = [
      ...this.state.ins,
      payload
    ];
    this.setState({ ins });
  }

  addOutItem = (payload) => {
    const outs = [
      ...this.state.outs,
      payload
    ];
    this.setState({ outs });
  }

  removeItem = () => {

  }

  editItem = () => {

  }

  render() {
    return (
      <Fragment>
        <h1>React Savings</h1>
        <section>
          <AddItemForm addItem={this.addInItem} />
          <AddItemForm addItem={this.addOutItem} />
          <List items={this.state.ins} />
          <List items={this.state.outs} />
        </section>
      </Fragment>
    );
  }
}

export default App;
