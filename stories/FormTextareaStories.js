import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Form from '../src/Form/Form';
import Textarea from '../src/Form/Textarea';

const stories = storiesOf('Form Textarea', module);

// decorators
stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const value =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit, illo rem beatae hic quibusdam cumque harum esse fugiat repudiandae optio blanditiis quia, magni magnam vel. Sed iste, modi. Voluptate.';

stories.add('base', () => <Textarea className="class-name" label="Textarea Label" />);

stories.add('disabled', () => <Textarea disabled label="Textarea Label" />);

stories.add('required', () => <Textarea label="Textarea Label" required />);

stories.add('error', () => (
  <Textarea
    label="Textarea Label"
    hasError
    required
    help="This field is required"
  />
));

stories.add('readonly/ static', () => (
  <div>
    <Textarea
      label="Textarea Label"
      readOnly={boolean('Static', true)}
      value={value}
    />
  </div>
));

stories.add('event', () => (
  <div>
    <Textarea
      label="Textarea Label"
      onChange={e => console.log(e.target.value)}
    />
  </div>
));

// stories.add('Example - inline form ', (() => (
//   <Form layout="inline">
//     <Input  label="Total 1:" addonPre="$"/>
//     <Input  label="Total 2:"/>
//     <Input  label="Total 3:" id="customid"/>
//   </Form>
// )
// ));
