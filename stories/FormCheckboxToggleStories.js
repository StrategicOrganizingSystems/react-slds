import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import CheckboxToggle  from '../src/Form/CheckboxToggle';
import Popover  from '../src/Popover';
import Svg  from '../src/components/Svg';

const stories = storiesOf('Form Checkbox Toggle', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);



stories.add('base', () => (
  <CheckboxToggle label="Tick Me" />
));


stories.add('handle change', () => (
  <CheckboxToggle label="Tick Me" onChange={action('aa')}/>
));



stories.add('with popover', () => {
  const style={
    position: 'absolute',
    top: '-40px',
    left: '-16px',
  };
  const help = (<Popover id="pop-over-demo2"  size="small" nubbin="bottom-left" style={style}>Help me text</Popover>);

  return (<div style={ { paddingTop: '100px'}}>
    <CheckboxToggle label="Tick Me" fieldLevelHelp={ help }/>

  </div>
  );
});
