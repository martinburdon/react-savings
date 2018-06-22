import React, { Component } from 'react';

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
    this.props.editItem(item, this.props.type);
  };

  handleRemoveItem = event => {
    event.preventDefault();
    this.props.removeItem(this.props.item, this.props.type);
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

export default ListItem;
