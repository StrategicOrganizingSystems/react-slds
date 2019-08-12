import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { uniqueId } from 'lodash';
import Svg from './components/Svg';
import Icon from './components/Icon';

const Notification = props => (
  <div className="slds-notification-container">{
    React.Children.toArray(props.children).filter(child => child.type === Item).map(child => (
      <Item key={child.key} index={ child.key } {...child.props}/>
    ))
  }
  </div>
);

export const Item = props => (
  <Fragment>
    { props.index === '.0' ?
      ( <div aria-live="assertive" aria-atomic="true" className="slds-assistive-text">{props.type} notification: {props.title}</div> ) : null
    }
    <section className="slds-notification" role="dialog" aria-labelledby={`noti-${props.id}`} aria-describedby={`dialog-body-${props.id}`}>
      <div className="slds-notification__body" id={`dialog-body-${props.id}`}>
        <a className="slds-notification__target slds-media" href="javascript:void(0);">
          <span className="slds-icon_container slds-icon-standard-{props.type}  slds-media__figure" title={props.type} >
            <Icon variant="standard" icon={props.type}  />
          </span>
          <div className="slds-media__body">
            <h2 className="slds-text-heading--small slds-m-bottom--xx-small" id={`noti-${props.id}`}>
              <span className="slds-assistive-text">{props.type} notification:</span>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </a>
        <button className="slds-button slds-button_icon slds-button--icon-container slds-notification__close" title={`Dismiss ${props.title} notification`} onClick={ props.onClose}>
          <Svg  className="slds-button__icon" variant="utility" icon="close"/>
          <span className="slds-assistive-text">Dismiss {props.title} notification</span>
        </button>
      </div>
    </section>
  </Fragment>

);

export default Notification;


Item.propTypes = {
  type: PropTypes.oneOf(['event', 'task']),
  title: PropTypes.string.isRequired,

};

Item.defaultProps = {
  type: 'event',
  id: `notification-${uniqueId()}`,
  onClose: ()=>{}
};
