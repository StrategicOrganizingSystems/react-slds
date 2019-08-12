import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
// import backgrounds from "@storybook/addon-backgrounds";


import { Button }  from '../src';
import { ButtonTheme }  from '../src/enum';
import { objectValues }  from '../src/utils';



const stories = storiesOf('Button Icons', module);

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
  icon: 'close',

};

stories.add('with Variant - Base', () => (
  <Button {...props} buttonIcon/>
));


stories.add('with Variant - Bordered Filled Container', () => (
  <Button {...props} buttonIcon borderFilled/>
));

stories.add('with Variant - Bordered Inverse ', () => (
  <Button {...props} buttonIcon borderInverse/>
));


stories.add('with Variant - Bordered Transparent Container ', () => (
  <Button {...props} buttonIcon border/>
));


stories.add('with Variant - Brand', () => (
  <Button {...props} buttonIcon brand/>
));


stories.add('with Variant - Inverse', () => (
  <Button {...props} buttonIcon inverse/>
));


stories.add('with Variant - Selected', () => (
  <Button {...props} buttonIcon selected/>
));
