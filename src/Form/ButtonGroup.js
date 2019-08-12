import React from 'react';

const ButtonGroup = props => (
  <div role="group" className="slds-button-group" {...props} >
    { props.children }
  </div>
);

export default ButtonGroup;
