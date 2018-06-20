import React, { Component, Fragment } from 'react';
import List from 'components/List.js';
import AddItemForm from 'components/AddItemForm.js';
import Calculations from 'components/Calculations.js';
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
        <div className="ins-outs">
          <section>
            <AddItemForm addItem={this.addInItem} />
            <List items={this.state.ins} />
          </section>
          <section>
            <AddItemForm addItem={this.addOutItem} />
            <List items={this.state.outs} />
          </section>
        </div>
        <Calculations {...this.state}/>
      </Fragment>
    );
  }
}

export default App;
