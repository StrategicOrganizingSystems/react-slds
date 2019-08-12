import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string,
  isStatic: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
};

class RxFormInput extends Component {
  renderAbbr() {
    if (this.props.required) {
      return <abbr className="slds-required" title="required">*</abbr>;
    }
  }
  
  renderError() {
    return this.props.meta.touched
      ? <div id="error" className="slds-form-element__help">{this.props.meta.error}</div>
      : null;
  }
  
  renderInputField() {
    return <input {...this.props.input} type={this.props.type} id={this.props.input.name} className="slds-input" />;
  }
  
  renderLabel() {
    return (
      <label className="slds-form-element__label" htmlFor={this.props.input.name}>
        {this.renderAbbr(this.props.required)} {this.props.label}
      </label>
    );
  }

  renderStatic() {
    return <span className="slds-form-element__static">{this.props.isStatic}</span>;
  }

  render() {
    const {isStatic, meta: { touched, valid }} = this.props;
    let classNames = 'slds-form-element';

    if (touched && !valid) {
      classNames = `${classNames} slds-has-error`;
    }

    return (
      <div className={classNames}>
        {this.renderLabel()}
        <div className="slds-form-element__control">
          {isStatic ? this.renderStatic() : this.renderInputField()}
        </div>
        {valid ? null : this.renderError()}
      </div>
    );
  }
}

RxFormInput.propTypes = propTypes;
export default RxFormInput;