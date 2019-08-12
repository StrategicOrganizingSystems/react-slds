import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Icon from '../src/Icon';
import Button from '../src/Form/Button';

const stories = storiesOf('Icon', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const SIZES = [
  'large',
  'small',
  'x-small',
];

stories.add('type - action', () => {
  const props = {
    variant: 'action',
    icon: 'description',
    title: text('Title','I am Action Icon'),
    size: select('Size', SIZES, 'small')
  };
  return (<Icon {...props} />);
});

stories.add('type - custom', () => {
  const props = {
    variant: 'custom',
    icon: 'custom5',
    title: text('Title','I am Custom Icon'),
    size: select('Size', SIZES, 'small')
  };
  return (<Icon {...props} />);
});

stories.add('type - doctype', () => {
  const props = {
    variant: 'doctype',
    icon: 'xml',
    title: text('Title','I am Doctype Icon'),
    size: select('Size', SIZES, 'small')
  };
  return (<Icon {...props} />);
});

stories.add('type - standard', () => {
  const props = {
    variant: 'standard',
    icon: 'account',
    title: text('Title','I am Standard Icon'),
    size: select('Size', SIZES, 'small')
  };
  return (<Icon {...props} />);
});


stories.add('color', () => {
  const props = {
    variant: 'utility',
    icon: 'announcement',
    title: text('Title','I am utility Icon'),
    color: select('Color', [
      'default',
      'warning',
      'error',
      'light',
    ], 'small')
  };
  return (
    <div>
      <p>Select color on knob</p>
      <Icon {...props} />
    </div>
  );
});





stories.add('with Button', () => {
  const props = {
    variant: 'utility',
    icon: 'announcement',
    title: text('Title','I am utility Icon'),
    color: select('Color', [
      'default',
      'warning',
      'error',
      'light',
    ], 'default')
  };
  return (
    <div>
      <p>Select color on knob</p>
      <Button onClick={ action('clicked')}>
        <Icon {...props} />
      </Button>
    </div>
  );
});










// missing theme
