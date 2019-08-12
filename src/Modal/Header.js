import React from 'react';
import {  createClassName } from '../utils';

const Header = ({className, children}) => {
  const cName = createClassName(
    className,
  );
  return (
    <div className={ cName }>{children}</div>
  );
};

export default Header;
