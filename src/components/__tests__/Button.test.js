import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button.js';
import Svg from '../Svg.js';

describe('rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button label="Submit"/>);
  });

  it('should render a <Button/>', () => {
    expect(wrapper.find('button.slds-button')).toHaveLength(1);
  });
});


describe('rendering Button with Icon', () => {
  const props = {
    theme: 'success',
    showIcon:  true,
    iconPosition: 'left',
    variant: 'utility',
    icon: 'download',
    label: 'Click Me now!',
  };
  describe('if showIcon is `true`', () => {

    it('should render if iconPosition is `left`', () => {
      const button = <Button {...props}/>;
      const wrapper = shallow(button);
      expect(wrapper.find('button.slds-button').find('Svg.slds-button__icon.slds-button__icon_left')).toHaveLength(1);
    });

    it('should render if iconPosition is right', () => {
      props.iconPosition = 'right';
      const button = <Button {...props}/>;
      const wrapper = shallow(button);

      expect(wrapper.find('button.slds-button').find('Svg.slds-button__icon.slds-button__icon_right')).toHaveLength(1);
    });
  });

});


describe('interaction ', () => {
  let wrapper; let props;

  beforeEach(() => {
    props= {
      label: 'Submit',
      handleClick: jest.fn()
    };
    wrapper = mount(<Button {...props} />);
  });

  describe('clicking the button', () => {
    // let spy

    beforeEach(() => {
      wrapper.instance().handleClick();
    });
    it('should call the onClick CB', () => {
      expect(props.handleClick).toHaveBeenCalledTimes(1);
    });

  });

});
