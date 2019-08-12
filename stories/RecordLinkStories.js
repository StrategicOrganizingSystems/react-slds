import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import RecordLink from '../src/RecordLink';

const stories = storiesOf('RecordLink', module);

// decorators
stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const props = {
  domain: 'https://cvrsos.na55.visual.force.com',
  instance: 'na55',
  objectName: 'Account',
  recordId: '001f100001GdbMSAAZ'
};

stories.add('LEX', () => {
  window.sforce = {};
  return <RecordLink {...props}>Test</RecordLink>;
});

stories.add('Classic', () => {
  window.sforce = null;
  return <RecordLink {...props}>Test</RecordLink>;
});

stories.add('LEX - Open New Tab', () => {
  window.sforce = {};
  return (
    <RecordLink {...props} openNewTab>
      Test
    </RecordLink>
  );
});

stories.add('Classic - Open New Tab', () => {
  window.sforce = null;
  return (
    <RecordLink {...props} openNewTab>
      Test
    </RecordLink>
  );
});


stories.add('a tag props', () => {
  window.sforce = {};
  return <RecordLink {...props} title="Title Test">Test</RecordLink>;
});
