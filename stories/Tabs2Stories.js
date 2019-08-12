import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text,select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Tabs, { Item }  from '../src/Tabs';

const stories = storiesOf('Tabs 2', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);
const position = {
  bottom: 'Bottom',
  top: 'Top',
};

stories.add(' sample', () => (<Tabs menuPosition={ select('Menu Position', position)} >
  <Item label="Text 1">
    <div>Panel 1</div>
  </Item>
  <Item  label="Text 2">
    <div>Panel 2</div>
  </Item>
  <Item label="Text 3">
    <div>Panel 3</div>
  </Item>
</Tabs>));

stories.add('event', () => (<Tabs menuPosition={ select('Menu Position', position)}>
  <Item label="Text 1" onClick={ (e) => { console.log(e);} }>
    <div>Panel 1</div>
  </Item>
  <Item label="Text 2" >
    <div>Panel 2</div>
  </Item>
  <Item label="Text 3" >
    <div>Panel 3</div>
  </Item>
</Tabs>));

stories.add('Variant Sub tabs', () => (<Tabs isSubTabs menuPosition={ select('Menu Position', position)}>
  <Item label="Text 1" onClick={ (e) => { console.log(e);} } onClose={ action('Close Text 1') }>
    <div>Panel 1</div>
  </Item>
  <Item  label="Text 2"  onClose={ action('Close Text 2') }>
    <div>Panel 2</div>
  </Item>
  <Item  label="Text 3"  onClose={ action('Close Text 3') }>
    <div>Panel 3</div>
  </Item>
</Tabs>));





// missing theme
