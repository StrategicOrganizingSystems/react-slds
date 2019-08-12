import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { objectValues, generalClassNames, createClassName } from '../utils';


class Grid extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { props } = this;
    const { label } = props;

    const className = createClassName(
      'slds-grid',
      props.isWrap ? 'slds-wrap': null,
      props.className,
      generalClassNames(props),
    );
    return (
      <div className={ className }>
        { this.props.children }
      </div>
    );
  }
}


export default Grid;
