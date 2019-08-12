import React from 'react';
import { shallow, mount } from 'enzyme';
import Text from '../../Text.js';

describe('rendering Text Body', () => {

  it('should render a <div/> with class `slds-text-body_regular`', () => {
    const props  = {
      label: 'Text label',
      textBody: 'regular'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-body_regular')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-body_small`', () => {
    const props  = {
      label: 'Text label',
      textBody: 'small'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-body_small')
    ).toEqual(true);
  });


});
describe('rendering Text Heading', () => {

  it('should render a <div/> with class `slds-text-heading_large`', () => {
    const props  = {
      label: 'Text label',
      textHeading: 'large'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-heading_large')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-heading_medium`', () => {
    const props  = {
      label: 'Text label',
      textHeading: 'medium'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-heading_medium')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-heading_small`', () => {
    const props  = {
      label: 'Text label',
      textHeading: 'small'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-heading_small')
    ).toEqual(true);
  });
});

describe('rendering Text title', () => {

  it('should render a <div/> with class `slds-text-title', () => {
    const props  = {
      label: 'Text label',

    };
    const wrapper = shallow(<Text { ...props } textTitle/>);
    expect(
      wrapper.hasClass('slds-text-title')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-title_caps`', () => {
    const props  = {
      label: 'Text label',
    };
    const wrapper = shallow(<Text { ...props } caps/>);
    expect(
      wrapper.hasClass('slds-text-title_caps')
    ).toEqual(true);
  });

});



describe('rendering Text Color', () => {

  it('should render a <div/> with class `slds-text-color_default`', () => {
    const props  = {
      label: 'Text label',
      textColor: 'default'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-color_default')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-color_weak`', () => {
    const props  = {
      label: 'Text label',
      textColor: 'weak'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-color_weak')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-color_error`', () => {
    const props  = {
      label: 'Text label',
      textColor: 'error'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-color_error')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-color_success`', () => {
    const props  = {
      label: 'Text label',
      textColor: 'success'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-color_success')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-color_inverse`', () => {
    const props  = {
      label: 'Text label',
      textColor: 'inverse'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-color_inverse')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-color_inverse-weak`', () => {
    const props  = {
      label: 'Text label',
      textColor: 'inverse-weak'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-color_inverse-weak')
    ).toEqual(true);
  });

});


describe('rendering Text align', () => {

  it('should render a <div/> with class `slds-text-align_left', () => {
    const props  = {
      label: 'Text label',
      textAlign: 'left'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-align_left')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-align_center', () => {
    const props  = {
      label: 'Text label',
      textAlign: 'center'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-align_center')
    ).toEqual(true);
  });

  it('should render a <div/> with class `slds-text-align_right', () => {
    const props  = {
      label: 'Text label',
      textAlign: 'right'
    };
    const wrapper = shallow(<Text { ...props } />);
    expect(
      wrapper.hasClass('slds-text-align_right')
    ).toEqual(true);
  });



});



describe('rendering Text Long Form', () => {


  it('should render a <div/> with class `slds-text-longform`', () => {
    const props  = {
      label: 'Text label',
    };
    const wrapper = shallow(<Text { ...props } longForm/>);
    expect(
      wrapper.hasClass('slds-text-longform')
    ).toEqual(true);
  });

});
