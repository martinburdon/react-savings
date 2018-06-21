import React, { Component } from 'react';
import ListItem from 'components/ListItem.js';

class List extends Component {
  render() {
    return (
      <list-container>
        {
          this.props.items.map((item, i) => {
            return (
              <ListItem
                key={item.id}
                item={item}
                editItem={this.props.editItem}
                removeItem={this.props.removeItem}
                type={this.props.type}
              />
            );
          })
        }
      </list-container>
    )
  }
}

export default List;
