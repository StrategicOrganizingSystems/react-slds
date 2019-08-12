import React, { Component } from 'react';
import Svg from '../components/Svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { objectValues, generalClassNames, createClassName } from '../utils';

;


class Modal extends Component  {

  renderHeader() {

    const children = this.props.children.filter(child => child.type == Header);
    return (
      <header className="slds-modal__header">
        <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close" onClick={ this.props.onClose }>
          <Svg  className="slds-button__icon slds-button__icon_large" variant="utility" icon="close"/>
          <span className="slds-assistive-text">Close</span>
        </button>
        {  children }
      </header>
    );}

  render(){

    const children = this.props.children.filter(child => child.type == Content || child.type == Footer);

    const className = createClassName(
      this.props.className
    );
    const style = this.props.style || {
      height: '640px'
    };
    return (
      <div className={ className } style={ style }>
        <section className="slds-modal slds-fade-in-open" role="dialog" tabIndex="-1"
          aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1">
          <div className="slds-modal__container" style={ this.props.containerStyle || null}>
            { this.renderHeader() }
            { children }
          </div>
        </section>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    );
  }
}

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;



Modal.propTypes = {
  children (props, propName, componentName) {
    const prop = props[propName];
    let error = null;
    React.Children.forEach(prop, function (child) {
      const childTypes = [
        Header,
        Content,
        Footer
      ];
      if (!childTypes.includes(child.type)) {
        error = new Error(`\`${  componentName  }\` children should be of type \`Header\`, \`Content\` or \`Footer\`.`);
      }
    });
    return error;
  }
};

export default Modal;
