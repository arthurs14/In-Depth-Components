import React from 'react';
import classes from './Person.module.css';

const Person = ({ click, name, age, changed }) => {
  return (
    <div className={classes.Person}>
      <p onClick={click}>
        {`I'm ${name} and I am ${age} years old!`}
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Person;