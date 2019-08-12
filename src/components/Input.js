import React, { Component } from 'react';
import PropTypes from 'prop-types';

import uniqueId from 'lodash.uniqueid';


class Input extends Component {
  constructor(props){
  	super(props);

    this.handleChange =  this.handleChange.bind(this);
    this.state =  {
      inputValue:  this.props.value || ''
    };
  }

  handleChange(e){

    const { name } = this.props;

    const value =  e.target.value;
    this.setState({
      inputValue: value
    });

    if(this.props.handleChange){
      this.props.handleChange(e);
    }
  }

  renderAbbr(){
    if(this.props.required){
      return (<abbr className="slds-required" title="required">*</abbr>);
    }
    return null;
  }

  renderError(){
    const { showError, errorMessage } = this.props;
    if(showError){
      return (
        <div className="slds-form-element__help">{ errorMessage }</div>
      );
    }
    return null;
  }

  renderLabel(id){
    const { label, isStatic } = this.props;


    if(label && label !== null) {
      if(isStatic){
        return (
          <span className="slds-form-element__label">
            { label }
          </span>
        );
      }

      return (
        <label className="slds-form-element__label"
          htmlFor={ id }>
          { this.renderAbbr() }
          { label }</label>
      );
    }

    return null;

  }

  renderInput(id){
    const {  placeHolder, required, disabled,
      showError, readOnly, isStatic, name } = this.props;

    const  value = this.state.inputValue;
    if(isStatic){
      return (
        <span className="slds-form-element__static">{ value }</span>
      );
    }

    return (
      <input type="text"
        name={ name }
        id={ id }
        className="slds-input"
        value={ value }
        placeholder={ placeHolder }
        disabled={ disabled }
        required={ required }
        readOnly={ readOnly }
        aria-describedby={ showError? 'error-message' : ''}
        onChange={ this.handleChange } />
    );

  }

  render(){
    const id = `text-input-id-${  uniqueId()}`;

    return(
      <div className="slds-form-element">
        { this.renderLabel(id) }
        <div className="slds-form-element__control">
          { this.renderInput(id) }
        </div>
        { this.renderError() }
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      inputValue: nextProps.value
    });
  }
}

export default Input;

Input.defaultProps = {
  disabled: null,
  placeHolder: null,
  readOnly: null,
  required: null,
  value: '',
};

Input.propTypes = {
  ariaDescribedby: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  isStatic: PropTypes.bool,
};
