import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Box', () => {

  it('should render a <div/> with class `slds-box`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } box/>);
    expect(
      wrapper.hasClass('slds-box')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-box slds-box_small`', () => {
    const props  = {
      label: 'Badge label',
      box: 'small'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      ['slds-box', 'slds-box_small'].every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-box slds-box_x-small`', () => {
    const props  = {
      label: 'Badge label',
      box: 'x-small'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      ['slds-box', 'slds-box_x-small'].every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-box slds-box_xx-small`', () => {
    const props  = {
      label: 'Badge label',
      box: 'xx-small'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      ['slds-box', 'slds-box_xx-small'].every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });




});
