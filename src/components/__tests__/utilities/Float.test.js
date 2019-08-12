import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Float', () => {

  it('should render a <div/> with class `slds-clearfix`', () => {
    const props  = {
      label: 'Badge label'

    };
    const wrapper = shallow(<Badge { ...props } clearFix/>);
    expect(
      wrapper.hasClass('slds-clearfix')
    ).toEqual(true);
  });


  it('should render a <div/> with class `slds-float_left`', () => {
    const props  = {
      label: 'Badge label',
      float: 'left'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-float_left')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-float_right`', () => {
    const props  = {
      label: 'Badge label',
      float: 'right'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-float_right')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-float_none`', () => {
    const props  = {
      label: 'Badge label',
      float: 'none'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-float_none')
    ).toEqual(true);
  });

});
