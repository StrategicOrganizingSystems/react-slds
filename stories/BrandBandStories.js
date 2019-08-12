import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import map from 'lodash.map';

import { Brand  } from '../src/enum';
import BrandBand  from '../src/BrandBand';

const stories = storiesOf('BrandBand 2', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);


stories.add('sample', () => {
  const props = {
    brand: select('Band', map(Brand, n => n), 'none')
    // brand: "none"
  };
  return (<BrandBand {...props} />);
});
