import React from 'react';
import PropTypes from 'prop-types';

const NotificationBubble = props => {
  return (
    <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
      {props.children}
      {
        !isNaN(Number(props.count)) && Number(props.count)
          ? <span aria-hidden="true" className="slds-notification-badge slds-incoming-notification slds-show-notification">{props.count}</span>
          : null
      }
    </div>
  );
}

NotificationBubble.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default NotificationBubble;