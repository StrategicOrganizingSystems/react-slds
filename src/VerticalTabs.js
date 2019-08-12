import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* STATIC MARKUP
<div className="slds-vertical-tabs filter-tabs">
  <ul className="slds-vertical-tabs__nav" role="tablist" aria-orientation="vertical">
    <li className="slds-vertical-tabs__nav-item slds-is-active" title="Tab 1" role="presentation"><a className="slds-vertical-tabs__link" role="tab" tabIndex="0" aria-selected="true" aria-controls="slds-vertical-tabs-0" id="slds-vertical-tabs-0__nav">Today</a></li>
  </ul>
  <div className="slds-vertical-tabs__content slds-show" id="slds-vertical-tabs-0" role="tabpanel" aria-labelledby="slds-vertical-tabs-0__nav">
    <div className="slds-text-longform">
      <h3 className="slds-text-heading_medium">Tab Title</h3>
      <p>Content for Tab 1</p>
      <p>Lorem ipsum dolor...</p>
      <p>Lorem ipsum dolor...</p>
    </div>
  </div>
</div>
*/

/* USAGE
  <VerticalTab name="your-user-defined-name">
    <TabItem>
      Content goes here...
    </TabItem>
  </VerticalTab>
 */

class TabItemContent extends Component {
  render() {

    const classNames = this.props.isActive
      ? 'slds-vertical-tabs__content slds-show'
      : 'slds-vertical-tabs__content slds-hide';

    return (
      <div className={classNames} id={this.props.id} role="tabpanel" aria-labelledby={`${this.props.id}__nav`}>
        {this.props.children}
      </div>
    );
  }
}

export class TabItem extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired
  };

  render() {

    const classNames = this.props.isActive
      ? 'slds-vertical-tabs__nav-item slds-is-active'
      : 'slds-vertical-tabs__nav-item';

    return (
      <li className={classNames} title={this.props.label} role="presentation">
        <a
          className="slds-vertical-tabs__link"
          role="tab"
          tabIndex="0"
          aria-selected={this.props.isActive}
          aria-controls={this.props.id}
          id={`${this.props.id}__nav`}
          onClick={() => {this.props.onTabItemClick(this.props.tabIndex);}}>
          {this.props.label}
        </a>
      </li>
    );
  }
}

export default class VerticalTabs extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  };

  state = {
    activeTab: 0
  };

  handleTabItemClick = tabIndex => {
    this.setState({ activeTab: tabIndex });
  }

  renderTabItems = () => React.Children.map(this.props.children, (child, idx) => React.cloneElement(child, {
    id: `${this.props.name}-${idx}`,
    isActive: this.state.activeTab === idx,
    onTabItemClick: this.handleTabItemClick,
    tabIndex: idx
  }))

  renderTabItemContents = () => React.Children.map(this.props.children, (child, idx) => <TabItemContent id={`${this.props.name}-${idx}`} isActive={this.state.activeTab === idx}>{child.props.children}</TabItemContent>)

  render() {
    const classNames = `slds-vertical-tabs ${this.props.className}`;

    return (
      <div className={classNames}>
        <ul className="slds-vertical-tabs__nav" role="tablist" aria-orientation="vertical">
          {this.renderTabItems()}
        </ul>
        {this.renderTabItemContents()}
      </div>
    );
  }
}
