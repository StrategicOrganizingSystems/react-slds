import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CheckboxGroup from '../CheckboxGroup';

it('renders without crashing', () => {
  shallow(<CheckboxGroup />);
});

it('renders abbr when defined as a required field', () => {
  const wrapper = render(<CheckboxGroup required />);
  expect(wrapper.find('abbr')).toHaveLength(1);
});

it('renders an error message when the component has an error', () => {
  const wrapper = shallow(<CheckboxGroup hasError />);
  expect(wrapper.find('.slds-form-element__help').text()).toBe('This field is required');
});

it('appends the component css to display an error', () => {
  const wrapper = shallow(<CheckboxGroup hasError />);
  expect(wrapper.find('fieldset').hasClass('slds-has-error')).toBeTruthy();
});

it('renders group label property', () => {
  const wrapper = render(<CheckboxGroup groupLabel="sample label" />);
  expect(wrapper.find('legend').text()).toEqual(' sample label');
});
