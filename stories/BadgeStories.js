import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import { Badge }  from '../src';

const stories = storiesOf('Badge', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('with text', () => {
  const props = {
    label: text('Label','I am Badge')
  };
  return (<Badge {...props} />);
});

stories.add('with some emoji', () => {
  const props = {
    label: text('Label','😀 😎 👍 💯')
  };
  return (<Badge {...props} />);
});

stories.add('inverse', () => {
  const props = {
    label: text('Label','I am another Badge'),
    inverse: boolean('Inverse', true)
  };
  return (<Badge {...props} inverse />);
});



// missing theme
