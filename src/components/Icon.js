import React, { Component } from 'react';
// import { SLDS_URL } from '../../config/globals';
import PropTypes from 'prop-types';

import { objectValues, generalClassNames, createClassName } from '../utils';
import { IconVariant, IconColor, IconSize } from '../enum';
// Check https://www.lightningdesignsystem.com/icons/

/*
Example usage
<Icon icon="announcement" variant="standard" size="large" color="default" title="Title" />
*/
class Icon extends Component {

  renderSVG(){

    const SLDS_URL = window.SLDS_URL || '/slds/';

    const { props } = this;
    const { variant, size, color, title, description='', icon} = this.props;

    const  prefix = 'slds-icon';
    const svgClass = createClassName(
      prefix,
      size && variant !== 'action' ? `slds-icon_${ size }` : '',
      color && variant !== 'action' ? `slds-icon-text-${ color }`: '',
      variant === 'utility' ? 'slds-icon-text-default': '',
    );

    const href= `${SLDS_URL}assets/icons/${variant}-sprite/svg/symbols.svg#${icon}`;
    return (<svg className={ svgClass } aria-hidden="true">
      <use xlinkHref={ href }/></svg>);
  }

  renderText(){

    if(this.props.description !== null){
      return (
        <span className="slds-assistive-text">{ this.props.description }</span>
      );
    }

    return null;
  }

  render(){



    const { props } = this;
    const { variant, size, color, title, description='', icon} = this.props;

    const fixIconName = icon.replace('_','-');

    const containerClass = createClassName(
      'slds-icon_container',
      `slds-icon-${ variant }-${ fixIconName }`,

      props.className,
      generalClassNames(props),
      variant === 'action' ? 'slds-icon_container_circle': '',
    );







    return (
      <span className={ containerClass }
        title={title}>{ this.renderSVG() } { this.renderText() }</span>
    );
  }
}

Icon.propTypes = {
  variant: PropTypes.oneOf( objectValues( IconVariant ) ).isRequired,
  color: PropTypes.oneOf( objectValues( IconColor ) ),
  size: PropTypes.oneOf( objectValues( IconSize ) ),
  icon: PropTypes.string.isRequired,
};

export default Icon;
