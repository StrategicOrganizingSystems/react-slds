import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createClassName } from './utils';
import Svg from './Svg';


const Icon = props => {

  const { title, assistiveText, variant, icon, size, color, currentColor, ...iconProps} = props;

  const iconName =  icon.replace('_','-');

  const className = createClassName(
    props.className,
    'slds-icon_container',
    variant === 'action' ? 'slds-icon_container_circle': '',
    // background color except for doctype and utility
    (variant !== 'doctype' || variant !== 'utility') ? `slds-icon-${variant}-${iconName}`: ''
  );

  const svgClass = createClassName(
    'slds-icon',
    // To change the fill of an icon to match the current color of its parent
    currentColor ? 'slds-current-color': '',
    size && variant !== 'action' ? `slds-icon_${ size }` : '',
    color && variant !== 'action' ? `slds-icon-text-${ color }`: '',
    // variant === 'utility' ? `slds-icon-text-default`: '',
  );

  return (
    <span {...iconProps} title={ title } className={className}>
      <Svg className={ svgClass } variant={variant} icon={icon} assistiveText={ assistiveText }/>
    </span>
  );
};
Icon.propTypes = {
  color: PropTypes.oneOf([
    'default',
    'warning',
    'error',
    'light',
  ]),
  size: PropTypes.oneOf([
    'xx-small',
    'x-small',
    'small',
    'large',
  ])
};


export default Icon;
