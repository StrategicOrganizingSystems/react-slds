import React, { Component } from 'react';

import includes from 'lodash.includes';
import map from 'lodash.map';
import { Brand  } from './enum';
import { objectValues, generalClassNames, createClassName } from './utils';

const BrandBand = props => {
  if(typeof props.brand !== 'undefined' && includes(Brand, props.brand)){

    const cName = createClassName(
      'slds-brand-band',
      `slds-brand-band_${ props.brand }`,
      props.className,
      generalClassNames(props),
    );
    return (
      <div className={ cName }>{ props.children }</div>
    );
  }
  console.warn('Brand property is required');
  return null;
};


export default BrandBand;
