import React from 'react';
import { shallow, mount } from 'enzyme';
import Text from '../Text.js';

describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'Text Label',
      className: 'slds-text',
    };
    wrapper = shallow(<Text { ...props }/>);
  });

  it('should render a <Text/>', () => {
    expect(wrapper.find('div.slds-text')).toHaveLength(1);
  });
});
