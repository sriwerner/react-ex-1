import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    input: ''
  };

  render() {
    const chars = this.state.input.split('').map((char, index) => {
      return <CharComponent letter={char} click={() => this.deleteLetterHandler(index)} key={index}/>;
    });
    return (
      <div className="App">
        <input type="text"
          value={this.state.input}
          onChange={this.changeInputHandler}
        />
        <p>{this.state.input}</p>
        <ValidationComponent size={this.state.input.length} />
        {chars}
      </div>
    );
  }

  changeInputHandler = (evt) => {
    this.setState({ input: evt.target.value});
  }
  
  deleteLetterHandler = (index) => {
    const letters = [...this.state.input.split('')];
    letters.splice(index, 1);
    this.setState({input: letters.join('')})
  }
}

export default App;
