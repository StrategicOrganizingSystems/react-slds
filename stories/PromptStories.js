import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Prompt  from '../src/Prompt';

const stories = storiesOf('Prompt', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const errorMsg = 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.';

stories.add('base', () => (
  <Prompt heading="Error">{errorMsg}</Prompt>
));



stories.add('footer', () => {
  const footer = (<button>Okay</button>);
  return (
    <Prompt heading="Error" footer={ footer }>{errorMsg}</Prompt>
  );
});

stories.add('onEscapeClick', () => (
  <Prompt heading="Error" onClickEscape={action('escape clicked')}>{errorMsg}</Prompt>
));
