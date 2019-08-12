import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Input from '../Input.js';

describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'FirstName',
      name: 'firstname'
    };
    wrapper = shallow(<Input { ...props }/>);
  });

  it('should render a <Input/>', () => {
    expect(wrapper.find('div.slds-form-element')).toHaveLength(1);
    expect(wrapper.find('input.slds-input')).toHaveLength(1);
  });
});


describe('rendering with states', () => {

  it('should render if required is `true`', () => {
    let wrapper; let props;
    props = {
      label: 'FirstName',
      required: true,
      name: 'firstname'
    };
    wrapper = shallow(<Input { ...props }/>);

    expect(wrapper.find('label.slds-form-element__label')).toHaveLength(1);
    expect(wrapper.find('abbr.slds-required')).toHaveLength(1);
    expect(wrapper.find('input.slds-input').prop('required')).toBeTruthy();
  });

  it('should render if disabled is `true`', () => {
    let wrapper; let props;
    props = {
      disabled: true,
      name: 'firstname'
    };
    wrapper = shallow(<Input { ...props }/>);
    expect(wrapper.find('input.slds-input').prop('disabled')).toBeTruthy();
  });

  it('should render if showError is `true`', () => {
    let wrapper; let props;
    props = {
      showError: true,
      errorMessage: 'This field is required'
    };
    wrapper = shallow(<Input { ...props }/>);
    expect(
      wrapper.find('div.slds-form-element__control')
        .children().find('input')
        .prop('aria-describedby'))
      .toBe('error-message');
    expect(
      wrapper.find('div.slds-form-element__help').text()
    ).toBe('This field is required');

  });

  it('should render if readOnly is `true`', () => {
    let wrapper; let props;
    props = {
      readOnly: true,
    };
    wrapper = shallow(<Input { ...props }/>);
    expect(
      wrapper.find('div.slds-form-element__control')
        .children().find('input.slds-input')
        .prop('readOnly')
    ).toBeTruthy();
  });

  it('should render if static is `true`', () => {
    let wrapper; let props;
    props = {
      isStatic: true,
      value: 'Static Value'
    };
    wrapper = shallow(<Input { ...props }/>);
    expect(
      wrapper.find('span.slds-form-element__label')
    ).toHaveLength(1);

    expect(
      wrapper.find('div.slds-form-element__control').children()
        .find('span.slds-form-element__static').text()
    ).toEqual('Static Value');

  });

});
// error with ICOn
/*
label
placeHolder
required
disabled
readOnly
static
bare
showIcon
iconPosition
variant
icon
*/
