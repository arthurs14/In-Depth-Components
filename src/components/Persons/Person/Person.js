import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    const { click, name, age, changed } = this.props;
    return (
      // <div className={classes.Person}>
      <Auxiliary>
        <p onClick={click}>
          {`I'm ${name} and I am ${age} years old!`}
        </p>
        <input type="text" onChange={changed} value={name} />
      </Auxiliary>
      // </div>
    );
  }
}

export default Person;