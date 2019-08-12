import React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from '../Icon.js';

const props = {
  variant: 'standard',
  icon: 'account'
};

describe.skip('rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Icon {...props}/>);

  });

  it('should render a <Icon/> ', () => {
    expect(wrapper.find('span.slds-icon_container.slds-icon-standard-account')).toHaveLength(1);
  });

});
