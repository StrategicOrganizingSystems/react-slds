import React from 'react';
import {uniqueId} from 'lodash';

const Radio = ({ id, label, ...radioProps }) => {
  id = id || `slds-radio-${ uniqueId() }`;
  return (
    <span className="slds-radio">
      <input type="radio" id={ id } { ...radioProps }/>
      <label className="slds-radio__label" htmlFor={ id  }>
        <span className="slds-radio_faux" />
        <span className="slds-form-element__label">{ label }</span>
      </label>
    </span>
  );};

export default Radio;
