import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

import { objectValues, generalClassNames, createClassName } from '../utils';


class Text extends Component {
  render(){
    const { props } = this;
    const { children } = props;

    const className = createClassName(
      props.className,
      generalClassNames(props),
    );

    return (<div className={ className }>
      { children }
    </div>);

  }
}

export default Text;
