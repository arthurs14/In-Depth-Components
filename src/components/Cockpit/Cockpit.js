import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = ({ showPersons, personsLength, toggle, title }) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request in here
    setTimeout(() => {
      alert('Saved Data to cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanupwork in useEffect');
    };
    // passing data in an array will allow it to figure to re-render or not
    // empty array will run it once
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanupwork in 2nd useEffect');
    };
  });

  let assignedClasses = [];
  let btnClass = '';


  if (showPersons) {
    btnClass = classes.Red;
  }

  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (personsLength <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={toggle}>Toggle Persons</button>
    </div>
  );
};

export default React.memo(Cockpit);