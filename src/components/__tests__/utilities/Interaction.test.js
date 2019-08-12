import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../../Badge.js';

describe('rendering Interaction', () => {

  it('should render a <div/> with class `slds-text-link', () => {
    const props  = {
      label: 'Badge label'
    };
    const wrapper = shallow(<Badge { ...props } textLink/>);
    expect(
      wrapper.hasClass('slds-text-link')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-link_reset', () => {
    const props  = {
      label: 'Badge label',
      textLink: 'reset'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-text-link_reset')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-link_faux', () => {
    const props  = {
      label: 'Badge label',
      textLink: 'faux'
    };
    const wrapper = shallow(<Badge { ...props } />);
    expect(
      wrapper.hasClass('slds-text-link_faux')
    ).toEqual(true);
  });

  // halo

});
