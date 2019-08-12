import React from 'react';
import { render } from 'enzyme';
import Tree from '../Tree.js';

describe('rendering', () => {
  let wrapper, props;

  const Item = Tree.Item;
  beforeEach(() => {

    wrapper = render(<Tree>);
  });

  it('should render a <Tree/>', () => {
    wrapper = render(
      <Tree>
      <Item heading="title"></Item>

    </Tree>);
    expect(wrapper.find("div.slds-tree_container")).toHaveLength(1);
  })

})
