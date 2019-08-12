import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Form  from '../src/Form/Form';
import Input  from '../src/Form/Input';
import Popover  from '../src/Popover';
import Svg  from '../src/components/Svg';

const stories = storiesOf('Form Input', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);



stories.add('Input', () => (
  <Input className="class-name" label="Input Label" />
));

stories.add('Input no label', () => (
  <Input className="class-name" />
));


stories.add('Input - left icon (utility)', () => (
  <Input className="class-name" label="Input Label" iconLeft="search" />
));



stories.add('Input - left icon (Svg element)', () => {
  const icon  =  <Svg className="custom custom2" variant="utility" icon="people"/>;
  return (
    <Input className="class-name" label="Input Label" iconLeft={ icon } />
  );
});


stories.add('Input - right icon (utility)', () => (
  <Input className="class-name" label="Input Label" iconRight="search" />
));

stories.add('Input - left & right icon (utility)', () => (
  <Input className="class-name" label="Input Label" iconLeft="people" iconRight="search" handleIconClick={ action('Icon clicked')} />
));

stories.add('Input - left & right icon & withSpinner', () => (
  <Input className="class-name" label="Input Label" withSpinner iconLeft="people" iconRight="search" handleIconClick={ action('Icon clicked')} />
));

stories.add('Input - Help & Placeholder', () => (
  <Input className="class-name" label="Input Label" help="help me text" placeholder="Place Holder" />
));

stories.add('Input - Popover Help', () => (
  <Input className="class-name" label="Input Label" help="help me text" placeholder="Place Holder" />
));

stories.add('Input - Field Level Help', () => {
  const style={
    position: 'absolute',
    top: '-77px',
    left: '-16px',
  };
  const help = (<Popover id="pop-over-demo"  size="small" nubbin="bottom-left" style={style}>Help me text</Popover>);

  return ( <div style={ { paddingTop: '100px'}}>

    <Input defaultValue="value" onChange= { action('onchange')} className="class-name" label={text('Label', 'Input Label')}

      fieldLevelHelp={help} />
  </div>
  );
});

stories.add('Input - add props', () => (

  <Input defaultValue="value" onChange= { action('onchange')} className="class-name" label={text('Label', 'Input Label')}
    maxlength="20"  />

));


stories.add('Input - Static', () => (
  <Input defaultValue="value" value="asdasd" onChange= { action('onchange')} className="class-name"
    maxlength="20" isStatic/>
));





stories.add('Example - inline form ', (() => (
  <Form layout="inline">
    <Input  label="Total 1:" addonPre="$"/>
    <Input  label="Total 2:"/>
    <Input  label="Total 3:" id="customid"/>
  </Form>
)
));
