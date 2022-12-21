import React, { Component } from "react";
import "./style.css";
class Counter extends Component {
  render() {
    const { count, step, onIncrement, onDecrement, updateTotal, ids } =
      this.props;

    return (
      <div className="contatiner">
        <button
          className="plus-btn"
          onClick={() => {
            onIncrement(step, ids);
            updateTotal(step);
          }}
        >
          +
        </button>
        <button
          className="minse-btn"
          onClick={() => {
            onDecrement(step, ids);
            updateTotal(-step);
          }}
        >
          -
        </button>

        <span className="result">{count}</span>
      </div>
    );
  }
}

export default Counter;
