import React from 'react';
/* 
1 WAY:
const WithClass = (props) => (
  <div className={props.classes}>
    {props.children}
  </div>
);
*/

// 2nd Way:
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};



export default withClass;