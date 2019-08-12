import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon.js';

class AccordionSection extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: this.props.showOnLoad || false
    };
  }

  handleClick() {
    const isOpen = this.state.isOpen;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const sectionClass =
      `slds-accordion__section${  this.state.isOpen ? ' slds-is-open' : ''}`;

    return (
      <li className="slds-accordion__list-item">
        <section className={sectionClass}>
          <div className="slds-accordion__summary">
            <h3
              className="slds-text-heading_small slds-accordion__summary-heading"
              onClick={this.handleClick}
            >
              <button
                aria-controls="accordion-details-01"
                aria-expanded={this.state.isOpen}
                className="slds-button slds-button_reset slds-accordion__summary-action"
              >
                <Icon
                  className="slds-accordion__summary-action-icon slds-button__icon_left"
                  icon="switch"
                  size="xx-small"
                  color="default"
                />
                <span className="slds-truncate" title={this.props.header}>
                  {this.props.header}
                </span>
              </button>
            </h3>
            <button
              className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none"
              aria-haspopup="true"
            >
              <Icon icon="down" size="xx-small" color="default" />
              <span className="slds-assistive-text">More Options</span>
            </button>
          </div>
          <div
            aria-hidden="false"
            className="slds-accordion__content"
            id={`accordion-details-${this.props.index}`}
          >
            {this.props.children || ''}
          </div>
        </section>
      </li>
    );
  }
}

export default AccordionSection;

AccordionSection.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  showOnLoad: PropTypes.bool
};
