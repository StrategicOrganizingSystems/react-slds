import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Link from '../src/Link';

const stories = storiesOf('Link', module);

// decorators
stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('basic', () => <Link recordId="001f100001GdbMSAAZ">Test</Link>);
stories.add('basic with instance', () => (
  <Link recordId="001f100001GdbMSAAZ" instance="na55">
      Test
  </Link>
));

stories.add('LEX with inline js', () => {
  window.sforce = {};

  return (
    <Link recordId="001f100001GdbMSAAZ" instance="na55" inlineJs>
      Test
    </Link>
  );
});

stories.add('LEX with NO inline js', () => {
  window.sforce = {};
  return (
    <Link recordId="001f100001GdbMSAAZ" instance="na55">
      Test
    </Link>
  );
});

stories.add('Classic SF', () => {
  window.sforce = null;

  return (
    <Link recordId="001f100001GdbMSAAZ" instance="na55" inlineJs>
      Test
    </Link>
  );
});

stories.add('Lex SF - open new Tab', () => {
  window.sforce = {};

  return (
    <Link
      recordId="001f100001GdbMSAAZ"
      instance="na55"
      objectName="Account"
      openNewTab
    >
      Test
    </Link>
  );
});


stories.add('Classic SF - open new Tab', () => {
  window.sforce = null;

  return (
    <Link
      recordId="001f100001GdbMSAAZ"
      instance="na55"
      objectName="Account"
      openNewTab
    >
      Test
    </Link>
  );
});
