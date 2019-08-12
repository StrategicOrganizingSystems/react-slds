import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Layout', () => {

  it('should render a <div/> with class `slds-has-bottom-magnet', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } bottomMagnet/>);
    expect(
      wrapper.hasClass('slds-has-bottom-magnet')
    ).toEqual(true);
  });



  it('should render a <div/> with class `slds-has-top-magnet', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } topMagnet/>);
    expect(
      wrapper.hasClass('slds-has-top-magnet')
    ).toEqual(true);
  });




});
