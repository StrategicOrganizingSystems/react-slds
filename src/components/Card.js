import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';

import {  generalClassNames, createClassName } from '../utils';

const prefix = 'slds-card';

class Card extends Component {

  renderHeader(){
    return (
      <div className={`${ prefix }__header`}>
        { this.props.header }
      </div>
    );
  }

  renderBody(){
    return (
      <div className={`${ prefix }__body`}>
        { this.props.body }
      </div>
    );
  }

  renderFooter(){
    return (
      <footer className={`${ prefix }__footer`}>
        { this.props.footer }
      </footer>
    );
  }

  render(){
    const { props } = this;

    const className = createClassName(
      prefix,
      props.className,
      generalClassNames(props),
      props.inverted ? `${ prefix }_inverse`:''
    );

    const newProps =  {
      className
    };

    return createElement(
      props.wrapper,
      newProps,
      this.renderHeader(),
      this.renderBody() ,
      this.renderFooter(),
    );
  }
}

Card.defaultProps = {
  wrapper: 'article',
  showIcon: false
};

Card.propTypes = {
  wrapper: PropTypes.oneOf(['article', 'div']) ,
  // header: PropTypes.string,
  // footer: PropTypes.string,
  // body: PropTypes.string,
  showIcon: PropTypes.bool,
};

export default Card;
