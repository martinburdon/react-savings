import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIncoming, addOutgoing } from 'actions/actions.js';

class AddItemForm extends Component {
  labelRef = React.createRef();
  amountRef = React.createRef();

  state = {
    submitDisabled: true
  };

  createItem = event => {
    event.preventDefault();
    const label = this.labelRef.current.value;
    const amount = parseFloat(this.amountRef.current.value);
    if (!label || !amount) {
      return;
    }
    const item = { label, amount };
    const { type } = this.props;
    const action = type === 'ins' ? addIncoming(item) : addOutgoing(item);
    this.props.dispatch(action);
    event.currentTarget.reset();
    this.setState({ submitDisabled: true });
  };

  formChanged = event => {
    event.preventDefault();
    const label = this.labelRef.current.value;
    const amount = this.amountRef.current.value;
    this.setState({ submitDisabled: !label || !amount });
  }

  render() {
    return (
      <form onChange={this.formChanged} onSubmit={this.createItem}>
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
        <button type="submit" disabled={this.state.submitDisabled}>+ Add Item</button>
      </form>
    )
  }
}

export default connect()(AddItemForm);
