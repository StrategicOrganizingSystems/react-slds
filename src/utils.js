import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import includes from 'lodash.includes';
import pickBy from 'lodash.pickby';
import { startsWith, startCase, camelCase } from 'lodash';

import {
  BoxSize, FloatType, TextLink, Spacing, TextBody, TextHeading, TextColor,
  TextAlign, Brand
} from './enum';



export const GeneralPropTypes = {
  'assistiveText': PropTypes.bool,
  'isHidden': PropTypes.bool,
  'showInlineBlock': PropTypes.bool,
  'showInline': PropTypes.bool,
};

export function generalClassNames(props) {
  // console.log(props);
  const obj = {
    'slds-assistive-text': props.assistiveText,
    'slds-hide': props.isHidden,
    'slds-show': props.show,
    'slds-show_inline-block': props.showInlineBlock,
    'slds-show_inline': props.showInline,
    'slds-align_absolute-center': props.alignAbsoluteCenter || props.absoluteCenter,

    // Border
    'slds-border_bottom': props.borderAround || props.borderBottom,
    'slds-border_left': props.borderAround || props.borderLeft,
    'slds-border_right': props.borderAround || props.borderRight,
    'slds-border_top': props.borderAround || props.borderTop,

    // Box
    'slds-box': props.box,
    [`slds-box_${ props.box}` ]: isDefined(props.box) && includes(BoxSize, props.box),

    // Float
    'slds-clearfix': props.clearFix,
    [`slds-float_${ props.float}` ]: isDefined(props.float) && includes(FloatType, props.float),
    'slds-hyphenate': props.hyphenate,

    // Interaction
    'slds-text-link': props.textLink,
    [`slds-text-link_${ props.textLink}` ]:  isDefined(props.textLink) && includes(TextLink, props.textLink),


    // Magnets
    'slds-has-bottom-magnet': props.bottomMagnet,
    'slds-has-top-magnet': props.topMagnet,

    // Margin
    [`slds-m-top_${ props.mTop}` ]:  isSpacing(props.mTop),
    [`slds-m-left_${ props.mLeft}` ]:  isSpacing(props.mLeft),
    [`slds-m-bottom_${ props.mBottom}` ]: isSpacing(props.mBottom),
    [`slds-m-right_${ props.mRight}` ]:  isSpacing(props.mRight),

    [`slds-m-horizontal_${ props.mHorizontal}` ]: isSpacing(props.mHorizontal),
    [`slds-m-vertical_${ props.mVertical}` ]: isSpacing(props.mVertical),
    [`slds-m-around_${ props.mAround}` ]:  isSpacing(props.mAround),

    // Padding
    [`slds-p-top_${ props.pTop}` ]: isSpacing(props.pTop),
    [`slds-p-left_${ props.pLeft}` ]: isSpacing(props.pLeft),
    [`slds-p-bottom_${ props.pBottom}` ]: isSpacing(props.pBottom),
    [`slds-p-right_${ props.pRight}` ]: isSpacing(props.pRight),

    [`slds-p-horizontal_${ props.pHorizontal}` ]: isSpacing(props.pHorizontal),
    [`slds-p-vertical_${ props.pVertical}` ]:  isSpacing(props.pVertical),
    [`slds-p-around_${ props.pAround}` ]:  isSpacing(props.pAround),

    // TextBody
    [`slds-text-body_${  props.textBody}`]:  isDefined(props.textBody) && includes(TextBody, props.textBody),
    [`slds-text-heading_${  props.textHeading}`]:  isDefined(props.textHeading) && includes(TextHeading, props.textHeading),


    // Text Title
    'slds-text-title': props.textTitle,
    'slds-text-title_caps': props.caps,

    // Text color
    [`slds-text-color_${  props.textColor}`]:  isDefined(props.textColor) && includes(TextColor, props.textColor),

    // Text Alignment
    [`slds-text-align_${  props.textAlign}`]:  isDefined(props.textAlign) && includes(TextAlign, props.textAlign),

    // Long form
    'slds-text-longform': props.longForm,

    // Grid
    'slds-grid': props.grid,
    'slds-gutters': props.gutter,
    'slds-wrap': props.wrap,
    'slds-nowrap': props.wrap === false,
    'slds-flex': props.flex ,
    'slds-no-flex': props.flex === false,
    'slds-no-space': props.noSpace,

    'slds-grow': props.grow,
    'slds-grow-none': props.grow == false,

    'slds-shrink': props.shrink,
    'slds-shrink-none': props.shrink == false,


    // @Extra

    'slds-is-fixed': props.isFixed,
    'slds-is-absolute': props.isAbsolute,
    'slds-is-relative': props.isRelative,
    'slds-is-static': props.isStatic,
    'slds-is-selected ': props.selected,


    // Button Icon Variants

    'slds-button_icon-border-filled': props.buttonIcon && props.borderFilled,
    'slds-button_icon-border-inverse': props.buttonIcon && props.borderInverse,
    'slds-button_icon-border': props.buttonIcon && props.border,
    'slds-button_icon-brand': props.buttonIcon && props.brand,
    'slds-button_icon-inverse': props.buttonIcon && props.inverse,
    'slds-button_icon-container': props.buttonIcon && (props.container  || props.borderInverse),


  };

  return pickBy(obj, (k, v) => k);

}

// .slds-hide_*
// .slds-show_*
// vertical-list (skip)

export function isSpacing(value) {
  return isDefined(value) && includes(Spacing, value);
}


export function isDefined(value) {
  return typeof value !== 'undefined';
}

export function createClassName(...args) {
  return classNames(...args);
}


/**
 * Returns the keys for the given object.
 * This method is used for getting the keys for prop types.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectKeys(object) {
  return Object.keys(object);
}

/**
 * Returns the values for the given object.
 * This method is used for getting the values for enumerables.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectValues(object) {
  const values = [];

  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      values.push(object[property]);
    }
  }

  return values;
}


/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */
export function removeProps(object, remove) {
  const result = {};

  for (const property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property];
    }
  }

  return result;
}

/**
 * Filter all the events.
 * This method is used for filter the event from the component props.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */
export function filterEventProps(props, prefix='on') {
  return objectKeys(props)
    .filter(key => startsWith(key , prefix))
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
}


export function filterComponent(children, component){
  return React.Children.toArray(children).filter( c => c.type === component );
}


export function titleCase (text){
  return startCase(camelCase(text));
}


export function replaceKeys(obj, search, newPrefix='on') {
  const keyValues = Object.keys(obj).filter(key => key.startsWith(search)).map(key => {
    const newKey = key.replace(search, newPrefix);
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}


export function removePropsStartsWith(props, prefix) {
  return objectKeys(props)
    .filter(key => !startsWith(key , prefix))
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
}
