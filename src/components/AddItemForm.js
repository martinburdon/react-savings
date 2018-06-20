import React, { Component } from 'react';

class AddItemForm extends Component {
  labelRef = React.createRef();
  amountRef = React.createRef();

  createItem = event => {
    event.preventDefault();
    this.props.addItem({
      label: this.labelRef.current.value,
      amount: parseFloat(this.amountRef.current.value)
    });
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="" onSubmit={this.createItem}>
        <input
          name="label"
          ref={this.labelRef}
          type="text"
          placeholder="Enter label"
        />
        <input
          name="amount"
          ref={this.amountRef}
          type="text"
          placeholder="Enter amount"
        />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddItemForm;
