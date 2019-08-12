import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

class Checkbox extends Component {
  renderCheckboxField(props) {
    const fieldObj = props.input || props;
    return <input type="checkbox" id={props.id} {...fieldObj} />;
  }

  render() {
    return (
      <span className="slds-checkbox">
        {this.renderCheckboxField(this.props)}
        <label className="slds-checkbox__label" htmlFor={this.props.id}>
          <span className="slds-checkbox_faux" />
          <span className="slds-form-element__label">{this.props.label}</span>
        </label>
      </span>
    );
  }
}

Checkbox.propTypes = propTypes;
export default Checkbox;
