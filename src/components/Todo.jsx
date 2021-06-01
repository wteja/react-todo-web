import React, { Component } from "react";
import Form from "./Form";
import Filters from "./Filters";
import List from "./List";
import "./Todo.scss";

export class Todo extends Component {
  state = {
    items: [],
    visibility: "all",
  };

  handleAdd = (text) => {
    if (text !== "") {
      const newItem = { text, completed: false };
      const items = [...this.state.items, newItem];
      this.setState({
        items,
      });
    }
  };

  deleteItem = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items.splice(index, 1);
    this.setState({
      items,
    });
  };

  changeItemStatus = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].completed = !items[index].completed;
    this.setState({
      items,
    });
  };

  changeVisibility = (visibility) => {
    this.setState({ visibility });
  };

  render() {
    const { items, visibility } = this.state;
    const visibleItems =
      visibility === "all"
        ? items
        : visibility === "completed"
        ? items.filter((item) => item.completed)
        : items.filter((item) => !item.completed);

    return (
      <div id="todo">
        <Form onAdd={this.handleAdd} />
        <List
          items={visibleItems}
          onClickItem={this.changeItemStatus}
          onDelete={this.deleteItem}
        />
        <Filters onChange={this.changeVisibility} visibility={visibility} />
      </div>
    );
  }
}

export default Todo;
