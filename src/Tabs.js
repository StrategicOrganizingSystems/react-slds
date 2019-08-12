// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import {  generalClassNames, createClassName } from './utils';
import Svg from './components/Svg';

const uid = uniqueid();

const CloseButton = props => (
  <div className="slds-col_bump-left slds-p-left_none slds-p-right_none">
    <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-x-small"
      title={ props.text || '' } onClick={ e => { if( props.onClick !== null ) { props.onClick(e); } } }>
      <Svg className="slds-button__icon" variant="utility" icon="close"/>
      <span className="slds-assistive-text">Close { props.text || '' }</span>
    </button>
  </div>
);

export const Item = p => {
  const tabId = `tab-${uid}-${p.index}`;
  const className = createClassName(
    'slds-tabs_default__item',
    p.isActive ? 'slds-active': '',
    p.className
  );
  const linkClassName = createClassName(
    'slds-tabs_default__link',
    p.isSubTabs ? 'slds-p-horizontal_xx-small' : ''
  );
  //  tabindex="0"
  return (
    <li className={ className } title={ p.label } role="presentation">
      <a className={ linkClassName } href="javascript:void(0);" role="tab"
        aria-selected="true" aria-controls={ tabId } id={`${ tabId }__item`} onClick={ e => { if( p.onClick !== null ) { p.onClick(e, p.index); }} }>
        { p.label }</a>
      { p.isSubTabs ? ( <CloseButton onClick={ e =>{ if (p.onClose) { p.onClose(); }  }}/> ) : null }
    </li>
  );
};

Item.defaultProps = {
  onClick: null
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  // onClick: PropTypes.func,
};

const PanelItem = p => {
  const tabId = `tab-${uid}-${p.index}`;
  const className = createClassName(
    'slds-tabs_default__content',
    p.isActive ? 'slds-show': 'slds-hide',
  );
  return (
    <div id={ tabId } className={ className } role="tabpanel" aria-labelledby={`${ tabId }__item`}>{ p.children }</div>);
};


class Tabs extends Component{


  state = {
    active: 0
  };

  handleClick = (e, i) => {
    // console.log(i);
    this.setState({ active: i });

    if (this.props.onTabClick) {
      this.props.onTabClick(e, i);
    }
  }

  toArray = (arr) => React.Children.toArray(arr)

  renderNav(){
    const { children, isSubTabs } = this.props;

    const className = createClassName(
      'slds-tabs_default__item',
      isSubTabs ? 'slds-sub-tabs__item slds-grid slds-grid_vertical-align-center' : ''
    );

    const navProps = {
      isSubTabs,
      className
    };

    return (
      <ul
        key="nav"
        className="slds-tabs_default__nav"
        role="tablist">{
          this.toArray(children).map((c, i) => (<Item
            key={ i } {...navProps}
            isActive={ this.state.active === i } {...c.props}
            onClick={ this.handleClick }
            index={ i } />)
          )
        }</ul>
    );
  }

  renderPanel(){
    return this.toArray(this.props.children).map((c, i) => <PanelItem key={ i } {...c.props} index={ i } isActive={ this.state.active === i }/>);
  }

  renderPosition(){
    const elems = [
      this.renderNav(),
      this.renderPanel(),
    ];

    if(this.props.menuPosition === 'bottom'){
      return elems.reverse();
    }

    return elems;
  }


  render(){

    let styleBottom = ' .slds-tab-menu-position-bottom .slds-tabs_default__item:after, .slds-tab-menu-position-bottom .slds-tabs--default__item:after{   top: -2px; }  ' +
    ' .slds-tab-menu-position-bottom .slds-tabs_default__nav{ border-top: 2px solid #dddbda; border-bottom: 0px !important; }';

    const {
      menuPosition,
      isSubTabs,
      className: inputClassName,
      ...restProps
    } = this.props;

    if(menuPosition === 'bottom' && isSubTabs){
      styleBottom += ('.slds-sub-tabs.slds-tab-menu-position-bottom .slds-tabs_default__nav{' +
        'border-top: 1px solid #dddbda !important; }');
    }


    const className = createClassName(
      'slds-tabs_default',
      `slds-tab-menu-position-${ menuPosition}`,
      isSubTabs ? 'slds-sub-tabs' : '',
      inputClassName
    );

    return (
      <div {...restProps} className={ className }>
        { this.renderPosition() }
        { menuPosition === 'bottom' ?
          (<style dangerouslySetInnerHTML={ {__html: styleBottom }} />) : null
        }
      </div>
    );
  }
}

Tabs.defaultProps = {
  menuPosition: 'top',
  isSubTabs: false
};

export default Tabs;
