import React, { Component } from 'react';
import ListItem from 'components/ListItem.js';

class List extends Component {
  render() {
    return (
      <list-container>
        {this.props.items.map((item, i) => <ListItem key={i} {...item} />)}
      </list-container>
    )
  }
}

export default List;
