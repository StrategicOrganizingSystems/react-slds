import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Button from '../src/Form/Button';
import ButtonIcon from '../src/Form/ButtonIcon';
import ButtonGroup from '../src/Form/ButtonGroup';
import { objectValues }  from '../src/utils';


const stories = storiesOf('ButtonGroup', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const props = {
  children: text('Label','Submit')
};

const themes = ['','neutral','brand','outline brand','inverse','destructive','success'];


stories.add('with Buttons', () => (
  <ButtonGroup>
    <Button theme="neutral" onClick={action('Refresh')}>Refresh</Button>
    <Button theme="neutral" onClick={action('Edit')}>Edit</Button>
    <Button theme="neutral" onClick={action('Save')}>Save</Button>
  </ButtonGroup>
));

stories.add('with ButtonIcons', () => (
  <ButtonGroup>
    <ButtonIcon theme="neutral" variant="utility" icon="chart" iconBorder="filled" selected/>
    <ButtonIcon theme="neutral" variant="utility" icon="filterList" iconBorder="filled"/>
    <ButtonIcon theme="neutral" variant="utility" icon="settings" iconBorder="filled"  withDropdown />
  </ButtonGroup>
));



// TODO:
// List
//
// Overflow menu icon
//
// Overflow menu icon - Open
//
// Overflow menu icon - Disabled
//
// Inverse
//
// Inverse Disabled
//
// Inverse More Icon Disabled
//
// Icon group
//
// Icon group - Selected
