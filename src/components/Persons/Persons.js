import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    console.log('[Persons.js] rendering...');
    const { persons, click, changed } = this.props;

    return persons.map((person, index) => {
      return (<Person
        click={() => click(index)}
        name={person.name}
        age={person.age}
        key={index}
        changed={(event) => changed(event, person.id)}
      />
      );
    });
  }
}

export default Persons;