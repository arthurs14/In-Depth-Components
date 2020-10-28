import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import withClass from '../../../hoc/withClass';
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

// Helps to know what the type of data the props are bringing (development purpose)
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);