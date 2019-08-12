import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button.js';


describe('rendering Button Icon', () => {
  const props = {
    variant: 'utility',
    icon: 'download',
  };

  it('should render icon only', () => {
    const buttonIcon = <Button {...props} buttonIcon/>;
    const wrapper = shallow(buttonIcon);
    expect(
      wrapper.find('button.slds-button.slds-button_icon')
    ).toHaveLength(1);

    expect(
      wrapper.find('Svg.slds-button__icon')
    ).toHaveLength(1);

  });


});

describe('rendering Button Icon with Variant', () => {
  const props = {
    variant: 'utility',
    icon: 'close',
  };

  it('should render Variant - Base', () => {
    const buttonIcon = <Button {...props} buttonIcon/>;
    const wrapper = shallow(buttonIcon);
    expect(
      wrapper.find('button.slds-button_icon')
    ).toHaveLength(1);

  });

  it('should render Variant - Bordered Filled Container', () => {
    const buttonIcon = <Button {...props} buttonIcon borderFilled/>;
    const wrapper = shallow(buttonIcon); 
    expect(
      wrapper.find('button.slds-button_icon.slds-button_icon-border-filled')
    ).toHaveLength(1);

  });


  it('should render Variant - Bordered Inverse', () => {
    const buttonIcon = <Button {...props} buttonIcon borderInverse/>;
    const wrapper = shallow(buttonIcon); 
    expect(
      wrapper.find('button.slds-button_icon.slds-button_icon-container.slds-button_icon-border-inverse')
    ).toHaveLength(1);

  });

  it('should render Variant - Bordered Transparent Container', () => {
    const buttonIcon = <Button {...props} buttonIcon border/>;
    const wrapper = shallow(buttonIcon); 
    expect(
      wrapper.find('button.slds-button_icon.slds-button_icon-border')
    ).toHaveLength(1);

  });

  it('should render Variant - Brand', () => {
    const buttonIcon = <Button {...props} buttonIcon brand/>;
    const wrapper = shallow(buttonIcon); 
    expect(
      wrapper.find('button.slds-button_icon.slds-button_icon-brand')
    ).toHaveLength(1);

  });

  it('should render Variant - Inverse', () => {
    const buttonIcon = <Button {...props} buttonIcon inverse/>;
    const wrapper = shallow(buttonIcon); 
    expect(
      wrapper.find('button.slds-button_icon.slds-button_icon-inverse')
    ).toHaveLength(1);

  }); 

  it('should render Variant - Transparent Container', () => {
    const buttonIcon = <Button {...props} buttonIcon container/>;
    const wrapper = shallow(buttonIcon); 
    expect(
      wrapper.find('button.slds-button_icon.slds-button_icon-container')
    ).toHaveLength(1);
  });

  it('should render Variant - Transparent Container', () => {
    const buttonIcon = <Button {...props} buttonIcon container />;
    const wrapper = shallow(buttonIcon); 
    expect(
      wrapper.find('button.slds-button_icon.slds-button_icon-container')
    ).toHaveLength(1);
  });
  


});




describe('rendering Button Icon with State pressed or selected', () => {
  const props = {
    variant: 'utility',
    icon: 'close',
  };

  it('should render selected', () => {
    const buttonIcon = <Button {...props} buttonIcon selected/>;
    const wrapper = shallow(buttonIcon);
      
    expect(
      wrapper.find('button.slds-button_icon.slds-is-selected').props()['aria-pressed']
    ).toEqual('true');

  });   


});






