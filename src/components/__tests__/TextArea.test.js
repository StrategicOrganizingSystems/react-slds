import React from 'react';
import { mount, shallow, render } from 'enzyme';
import TextArea from '../TextArea';

it('renders without crashing', () => {
  shallow(<TextArea />);
});

it('fn: renderAbbr - should be a required field when set', () => {
  const comp = mount(<TextArea required="true" />);
  expect(comp.find('abbr').hasClass('slds-required')).toEqual(true);
});

it('fn: renderErrorMessage - should contain this field is required', () => {
  const comp = render(<TextArea hasError="true" />);
  expect(comp.find('#hasError').text()).toBe('This field is required');
});
