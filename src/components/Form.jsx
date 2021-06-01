import React, { Component } from "react";

export class Form extends Component {
  state = {
    text: "",
  };

  constructor(props) {
    super(props);
    this.textboxRef = React.createRef();
  }

  handleChange = ({ target: { value: text } }) => {
    this.setState({
      text,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim() !== "") {
      this.props.onAdd(this.state.text.trim());
    }
    this.setState({ text: "" });
  };

  componentDidMount() {
    this.textboxRef.current.select();
  }

  render() {
    const { text } = this.state;

    return (
      <div className="todo-input">
        <form className="todo-input-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={this.handleChange}
            ref={this.textboxRef}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Form;
