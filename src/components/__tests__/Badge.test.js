import React from 'react';
import { shallow, mount } from 'enzyme';
import Badge from '../Badge.js';

describe('rendering', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'Badge Label',
    };
    wrapper = shallow(<Badge { ...props }/>);
  });

  it('should render a <Badge/>', () => {
    expect(wrapper.find('span.slds-badge')).toHaveLength(1);
  });
});

describe('rendering if inverted is `true`', () => {
  let wrapper; let props;
  beforeEach(() => {
    props = {
      label: 'Badge Label',
      inverse: true
    };
    
    wrapper = shallow(<Badge { ...props }/>);
  });

  it('should render a <Badge/>', () => {
    expect(wrapper.find('span.slds-badge.slds-badge_inverse')).toHaveLength(1);
  });
});

// if lightest is true??
