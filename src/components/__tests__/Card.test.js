import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Card from '../Card.js';

describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'Card Label',
      header: 'Card Header',
      body: 'Card body',
      footer: 'Card footer',
    };
    wrapper = shallow(<Card { ...props }/>);
  });

  it('should render a <Card/>', () => {
    expect(wrapper.find('article.slds-card')).toHaveLength(1);
  });


  it('should render a <Card/> with `div` wrapper', () => {
    const new_props = {
      ...props,
      wrapper: 'div'
    };

    const div_wrapper = shallow(<Card { ...new_props }/>);
    expect(div_wrapper.find('div.slds-card')).toHaveLength(1);
  });

  it('should render a header', () => {
    const elem  = wrapper.find('div.slds-card__header');
    expect(elem).toHaveLength(1);
    expect(elem.props().children).toBe('Card Header');

  });

  it('should render a body', () => {
    const elem  = wrapper.find('div.slds-card__body');
    expect(elem).toHaveLength(1);
    expect(elem.props().children).toBe('Card body');
  });

  it('should render a footer', () => {
    expect(wrapper.find('footer.slds-card__footer')).toHaveLength(1);
    const elem  = wrapper.find('footer.slds-card__footer');
    expect(elem).toHaveLength(1);
    expect(elem.props().children).toBe('Card footer');
  });
});
