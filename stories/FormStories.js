import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Form, { Control }  from '../src/Form/Form';
import FormElement  from '../src/Form/Element';
import Input  from '../src/Form/Input';
import Textarea  from '../src/Form/Textarea';
import Checkbox  from '../src/Form/Checkbox';
import Radio  from '../src/Form/Radio';
import Datepicker  from '../src/Form/Datepicker';

const stories = storiesOf('Form', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);
const checked = false;
stories.add('base', () => (
  <FormElement>
    <Control>
      <Input label="Text Input" placeholder="Placeholder Text"/>
    </Control>
    <Control>
      <Checkbox name="cb" label="Checkbox 1" checked={ checked } onClick ={ console.log('haha')}/>
    </Control>
  </FormElement>
));

stories.add('layout with knobs', () => {
  const layout = {
    'stacked': 'stacked',
    'inline': 'inline',
    'horizontal': 'horizontal',
    'compound': 'compound'
  };
  return (
    <Form layout={select('Layout', layout)}>
      <FormElement>
        <Input label="Text Input" placeholder="Placeholder Text"/>
      </FormElement>
      <FormElement>
        <Textarea label="Textarea Input" placeholder="Placeholder Textarea"/>
      </FormElement>
      <FormElement>
        <Input label="Text Input" placeholder="Placeholder Text"/>
      </FormElement>
      <FormElement>
        <Textarea label="Textarea Input" placeholder="Placeholder Textarea"/>
      </FormElement>
      <FormElement>
        <Datepicker label="Datepicker Input" placeholder="Placeholder Textarea"/>
      </FormElement>
    </Form>
  );
});
