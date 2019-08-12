import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Button from '../src/Form/Button';
import { objectValues }  from '../src/utils';


const stories = storiesOf('Button', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

let props = {
  children: text('Label','Submit')
};

const themes = ['','neutral','brand','outline brand','inverse','destructive','success'];


stories.add('with text', () => (
  <Button {...props} />
));

stories.add('with theme', () => {
  props = {
    ...props,
    theme: select ('theme', themes, '')
  };
  return (<Button {...props}/>
  );});


stories.add('with click event', () => {
  props = {
    ...props,
    theme: select ('theme', themes, ''),
    onClick: action('clicked')
  };
  return (<Button {...props} />
  );});

stories.add('with left icon', () => {
  const myprops = {
    ...props,
    theme: select ('theme', themes, ''),
    leftIcon: 'download'
  };
  return (<Button {...myprops} />
  );});

stories.add('with right icon', () => {
  const myprops = {
    ...props,
    theme: select ('theme', themes, ''),
    rightIcon: 'download'
  };
  return (<Button {...myprops} />
  );});

stories.add('disabled', () => (
  <div>
    <Button disabled theme="brand">Click Me</Button>
    <Button disabled theme="brand"> True</Button>
    <Button disabled theme="brand">false</Button>
    <Button disabled={ null} theme="brand">null</Button>
  </div>

));
