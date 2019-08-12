import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Modal, { Header, Tagline, Content, Footer} from '../src/Modal';
import Input from '../src/Form/Input';
import Textarea from '../src/Form/Textarea';


const stories = storiesOf('Modal 2', module);


// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);


stories.add('with header only', () => {
  const text_header =  text('Header', 'Header Text');
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  return (
    <Modal>
      <Header>{ text_header }</Header>
      <Content>{ text_content }</Content>
    </Modal>);
});

stories.add('with header & Tagline', () => {
  const text_header =  text('Header', 'Header Text');
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  return (
    <Modal>
      <Header>{ text_header }</Header>
      <Tagline>Lorem ipsum dolor sit amet, consectetur adipisicing elit. haha</Tagline>
      <Content>{ text_content }</Content>
    </Modal>);
});

stories.add('with footer only', () => {
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  const text_footer =  text('Footer', 'Footer Text');
  return (
    <Modal>
      <Content>{ text_content }</Content>
      <Footer>{ text_footer }</Footer>
    </Modal>);
});
stories.add('footer with buttons ', () => {
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elite nisi illum dolor a recusandae, possimus, natus.');
  const isDirectional = boolean('Directional', false);
  return (
    <Modal>
      <Content>{ text_content }</Content>
      <Footer isDirectional={ isDirectional }>
        <button className="slds-button slds-button_neutral">Cancel</button>
        <button className="slds-button slds-button_brand">Save</button>
      </Footer>
    </Modal>);
});





stories.add('size', () => {
  const text_header =  text('Header', 'Header Text');
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  const sizes =  [
    'none',
    'medium',
    'large',
  ];
  return (
    <Modal size={select('Size',sizes,'')} >
      <Header >{ text_header }</Header>
      <Content>{ text_content }</Content>
    </Modal>);
});


stories.add('with event - onClose', () => {
  const text_header =  text('Header', 'Header Text');
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  return (
    <Modal onClose={ action('Click Close') }>
      <Header >{ text_header }</Header>
      <Content>{ text_content }</Content>
    </Modal>);
});

stories.add('with event - onClickEscape', () => {
  const text_header =  text('Header', 'Header Text');
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  return (
    <Modal onClickEscape={ action('Click Esc') }>
      <Header >{ text_header }</Header>
      <Content>{ text_content }</Content>
    </Modal>);
});

stories.add('with event - onClickEnter', () => {
  const text_header =  text('Header', 'Header Text');
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  return (
    <Modal onClickEnter={ action('Click Enter') }>
      <Header >{ text_header }</Header>
      <Content>{ text_content }</Content>
    </Modal>
  );
});

stories.add('with props hide', () => {
  const text_header =  text('Header', 'Header Text');
  const text_content  = text('Body', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minus amet iusto nam voluptatem quidem fugit, soluta beatae, est natus, tempora quisquam. Beatae nisi illum dolor a recusandae, possimus, natus.');
  return (
    <Modal hide={ boolean('hide',  false )}>
      <Header >{ text_header }</Header>
      <Content>{ text_content }</Content>
    </Modal>);
});


stories.add('with Form', () => {
  const text_header =  text('Header', 'Header Text');
  const onChange = e => {
    console.log(e);
  };
  return (
    <form>
      <Modal hide={ boolean('hide',  false )}>
        <Header >{ text_header }</Header>
        <Content>
          <Input label="Sample Input" onChange={ onChange } />
          <Textarea label="Sample Textarea" onChange={ onChange } />
        </Content>
      </Modal>
    </form>
  );
});
