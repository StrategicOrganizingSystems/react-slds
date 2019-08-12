import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSection from './AccordionSection';

class Accordion extends Component {

  renderSection(){
    if(this.props.data != null){
  		return this.props.data.map((data, i)=>(
        <AccordionSection key={ i } index={ i }
          header={ data.header }
          showOnLoad={ data.showOnLoad || null }>
          { data.content }
        </AccordionSection>
      ));
    }
    return null;
  }

  render(){
    return (
      <div className="Accordion">
        <ul className="slds-accordion">
        	{ this.renderSection() }
        </ul>
      </div>
    );
  }
}

Accordion.propTypes = {
  data: PropTypes.array,
};

export default Accordion;
