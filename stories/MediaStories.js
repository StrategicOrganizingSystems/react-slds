import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import Grid,{ Row, Col }  from '../src/Grid';
import Media, { Figure, Body }  from '../src/Media';

const stories = storiesOf('Media', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

// Centered vertically
// Reverse
// Reverse centered vertically
// Double figures
// Small space between figure and body
// Large space between figure and body
// Responsive

const DemoGrid = props => (
  <Grid>
    <Row totalCols={ 4 }>
      <Col size="3">
        { props.children }
      </Col>
    </Row>
  </Grid>
);

const DemoAvatar = () => (
  <span className="slds-avatar slds-avatar_large">
    <img alt="Person name" src="https://www.lightningdesignsystem.com/assets/images/avatar3.jpg" title="User avatar" />
  </span>
);

const content = (
  <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.';</p>
);

stories.add('default', () => (
  <DemoGrid>
    <Media className="media-2">
      <Figure>
        <DemoAvatar/>
      </Figure>
      <Body>
        { content }
      </Body>
    </Media>
  </DemoGrid>
));

stories.add('Centered vertically', () => (
  <DemoGrid>
    <Media center>
      <Figure>
        <DemoAvatar/>
      </Figure>
      <Body>
        { content }
      </Body>
    </Media>
  </DemoGrid>
));


stories.add('Reverse', () => (
  <DemoGrid>
    <Media>
      <Body>
        { content }
      </Body>
      <Figure reverse>
        <DemoAvatar/>
      </Figure>

    </Media>
  </DemoGrid>
));

stories.add('Reverse centered vertically', () => (
  <DemoGrid>
    <Media center>
      <Body>
        { content }
      </Body>
      <Figure reverse>
        <DemoAvatar/>
      </Figure>
    </Media>
  </DemoGrid>
));

stories.add('Double figures', () => (
  <DemoGrid>
    <Media>
      <Figure >
        <DemoAvatar/>
      </Figure>
      <Body>
        { content }
      </Body>
      <Figure reverse>
        <DemoAvatar/>
      </Figure>
    </Media>
  </DemoGrid>
));

stories.add('Small space between figure and body', () => (
  <DemoGrid>
    <Media space="small">
      <Figure >
        <DemoAvatar/>
      </Figure>
      <Body>
        { content }
      </Body>
    </Media>
  </DemoGrid>
));

stories.add('Large space between figure and body', () => (
  <DemoGrid>
    <Media space="large">
      <Figure >
        <DemoAvatar/>
      </Figure>
      <Body>
        { content }
      </Body>
    </Media>
  </DemoGrid>
));

stories.add('Responsive', () => (
  <DemoGrid>
    <Media space="small" responsive>
      <Figure >
        <DemoAvatar/>
      </Figure>
      <Body>
        { content }
      </Body>
    </Media>
  </DemoGrid>
));
