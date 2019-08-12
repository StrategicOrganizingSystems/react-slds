import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import VerticalNav, { Section, Item } from '../src/VerticalNav';
import Svg from '../src/components/Svg';

const stories = storiesOf('VerticalNav', module);
// decorators
stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('basic', () => {
  const props = {
    label: text('Header', 'VerticalNav Header')
  };
  return (
    <VerticalNav {...props}>
      <Section header="Reports">
        <Item url="#link1">Item 1</Item>
        <Item url="#link2" isActive>
          Item 2
        </Item>
        <Item>Item 3</Item>
      </Section>
    </VerticalNav>
  );
});

stories.add('with action', () => {
  const props = {
    label: text('Header', 'VerticalNav Header')
  };
  return (
    <VerticalNav {...props}>
      <Section header="Reports">
        <Item url="#" isActive onClick={e => action(e)}>
          Item 1
        </Item>
        <Item url="">Item 2</Item>
        <Item>Item 3</Item>
      </Section>
    </VerticalNav>
  );
});

stories.add('with icon', () => {
  const props = {
    label: text('Header', 'VerticalNav Header')
  };
  return (
    <VerticalNav {...props}>
      <Section header="Reports">
        <Item
          variant="utility"
          icon="open_folder"
          url="#"
          isActive
          onClick={e => action(e)}
        >
          Item 1
        </Item>
        <Item url="">Item 2</Item>
        <Item> Item 3</Item>
      </Section>
    </VerticalNav>
  );
});

stories.add('usign props currentUrl', () => {
  const props = {
    label: text('Header', 'VerticalNav Header')
  };
  return (
    <VerticalNav {...props}>
      <Section header="Reports" currentUrl={text('Current Url', '#link1')}>
        <Item url="#link1">Item 1</Item>
        <Item url="#link2">Item 2</Item>
        <Item>Item 3</Item>
      </Section>
    </VerticalNav>
  );
});

stories.add('isActive', () => {
  const props = {
    label: text('Header', 'VerticalNav Header')
  };
  return (
    <VerticalNav {...props}>
      <Section header="Reports">
        <Item url="#link1">Item 1</Item>
        <Item url="#link2">Item 2</Item>
        <Item isActive>Item 3</Item>
      </Section>
    </VerticalNav>
  );
});

stories.add('Compact', () => {
  const props = {
    label: text('Header', 'VerticalNav Header'),
    isCompact: boolean('Is Compact', true)
  };
  return (
    <VerticalNav {...props}>
      <Section header="Reports">
        <Item url="#link1">Item 1</Item>
        <Item url="#link2">Item 2</Item>
        <Item isActive>Item 3</Item>
      </Section>
    </VerticalNav>
  );
});

stories.add('with input', () => {
  const props = {
    label: text('Header', 'VerticalNav Header')
  };
  return (
    <VerticalNav {...props}>
      <Section header="Reports">
        <Item url="#link1">
          <input type="text" className="slds-input" onChange={e => console.log(e)}/>
        </Item>
        <Item url="#link2">Item 2</Item>
        <Item isActive>Item 3</Item>
      </Section>
    </VerticalNav>
  );
});
