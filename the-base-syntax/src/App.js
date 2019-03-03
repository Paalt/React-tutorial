import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    users: [
      {
        name: 'Tim',
      },
      {
        name: 'Connor'
      },
      {
        name: 'Lisa'
      }
    ]
  }

  userNameChangedHandler = (event) => {
    this.setState({
      users: [
        {
          name: event.target.value,
        },
        {
          name: 'Connor'
        },
        {
          name: 'Lisa'
        }
      ]
    })
  }

  render() {
    const inputStyle = {
      backgroundColor: '#ede',
      boxShadow: '2px 4px #888888',
      padding: '1rem',
      marginBottom: '2rem'
    }

    return (
      <div className="App">
        <header
          style={inputStyle}
          className="page-header">
          <h1>The base syntax</h1>
        </header>
        <UserInput
          changed={this.userNameChangedHandler}
          name={this.state.users[0].name}></UserInput>
        <p>The original username: {this.state.users[0].name}</p>
        <UserOutput userName={this.state.users[0].name} userPlace="website"></UserOutput>
        <UserOutput userName={this.state.users[1].name} userPlace="harem"></UserOutput>
        <UserOutput userName={this.state.users[2].name} userPlace="cellar"></UserOutput>
      </div>
    );
  }
}

export default App;
