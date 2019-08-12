import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import { Card }  from '../src';

const stories = storiesOf('Card', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);


stories.add('basic', () => {

  const content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  const props = {
    header: text('Header', 'Card Header'),
    body: (<div className="slds-p-around_small">{ content }</div>),
  };
  return (<Card { ...props } />);
});

stories.add('with footer', () => {

  const content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  const props = {
    header: text('Header', 'Card Header'),
    body: (<div className="slds-p-around_small">{ content }</div>),
    footer: text('Footer', 'Card Footer'),
  };
  return (<Card { ...props } />);
});
