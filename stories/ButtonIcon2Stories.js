import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
// import backgrounds from "@storybook/addon-backgrounds";


import ButtonIcon from '../src/Form/ButtonIcon';
import { ButtonIconTheme }  from '../src/enum';
import { objectValues }  from '../src/utils';



const stories = storiesOf('ButtonIcon', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);
//    .addDecorator(backgrounds([
//   { name: "twitter", value: "#00aced", default: true },
//   { name: "facebook", value: "#3b5998" },
// ]));

const props = {
  variant: 'utility',
  icon: 'search',
};

const lightStyle = {
  padding: '0.5rem',
  backgroundColor: 'rgb(244, 246, 249)'
};

const darkStyle = {
  padding: '0.5rem',
  backgroundColor: 'rgb(22, 50, 92)'
};

stories.add('variant - Base', () => (
  <ButtonIcon {...props} onClick={ action('Clicked close') }/>
));


stories.add('variant - Bordered Filled Container', () => (
  <div style={ lightStyle }>
    <ButtonIcon {...props}  iconBorder="filled"/>
  </div>
));

stories.add('variant - Bordered Inverse ', () => (
  <div style={ darkStyle }>
    <ButtonIcon {...props}  iconBorder="inverse"/>
  </div>
));

stories.add('variant - Bordered Transparent Container ', () => (
  <div style={ lightStyle }>
    <ButtonIcon {...props}  iconBorder/>
  </div>
));


stories.add('variant - Brand', () => (
  <ButtonIcon {...props}  brand/>
));


stories.add('variant - Inverse', () => (
  <div style={ darkStyle }>
    <ButtonIcon {...props}  inverse/>
  </div>
));
stories.add('variant - Stateful ', () => (
  <div>
      Selected = false <br/>
    <ButtonIcon {...props} icon="like" selected={ false }/>
    <br/><br/>
      Selected = true <br/>
    <ButtonIcon {...props} icon="like" selected/>

  </div>
));

stories.add('variant - Transparent Container ', () => (
  <div style={ lightStyle }>
    <ButtonIcon {...props} withContainer/>
  </div>
));


stories.add('extra - Hint on Hover ', () => (
  <div style={ lightStyle }>
    <ButtonIcon {...props} withHint/>
  </div>
));


stories.add('extra - with dropdown ', () => (
  <div style={ lightStyle }>
    <ButtonIcon {...props} icon="settings" withDropdown/>
  </div>
));


stories.add('extra - disabled ', () => (
  <div style={ lightStyle }>
    <ButtonIcon {...props} icon="settings" disabled/>
  </div>
));

const sizes = [
  'xx-small',
  'x-small',
  'small',
  'large',
];
stories.add('extra - size ', () => (
  <ButtonIcon {...props} icon="settings" iconSize={ select('Size', sizes, 'small') }/>
));
