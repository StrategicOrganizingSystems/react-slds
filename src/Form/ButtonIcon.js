import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createClassName, isDefined } from '../utils';
import Svg from '../Svg';

const DropdownSvg = props => (
  <Svg
    className="slds-button__icon slds-button__icon_x-small"
    variant="utility"
    icon="down"
    assistiveText="More options"
  />
);

const ButtonIcon = props => {
  let {
    title,
    variant,
    icon,
    assistiveText,
    iconBorder,
    brand,
    inverse,
    withContainer,
    selected,
    withHint,
    withDropdown,
    iconSize,
    ...buttonProps
  } = props;

  const dashIconBorder =
    isDefined(iconBorder) && iconBorder.length ? `-${iconBorder}` : '';

  const className = createClassName(
    props.className,
    'slds-button',
    'slds-button_icon',
    isDefined(iconBorder) ? `slds-button_icon-border${dashIconBorder}` : '', // iconBorder =  filled or inverse
    isDefined(brand) ? 'slds-button_icon-brand' : '', // brand
    isDefined(inverse) ? 'slds-button_icon-inverse' : '', // inverse
    isDefined(withContainer) ? 'slds-button_icon-container' : '', // transparent container
    selected ? 'slds-is-selected slds-button_icon-border-filled' : '' // statefull
  );

  const svgClass = createClassName(
    'slds-button__icon',
    iconSize ? `slds-icon_${iconSize}` : ''
  );

  // stateful - Selected
  const ariaPressed = isDefined(selected) ? selected.toString : null;

  // remove assistive text for first Svg
  if (isDefined(withDropdown)) {
    assistiveText = null;
  }

  const newChildren = (
    <button
      {...buttonProps}
      className={className}
      title={title}
      aria-pressed={ariaPressed}
    >
      <Svg
        className={svgClass}
        variant={variant}
        icon={icon}
        assistiveText={assistiveText}
      />
      {isDefined(withDropdown) ? <DropnulldownSvg /> : null}
    </button>
  );

  return isDefined(withHint) ? (
    <div className="slds-hint-parent">{newChildren}</div>
  ) : (
    newChildren
  );
};

ButtonIcon.defaultProps = {
  title: null,
  type: 'submit'
};

ButtonIcon.propTypes = {
  iconSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'large'])
};

export default ButtonIcon;
