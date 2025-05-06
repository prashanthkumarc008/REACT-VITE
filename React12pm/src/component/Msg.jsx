import React, { Component } from "react";

class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "Hello"
    };
  }

  GM = () => {
    this.setState({ val: "GOOD MORNING" });
  };

  GA = () => {
    this.setState({ val: "GOOD AFTERNOON" });
  };

  GE = () => {
    this.setState({ val: "GOOD EVENING" });
  };

  GN = () => {
    this.setState({ val: "GOOD NIGHT" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.val}</h1>
        <div style={{ display: "flex", columnGap: "50px" }}>
          <button onClick={this.GM}>GM</button>
          <button onClick={this.GA}>GA</button>
          <button onClick={this.GE}>GE</button>
          <button onClick={this.GN}>GN</button>
        </div>
      </div>
    );
  }
}

export default Msg;