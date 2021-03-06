import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = ({ showPersons, personsLength, toggle, title }) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request in here
    toggleBtnRef.current.click();
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
      <button ref={toggleBtnRef} className={btnClass} onClick={toggle}>Toggle Persons</button>
      {<button onClick={authContext.login}>Log In</button>}
    </div>
  );
};

export default React.memo(Cockpit);