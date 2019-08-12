import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Popover, { Header, Footer, CloseButton, Content }  from '../src/Popover';
import Media, { Figure, Body }  from '../src/Media';
import NameValueList, { Label, Detail }  from '../src/NameValueList';
import Grid, { Row, Col }  from '../src/Grid';
import Icon from '../src/Icon';

const stories = storiesOf('Popover', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);



stories.add('base', () => (
  <Popover><a href="#">Message contenta</a></Popover>
));

stories.add('base with props nubbin', () => (
  <Popover nubbin="left">Message content</Popover>
));

stories.add('base with props size', () => {

  const sizes = [
    'small',
    'medium',
    'large',
  ];
  return (
    <Popover size={select('Size',sizes,'small')}>Message content</Popover>
  );
});


stories.add('base with close button', () => (
  <Popover withCloseButton onClickClose={ action('onClickClose')}>
      Message content
  </Popover>
));

stories.add('base with close button & Header', () => (
  <Popover withCloseButton onClickClose={ action('onClickClose')}>
    <Header>
      <h2>Header</h2>
    </Header>
      Message content
  </Popover>
));

stories.add('base with close button & Header & Content', () => (
  <Popover withCloseButton onClickClose={ action('onClickClose')}>
    <Header>
      <h2>Header</h2>
    </Header>
    <Content>Message Content display</Content>
      ignore Message content
  </Popover>
));
stories.add('base Header & Content & Footer', () => (
  <Popover withCloseButton onClickClose={ action('onClickClose')}>
    <Header>
      <h2 className="slds-text-heading_small">Header</h2>
    </Header>
    <Content>Message Content display</Content>
      ignore Message content
    <Footer>
      <p>Footer</p>
    </Footer>
  </Popover>
));
stories.add('base Header & Footer', () => (
  <Popover withCloseButton onClickClose={ action('onClickClose')}>
    <Header>
      <Media center className="slds-has-flexi-truncate">
        <Figure><Icon size="small"  variant="standard" icon="account"/></Figure>
        <Body>
          <h2 className="slds-truncate slds-text-heading_medium" title="Resolve error">Resolve error</h2>
        </Body>
      </Media>
      <Grid>
        <Row totalCols="2">
          <Col size="1">
            <NameValueList type="stacked">
              <Label title="First Label">First Label:</Label>
              <Detail>Description for first label</Detail>
              <Label title="Second Label">Second Label:</Label>
              <Detail>Description for second label</Detail>
            </NameValueList>
          </Col>
          <Col size="1">
            <NameValueList type="stacked">
              <Label title="Third Label">Third Label:</Label>
              <Detail>Description for third label</Detail>
              <Label title="Fourth Label">Fourth Label:</Label>
              <Detail>Description for fourth label</Detail>
            </NameValueList>
          </Col>
        </Row>
      </Grid>
    </Header>

  </Popover>
));


stories.add('Error', () => (
  <Popover hasError withCloseButton nubbin="bottom-left">
    <Header>
      <Media center className="slds-has-flexi-truncate">
        <Figure><Icon size="x-small" variant="utility" icon="error"/></Figure>
        <Body>
          <h2 className="slds-truncate slds-text-heading_medium" title="Resolve error">Resolve error</h2>
        </Body>
      </Media>
    </Header>
    <Content>Message Content display</Content>
      ignore Message content
  </Popover>
));


// Feature
// Panels
// Walkthrough
// Warning
