import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  removeIncoming,
  removeOutgoing,
  editIncoming,
  editOutgoing
} from 'actions/actions.js';

class ListItem extends Component {
  labelRef = React.createRef();
  amountRef = React.createRef();

  handleChange = event => {
    event.preventDefault();
    const item = {
      ...this.props.item,
      label: this.labelRef.current.value,
      amount: this.amountRef.current.value || 0
    };
    const { type } = this.props;
    const action = type === 'ins' ? editIncoming(item) : editOutgoing(item);
    this.props.dispatch(action);
  };

  handleRemoveItem = event => {
    event.preventDefault();
    const { type, item } = this.props;
    const action = type === 'ins' ? removeIncoming(item.id) : removeOutgoing(item.id);
    this.props.dispatch(action);
  };

  render() {
    return (
      <list-item>
        <span className="remove-item" onClick={this.handleRemoveItem}>X</span>
        <input
          name="label"
          onChange={this.handleChange}
          ref={this.labelRef}
          type="text"
          value={this.props.item.label}
        />
        <input
          name="amount"
          onChange={this.handleChange}
          ref={this.amountRef}
          type="number"
          value={this.props.item.amount}
        />
      </list-item>
    );
  }
}

export default connect()(ListItem);
