import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { objectValues, generalClassNames, createClassName } from '../utils';

class Col extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { props } = this;

    const className = createClassName(
      'slds-col',
      props.className,
      generalClassNames(props),
    );

    return (<div className={ className }>
      { props.children }
    </div>);
  }
}

export default Col;
