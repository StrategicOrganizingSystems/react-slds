import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import FormElement from './Element';
import { createClassName} from '../utils';
import Svg from '../Svg';


class CheckboxToggle extends Component{

  state = {
    showPopOver: null
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


  render(){
    const props =  this.props;
    const elementClassName = createClassName(
      props.className,
    );

    const { enabledText, disabledText, fieldLevelHelp, iconHelp, ...cbProps } = props;
    return (
      <Fragment>
        <FormElement className={ elementClassName }>
          <label className="slds-checkbox_toggle slds-grid">
            <span className="slds-form-element__label slds-m-bottom_none">{ props.label }</span>
            <input type="checkbox" aria-describedby={ props.id } {...cbProps}/>
            <span id={ props.id } className="slds-checkbox_faux_container" aria-live="assertive">
              <span className="slds-checkbox_faux" />
              <span className="slds-checkbox_on">{ enabledText }</span>
              <span className="slds-checkbox_off">{ disabledText }</span>
            </span>
            <span className="slds-m-left_x-small">
              { this.renderFieldLevelHelpIcon() }
            </span>
          </label>

        </FormElement>
      </Fragment>
    );
  }
}

CheckboxToggle.defaultProps = {
  id: `slds-cb-toggle-${uniqueId()}`,
  enabledText: 'Enabled',
  disabledText: 'Disabled',
  iconHelp: 'info'
};


export default CheckboxToggle;
