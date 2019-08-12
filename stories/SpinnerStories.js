import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Spinner  from '../src/Spinner';

const stories = storiesOf('Spinner', module);


const Demo = props => (
  <div style={{height: '50vh'}} {...props}/>
);


// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Demo>
    <Spinner />
  </Demo>
));

stories.add('sizes', () => {
  const props = {
    size: select('Size', Spinner.sizes, 'small')
  };
  return (
    <Demo>
      <Spinner {...props}/>
    </Demo>
  );
});



stories.add('brand', () => {
  const props = {
    size: select('Size', Spinner.sizes, 'small')
  };
  return (
    <Demo>
      <Spinner {...props} brand/>
    </Demo>
  );
});

stories.add('inverse', () => {
  const props = {
    size: select('Size', Spinner.sizes, 'small')
  };
  return (
    <Demo style={{height: '50vh', background: 'maroon'}}>
      <Spinner {...props} inverse/>
    </Demo>
  );
});

stories.add('withContainer', () => {
  const props = {
    size: select('Size', Spinner.sizes, 'small')
  };
  return (
    <Demo>
      <Spinner {...props} withContainer />
    </Demo>
  );
});
stories.add('with text', () => {
  const props = {
    size: select('Size', Spinner.sizes, 'x-small'),
    textMarginLeft: select('Text Margin Left', Spinner.sizes, 'x-small')
  };
  return (
    <div style={{height: '50vh'}} className="slds-align_absolute-center">
      <Spinner {...props}  text="Loading Content"  />
    </div>
  );
});
