import React from 'react';
import PropTypes from 'prop-types';
import { createClassName, isDefined } from './utils';

export const Label = ({color = 'weak', ...props}) => (
  <dt
    title={ props.children }
    {...props}
    className={
      createClassName(
        'slds-item_label',
        props.className,
        color ? `slds-text-color_${color}` : ''
      )
    }
  />
);

export const Detail = props => (
  <dd title={ props.children }
    {...props}
    className={ createClassName('slds-item_detail', props.className) }
  />
);


const NameValueList = ({type, ...props}) => (
  <dl {...props} className={
    createClassName(
      type ? `slds-list_${type}`: '',
      isDefined(type) && type === 'horizontal' ? 'slds-wrap' : '',
      props.className
    )} />
);

NameValueList.propTypes = {
  type: PropTypes.oneOf([
    'horizontal',
    'inline',
    'stacked',
  ])
};
export default NameValueList;
