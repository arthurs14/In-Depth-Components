import React from 'react';
import Person from './Person/Person';

const Persons = ({ persons, click, changed }) => {
  console.log('[Persons.js] rendering...')
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
};

export default Persons;