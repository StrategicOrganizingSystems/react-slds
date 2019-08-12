import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import { Toast }  from '../src';

const stories = storiesOf('Toast', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('with text', () => {
  const props = {
    children: text('Content','I am Toast'),
    display: boolean('Display',true)
  };
  return (<Toast {...props} />);
});

stories.add('with some emoji', () => {
  const props = {
    children: text('Content','😀 😎 👍 💯')
  };
  return (<Toast {...props} />);
});

stories.add('change type', () => {
  const props = {
    children: text('Content','Message'),
    type: select('Type', [
      'info', 'warning', 'success', 'error'
    ])
  };
  return (<Toast {...props} />);
});


stories.add('on close event', () => {
  const props = {
    children: text('Content','Message'),
    type: select('Type', [
      'info', 'warning', 'success', 'error'
    ]),
    onClose: action('close button clicked')
  };
  return (<Toast {...props} />);
});

stories.add('with autoClose ', () => {
  const props = {
    children: text('Content','Message'),
    type: select('Type', [
      'info', 'warning', 'success', 'error'
    ]),
    onClose: action('close button auto'),
    autoClose: text('Auto Close', 3000),
  };
  return (
    <Toast {...props} />);
});
stories.add('extra ', () => {
  const props = {
    children: text('Content','Message'),
    type: select('Type', [
      'info', 'warning', 'success', 'error'
    ]),
    onClose: action('close button clicked'),
    isFixed: boolean('Fixed', false),
    isAbsolute: boolean('Absolute', false),
    isStatic: boolean('Static', false),
  };
  return (
    <Toast {...props} />);
});



// missing theme
