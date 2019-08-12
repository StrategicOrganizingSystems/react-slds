import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe.skip('rendering Grid', () => {

  it('should render a <div/> with class `slds-grid`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props }/>);
    expect(
      wrapper.hasClass('slds-grid')
    ).toEqual(true);
  });
});
