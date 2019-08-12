import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import { isDefined, createClassName } from './utils';
import Svg from './components/Svg';

export const Coaching = props => {
  const className = createClassName('path__content', props.className);
  return (
    <div className={className} {...props}>
      <div className="slds-path__coach">{props.children}</div>
    </div>
  );
};

export const ActionButton = ({ stageName = '', mark, ...props }) => {
  const buttonClassName = createClassName(
    'slds-button',
    'slds-button_brand',
    props.mark ? `slds-path__mark-${props.mark}` : 'slds-path__mark-complete'
  );

  return (
    <div className="slds-grid slds-path__action">
      <span className="slds-path__stage-name">{stageName}</span>
      <button className={buttonClassName} {...props} type="button">
        <Svg
          className="slds-button__icon slds-button__icon_left"
          variant="utility"
          icon="check"
        />
        {props.children}
      </button>
    </div>
  );
};

export const Item = props => {
  const id = uniqueid();
  const className = createClassName(
    'slds-path__item',
    props.isActive ? 'slds-is-active' : '',
    props.isCurrent ? 'slds-is-current' : '',
    props.isComplete ? 'slds-is-complete' : '',
    !props.isActive && !props.isComplete && !props.isCurrent
      ? 'slds-is-incomplete'
      : ''
  );
  const itemId = props.id !== null ? props.id : `path-${id}`;
  return (
    <li className={className} role="presentation">
      <a
        aria-selected="true"
        className="slds-path__link"
        href="javascript:void(0);"
        id={itemId}
        role="option"
        tabIndex="0"
      >
        <span className="slds-path__stage">
          <Svg className="slds-button__icon" variant="utility" icon="check" />
          <span className="slds-assistive-text">
            {props.assistiveText || ''}
          </span>
        </span>
        <span className="slds-path__title">{props.children}</span>
      </a>
    </li>
  );
};

const Path = props => {
  const children = React.Children.toArray(props.children);
  const hasCoaching = children.filter(c => c.type === Coaching).length > 0;

  const pathClassName = createClassName(
    'slds-path',
    props.withOverflow ? 'slds-has-overflow' : '',
    hasCoaching ? 'slds-path_has-coaching ' : '',
    props.openCoaching ? 'slds-is-expanded' : ''
  );

  const trackClassName = 'slds-grid slds-path__track';

  const coachButtonCname = createClassName(
    'slds-button',
    'slds-button_icon',
    'slds-button_icon-border-filled',
    'slds-path__trigger',
    props.openCoaching ? 'slds-path__trigger_open' : ''
  );

  return (
    <div className={pathClassName}>
      <div className={trackClassName}>
        <div className="slds-grid slds-path__scroller-container">
          {hasCoaching ? (
            <button
              className={coachButtonCname}
              aria-expanded={props.openCoaching}
              onClick={props.onClickCoach}
            >
              <Svg
                className="slds-button__icon"
                variant="utility"
                icon="chevronright"
                assistiveText="Show Details"
              />
            </button>
          ) : (
            ''
          )}
          <div className="slds-path__scroller" role="application">
            <div className="slds-path__scroller_inner">
              <ul
                className="slds-path__nav"
                role="listbox"
                aria-orientation="horizontal"
              >
                {children.filter(c => c.type === Item).map((n, i) =>
                  React.cloneElement(n, {
                    ...n.props,
                    isComplete:
                      isDefined(props.activeLevel) && props.activeLevel > i,
                    isActive:
                      isDefined(props.activeLevel) && props.activeLevel === i,
                    isCurrent:
                      isDefined(props.activeLevel) && props.activeLevel === i
                  })
                )}
              </ul>
              <div className="slds-path__scroll-controls">
                <button
                  className="slds-button slds-button_icon slds-button_icon-border-filled"
                  title="Scroll left"
                  tabIndex="-1"
                >
                  <Svg
                    className="slds-button__icon"
                    variant="utility"
                    icon="left"
                  />
                  <span className="slds-assistive-text">Scroll left</span>
                </button>
                <button
                  className="slds-button slds-button_icon slds-button_icon-border-filled"
                  title="Scroll right"
                  tabIndex="-1"
                >
                  <Svg
                    className="slds-button__icon"
                    variant="utility"
                    icon="right"
                  />
                  <span className="slds-assistive-text">Scroll right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {children.filter(c => c.type === ActionButton)}
      </div>
      {children.filter(c => c.type === Coaching && props.openCoaching)}
    </div>
  );
};

Path.defaultProps = {
  actionLevel: 0,
  openCoaching: false,
  onClickCoach: () => {}
};

Path.propTypes = {
  actionLevel: PropTypes.number.isRequired,
  openCoaching: PropTypes.bool
};

export default Path;
