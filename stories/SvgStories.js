import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Svg }  from '../src';
import { ButtonTheme }  from '../src/enum';
import { objectValues }  from '../src/utils';


const stories = storiesOf('Svg', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

const props = {
  variant: 'utility',
  icon: 'close',

};

stories.add('sample', () => (
  <Svg {...props} />
));

