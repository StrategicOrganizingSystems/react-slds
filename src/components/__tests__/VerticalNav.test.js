import React from 'react';
import { shallow, render, mount } from 'enzyme';
import VerticalNav, { Section, Item }  from '../VerticalNav.js';

describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'VerticalNav Label',
      children: 'Content'
    };
    wrapper = shallow(<VerticalNav {...props} />);
  });

  it('should render a <VerticalNav/>', () => {
    const nav = wrapper.find('nav.slds-nav-vertical');
    expect( nav ).toHaveLength(1);
    expect( nav.prop('children') ).toEqual('Content');
  });


});


describe('rendering With Section', () => {
  let wrapper; let props;
  it('should render a <Section /> with Header', () => {

    props = {
      header: 'VerticalNav Label with section',
    };
    wrapper = mount(
      <VerticalNav >
        <Section {...props}>
          Content
        </Section>
      </VerticalNav>
    );
    expect(
      wrapper.find('nav.slds-nav-vertical')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-nav-vertical__section')
    ).toHaveLength(1);
  });

  it('should render 3 <VerticalNav/>', () => {

    props = {
      label: '3 VerticalNav Label with section',
    };
    wrapper = mount(
      <VerticalNav {...props}>
        <Section> Content 1</Section>
        <Section> Content 2</Section>
        <Section> Content 3</Section>
      </VerticalNav>
    );
    expect(
      wrapper.find('nav.slds-nav-vertical')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-nav-vertical__section')
    ).toHaveLength(3);
  });

});


describe('rendering With Section and Item', () => {
  let wrapper; let props;
  it('should render a <VerticalNav/>', () => {

    props = {
      label: 'VerticalNav Label with section',
    };
    wrapper = mount(
      <VerticalNav {...props}>
        <Section>
          <Item >Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Section>
      </VerticalNav>
    );
    expect(
      wrapper.find('nav.slds-nav-vertical')
    ).toHaveLength(1);
    expect(
      wrapper.find('div.slds-nav-vertical__section')
    ).toHaveLength(1);
    expect(
      wrapper.find('li.slds-nav-vertical__item')
    ).toHaveLength(3);
  });


});
