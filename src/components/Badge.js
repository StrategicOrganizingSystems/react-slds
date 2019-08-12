import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

import { objectValues, generalClassNames, createClassName } from '../utils';

const prefix = 'slds-badge';

class Badge extends Component {
  render(){
    const { props } = this;
    const { label } = props;

    const className = createClassName(
      prefix,
      props.className,
      generalClassNames(props),
      props.inverse? `${ prefix }_inverse`:''
    );

    if(label != null){
      return (
        <span className={ className }>{ label }</span>
      );
    }
    return null;
  }
}

Badge.defaultProps = {
  inverse: null
};

Badge.propTypes = {
  /** Label of Button * */
  label: PropTypes.string,
  inverse: PropTypes.bool,
};
export default Badge;
