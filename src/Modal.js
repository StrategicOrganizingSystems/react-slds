import React, { Fragment } from 'react';
import { uniqueId } from 'lodash';
import Svg from './Svg';

import {  createClassName } from './utils';

;


const id = `id-${ uniqueId() }`;

export const Header = ({className, children, ...props}) => (
  <div className={ className } id={ `modal-heading-${id}` } {...props}>{children}</div>
);

export const Tagline = ({children, ...props}) => (
  <p className="slds-m-top_x-small" {...props}>{children}</p>
);

export const Content = ({ children, ...props }) => (
  <div className="slds-modal__content slds-p-around_medium" id={`modal-content-${id}`} { ...props }>
    { children }
  </div>
);


export const Footer = ({children, isDirectional, className, ...props}) => {
  const footerClassName = createClassName(
    className,
    'slds-modal__footer',
    isDirectional ? 'slds-modal__footer_directional' : ''
  );
  return (
    <footer className={ footerClassName } { ...props }>{children}</footer>
  );
};


const Modal = props => {


  const { children, containerStyle, size, hide,  onClose, onClickEscape, onClickEnter, ...modalProps} = props;

  if(hide){
    return null;
  }

  const contentAndFooter = React.Children.toArray(children).filter(child => child.type == Content || child.type == Footer);
  const headerAndTagline = React.Children.toArray(children).filter(child => child.type == Header || child.type == Tagline);
  const className = createClassName(
    props.className,
    size ? `slds-modal_${ props.size }` : '',
  );

  const headerClassName = createClassName(
    'slds-modal__header',
    headerAndTagline.length === 0 ? 'slds-modal__header_empty': '',
  );

  const onKeyUp = e => {
    switch (e.keyCode) {
    case 27: // Escape Key
      onClickEscape(e) ;
      break;
    case 13: // Enter Key
      onClickEnter(e);
      break;
    }
  };

  return (
    <div {...modalProps} className={ className } >
      <section className="slds-modal slds-fade-in-open" role="dialog" tabIndex="-1"  onKeyUp={ onKeyUp }
        aria-labelledby={ `modal-heading-${id}` } aria-modal="true" aria-describedby={ `modal-content-${id}` }>
        <div className="slds-modal__container" style={ containerStyle }>
          <header className={ headerClassName }>
            <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close" onClick={ onClose }>
              <Svg className="slds-button__icon slds-button__icon_large" variant="utility" icon="close"/>
            </button>
            {  headerAndTagline }
          </header>
          { contentAndFooter }
        </div>
      </section>
      <div className="slds-backdrop slds-backdrop_open" />
    </div>
  );

};

Modal.defaultProps = {
  onClose: ()=>{},
  onClickEscape: ()=>{},
  onClickEnter: ()=>{},
  containerStyle: null,
  hide: false
};


export default Modal;
