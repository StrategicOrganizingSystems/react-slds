import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Notification, {Item}  from '../src/Notification';

const stories = storiesOf('Notification', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('Base', () => (
  <div className="demo-only slds-is-relative">
    <Notification>
      <Item title="Tesla - Renewal meeting" description="Event at 11:00am on Jan 8"/>
    </Notification>
  </div>
));

stories.add('Task notification', () => (
  <div className="demo-only slds-is-relative">
    <Notification>
      <Item type="task" title="Call Two: Jane Johnson" description="Task due on Jan 8"/>
    </Notification>
  </div>
));

stories.add('Stacked notification', () => (
  <div className="demo-only slds-is-relative">
    <Notification>
      <Item type="task" title="Call Two: Jane Johnson" description="Task due on Jan 8"/>
      <Item title="Tesla - Renewal meeting" description="Event at 11:00am on Jan 8"/>
    </Notification>
  </div>
));

stories.add('Three stacked notification', () => (
  <div className="demo-only slds-is-relative">
    <Notification>
      <Item type="task" title="Call Two: Jane Johnson" description="Task due on Jan 8"/>
      <Item title="Tesla - Renewal meeting" description="Event at 11:00am on Jan 8"/>
      <Item type="task" title="Call Three: Jim Jameson" description="Task due on Jan 8"/>
    </Notification>
  </div>
));

stories.add('Six stacked notification', () => (
  <div className="demo-only slds-is-relative">
    <Notification>
      <Item type="task" title="Call Two: Jane Johnson" description="Task due on Jan 8"/>
      <Item title="Tesla - Renewal meeting" description="Event at 11:00am on Jan 8"/>
      <Item type="task" title="Call Three: Jim Jameson" description="Task due on Jan 8"/>
      <Item type="task" title="Call Three: Jim Jameson" description="Task due on Jan 8"/>
      <Item type="task" title="Call Three: Jim Jameson" description="Task due on Jan 8"/>
      <Item type="task" title="Call Three: Jim Jameson" description="Task due on Jan 8"/>
      <Item type="task" title="Call Three: Jim Jameson" description="Task due on Jan 8"/>
    </Notification>
  </div>
));


stories.add('Base -  onClose', () => (
  <div className="demo-only slds-is-relative">
    <Notification>
      <Item title="Tesla - Renewal meeting" description="Event at 11:00am on Jan 8" onClose={action('onClose')}/>
    </Notification>
  </div>
));
