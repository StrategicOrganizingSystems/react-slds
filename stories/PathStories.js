import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Path, { Item, ActionButton, Coaching } from '../src/Path';

const stories = storiesOf('Path', module);

// decorators
stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);
const position = {
  bottom: 'Bottom',
  top: 'Top'
};

stories.add('base', () => (
  <Path>
    <Item isCurrent>Contacted</Item>
    <Item>Open</Item>
    <Item>Unqualified</Item>
    <Item>Nurturing</Item>
    <Item>Closed</Item>
  </Path>
));

stories.add('with overflow', () => (
  <Path withOverflow>
    <Item isCurrent>Contacted</Item>
    <Item>Open</Item>
    <Item>Unqualified</Item>
    <Item>Nurturing</Item>
    <Item>Closed</Item>
  </Path>
));

stories.add('with action button', () => (
  <Path withOverflow>
    <Item isCurrent>Contacted</Item>
    <Item>Open</Item>
    <Item>Unqualified</Item>
    <Item>Nurturing</Item>
    <Item>Closed</Item>
    <ActionButton onClick={() => console.log('Click Action')}>
        Mark Status as Complete
    </ActionButton>
  </Path>
));

stories.add('with active level', () => (
  <Path activeLevel={parseInt(text('Action Level', 1))}>
    <Item>Contacted</Item>
    <Item>Open</Item>
    <Item>Unqualified</Item>
    <Item>Nurturing</Item>
    <Item>Closed</Item>
  </Path>
));

stories.add('with with coaching', () => (
  <Path
    openCoaching={boolean('Open Coaching', false)}
    activeLevel={parseInt(text('Action Level', 1))}
    onClickCoach={() => console.log('Toggle Coaching')}
  >
    <Item>Contacted</Item>
    <Item>Open</Item>
    <Item>Unqualified</Item>
    <Item>Nurturing</Item>
    <Item>Closed</Item>
    <Coaching>
      <div>asd</div>
    </Coaching>
    <ActionButton onClick={() => action('Click Action')}>
        Mark Status as Complete
    </ActionButton>
  </Path>
));
