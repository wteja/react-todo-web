import React, { Component } from "react";
import Item from "./Item";

export class List extends Component {
  handleClickDelete = (item) => {
    this.props.onDelete(item);
  };

  handleClickItem = (item) => {
    this.props.onClickItem(item);
  };

  render() {
    const { items } = this.props;

    return (
      <ul className="todo-list">
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            onDelete={this.handleClickDelete}
            onClickItem={this.handleClickItem}
          />
        ))}
      </ul>
    );
  }
}

export default List;
