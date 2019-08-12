import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import FormElement from './Element';
import {
  createClassName,
  removeProps,
  filterEventProps,
  replaceKeys,
  removePropsStartsWith
} from '../utils';
import Svg from '../Svg';
import Popover from '../Popover';

const INVALID_INPUT_PROPS = ['iconLeft', 'className', 'label'];
// @Todo
// Error with icon
// Readonly
// Static
// Static - Tightened

class Input extends Component {
  state = {
    showPopOver: false
  };

  uid = this.props.id || `slds-input-${uniqueId()}`;

  handlePopover = status => this.setState({ showPopOver: status });

  renderFieldLevelHelpIcon() {
    const events = {
      onFocus: () => this.handlePopover(true),
      onBlur: () => this.handlePopover(false),
      onMouseLeave: () => this.handlePopover(false),
      onMouseEnter: () => this.handlePopover(true)
    };

    if (this.props.fieldLevelHelp) {
      return (
        <div className="slds-form-element__icon">
          <button
            aria-describedby={`pop-over-${this.uid}`}
            className="slds-button slds-button_icon"
            {...events}
          >
            <Svg
              className="slds-button__icon"
              icon={this.props.iconHelp}
              assistiveText="Help"
            />
          </button>
          {this.renderFieldLevelHelpPopover()}
        </div>
      );
    }
    return null;
  }

  renderFieldLevelHelpPopover() {
    const PropsPopOver = this.props.fieldLevelHelp;
    let PopoverElement;

    if (React.isValidElement(PropsPopOver)) {
      const newPopover = React.cloneElement(PropsPopOver);
      const newProps = {
        ...newPopover.props,
        type: 'div',
        role: 'tooltip',
        show: this.state.showPopOver,
        id: `pop-over-${this.uid}` // based on the button of renderFieldLevelHelpIcon
      };
      PopoverElement = React.createElement(newPopover.type, newProps);
      return PopoverElement;
    } 
    // string
    
    return this.props.fieldLevelHelp;
  }

  renderHelp() {
    if (this.props.help) {
      return <div className="slds-form-element__help">{this.props.help}</div>;
    }
    return null;
  }

  renderAddon(position) {
    let content = null;
    if (this.props.addonPre && position === 'pre') {
      content = this.props.addonPre;
    }
    if (this.props.addonPost && position === 'post') {
      content = this.props.addonPost;
    }
    if (content !== null) {
      return (
        <span
          className="slds-form-element__addon"
          id={`${this.uid}-addon-${position}`}
        >
          {content}
        </span>
      );
    }
    return null;
  }

  renderIcon(position, icon) {
    const isLeftRight =
      this.props.iconLeft && this.props.iconRight && position === 'right';
    let iconElement;

    const className = createClassName(
      'slds-icon',
      'slds-input__icon',
      `slds-input__icon_${position}`,
      'slds-icon-text-default'
    );

    if (React.isValidElement(icon)) {
      const { type, props } = React.cloneElement(icon);

      const newProps = {
        ...props,
        className: createClassName(props.className, className)
      };
      iconElement = React.createElement(type, ...newProps);
    }

    if (typeof icon === 'string') {
      iconElement = <Svg className={className} variant="utility" icon={icon} />;
    }

    if (React.isValidElement(icon) || typeof icon === 'string') {
      if (isLeftRight) {
        const { type, props } = React.cloneElement(iconElement);
        const newProps = {
          ...props,
          className: 'slds-button__icon slds-icon-text-light',
          assistiveText: props.assistiveText || false
        };

        const events = filterEventProps(this.props, 'handleIcon');
        const evtProps = replaceKeys(events, 'handleIcon');

        iconElement = (
          <button
            className="slds-input__icon slds-input__icon_right slds-button slds-button_icon"
            {...evtProps}
          >
            {React.createElement(type, ...newProps)}
          </button>
        );

        if (this.props.withSpinner) {
          iconElement = (
            <div className="slds-input__icon-group slds-input__icon-group_right">
              <div
                role="status"
                className="slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner"
              >
                <span className="slds-assistive-text">Loading</span>
                <div className="slds-spinner__dot-a" />
                <div className="slds-spinner__dot-b" />
              </div>
              {iconElement}
            </div>
          );
        }
      }

      return iconElement;
    }

    return null;
  }

  renderLabel = id => {
    if (this.props.label) {
      return (
        <label
          className="slds-form-element__label"
          htmlFor={id}
          id={`label-${id}`}
        >
          {this.props.label}
        </label>
      );
    }
    return null;
  };

  renderError = () => {
    if (this.props.hasError) {
      return (
        <div id="error-message" className="slds-form-element__help">
          {this.props.hasError}
        </div>
      );
    }
  };

  render() {
    const props = this.props;
    const {
      iconLeft,
      iconRight,
      addonPre,
      addonPost,
      withSpinner,
      iconHelp,
      fieldLevelHelp,
      hasError,
      isStatic,
      ...inputProps
    } = this.props;
    const elementClassName = createClassName(
      props.className,
      hasError ? 'slds-has-error' : ''
    );

    const controlClassName = createClassName(
      'slds-form-element__control',
      iconLeft || iconRight ? 'slds-input-has-icon' : '',
      iconLeft && !iconRight ? 'slds-input-has-icon_left' : '',
      iconRight && !iconLeft ? 'slds-input-has-icon_right' : '',
      iconLeft ? 'slds-input-has-icon_left-right' : '',
      addonPre || addonPost ? 'slds-input-has-fixed-addon' : ''
    );

    const id = this.uid;

    const ariaLabelledby = createClassName(
      `label-${id}`,
      props.addonPre ? `${id}-addon-pre` : '',
      props.addonPost ? `${id}-addon-post` : ''
    );

    const newInputProps = {
      ...removePropsStartsWith(inputProps, 'handleIcon'),
      className: createClassName('slds-input', props.className)
    };

    return (
      <Fragment>
        <FormElement className={elementClassName}>
          {this.renderLabel(id)}
          {this.renderFieldLevelHelpIcon()}
          <div className={controlClassName}>
            {this.renderAddon('pre')}
            {this.renderIcon('left', iconLeft)}
            {!isStatic ? (
              <input type="text" {...newInputProps} id={id} />
            ) : (
              <span className="slds-form-element__static" id={id}>
                {this.props.value}
              </span>
            )}
            {this.renderIcon('right', iconRight)}
            {this.renderAddon('post')}
            {this.renderHelp()}
          </div>
          {this.renderError()}
        </FormElement>
      </Fragment>
    );
  }
}

Input.defaultProps = {
  placeholder: null,
  iconHelp: 'info',
  isStatic: false
};

export default Input;
