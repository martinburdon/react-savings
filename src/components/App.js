import React, { Component, Fragment } from 'react';
import List from 'components/List.js';
import AddItemForm from 'components/AddItemForm.js';
import Calculations from 'components/Calculations.js';
import { ins, outs } from 'sample-data.js';
import { connect } from 'react-redux';
import { addIncoming, addOutgoing } from 'actions/actions.js';

class App extends Component {
  state = {
    ins,
    outs
  };

  addItem = (payload, type) => {
    const newItem = {
      ...payload,
      id: Date.now()
    };
    const newState = [
      ...this.state[type],
      newItem
    ];
    this.setState({ [type]: newState });
  }

  removeItem = (payload, type) => {
    const currentState = this.state[type];
    const newState = currentState.filter(item => item.id === payload.id ? null : item);
    this.setState({ [type]: newState });
  }

  editItem = (payload, type) => {
    const currentState = this.state[type];
    const newState = currentState.map(item => {
      if (item.id === payload.id) {
        return {
          ...item,
          ...payload
        };
      }

      return item;
    });

    this.setState({ [type]: newState });
  }

  render() {
    return (
      <Fragment>
        <h1>React Savings</h1>
        <div className="ins-outs">
          <section>
            <AddItemForm
              addItem={this.addItem}
              type="ins"
            />
            <List
              items={this.state.ins}
              editItem={this.editItem}
              removeItem={this.removeItem}
              type="ins"
            />
          </section>
          <section>
            <AddItemForm
              addItem={this.addItem}
              type="outs"
            />
            <List
              items={this.state.outs}
              editItem={this.editItem}
              removeItem={this.removeItem}
              type="outs"
            />
          </section>
        </div>
        <Calculations {...this.state}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
 ...state
});

const mapDispatchToProps = dispatch => ({
  addIncoming: () => dispatch(addIncoming()),
  addOutgoing: () => dispatch(addOutgoing())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
