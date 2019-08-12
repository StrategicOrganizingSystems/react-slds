import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Hyphenation', () => {

  it('should render a <div/> with class `slds-hyphenate`', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } hyphenate/>);
    expect(
      wrapper.hasClass('slds-hyphenate')
    ).toEqual(true);
  });
});
