import React, { Component } from 'react';
import Validation from './Validation/Validation';
import CharBox from './CharBox/CharBox';
import './App.css';

class App extends Component {
  state = {
    str: '',
    strLenght: 0,
  }

  strHandler = (event) => {
    const inputText = event.target.value;
    this.setState({str: inputText})
    this.setState({strLenght: inputText.length});
  }

  deleteCharHandler = (charIndex) => {
    const str = this.state.str.split('');
    str.splice(charIndex, 1);
    const updatedStr = str.join('');
    this.setState({str: updatedStr});
  }

  render() {
    const strList = this.state.str.split('').map((cha, index) => {
      return <CharBox
        click={() => this.deleteCharHandler(index)}
        char={cha}
        key={index} />
    });

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.str}
          onChange={(event) => this.strHandler(event)} />
        <p>The length of the input string is: {this.state.inputStringLength}</p>
        <Validation strLength={this.state.strLenght} />
        {strList}
      </div>
    );
  }
}

export default App;
