import React, { Component } from 'react';
import ListItem from 'components/ListItem.js';

class List extends Component {
  render() {
    return this.props.items.map(item => <ListItem {...item} />);
  }
}

export default List;
