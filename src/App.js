import React, { Component } from "react";
import Counter from "./Components/Counter";
import Total from "./Components/Total";

class App extends Component {
  state = {
    total: 0,
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

        <Counter
          increment={1}
          decrement={1}
          updateTotal={this.updateTotal.bind(this)}
        />
        <Counter
          increment={2}
          decrement={2}
          updateTotal={this.updateTotal.bind(this)}
        />
        <Counter
          increment={3}
          decrement={3}
          updateTotal={this.updateTotal.bind(this)}
        />
        <Counter
          increment={4}
          decrement={4}
          updateTotal={this.updateTotal.bind(this)}
        />
      </div>
    );
  }
}

export default App;
