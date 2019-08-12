import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FormLayout extends PureComponent {
  static propTypes = {
    layout: PropTypes.string
  };

  render() {
    const classNames= this.setLayout(this.props.layout);
    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    );
  }

  setLayout(layout) {
    return {
      'compound': 'slds-form slds-form_compound',
      'horizontal': 'slds-form slds-form_horizontal',
      'default': 'slds-form slds-form_stacked'
    }[layout || 'default'];
  }
}

export default FormLayout;
