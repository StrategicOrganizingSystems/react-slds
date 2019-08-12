import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Alignment', () => {

  it('should render a <div/> with class `slds-is-relative`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } isRelative/>);
    expect(
      wrapper.hasClass('slds-is-relative')
    ).toEqual(true);
  });
});
