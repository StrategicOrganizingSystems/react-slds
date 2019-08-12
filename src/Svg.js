/*
SVG with assistive Text
If assissitive text is null, use icon
*/
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import svg4everybody from 'svg4everybody';
import { VariantIcons, CustomIcons, DoctypeIcons, StandardIcons, UtilityIcons, IconVariant } from './enum';
import { objectValues, titleCase } from './utils';


class Svg extends Component {

  renderAssistiveText(){
    if(this.props.assistiveText !== null){
      return (
        <span className="slds-assistive-text">{ this.props.assistiveText || titleCase(this.props.icon) }</span>
      );
    }
    return null;
  }

  render(){
    const { variant, icon, className, title } = this.props;

    const SLDS_URL = window.SLDS_URL || '/slds';

    const link =  `${ SLDS_URL }/assets/icons/${ variant }-sprite/svg/symbols.svg#${ icon}`;

    const props = {
      className,
      title,
      'aria-hidden': 'true'
    };

    return(
      <Fragment>
        <svg {...props}>
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={ link } />
        </svg>
        { this.renderAssistiveText() }
      </Fragment>
    );
  }

  componentDidMount(){
    svg4everybody();
  }

}

Svg.defaultProps = {
  title: null,
  iconPosition: 'left',
  variant: 'utility'
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
