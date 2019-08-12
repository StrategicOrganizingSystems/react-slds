import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {uniqueId} from 'lodash';
import Svg from './Svg';


class Prompt extends Component{

  handleClickBackDrop = e => {
    if(this.props.onClickBackbrop){
      this.props.onClickBackbrop();
    }
  }

  handleClickEscape = e => {
    if(e.keyCode === 27 && this.props.onClickEscape){
      this.props.onClickEscape();
    }
  }

  renderFooter(){
    if(this.props.footer)
      return (
        <footer className="slds-modal__footer slds-theme_default">{ this.props.footer }</footer>
      );
  }

  render(){
    const props = this.props;
    if(props.show){
      return (
        <div className={ props.className } >
          <section role="alertdialog" tabIndex="0"  ref={ e => e ? e.focus() : ()=>{} } onKeyUp={ this.handleClickEscape } aria-labelledby={ `${props.id}-heading` } aria-describedby={ `${props.id}-msg-wrapper` } className="slds-modal slds-fade-in-open slds-modal_prompt" aria-modal="true">
            <div className="slds-modal__container" >
              <header className="slds-modal__header slds-theme_error slds-theme_alert-texture">
                <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close">
                  <Svg className="slds-button__icon slds-button__icon_large" variant="utility" icon="icon" assistiveText="Close" />
                </button>
                <h2 className="slds-text-heading_medium" id={ `${props.id}-heading` }>{ props.heading }</h2>
              </header>
              <div className="slds-modal__content slds-p-around_medium" id={ `${props.id}-msg-wrapper` }>
                { props.children}
              </div>
              { this.renderFooter() }
            </div>
          </section>
          <div className="slds-backdrop slds-backdrop_open" onClick={ this.handleClickBackDrop } />
        </div>
      );
    }
    return null;

  }


}

Prompt.defaultProps = {
  id: `prompt-${  uniqueId()}`,
  show: true
};

Prompt.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Prompt;
