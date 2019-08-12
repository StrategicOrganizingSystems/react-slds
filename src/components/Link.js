import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {uniqueId, startsWith} from 'lodash';

import { objectValues, generalClassNames, createClassName, removeProps,
  objectKeys } from '../utils';


class Link extends Component {
  constructor(props){
  	super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id=null){
    if(window.sforce && id !== null){
      if(!startsWith(id, '#') && id.length >=14){
        window.sforce.one.navigateToSObject(id);
      }

    }
    if(this.props.onClick){
      this.props.onClick();
    }
  }

  render(){
    const { props } = this;
    let { children, href, sObject, onClick, inlineJs } = props;

    const className = createClassName(
      props.className,
      generalClassNames(props),
    );
    if(sObject){
      if(window.sforce){
        if(inlineJs){
          href=`javascript:sforce.one.navigateToSObject("${ sObject }");`;
        } else {
          return (<a className={`${ className } slds-button`} onClick={ () => this.handleClick(sObject)}>
            { children }</a>);
        }
      } else {
        href=`https://ap1.salesforce.com/${ sObject }`;
      }
    }

    return (<a href={ href } className={ className } onClick={ this.handleClick }>
      { children }
    </a>);
  }
}

Link.defaultProps = {
  href: 'javscript:void(0)',
};

Link.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,

  // sfor
  sObject: PropTypes.string,

};
export default Link;
