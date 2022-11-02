import React, { Component } from "react";
import './../style.css';
class Lesson1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <div className="but">
          <h1 className="bir">{this.state.count}</h1>
          <button onClick={(e) => this.decrement(e)}>-</button>
          <button onClick={(e) => this.increment(e)}>+</button>
          <button onClick={(e) => this.reset(e)}>Reset</button>
        </div>
      </>
    );
  }
}

export default Lesson1;
