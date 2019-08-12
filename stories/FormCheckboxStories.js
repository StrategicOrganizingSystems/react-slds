import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Checkbox, {Option}  from '../src/Form/Checkbox';
import Popover  from '../src/Popover';
import Svg  from '../src/components/Svg';

const stories = storiesOf('Form Checkbox', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);



stories.add('Checkbox', () => (
  <Checkbox label="Tick Me" />
));


stories.add('Checkbox - handle change', () => (
  <Checkbox label="Tick Me" onChange={action('aa')}/>
));



stories.add('Checkbox - popover', () => {
  const style={
    position: 'absolute',
    top: '-40px',
    left: '-16px',
  };
  const help = (<Popover id="pop-over-demo2"  size="small" nubbin="bottom-left" style={style}>Help me text</Popover>);

  return (<div style={ { paddingTop: '100px'}}>
    <Checkbox label="Tick Me" fieldLevelHelp={ help }/>

  </div>
  );
});
