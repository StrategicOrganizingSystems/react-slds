import React, { Component } from 'react';
import { generalClassNames, createClassName } from '../utils';

const Div = props => (
  <div className={createClassName(props.className, generalClassNames(props))}>
    {props.children}
  </div>
);

export default Div;
