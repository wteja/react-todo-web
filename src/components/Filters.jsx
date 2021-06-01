import React, { Component } from "react";

export class Filters extends Component {
  handleClick = (visibility) => {
    this.props.onChange(visibility);
  };
  render() {
    const { visibility } = this.props;

    return (
      <div className="todo-filter">
        <button
          onClick={() => this.handleClick("all")}
          className={visibility === "all" ? "active" : null}
        >
          All
        </button>
        <button
          onClick={() => this.handleClick("completed")}
          className={visibility === "completed" ? "active" : null}
        >
          Completed
        </button>
        <button
          onClick={() => this.handleClick("incompleted")}
          className={visibility === "incompleted" ? "active" : null}
        >
          Incompleted
        </button>
      </div>
    );
  }
}

export default Filters;
