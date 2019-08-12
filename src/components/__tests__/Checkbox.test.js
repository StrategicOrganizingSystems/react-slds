import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from '../Checkbox.js';



describe.skip('rendering with one option', () => {

  const options = {
    value: '1',
    label: 'Checkbox 1',
  };

  let wrapper; let props;
  beforeEach(() => {
    props = {
      options
    };
    wrapper = shallow(<Checkbox { ...props }/>);
  });

  it('should render a <Checkbox/>', () => {
    expect(
      wrapper.find('div.slds-form-element')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-form-element__control')
    ).toHaveLength(1);
    expect(
      wrapper.find('span.slds-checkbox').children().find('input').props().type
    ).toEqual('checkbox');
    expect(
      wrapper.find('span.slds-form-element__label')
    ).toHaveLength(1);

  });
});




describe.skip('rendering with multple options', () => {

  const options = [
    {
      value: '1',
      label: 'Checkbox 1',
    },
    {
      value: '2',
      label: 'Checkbox 2',
    },
    {
      value: '3',
      label: 'Checkbox 3',
    },
  ];

  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'Checkboxes',
      options
    };
    wrapper = shallow(<Checkbox { ...props }/>);
  });


  it('should render a <Checkbox/>', () => {
    // console.log(wrapper.debug());
    expect(
      wrapper.find('div.slds-form-element')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-form-element__legend')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-form-element__control')
    ).toHaveLength(1);

    wrapper.find('span.slds-checkbox').children()
      .find('input').map((elem, i) => {
        expect(
          elem.props().type
        ).toEqual('checkbox');
      });

    expect(
      wrapper.find('span.slds-form-element__label')
    ).toHaveLength(options.length);

  });
});

describe('rendering with states', () => {



});
