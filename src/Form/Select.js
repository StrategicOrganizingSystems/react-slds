import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import FormElement from './Element';
import { createClassName, removeProps, filterEventProps, replaceKeys, removePropsStartsWith} from '../utils';
import Svg from '../Svg';
import Popover from '../Popover';


export const Option = props => (
  <option {...props}>{props.children}</option>
);

class Select extends Component{


  state = {
    showPopOver: false
  }

  handlePopover = status => this.setState({showPopOver: status});

  renderFieldLevelHelpIcon(){

    const events = {
      onFocus: () => this.handlePopover(true),
      onBlur: () => this.handlePopover(false),
      onMouseLeave: () => this.handlePopover(false),
      onMouseEnter: () => this.handlePopover(true),
    };

    if(this.props.fieldLevelHelp){
      return  (
        <div className="slds-form-element__icon">
          <button aria-describedby={`pop-over-${this.props.id}`} className="slds-button slds-button_icon" {...events}>
            <Svg className="slds-button__icon" icon={ this.props.iconHelp} assistiveText="Help"/>
          </button>
          { this.renderFieldLevelHelpPopover() }
        </div>
      );
    }
    return null;
  }

  renderFieldLevelHelpPopover(){

    const PropsPopOver = this.props.fieldLevelHelp;
    let PopoverElement;
    if(React.isValidElement(PropsPopOver)){
      const newPopover = React.cloneElement(PropsPopOver);
      const newProps = {
        ...newPopover.props,
        type: 'div',
        role: 'tooltip',
        show: this.state.showPopOver,
        id: `pop-over-${this.props.id}`, // based on the button of renderFieldLevelHelpIcon
      };
      PopoverElement = React.createElement(newPopover.type, newProps);
      return PopoverElement;
    }
    
    // string
    
    return this.props.fieldLevelHelp;
  }



  renderHelp(){
    const props = this.props;

    if(props.help){
      return (
        <div className="slds-form-element__help" id={`help-${props.id}`}>{props.help}</div>
      );
    }


  }

  renderRequired(){
    const props = this.props;
    if(props.required) {
      return <abbr className="slds-required" title="required">*</abbr>;
    }
    return null;
  }

  renderLabel(){
    const props = this.props;

    if(props.label){
      return (
        <label className="slds-form-element__label"
          htmlFor={props.id}>
          {this.renderRequired()}{ props.label }</label>
      );
    }
    return null;
  }

  render(){
    const { hasError, iconHelp, fieldLevelHelp, ...defaultProps} = this.props;
    const elementClassName = createClassName(
      defaultProps.className,
      hasError ? 'slds-has-error' : '',
    );


    const controlClassName = createClassName(
      'slds-form-element__control',
    );


    const selectProps = {
      'aria-describedby': `help-${defaultProps.id}`,
      ...removePropsStartsWith(defaultProps, 'handleIcon'),
      className: createClassName( 'slds-select', defaultProps.className ),
    };

    return (
      <Fragment>
        <FormElement className={ elementClassName }>
          { this.renderLabel()  }
          { this.renderFieldLevelHelpIcon()}
          <div className={ controlClassName }>
            <div className="slds-select_container">
              <select {...selectProps}>
                { this.props.children }
              </select>
            </div>
          </div>
        </FormElement>
      </Fragment>
    );
  }
}


Select.defaultProps = {
  id: `slds-select-${uniqueId()}`,
  iconHelp: 'info',

};


export default Select;
