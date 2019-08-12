import React from 'react';
import PropTypes from 'prop-types';

import { createClassName } from '../utils';

const Element = props => {
  const className = createClassName(
    props.className,
    'slds-form-element',
    props.hasError ? 'slds-has-error'  : null,
  );
  return (
    <div className={className}>{ props.children }</div>
  );
};
Element.defaultProps = {
  layout: 'stacked',
};

Element.propTypes = {
  layout: PropTypes.oneOf([
    'stacked',
    'horizontal',
    'compound',
  ])
};


export default Element;
