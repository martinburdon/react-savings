import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIncoming, addOutgoing } from 'actions/actions.js';

class AddItemForm extends Component {
  labelRef = React.createRef();
  amountRef = React.createRef();

  createItem = event => {
    event.preventDefault();
    const item = {
      label: this.labelRef.current.value,
      amount: parseFloat(this.amountRef.current.value)
    };
    const { type } = this.props;
    const action = type === 'ins' ? addIncoming(item) : addOutgoing(item);
    this.props.dispatch(action);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createItem}>
        <input
          name="label"
          placeholder="Enter label"
          ref={this.labelRef}
          type="text"
        />
        <input
          name="amount"
          placeholder="Enter amount"
          ref={this.amountRef}
          type="text"
        />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default connect()(AddItemForm);
