import React, { Component } from "react";

export class Item extends Component {
  handleClickDelete = (index) => {
    this.props.onDelete(index);
  };

  handleClickItem = (index) => {
    this.props.onClickItem(index);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <li className={`todo-item ${item.completed ? " completed" : ""}`}>
          <span onClick={() => this.handleClickItem(item)} className="text">
            {item.text}
          </span>
          <span
            className="delete"
            onClick={() => this.handleClickDelete(item)}
          ></span>
        </li>
      </div>
    );
  }
}

export default Item;
