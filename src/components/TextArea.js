import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  required: PropTypes.bool
};

class TextArea extends Component {
  renderAbbr() {
    if (this.props.required) {
      return <abbr className="slds-required" title="required">*</abbr>;
    }
  }

  renderErrorMessage() {
    if (this.props.hasError) {
      return <div id="hasError" className="slds-form-element__help">This field is required</div>;
    }
  }

  renderTextArea() {
    const fieldObj = this.props.input || this.props;
    return (
      <textarea
        id={this.props.id}
        className="slds-textarea"
        placeholder={this.props.placeholder || 'Write something here'}
        {...fieldObj}
      />
    );
  }

  render() {
    let classNames = ['slds-form-element'];

    if (this.props.hasError) {
      classNames = [...classNames, ' slds-has-error'];
    }

    return (
      <div className={classNames}>
        <label className="slds-form-element__label text-wrap" htmlFor={this.props.id}>
          {this.renderAbbr()} {this.props.label || null}
        </label>
        <div className="slds-form-element__control">
          {this.renderTextArea()}
        </div>
        {this.renderErrorMessage()}
      </div>
    );
  }
}

TextArea.propTypes = propTypes;
export default TextArea;
