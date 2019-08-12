import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  options: PropTypes.array.isRequired
};

class RxFormSelect extends Component {

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

  renderLabel() {
    return (
      <label className="slds-form-element__label" htmlFor={this.props.input.name}>
        {this.renderAbbr(this.props.required)} {this.props.label}
      </label>
    );
  }

  renderSelectField() {
    return (
      <select className="slds-select" {...this.props.input}>
        <option label="-- Select one --" />
        {this.props.options.map(item => <option value={item.value} key={item.value}>{item.text}</option>)}
      </select>
    );
  }

  render() {
    const {meta: {touched, valid}} = this.props;
    let classNames = 'slds-form-element';

    if (touched && !valid) {
      classNames = `${classNames} slds-has-error`;
    }

    return (
      <div className={classNames}>
        {this.renderLabel()}
        <div className="slds-form-element__control">
          <div className="slds-select_container">
            {this.renderSelectField()}
          </div>
        </div>
        {valid ? null : this.renderError()}
      </div>
    );
  }
}

RxFormSelect.propTypes = propTypes;
export default RxFormSelect;
