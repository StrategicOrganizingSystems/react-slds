import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import NameValueList, { Label, Detail}  from '../src/NameValueList';

const stories = storiesOf('NameValueList', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);



stories.add('Horizontal', () => (
  <NameValueList type="horizontal">
    <Label title="First Label">First Label:</Label>
    <Detail>Description for first label</Detail>
    <Label title="Second Label">Second Label:</Label>
    <Detail>Description for second label</Detail>
  </NameValueList>
));
stories.add('Inline', () => (
  <NameValueList type="inline">
    <Label title="First Label">First Label:</Label>
    <Detail>Description for first label</Detail>
    <Label title="Second Label">Second Label:</Label>
    <Detail>Description for second label</Detail>
  </NameValueList>
));
stories.add('Stacked', () => (
  <NameValueList type="stacked">
    <Label title="First Label">First Label:</Label>
    <Detail>Description for first label</Detail>
    <Label title="Second Label">Second Label:</Label>
    <Detail>Description for second label</Detail>
  </NameValueList>
));

stories.add('Stacked with custom class', () => (
  <NameValueList type="stacked" className="listxsa">
    <Label title="First Label">First Label:</Label>
    <Detail>Description for first label</Detail>
    <Label title="Second Label">Second Label:</Label>
    <Detail>Description for second label</Detail>
  </NameValueList>
));
