import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Modal extends Component {
  static propTypes = {
    content: PropTypes.string,
    show: PropTypes.bool,
    tagLine: PropTypes.string,
    title: PropTypes.string,
    onCloseModalButton: PropTypes.func,
    onNoButton: PropTypes.func,
    onYesButton: PropTypes.func
  };

  handleCloseModal = () => {
    if (this.props.onCloseModalButton) {
      this.props.onCloseModalButton();
    }
  }

  handleNoButton = () => {
    if (this.props.onNoButton) {
      this.props.onNoButton();
    }
  }

  handleYesButton = () => {
    if (this.props.onYesButton) {
      this.props.onYesButton();
    }
  }

  renderModalTitle(title) {
    if (title) {
      return <h2 id="modal-heading" className="slds-text-heading_medium slds-hyphenate">{ title }</h2>;
    }
  }

  renderModalTagline(tagline) {
    if (tagline) {
      return <p className="slds-m-top_x-small">{ tagline }</p>;
    }
  }

  renderModalFooter(footerBtns) {
    // To be refactored
    if (footerBtns.length > 0) {
      return (
        <footer className="slds-modal__footer">
          <button className="slds-button slds-button_neutral" type="button"  onClick={this.handleNoButton}>{footerBtns[0]}</button>
          <button className="slds-button slds-button_neutral" type="button" onClick={this.handleYesButton}>{footerBtns[1]}</button>
        </footer>
      );
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    const SLDS_URL = window.SLDS_URL || '/slds/';

    return (
      <div>
        <section role="dialog" tabIndex="-1" aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1" className="slds-modal slds-fade-in-open">
          <div className="slds-modal__container">
            <header className="slds-modal__header">
              <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" type="button" title="Close" onClick={ this.handleCloseModal }>
                <svg className="slds-button__icon slds-button__icon_large" aria-hidden="true">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${SLDS_URL}assets/icons/utility-sprite/svg/symbols.svg#close`} />
                </svg>
                <span className="slds-assistive-text">Close</span>
              </button>
              { this.renderModalTitle(this.props.title) }
              { this.renderModalTagline(this.props.tagline) }
            </header>
            <div className="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
              <p>{ this.props.content }</p>
            </div>
            {this.renderModalFooter(this.props.footerButtons)}
          </div>
        </section>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    );
  }
}

export default Modal;
