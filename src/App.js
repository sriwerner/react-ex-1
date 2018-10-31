import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    input: "",
    size: 0
  };

  render() {
    let chars = this.state.input.split("").map(char => {
      return <CharComponent letter={char} />;
    });
    return (
      <div className="App">
        <input
          value={this.state.input}
          onChange={this.changeInputHandler.bind(this)}
        />
        <p>{this.state.input}</p>
        <ValidationComponent size={this.state.size} />
        {chars}
      </div>
    );
  }

  changeInputHandler(evt) {
    this.setState({ input: evt.target.value, size: evt.target.value.length });
  }
}

export default App;
