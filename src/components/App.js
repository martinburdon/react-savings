import React, { Component, Fragment } from 'react';
import List from 'components/List.js';
import AddItemForm from 'components/AddItemForm.js';
import Calculations from 'components/Calculations.js';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>React Savings</h1>
        <div className="ins-outs">
          <section>
            <AddItemForm type="ins" />
            <List items={this.props.incomings} type="ins" />
          </section>
          <section>
            <AddItemForm type="outs" />
            <List items={this.props.outgoings} type="outs" />
          </section>
        </div>
        <Calculations />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
 incomings: state.incomings,
 outgoings: state.outgoings
});

export default connect(mapStateToProps)(App);
