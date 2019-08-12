import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { generalClassNames, createClassName } from '../utils';

class Map extends Component {
  render(){
    const { props } = this;

    const className = createClassName(
      'slds-map',
      props.className,
      generalClassNames(props),
    );

    return (
      <div className={ className }>{ props.children }</div>
    );
  }
}


export default Map;
