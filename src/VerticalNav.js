import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';

import { generalClassNames, createClassName, isDefined } from './utils';

import Svg from './components/Svg';

// import VerticalNav, { Section, Item }  from '../VerticalNav.js';

const SvgIcon = props => {
  if (isDefined(props.variant) && isDefined(props.icon)) {
    const className = createClassName(
      'slds-icon_container',
      'slds-line-height_reset',
      `slds-icon-${props.variant}-${props.icon}`
    );

    const iconClassName = createClassName(
      'slds-icon',
      'slds-icon-text-default',
      'slds-icon_x-small',
      'slds-m-right_x-small'
    );
    return (
      <span className={className}>
        <Svg
          className={iconClassName}
          variant={props.variant}
          icon={props.icon}
        />
      </span>
    );
  }
  return null;
};

export const Item = props => {
  const { isActive, url, title, variant, icon, ...itemProps } = props;
  const link = url || null;
  const cName = createClassName(
    'slds-nav-vertical__item',
    isActive ? 'slds-is-active' : null
  );

  return (
    <li className={cName} title={title} role="presentation">
      <a
        href={link}
        className={createClassName(
          'slds-nav-vertical__action',
          'slds-vertical-tabs__link'
        )}
        aria-describedby="entity-header"
        {...itemProps}
      >
        <SvgIcon variant={variant} icon={icon} />
        {props.children}
      </a>
    </li>
  );
};

export const Section = props => {
  const className = createClassName(
    'slds-nav-vertical__section',
    props.className || null,
    generalClassNames(props)
  );

  let children = props.children;

  if (Array.isArray(children)) {
    children = children.filter(child => child.type === Item).map((n, i) =>
      React.cloneElement(n, {
        ...n.props,
        isActive:
          isDefined(props.currentUrl) && isDefined(n.props.url)
            ? props.currentUrl === n.props.url
            : n.props.isActive,
        key: i
      })
    );
  }
  return (
    <div className={className}>
      <h2 className="slds-nav-vertical__title slds-text-title_caps">
        {props.header}
      </h2>
      <ul>{children}</ul>
    </div>
  );
};

const VerticalNav = ({label, isCompact, ...props}) => {
  const className = createClassName(
    'slds-nav-vertical',
    props.className || null,
    isCompact ? 'slds-nav-vertical_compact': '',
    generalClassNames(props)
  );
  return (
    <nav className={className} aria-label={label || null}>
      {props.children}
    </nav>
  );
};

export default VerticalNav;
