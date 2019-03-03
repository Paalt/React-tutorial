//import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '0aajkld', name: 'Ole', age: 29 },
      { id: '1balsdj', name: 'Dole', age: 23 },
      { id: '2casdam', name: 'Doffen', age: 33 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personsIndex) => {
    // conts persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: 'solid 1px blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>Sure...</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
  }
}

export default App;


// WITH HOOKS:
// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Ole', age: 29 },
//       { name: 'Dole', age: 23 },
//       { name: 'Doffen', age: 33 }
//     ],
//   });
//
//   const [otherState, setOtherState] = useState('Some other value');
//
//   console.log(personsState, otherState);
//
//   const switchNameHandler = () => {
//     // console.log('Fire');
//     // Dont do this: this.state.persons[0].name = 'Daffy';
//     setPersonsState({
//       persons: [
//         { name: 'Daffy', age: 29 },
//         { name: 'Dole', age: 23 },
//         { name: 'Doffen', age: 45 }
//       ],
//     })
//   }
//
//   return (
//     <div className="App">
//       <h1>Hi I'm a React App</h1>
//       <p>Sure...</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age} />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}>
//         My hobbies: Chess
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}/>
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
// }
//
// export default app;
