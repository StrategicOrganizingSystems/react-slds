import React, { Component } from 'react';
import uniqueId from 'lodash.uniqueid';
import { generalClassNames,createClassName } from '../utils';


class Select extends Component {
  constructor(props){
  	super(props);
  	this.handleChange = this.handleChange.bind(this);

    let dv  = this.props.defaultValue;

    if(typeof dv === 'number'){
      dv = dv.toString();
    }
    this.state = {
      value: dv  || ''
    };
  }

  handleChange(e){
    // console.log();
    if(this.props.handleChange){
      const value = e.target.value;
      this.props.handleChange(e);
      this.setState({
        value
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.defaultValue){
      this.setState({
        value: nextProps.defaultValue
      });
    }
  }

  renderAbbr(){
    if(this.props.required){
      return (<abbr className="slds-required" title="required">*</abbr>);
    }
    return null;
  }

  renderOptions(){
    const { options, value } = this.props;

    if(options != null){
      return options.map((opt, i) =>{
        let v =  opt.value;
        if(typeof v === 'number'){
          v = v.toString();
        }

        return (
          <option
            key={ i }
            value={ v }>{ opt.text }</option>
        );
      });
    }
    return null;
  }

  renderHelp(uid){
    const { showError, errorMessage } = this.props;
    if( errorMessage ) {
      return (
        <div className="slds-form-element__help"
          id={ `error-${  uid}` }>{ errorMessage}</div>
      );
    }
    return null;
  }


  renderLabel(idName){
    const { label } = this.props;
    if( label ){
      return (
        <label className="slds-form-element__label" htmlFor={ idName }>{ label }</label>
      );
    }
    return null;
  }

  render(){

    // console.log(this.props);
    const { label, required, showError,disabled, multiple,
      className } = this.props;

    const { value } = this.state;

    const uid =  uniqueId();
    const idName = `select-id-${  uid}`;

    const formClassName = createClassName(
      'slds-form-element',
      className,
      generalClassNames(this.props),
      showError ? 'slds-has-error': null,
    );

    const ariaDescribedBy = showError ? `error-${  uid}` : null;

    return(
      <div className={ formClassName }>
        { this.renderAbbr() }
        { this.renderLabel(idName) }

        <div className="slds-form-element__control">
          <div className="slds-select_container">
            <select
              value={ value }
              className="slds-select"
              id={ idName }
              required={ required || null }
              disabled={ disabled || null }
              multiple={ multiple || null }
              aria-describedby={ ariaDescribedBy }
              onChange={ this.handleChange }>
              { this.renderOptions() }
            </select>
          </div>
        </div>
        { this.renderHelp(uid) }
      </div>
    );
  }

}

export default Select;
