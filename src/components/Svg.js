import React, { Component } from 'react';
import PropTypes from 'prop-types';

import svg4everybody from 'svg4everybody';

import { VariantIcons, CustomIcons, DoctypeIcons, StandardIcons, UtilityIcons, IconVariant } from '../enum';
import { objectValues } from '../utils';


class Svg extends Component {

  render(){
    const { variant, icon, className, title } = this.props;

    const SLDS_URL = window.SLDS_URL || '/slds';

    const link =  `${ SLDS_URL }/assets/icons/${ variant }-sprite/svg/symbols.svg#${ icon}`;

    return(
      <svg aria-hidden="true"
        className={ className }
        title={ title }>
        <use xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={ link } /></svg>
    );
  }

  componentDidMount(){
    svg4everybody();
  }

}

Svg.defaultProps = {
  title: null,
  iconPosition: 'left'
};

Svg.propTypes = {
  className: PropTypes.string,
  // variant: PropTypes.oneOf( objectValues( IconVariant ) ).isRequired,
  // icon: PropTypes.oneOf([
  //   ...VariantIcons,
  //   ...CustomIcons,
  //   ...DoctypeIcons,
  //   ...StandardIcons,
  //   ...UtilityIcons,
  // ]),

};

export default Svg;
