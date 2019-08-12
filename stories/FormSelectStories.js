import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Select, {Option}  from '../src/Form/Select';
import Popover  from '../src/Popover';
import Svg  from '../src/components/Svg';

const stories = storiesOf('Form Select', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);



stories.add('Select', () => (
  <Select defaultValue={2}>
    <Option disabled> Select one</Option>
    <Option value={ 1 } >1</Option>
    <Option value={ 2 } >2</Option>
    <Option value={ 3 } >3</Option>
  </Select>
));

stories.add('Select - handle change', () => (
  <Select defaultValue={2} onChange={action('select change')}>
    <Option disabled> Select one</Option>
    <Option value={ 1 } >1</Option>
    <Option value={ 2 } >2</Option>
    <Option value={ 3 } >3</Option>
  </Select>
));

stories.add('Select - popover', () => {
  const style={
    position: 'absolute',
    top: '-40px',
    left: '-16px',
  };
  const help = (<Popover id="pop-over-demo2"  size="small" nubbin="bottom-left" style={style}>Help me text</Popover>);

  return (<div style={ { paddingTop: '100px'}}>
    <Select label="Select one" defaultValue={2} fieldLevelHelp={ help }>
      <Option value={ 1 } >1</Option>
      <Option value={ 2 } >2</Option>
      <Option value={ 3 } >3</Option>
    </Select>
  </div>
  );
});
