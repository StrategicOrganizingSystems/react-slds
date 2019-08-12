import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { filterComponent, filterEventProps, createClassName, removeProps } from '../utils';
import FormElement from './Element';
import Svg from '../Svg';

const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

class Checkbox extends Component {

  state = {
    showPopOver: false
  }

  uid = `slds-cb-${uniqueId()}`

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
          <button aria-describedby={`pop-over-${this.props.id || this.uid}`} className="slds-button slds-button_icon" {...events}>
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
        id: `pop-over-${this.props.id || this.uid}`, // based on the button of renderFieldLevelHelpIcon
      };
      PopoverElement = React.createElement(newPopover.type, newProps);
      return PopoverElement;
    }
    
    // string
    
    return this.props.fieldLevelHelp;
  }


  renderCheckboxField(props) {
    const events =  filterEventProps(props);

    const cbProps = removeProps(props, [...Object.keys(events), 'children', 'iconHelp', 'fieldLevelHelp']); // temp
    return <input type="checkbox" {...cbProps} {...events} />;
  }

  render() {
    const props = this.props;
    const elementClassName = createClassName(
      props.className,
    );

    return (
      <span className="slds-checkbox">
        {this.renderCheckboxField(this.props)}
        <label className="slds-checkbox__label" htmlFor={this.props.id || this.uid}>
          <span className="slds-checkbox_faux" />
          <span className="slds-form-element__label">{this.props.label}</span>
          <span className="slds-form-element__label">{ this.renderFieldLevelHelpIcon()}</span>
        </label>
      </span>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = {
  iconHelp: 'info'
};

export default Checkbox;
