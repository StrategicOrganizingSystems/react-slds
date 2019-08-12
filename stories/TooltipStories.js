import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Tooltip  from '../src/Tooltip';

const stories = storiesOf('Tooltip', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const content = text('Content', 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.');
const style = { paddingLeft: '2rem', paddingTop: '5rem', position: 'relative' };
stories.add('sample', () => (<Tooltip style={style} showPopup={boolean('Show Popup', true)}>{ content }</Tooltip>));


stories.add('event - onClick', () => (<Tooltip style={style} showPopup={boolean('Show Popup', true)} onClick={action('clicked icon')}>{ content }</Tooltip>));
