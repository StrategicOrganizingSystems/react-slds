import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  groupLabel: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  sfStyle: PropTypes.string
};

class RxFormRadioGroup extends Component {

  renderAbbr() {
    if (this.props.required) {
      return <abbr className="slds-required" title="required">*</abbr>;
    }
  }

  renderError() {
    return this.props.meta.touched
      ? <div id="error" className="slds-form-element__help" style={{clear: 'both'}}>{this.props.meta.error}</div>
      : null;
  }

  renderLabel(groupLabel) {
    if (this.props.orientation === 'vertical') {
      return (
        <legend className="slds-form-element__legend slds-form-element__label">
          {this.renderAbbr()} {groupLabel}
        </legend>
      );
    }

    return (
      <legend className="slds-form-element__legend slds-float_left">
        {this.renderAbbr()} {groupLabel}
      </legend>
    );
  }

  render() {
    const { groupLabel, input, meta, options, orientation, sfStyle, } = this.props;
    let classNames = `slds-form-element ${sfStyle}`;
    let buttonStack = 'slds-form-element__control slds-grid slds-float_right';

    if (meta.touched && !meta.valid) {
      classNames = `${classNames} slds-has-error`;
    }

    if (orientation === 'vertical') {
      buttonStack = 'slds-form-element__control';
    }

    return (
      <fieldset className={classNames}>
        {this.renderLabel(groupLabel)}
        <div className={`${buttonStack}`}>
          {options.map((option, idx) => (
            <span className="slds-radio" key={idx}>
              <input type="radio" {...input} value={option.value} id={`mw-${option.id}`} checked={this.props.selected === option.value}/>
              <label className="slds-radio__label" htmlFor={`mw-${option.id}`}>
                <span className="slds-radio_faux" />
                <span className="slds-form-element__label">{option.label}</span>
              </label>
            </span>
          ))}
        </div>
        {this.renderError()}
      </fieldset>
    );
  }
}

RxFormRadioGroup.propTypes = propTypes;
export default RxFormRadioGroup;
