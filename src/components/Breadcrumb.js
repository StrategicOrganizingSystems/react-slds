import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Breadcrumb extends Component {

  renderList(){
    if(this.props.options){
      return this.props.options.map(({text, link=null}, i)=>{
        link = link || 'javascript:void(0);';
        return (
          <li key={ i } className="slds-breadcrumb__item slds-text-title_caps">
            <a href={ link }>{ text }</a>
          </li>
        );
      });
    }
    return null;
  }

  render(){
    const { label } = this.props;

    return (
      <nav role="navigation" aria-label={ label }>
        <ol className="slds-breadcrumb slds-list_horizontal slds-wrap">
          { this.renderList() }
        </ol>
      </nav>
    );
  }


}

Breadcrumb.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array
};


export default Breadcrumb;
