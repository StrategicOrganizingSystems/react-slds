import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Alignment', () => {

  it('should render a <div/> with class `slds-align_absolute-center`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } alignAbsoluteCenter/>);
    expect(
      wrapper.hasClass('slds-align_absolute-center')
    ).toEqual(true);
  });
});
