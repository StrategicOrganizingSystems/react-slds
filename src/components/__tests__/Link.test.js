import React from 'react';
import { shallow, mount } from 'enzyme';
import Link from '../Link.js';

describe('rendering', () => {
  let wrapper; let props;

  it('should render a <Link/>', () => {
    props = {
      className: 'link',
    };
    wrapper = shallow(<Link { ...props }>Link Label</Link>);
    expect(wrapper.find('a.link')).toHaveLength(1);
  });

  it('should render a <Link/> with href=javscript:void()', () => {
    props = {
      className: 'link'
    };
    wrapper = shallow(<Link { ...props }>Link Label</Link>);

    expect(wrapper.find('a.link').props().href).toBe('javscript:void(0)');
    // expect(wrapper.find("a.link")).toHaveLength(1);
  });

});
