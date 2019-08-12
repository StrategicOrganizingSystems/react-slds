import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SpinnerSize } from '../enum';
import { objectValues, generalClassNames, createClassName } from '../utils';



class Spinner extends Component {

  render(){

    const { size } = this.props;
    const sClassName = `slds-spinner_${ this.props.size }`;
    const className = createClassName(
      'slds-spinner',
      sClassName,
      this.props.className,
      generalClassNames(this.props),
    );

    return (
      <div role="status" className={ className }>
        <span className="slds-assistive-text">Loading</span>
        <div className="slds-spinner__dot-a" />
        <div className="slds-spinner__dot-b" />
      </div>
    );
  }

}

const spinnerSize = [ // temp
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
];

Spinner.sizes = spinnerSize;

Spinner.defaultProps = {
  size: 'small',
};
Spinner.propTypes = {
  /** set the size, default is `small` */
  size: PropTypes.oneOf(spinnerSize).isRequired,
};


export default Spinner;
