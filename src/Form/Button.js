import React from 'react';
import PropTypes from 'prop-types';
import Svg from '../Svg';
import { createClassName } from '../utils';

const Icon = props => {

  if(props.icon) {
    const className = createClassName(
      'slds-button__icon',
      `slds-button__icon_${props.position}`
    );
    return <Svg className={ className } icon={ props.icon }/>;
  }
  return null;
};


const Button = props => {
  const { theme, leftIcon, rightIcon , ...btnProps} = props;
  const className = createClassName(
    'slds-button',
    theme ? `slds-button_${theme}` : '',
    props.className
  );
  return (
    <button {...btnProps} className={className} >
      <Icon position="left" icon={ leftIcon }/>
      {props.children}
      <Icon position="right" icon={ rightIcon }/>
    </button>);
};


export default Button;
