import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import NotificationBubble from '../src/NotificationBubble';
import ButtonIcon from '../src/Form/ButtonIcon';


const stories = storiesOf('NotificationBubble', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs)

let props = {
  variant: "utility",
  icon: "search",
}

const lightStyle = {
    padding: '0.5rem',
    backgroundColor: 'rgb(244, 246, 249)'
};

const darkStyle = {
    padding: '0.5rem',
    backgroundColor: 'rgb(22, 50, 92)'
};

stories.add('base - with ButtonIcon', () => {
  return (
    <NotificationBubble count={text('Count', 1)}>
      <ButtonIcon {...props} icon="notification" iconSize="small" />
    </NotificationBubble>
  )
});
