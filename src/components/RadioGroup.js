import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  groupLabel: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  sfStyle: PropTypes.string
};

class RadioGroup extends Component {
  renderAbbr() {
    if (this.props.required) {
      return <abbr className="slds-required" title="required">*</abbr>;
    }
  }

  renderError() {
    if (this.props.hasError) {
      return <div id="error" className="slds-form-element__help">This field is required</div>;
    }
  }

  render() {
    const { children, groupLabel, sfStyle } = this.props;
    let classNames = `slds-form-element ${sfStyle}`;

    if (this.props.hasError) {
      classNames = `${classNames} slds-has-error`;
    }

    return (
      <fieldset className={classNames}>
        <legend className="slds-form-element__legend slds-form-element__label">
          {this.renderAbbr()} {groupLabel}
        </legend>
        <div className="slds-form-element__control">
          {children}
        </div>
        {this.renderError()}
      </fieldset>
    );
  }
}

RadioGroup.propTypes = propTypes;
export default RadioGroup;
