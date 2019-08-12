import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

import { ButtonTheme } from '../enum';
import { objectValues, generalClassNames, createClassName } from '../utils';


class Button extends Component {

  constructor(props){
 	super(props);
 	this.handleClick =  this.handleClick.bind(this);

  }

  handleClick(e){
    if(this.props.handleClick){
      this.props.handleClick(e);
    }
  }

  renderSVG(){
    const {buttonIcon, iconPosition, iconSize, variant, icon } = this.props;

    const svgClass = createClassName(
      'slds-button__icon',
      !buttonIcon ? `slds-button__icon_${ iconPosition}` : '',
      iconSize || ''
    );

    // console.log('soty', this.props)
    return (
      <Svg key="svg"
        className={ svgClass }
        variant={ variant }
        icon={ icon }
      />
    );
  }

  renderIcon(){
    const { buttonIcon, showIcon, iconPosition, label } = this.props;

    if(buttonIcon){
      return this.renderSVG();
    }

    if(showIcon){
      const elems = [
        <span key="label">{  label }</span>,
        this.renderSVG(),
      ];

      if(iconPosition === 'right') {
        return elems;
      } 
      return elems.reverse();
      
    }

    return null;
  }



  render(){
    const props = this.props;
    let { buttonIcon, showIcon, theme, label } = props;


    const className = createClassName(
      'slds-button',
      buttonIcon ? 'slds-button_icon': '',
      props.className,
      generalClassNames(props),
      theme ? `slds-button_${ theme }`:''
    );



    if(buttonIcon  !== null){
      showIcon= true;
    }


    const buttonProps = {
      className,
      onClick: this.handleClick,
      disabled: this.props.disabled || null,
      type: this.props.type
    };

    return (
      <button {...buttonProps} aria-pressed={ this.props.selected ? 'true' : null }>
        { this.renderIcon() }
        { !showIcon ? (label)  : '' }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: null,
  iconPosition: 'left',
  buttonIcon: null,
  selected: null
};
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconSize: PropTypes.string,
  label: PropTypes.string,
  showIcon: PropTypes.bool,
  theme: PropTypes.oneOf([...objectValues(ButtonTheme)]),
  handleClick: PropTypes.func,
};

export default Button;
