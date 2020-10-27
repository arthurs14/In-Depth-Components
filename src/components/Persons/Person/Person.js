import React, { Component, Fragment } from 'react';
//import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
//import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    const { click, name, age, changed } = this.props;
    return (
      // <div className={classes.Person}>
      <Fragment>
        <p onClick={click}>
          {`I'm ${name} and I am ${age} years old!`}
        </p>
        <input type="text" onChange={changed} value={name} />
      </Fragment>
      // </div>
    );
  }
}

export default Person;