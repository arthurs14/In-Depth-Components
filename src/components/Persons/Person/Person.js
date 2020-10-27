import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    const { click, name, age, changed } = this.props;
    return (
      <div className={classes.Person}>
        <p onClick={click}>
          {`I'm ${name} and I am ${age} years old!`}
        </p>
        <input type="text" onChange={changed} value={name} />
      </div>
    );
  }
}

export default Person;