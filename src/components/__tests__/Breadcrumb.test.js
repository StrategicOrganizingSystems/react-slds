import React from 'react';
import { shallow, mount } from 'enzyme';
import Breadcrumb from '../Breadcrumb.js';

const options =  [
  { text: 'Home' },
  { text: 'Phone' },
  { text: 'Android', link: 'http://www.domain.com' },
];

describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'Breadcrumbs',
      options
    };
    wrapper = shallow(<Breadcrumb { ...props }/>);
  });

  it('should render a <Breadcrumb/>', () => {
    expect(
      wrapper.find('ol.slds-breadcrumb.slds-list_horizontal.slds-wrap')
    ).toHaveLength(1);

    expect(
      wrapper.find('ol.slds-breadcrumb.slds-list_horizontal.slds-wrap')
        .children()
        .last().find('a').props().href
    ).toEqual('http://www.domain.com');

  });
});
