import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Lookup, { Item } from '../src/Lookup';

const stories = storiesOf('Lookup', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);


const items = [
  {
    text: 'Burlington Textiles Corp of America',
    meta: 'Account • Burlington, NC'
  },
  {
    text: 'Dickenson plc',
    meta: 'Account • Lawrence, KS'
  },
  {
    text: 'Edge Communications',
  }
];

stories.add('basic', () => (
  <Lookup label="Related to" placeHolder="Search..." isOpen>
    { items.map(item => <Item meta={ item.meta || null }>{ item.text }</Item>)}
  </Lookup>
));

stories.add('event - onChange', () => {

  const onChange = () => {
    action('asdasd');
  };

  return (
    <Lookup label="Related to" placeHolder="Search..." isOpen onChange={  action('asdasd') }>
      { items.map((item, i) => <Item key={ i } meta={ item.meta || null }>{ item.text }</Item>)}
    </Lookup>
  );
});

stories.add('with Icon', () => {

  const items = [
    {
      text: 'Burlington Textiles Corp of America',
      meta: 'Account • Burlington, NC'
    },
    {
      text: 'Dickenson plc',
      meta: 'Account • Lawrence, KS',
      variant: 'standard',
      icon: 'account'
    },
    {
      text: 'Edge Communications',
      variant: 'standard',
      icon: 'account'
    }
  ];


  return (
    <Lookup label="Related to" placeHolder="Search..." isOpen >
      { items.map((item, i) =>
        <Item key={ i } meta={ item.meta } variant={ item.variant} icon={ item.icon}>
          { item.text }
        </Item>)}
    </Lookup>
  );
});

stories.add('with default value', () => {

  const items = [
    {
      text: 'Burlington Textiles Corp of America',
      meta: 'Account • Burlington, NC'
    },
    {
      text: 'Dickenson plc',
      meta: 'Account • Lawrence, KS',
      variant: 'standard',
      icon: 'account'
    },
    {
      text: 'Edge Communications',
      variant: 'standard',
      icon: 'account'
    }
  ];


  return (
    <Lookup label="Related to" placeHolder="Search..." value="Dickenson plc" variant="standard" icon="account">
      { items.map((item, i) =>
        <Item key={ i } meta={ item.meta } variant={ item.variant} icon={ item.icon}>
          { item.text }
        </Item>)}
    </Lookup>
  );
});




stories.add('event Item - onClick', () => {


  const items = [
    {
      text: 'Burlington Textiles Corp of America',
      meta: 'Account • Burlington, NC'
    },
    {
      text: 'Dickenson plc',
      meta: 'Account • Lawrence, KS',

    },
    {
      text: 'Edge Communications',
      meta: 'Edge CA',
    }
  ];
  return (
    <Lookup label="Related to" placeHolder="Search..." isOpen onEnter={ e => console.log(e) }>
      { items.map((item, i) =>
        <Item key={ i } meta={ item.meta } variant={ item.variant} icon={ item.icon} onClick={ e => console.log(e)}>
          { item.text }
        </Item>)}
    </Lookup>
  );
});



stories.add('event Item - focus', () => {


  const items = [
    {
      text: 'Burlington Textiles Corp of America',
      meta: 'Account • Burlington, NC'
    },
    {
      text: 'Dickenson plc',
      meta: 'Account • Lawrence, KS',

    },
    {
      text: 'Edge Communications',
      meta: 'Edge CA',
    }
  ];
  return (
    <Lookup label="Related to" placeHolder="Search..." isOpen onEnter={ e => console.log(e) }>
      { items.map((item, i) =>
        <Item key={ i } meta={ item.meta } variant={ item.variant} icon={ item.icon} onClick={ e => console.log(e)}>
          { item.text }
        </Item>)}
    </Lookup>
  );
});




stories.add('event with mark', () => {
  const items = [
    {
      text: 'Burlington Textiles Corp of America',
      meta: 'Account • Burlington, NC'
    },
    {
      text: 'Dickenson plc',
      meta: 'Account • Lawrence, KS',

    },
    {
      text: 'Edge Communications',
      meta: 'Edge CA',
    }
  ];
  return (
    <Lookup label="Related to" placeHolder="Search..." isOpen mark="e">
      { items.map((item, i) =>
        <Item key={ i } meta={ item.meta } variant={ item.variant} icon={ item.icon} onClick={ e => console.log(e)}>
          { item.text }
        </Item>)}
    </Lookup>
  );
});
