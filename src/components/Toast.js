import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import Svg from './Svg';
import { objectValues, generalClassNames, createClassName } from '../utils';

let timer;
class Toast extends Component {
  constructor(props){
  	super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose(){

    if(this.props.onClose){
      console.log('onClose');
      this.props.onClose();
    }
  }


  componentWillUnmount() {
    clearTimeout(timer);
  }

  renderInfo() {
    if(this.props.type ){
      return (
        <span className="slds-assistive-text">{ this.props.type }</span>
      );
    }
    return null;
  }

  renderIcon(){ // add description
    return (
      <span  className="slds-icon_container slds-icon-utility-info slds-m-right_small slds-no-flex slds-align-top">
        <Svg className="slds-icon slds-icon_small" variant="utility" icon={ this.props.type}/>
      </span>
    );
  }

  renderContent() {
    if(this.props.children ){
      return (
        <div className="slds-notify__content">
          { this.props.children }
        </div>
      );
    }
    return null;
  }

  renderClose(){ // convert to button icon component

    return (
      <button className="slds-button slds-button_icon slds-notify__close slds-button_icon-inverse" title="Close" onClick={ this.onClose }>
        <Svg className="slds-button__icon slds-button__icon_large" variant="utility" icon="close"/>
        <span className="slds-assistive-text">Close</span>
      </button>
    );
  }

  render(){

    const { props } = this;
    const { label, type, isFixed, isAbsolute, isRelative, isStatic, display } = props;


    const className = createClassName(
      'slds-notify_container',
      display ? 'slds-show' : 'slds-hide',
      !isFixed && !isAbsolute && !isStatic ? 'slds-is-relative' : null,
      props.className,
      generalClassNames(props),
    );

    const alertClass = `slds-notify slds-notify_toast slds-theme_${ type }`;
    return (
      <div className={ className } >
        <div className={ alertClass } role="alert">
          { this.renderInfo() }
          { this.renderIcon() }
          { this.renderContent() }
          { this.renderClose() }
        </div>
      </div>
    );

  }

  componentDidMount() {
    if(this.props.autoClose !== null){
      const dis = this;
      timer = setTimeout(function() {
        console.log(this);
        console.log(dis);
        dis.onClose();

      }, dis.autoClose);
    }
  }


}

Toast.defaultProps = {
  display: true,
  type: 'info',  // info, warning, success, error
  autoClose: null
};

Toast.propTypes = {
  /**  Let the user know what type of notification it is */
  type: PropTypes.oneOf([
    'info', 'warning', 'success', 'error'
  ]),
  /** Content */
  children: PropTypes.any,
};
export default Toast;
