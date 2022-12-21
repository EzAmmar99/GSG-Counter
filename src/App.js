import React, { Component } from "react";
import Counter from "./Components/Counter";
import Total from "./Components/Total";

class App extends Component {
  state = {
    total: 0,
    counter: [
      { id: 0, count: 0, step: 1 },
      { id: 1, count: 0, step: 2 },
      { id: 2, count: 0, step: 3 },
      { id: 3, count: 0, step: 4 },
    ],
  };

  onIncrement = (value, id) => {
    this.setState({
      counter: this.state.counter.map((c) => {
        if (c.id === id) {
          return { ...c, count: c.count + value };
        }
        return c;
      }),
    });
  };

  onDecrement = (value, id) => {
    this.setState({
      counter: this.state.counter.map((c) => {
        if (c.id === id) {
          return { ...c, count: c.count - value };
        }
        return c;
      }),
    });
  };

  updateTotal = (value) => {
    this.setState((prevState) => ({
      total: prevState.total + value,
    }));
  };

  render() {
    return (
      <div>
        <Total total={this.state.total} />

        {this.state.counter.map((ele) => (
          <Counter
            key={ele.id}
            ids={ele.id}
            count={ele.count}
            step={ele.step}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            updateTotal={this.updateTotal}
          />
        ))}
      </div>
    );
  }
}

export default App;
