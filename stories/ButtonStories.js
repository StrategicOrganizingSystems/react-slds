import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { Button }  from '../src';
import { ButtonTheme }  from '../src/enum';
import { objectValues }  from '../src/utils';


const stories = storiesOf('Button', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

let props = {
  label: text('Label','Submit')
};

stories.add('with text', () => (
  <Button {...props} />
));

stories.add('with theme', () => {
  props = {
    ...props,
    theme: select ('theme',  ['neutral', 'brand', 'inverse', 'destructive', 'success'], ButtonTheme.NEUTRAL)
  };
  return (<Button {...props}
  />
  );});


stories.add('with click event', () => {
  props = {
    ...props,
    theme: ButtonTheme.SUCCESS,
    handleClick: action('clicked')
  };
  return (<Button {...props} />
  );});
