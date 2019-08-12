import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import FormElement from './Element';
import { createClassName, isDefined } from '../utils';

const Label = props => {
  const { id, requiredText, required } = props;
  if (props.children) {
    return (
      <label className="slds-form-element__label" htmlFor={id}>
        {required ? (
          <abbr className="slds-required" title="required">
            {requiredText}
          </abbr>
        ) : null}
        {props.children}
      </label>
    );
  }
  return null;
};

const Control = props => {
  const {
    value,
    id,
    help,
    requiredText,
    hasError,
    isStatic,
    readOnly,
    ...taProps
  } = props;

  if (isDefined(readOnly) && readOnly) {
    return (
      <div className="slds-form-element__control slds-border_bottom">
        <div className="slds-form-element__static">
          <p>{value}</p>
        </div>
      </div>
    );
  }

  const errorId = help ? `error-${id}` : null;
  const className = createClassName('slds-textarea', props.className);
  return (
    <div className="slds-form-element__control">
      <textarea
        {...taProps}
        id={id}
        className={className}
        aria-describedby={errorId}
      />
    </div>
  );
};

const Help = props => (
  <div className="slds-form-element__help" id={props.id}>
    {props.message}
  </div>
);

const Textarea = props => {
  const { label, id, requiredText, help, hasError, ...taProps } = props;
  const uid = id || `slds-textarea-${uniqueId()}`;

  const errorId = help ? `error-${uid}` : null;

  return (
    <FormElement hasError={isDefined(props.hasError) && props.hasError}>
      <Label
        id={uid}
        required={isDefined(props.required) && props.required}
        requiredText={requiredText}
      >
        {label}
      </Label>
      <Control {...props} id={uid} />
      <Help id={errorId} message={help} />
    </FormElement>
  );
};

Textarea.defaultProps = {
  requiredText: '*'
};

export default Textarea;
