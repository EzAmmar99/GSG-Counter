import React, { Component } from "react";
import "./style.css";
class Counter extends Component {
  state = {
    count: 0,
  };

  onIncrement = (value) => {
    this.setState((prevState) => ({
      count: prevState.count + value,
    }));
  };

  onDecrement = (value) => {
    this.setState((prevState) => ({
      count: prevState.count - value,
    }));
  };

  render() {
    const { updateTotal, increment, decrement } = this.props;
    return (
      <div className="contatiner">
        <button
          className="plus-btn"
          onClick={() => {
            this.onIncrement(increment);
            updateTotal(increment);
          }}
        >
          +
        </button>
        <button
          className="minse-btn"
          onClick={() => {
            this.onDecrement(decrement);
            updateTotal(-decrement);
          }}
        >
          -
        </button>

        <span className="result">{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;
