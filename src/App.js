import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Char from './Char/Char.js';
import Validation from './Validation/Validation.js'


export class App extends Component {

  state = {
    textInput: ''
  }


  onChange(event) {
    this.setState({textInput:event.target.value});
    console.log(this.state.textInput)
    this.norm = event.target.value
  }

  deleteChar(index) {
    const arr = [...this.state.textInput.split('')];
    arr.splice(index, 1)
    console.log(arr)
    this.setState({textInput: arr.join('')})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.onChange(event)}></input>
        <Validation text={this.state.textInput}></Validation>

        {this.state.textInput.split('').map((char, index) => {
          return <Char 
          char = {char}
          onClick = {(event) => this.deleteChar(index)}
          key={index}></Char>
          })
        }
      </div>
    );
  }
}

export default App;
