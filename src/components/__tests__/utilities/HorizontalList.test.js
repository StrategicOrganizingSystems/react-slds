import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe.skip('rendering Horizontal List', () => {

  it('should render a <div/> with class `slds-list_horizontal`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } listHorizontal/>);
    expect(
      wrapper.hasClass('slds-list_horizontal')
    ).toEqual(true);
  });
});
