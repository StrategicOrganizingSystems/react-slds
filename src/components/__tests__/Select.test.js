import React from 'react';
import { shallow, mount } from 'enzyme';
import Select from '../Select.js';

const options =  [
  { value: 1, text: 'Option One'},
  { value: 2, text: 'Option Two'},
  { value: 3, text: 'Option Three'},
];
describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'Select Label',
      options
    };
    wrapper = mount(<Select { ...props }/>);
  });

  it('should render a <Select/>', () => {

    expect(
      wrapper.find('div.slds-form-element')
    ).toHaveLength(1);

    expect(
      wrapper.find('label.slds-form-element__label')
    ).toHaveLength(1);

    expect(
      wrapper.find('div.slds-form-element__control')
    ).toHaveLength(1);

    expect(
      wrapper.find('select.slds-select')
    ).toHaveLength(1);

    expect(
      wrapper.find('select.slds-select')
        .children()
    ).toHaveLength(props.options.length);
  });
});


describe('rendering with states', () => {
  // required
  it('should render if required is `true`', () => {
    const props = {
      label: 'Select Label',
      options,
      required: true
    };
    const wrapper = shallow(<Select { ...props }/>);
    expect(
      wrapper.find('abbr.slds-required')
    ).toHaveLength(1);
    expect(
      wrapper.find('select.slds-select').prop('required')
    ).toBeTruthy();
  });

  // showError
  it('should render a <Select/> with error', () => {
    const props = {
      label: 'Select Label',
      required: true,
      showError: true,
      errorMessage: 'This field is required'
    };
    const wrapper = shallow(<Select { ...props }/>);
    expect(
      wrapper.find('div.slds-form-element.slds-has-error')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-form-element.slds-has-error')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-form-element__help')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-form-element__help').text()
    ).toEqual('This field is required');
  });

  // disabled
  it('should render a disabled <Select/> ', () => {
    const props = {
      label: 'Select Label',
      disabled: true,
    };
    const wrapper = shallow(<Select { ...props }/>);
    expect(
      wrapper.find('select.slds-select').prop('disabled')
    ).toBeTruthy();
  });


  // multiple
  it('should render a multiple <Select/> ', () => {
    const props = {
      label: 'Select Label',
      multiple: true,
    };
    const wrapper = shallow(<Select { ...props }/>);
    expect(
      wrapper.find('select.slds-select').prop('multiple')
    ).toBeTruthy();
  });


});


describe('interaction ', () => {
  let wrapper; let props;
  beforeEach(() => {
    props= {
      label: 'Select Label',
      handleChange: jest.fn(),
      options
    };
    wrapper = mount(<Select {...props} />);
  });

  describe('change the select value', () => {
    it('should call the onChange CB', () => {
      wrapper.find('select').simulate('change', {target : { value : 2}});
      expect(wrapper.find('select').props().value).toBe(2);
    });

  });

});
