import React from 'react';
import PropTypes from 'prop-types';

import { createClassName } from '../utils';


export const Control = props => {
  const className = createClassName(
    props.className,
    'slds-form-element__control',
  );
  return (
    <div className={className}>{ props.children }</div>
  );
};

const Form = props => {
  const className = createClassName(
    props.className,
    'slds-form',
    props.layout ? `slds-form_${props.layout}` : ''
  );
  return (
    <div className={className}>{ props.children }</div>
  );
};
Form.defaultProps = {
  layout: 'stacked'
};

const LAYOUT = [
  'stacked',
  'inline',
  'horizontal',
  'compound',
];

Form.propTypes = {
  layout: PropTypes.oneOf(LAYOUT)
};

export default Form;
