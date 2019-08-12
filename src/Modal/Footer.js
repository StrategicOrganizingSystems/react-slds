import React from 'react';
import {  createClassName } from '../utils';

const Footer = ({children, isDirectional, className}) => {
  const footerClassName = createClassName(
    className,
    'slds-modal__footer',
    isDirectional ? 'slds-modal__footer_directional' : null
  );
  return (
    <footer className={ footerClassName }>{children}</footer>
  );
};



export default Footer;
