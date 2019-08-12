import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { createClassName, isDefined } from './utils';

const Container = props => {
  if(props.status || props.hasText){
    const className = createClassName(
      props.hasText ? 'slds-is-relative' : '',
      'spinner_container'
    );

    return (
      <div className={className}>{ props.children }</div>
    );
  }
  return props.children;
};


const Spinner = props => {
  const className = createClassName(
    props.className,
    'slds-spinner',
    `slds-spinner_${ props.size }`,
    props.delayed ? 'slds-spinner_delayed': '',
    props.brand ? 'slds-spinner_brand': '',
    props.fixed ? 'slds-spinner_fixed': '',
    props.inverse ? 'slds-spinner_inverse': '',
  );


  const withContainer =  isDefined(props.withContainer);
  return (
    <Fragment>
      <Container status={ withContainer } hasText={ isDefined(props.text) }>
        <div role="status" className={ className }>
          <span className="slds-assistive-text">{ props.text || 'Loading' }</span>
          <div className="slds-spinner__dot-a" />
          <div className="slds-spinner__dot-b" />
        </div>
      </Container>
      {
        isDefined(props.text) ? (
          <div className={`slds-m-left_${ props.textMarginLeft } slds-text-color_weak`}>{props.text}</div>
        ) : null
      }
    </Fragment>
  );
};


const spinnerSize = [ // temp
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
];

Spinner.sizes = spinnerSize;

Spinner.defaultProps = {
  /** set the size, default is `small` */
  size: 'small',
  height: '50vh',
  textMarginLeft: 'small'
};
Spinner.propTypes = {
  size: PropTypes.oneOf(spinnerSize).isRequired,
};


export default Spinner;
