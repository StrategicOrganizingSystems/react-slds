import React from 'react';
import PropTypes from 'prop-types';

import { createClassName, isDefined } from './utils';

export const Figure  = ({reverse, ...props}) => (
  <div {...props} className= {
    createClassName(
      'slds-media__figure',
      props.className,
      isDefined(reverse) && reverse ?  'slds-media__figure_reverse' : null
    )
  }  />
);
export const Body  = props => (
  <div {...props} className={ createClassName('slds-media__body', props.className ) }  />
);

const Media  = ({center, space, responsive,  ...props}) => (
  <div {...props} className={
    createClassName(
      'slds-media',
      props.className,
      isDefined(center) && center ?  'slds-media_center' : null,
      isDefined(space)  ?  `slds-media_${space}` : null,
      isDefined(responsive)  ?  'slds-media_responsive' : null
    )
  }  />
);



Media.propTypes = {
  // space between figure and body
  space: PropTypes.oneOf(['small', 'large']),
};


export default Media;
