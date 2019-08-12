import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import { Select }  from '../src';

const stories = storiesOf('Select', module);

const NOTES ='Options shoud contain array of objects with keys `value` & `text`.';

stories.addDecorator(
  (story, context) => withInfo(NOTES)(story)(context));
stories.addDecorator(withKnobs);


const options =  [
  { value: 1, text: 'Option One'},
  { value: 2, text: 'Option Two'},
  { value: 3, text: 'Option Three'},
];
const knobOptions = {
  1: 'Option One',
  2: 'Option Two',
  3: 'Option Three',
};

stories.add('example with choices', () => {

  const props = {
    options
  };
  return (<Select {...props} />);
});

stories.add('example with default value', () => {

  const props = {
    defaultValue:  select ('Default Value', knobOptions, 1),
    options
  };
  return (<Select {...props} />);
});

stories.add('label', () => {

  const props = {
    label: text('Label','Choices Label'),
    options,
    value: select ('Default Value', knobOptions, 1)
  };
  return (<Select {...props} />);
});

stories.add('handleChange event', () => {
  const props = {
    label: text('Label','Choices Label'),
    options,
    handleChange: action('change selection'),
    name: 'select-box'
  };
  return (<Select {...props} />);
});



// missing theme
