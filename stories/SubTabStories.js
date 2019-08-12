import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import SubTab, { Panel } from '../src/SubTab';

const stories = storiesOf('SubTab', module);

// decorators
stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('base', () => {
  const props = {};
  return (
    <SubTab {...props}>
      <Panel title="Tab 1">Tab Content 1</Panel>
      <Panel title="Tab 2">Tab Content 2</Panel>
    </SubTab>
  );
});

stories.add('base with Event', () => {
  const props = {};
  return (
    <SubTab {...props}>
      <Panel title="Tab 1" onTabClick={action('tab 1 clicked')}>Tab Content 1</Panel>
      <Panel title="Tab 2">Tab Content 2</Panel>
    </SubTab>
  );
});

// missing theme
