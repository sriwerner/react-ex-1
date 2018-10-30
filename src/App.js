import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

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
        <ValidationComponent size={this.state.input.length} />
        <CharComponent />
      </div>
    );
  }

  changeInputHandler(evt) {
    this.setState({ input: evt.target.value });
  }
}

export default App;
