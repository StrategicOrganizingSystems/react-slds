import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  groupLabel: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool
};

class CheckboxGroup extends Component {
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
    const { children, groupLabel } = this.props;
    let classNames = 'slds-form-element';

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

CheckboxGroup.propTypes = propTypes;
export default CheckboxGroup;
