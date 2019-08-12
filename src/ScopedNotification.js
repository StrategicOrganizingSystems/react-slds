import React from 'react';
import {startCase, camelCase} from 'lodash';
import Svg from './components/Svg';
import { createClassName } from './utils';

const Icon = props => {
  if(props.variant !== '' || props.icon !== ''){
    const assText = props.assistiveText ||  startCase(camelCase(props.icon));
    const className = createClassName(
      'slds-icon',
      'slds-icon_small',
      props.theme !== 'dark' && props.variant === 'utility'?'slds-icon-text-default': '',
    );
    return (
      <span className={ `slds-icon_container slds-icon-${props.variant}-${props.icon}` } title="information">
        <Svg className={ className } variant={ props.variant }  icon={ props.icon } />
        <span className="slds-assistive-text">{ assText }</span>
      </span>
    );
  }
  return null;
};


const ScopeNotification = props => {

  const className = createClassName(
    'slds-scoped-notification',
    'slds-media',
    'slds-media_center',
    props.theme ? `slds-scoped-notification_${props.theme}` : '', // light or dark
    props.className
  );
  return(
    <div className={ className} role="status">
      <div className="slds-media__figure">
        <Icon {...props}/>
      </div>
      <div className="slds-media__body">
        {props.children}
      </div>
    </div>
  );
};

export default ScopeNotification;
