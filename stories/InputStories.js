import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import { Input }  from '../src';

const stories = storiesOf('Input', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('with text', (() => {
  const props = {
    value: text('Value','I am Input'),
  };
  return (<Input {...props} />);
}));

stories.add('handleChange event', (() => {
  const props = {
    value: text('Value','I am Input'),
    handleChange: action('change text')
  };
  return (  <Input {...props} />);
}
));

stories.add('placeholder', (() => {
  const props = {
    placeHolder: text('Placeholder','Enter your name')
  };
  return (  <Input {...props} />);
}
));

stories.add('disabled', (() => {
  const props = {
    value: text('Value','I am Input'),
    disabled: boolean('Disabled', true)
  };
  return (  <Input {...props} />);
}
));

stories.add('label', (() => {
  const props = {
    label: text('Label','Field Label'),
    value: text('Value','Test Input'),

  };
  return (  <Input {...props} />);
}
));

stories.add('required', (() => {
  const props = {
    label: text('Label','Enter your name:'),
    required: boolean('Required', true)
  };
  return (  <Input {...props} />);
}
));
stories.add('static', withNotes('Display the input value as text')(() => {
  const props = {
    value: text('Value','I am Static Input'),
    isStatic: boolean('Static', true)
  };
  return (  <Input {...props} />);
}
));

stories.add('readonly', (() => {
  const props = {
    value: text('Value','Read Only Input'),
    readOnly: boolean('Readonly', true)
  };
  return (  <Input {...props} />);
}
));
