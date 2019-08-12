import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Breadcrumb, { Item }  from '../src/Breadcrumb';

const stories = storiesOf('Breadcrumb 2', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);


stories.add('with text', () => (<Breadcrumb>
  <Item> Text 1  </Item>
  <Item>Text 2</Item>
  <Item>Text 3</Item>
</Breadcrumb>));





// missing theme
