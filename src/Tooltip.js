import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, startsWith} from 'lodash';
import Svg from './components/Svg';
import { createClassName, filterEventProps } from './utils';

const Tooltip = props => {

  const events =  filterEventProps(props);
  const className = createClassName(
    'slds-popover',
    'slds-popover_tooltip',
    `slds-nubbin_${props.position}`,
    props.showPopup ? 'slds-rise-from-ground': 'slds-fall-into-ground'
  );
  return (
    <span style={ props.style  }>
      <span className="slds-form-element">
        <div className="slds-form-element__icon slds-align-middle">
          <button className="slds-button slds-button_icon slds-button slds-button_icon" aria-describedby={ props.id } title={ props.assistiveText } {...events}>
            <Svg className="slds-button__icon" variant={ props.variant }  icon={ props.icon } />
            <span className="slds-assistive-text">{ props.assistiveText }</span>
          </button>
        </div>
      </span>
      <div className={ className } role="tooltip" id={ props.id } style={ props.popupStyle }>
        <div className="slds-popover__body">{ props.children }</div>
      </div>
    </span>
  );
};

Tooltip.defaultProps = {
  style: {position: 'relative'},
  popupStyle: {position: 'absolute', top: '-100px', left: '-16px',},
  variant: 'utility',
  icon: 'info',
  id: `tooltip-${  uniqueId()}`,
  assistiveText: 'Help',
  position: 'bottom-left'
};

Tooltip.propTypes ={
  position: PropTypes.oneOf([
    'left',
    'left-top',
    'left-bottom',
    'top-left',
    'top-right',
    'right-top',
    'right-bottom',
    'bottom-left',
    'bottom-right',
  ]),

};



export default Tooltip;
