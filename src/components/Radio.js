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

class Radio extends Component {
  renderRadioField(props) {
    const fieldObj = props.input || props;
    return <input type="radio" id={props.id} {...fieldObj} />;
  }

  render() {
    return (
      <span className="slds-radio">
        {this.renderRadioField(this.props)}
        <label className="slds-radio__label" htmlFor={this.props.id}>
          <span className="slds-radio_faux" />
          <span className="slds-form-element__label">{this.props.label}</span>
        </label>
      </span>
    );
  }
}

Radio.propTypes = propTypes;
export default Radio;
