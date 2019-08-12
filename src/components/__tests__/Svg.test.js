import React from 'react';
import { shallow } from 'enzyme';
import Svg from '../Svg.js';

const props = {
  svgClass: 'slds-icon slds-icon-text-default',
  variant: 'doctype',
  icon: 'xml'
};


describe('rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Svg {...props}/>);

  });

  it('should render a <Svg/>', () => {
    expect(wrapper.find('svg')).toHaveLength(1);
  });

});
