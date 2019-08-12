import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Tree, { Item, Branch }  from '../src/Tree';
// decorators
const stories = storiesOf('Tree', module);

stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);


stories.add('Base', () => {
  const props = {
    label: text('Header', 'Tree Header'),
  };
  return (
    <Tree {...props}>
      <Item>Tree Item 1</Item>
      <Item>Tree Item 2</Item>
      <Item>Tree Item 3</Item>
    asdasd
    </Tree>);
});

stories.add('with disabled', () => {
  const props = {
    label: text('Header', 'Tree Header'),
  };
  return (
    <Tree {...props}>
      <Item isDisabled>Tree Item 1</Item>
      <Item>Tree Item 2</Item>
      <Item>Tree Item 3</Item>
    </Tree>);
});

stories.add('with subtree', () => {
  const props = {
    label: text('Header', 'Tree Header'),
  };
  const branchProps = {
    isExpanded: boolean('Expanded', true),
  };
  return (
    <Tree {...props}>
      <Branch label="Branch 1"  { ...branchProps }>
        <Item level={ 2 }>SubTree Item 1</Item>
      </Branch>
      <Item>Tree Item 2</Item>
      <Item>Tree Item 3</Item>
    </Tree>);
});

stories.add('with subtree & event', () => {
  const props = {
    label: text('Header', 'Tree Header'),
  };
  const branchProps = {
    isExpanded: boolean('Expanded', true),
    onClick: action('clicked'),
  };
  return (
    <Tree {...props}>
      <Branch label="Branch 1" level="1"   { ...branchProps } >
        <Item onClick={ action('Item Clicked') }>SubTree Item 1</Item>
        <Item onClick={ action('Item Clicked') } isSelected>SubTree Item 2</Item>
        <Branch label="Sub Branch 1" level="2"  isExpanded={ boolean('Expanded Sub', true)  }>
          <Item onClick={ action('Item Clicked') }>Level 3 SubTree Item 1</Item>
          <Item onClick={ action('Item Clicked') }>Level 3 SubTree Item 2</Item>
        </Branch>
      </Branch>
      <Item>Tree Item 2</Item>
      <Item>Tree Item 3</Item>
    </Tree>);
});


stories.add('with branches', () => {
  const props = {
    label: text('Header', 'Tree Header'),
  };
  const branchProps = {
    isExpanded: boolean('Expanded', true),
    onClick: action('clicked'),
  };
  return (
    <Tree {...props}>
      <Branch label="Branch 1" level="1"   { ...branchProps } >
        <Branch label="Sub Branch 1" level="2"  isExpanded={ boolean('Expanded Sub', true)  }>
          <Branch label="Sub Branch 1" level="2"  isExpanded={ boolean('Expanded Sub', true)  }>
            <Item onClick={ action('Item Clicked') }>Level 3 SubTree Item 1</Item>
            <Item onClick={ action('Item Clicked') }>Level 3 SubTree Item 2</Item>
          </Branch>
          <Item onClick={ action('Item Clicked') }>Level 3 SubTree Item 2</Item>
        </Branch>
        <Branch label="Sub Branch 2" level="2"  isExpanded={ boolean('Expanded Sub', true)  }>
          <Item onClick={ action('Item Clicked') }>Level 4 SubTree Item 1</Item>
          <Item onClick={ action('Item Clicked') }>Level 4 SubTree Item 2</Item>
        </Branch>
      </Branch>
      <Item>Tree Item 2</Item>
      <Item>Tree Item 3</Item>
    </Tree>);
});
