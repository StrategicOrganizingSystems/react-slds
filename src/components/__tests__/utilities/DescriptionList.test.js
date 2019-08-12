import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe.skip('rendering Description List', () => {

  it('should render a <div/> with class `slds-dl_inline`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props }/>);
    expect(
      wrapper.hasClass('slds-dl_inliner')
    ).toEqual(true);
  });
});
