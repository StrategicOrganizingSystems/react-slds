import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import { Icon }  from '../src';

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

stories.add('with description', () => {
  const props = {
    variant: 'standard',
    icon: 'search',
    description: text('Description','I am Icon'),
    size: select('Size', SIZES, 'small')
  };
  return (<Icon {...props} />);
});


// missing theme
