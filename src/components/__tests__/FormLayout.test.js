import React from 'react';
import { shallow, mount } from 'enzyme';
import FormLayout from '../FormLayout';

const comp = shallow(<FormLayout />);
const compChildren = shallow(<FormLayout>children</FormLayout>);

it('renders without crashing', () => {
  shallow(<FormLayout />);
});

it('should render children components', () => {
  expect(compChildren.props().children)
    .toEqual('children');
});

it('should accept layout props', () => {
  const wrapper = mount(<FormLayout layout="stacked" />);
  wrapper.setProps({ layout: 'horizontal' });
  expect(wrapper.props().layout).toEqual('horizontal');
});

it('has a function that return classNames', () => {
  expect(comp.instance().setLayout('horizontal'))
    .toEqual('slds-form slds-form_horizontal');
});

it('has a function that returns a default className', () => {
  expect(comp.instance().setLayout(''))
    .toEqual('slds-form slds-form_stacked');
});
