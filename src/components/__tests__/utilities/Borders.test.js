import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Borders', () => {

  it('should render a <div/> with class `slds-border_bottom`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } borderBottom/>);
    expect(
      wrapper.hasClass('slds-border_bottom')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-border_left`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } borderLeft/>);
    expect(
      wrapper.hasClass('slds-border_left')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-border_right`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } borderRight/>);
    expect(
      wrapper.hasClass('slds-border_right')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-border_top`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } borderTop/>);
    expect(
      wrapper.hasClass('slds-border_top')
    ).toEqual(true);
  });

  it('should render a <div/> with border around', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } borderAround/>);

    const borderClasses = [
      'slds-border_bottom',
      'slds-border_left',
      'slds-border_right',
      'slds-border_top'
    ];

    expect(
      borderClasses.every(c => wrapper.hasClass(c))
    ).toEqual(true);
  });

});
