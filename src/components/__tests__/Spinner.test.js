import React from 'react';
import { shallow, mount } from 'enzyme';
import Spinner from '../Spinner.js';

describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      size: 'small',
    };
    wrapper = shallow(<Spinner { ...props }/>);
  });


  it('should render a <Spinner/>', () => {

    expect(wrapper.find('div.slds-spinner')).toHaveLength(1);
    expect(wrapper.find('div.slds-spinner_small')).toHaveLength(1);
    expect(wrapper.find('span.slds-assistive-text')).toHaveLength(1);
    expect(wrapper.find('div.slds-spinner__dot-a')).toHaveLength(1);
    expect(wrapper.find('div.slds-spinner__dot-b')).toHaveLength(1);
  });
});
