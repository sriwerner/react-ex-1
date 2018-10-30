import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="App">
        <input
          value={this.state.input}
          onChange={this.changeInputHandler.bind(this)}
        />
        <p>{this.state.input}</p>
      </div>
    );
  }

  changeInputHandler(evt) {
    this.setState({ input: evt.target.value });
  }
}

export default App;
