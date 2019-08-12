import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import ScopedNotification from '../src/ScopedNotification';

const stories = storiesOf('ScopedNotification', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);




stories.add('basic', () => (
  <ScopedNotification variant={text('Variant','utility')} icon={text('icon', 'info')}>
    <p>It looks as if duplicates exist for this lead. <a href="javascript:void(0);">View Duplicates.</a></p>
  </ScopedNotification>
));



stories.add('light theme', () => (
  <ScopedNotification variant={text('Variant','utility')} icon={text('icon', 'info')} theme="light">
    <p>It looks as if duplicates exist for this lead. <a href="javascript:void(0);">View Duplicates.</a></p>
  </ScopedNotification>
));

stories.add('dark theme', () => (
  <ScopedNotification variant={text('Variant','utility')} icon={text('icon', 'info')} theme="dark">
    <p>It looks as if duplicates exist for this lead. <a href="javascript:void(0);">View Duplicates.</a></p>
  </ScopedNotification>
));
