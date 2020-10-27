import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor')
    this.state = {
      persons: [
        { id: 1, name: 'Jisoo', age: 24 },
        { id: 2, name: 'Jennie', age: 23 },
        { id: 3, name: 'Rose', age: 22 },
        { id: 4, name: 'Lisa', age: 22 },
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStatesFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />;
    }

    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}>
          Remove Cockpit
        </button>
        {
          this.state.showCockpit ? <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonsHandler}
          /> : null
        }
        {persons}
      </WithClass>
    );
  }
}

export default App;
