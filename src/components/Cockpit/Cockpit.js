import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = ({ showPersons, persons, toggle }) => {
  let assignedClasses = [];
  let btnClass = '';


  if (showPersons) {
    btnClass = classes.Red;
  }

  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={toggle}>Toggle Persons</button>
    </div>
  );
};

export default Cockpit;