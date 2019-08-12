import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import './@demo.css';

import Grid, { Row, Col}  from '../src/Grid';

const stories = storiesOf('Grid', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const DemoGrid = props => (
  <div className="demo-grid">{ props.children }</div>
);


stories.add('gutters', () => (
  <Grid gutters>
    <Row totalCols="3">
      <Col size="1">1 col</Col>
      <Col size="2"> 2 cols</Col>
      <div>extra</div>
    </Row>
    <Row totalCols="4">
      <Col size="1">1 col</Col>
      <Col size="2">2 cols</Col>
      <Col size="1">1 col</Col>
    </Row>
  </Grid>
));



stories.add('wrap', () => (
  <Grid wrap>
    <Row totalCols="3">
      <Col size="1">1 col</Col>
      <Col size="2"> 2 cols</Col>
      <div>extra</div>
    </Row>
    <Row totalCols="4">
      <Col size="1">1 col</Col>
      <Col size="2">2 cols</Col>
      <Col size="1">1 col</Col>
    </Row>
  </Grid>
));



stories.add('reordering', () => (
  <Grid wrap>
    <Row totalCols="4">
      <Col size="1" order="3">third col 1 </Col>
      <Col size="2" order="1">first cols 2</Col>
      <Col size="1" order="2">second col 3</Col>
    </Row>
  </Grid>
));



stories.add('nested', () => (
  <Grid wrap>
    <Row totalCols="12">
      <Col size="10">10 col  </Col>
    </Row>
    <Row totalCols="2">
      <Col size="1">
        <Row>
          <Col>sub col 1</Col>
          <Col>sub col 2</Col>
        </Row>
      </Col>
    </Row>
  </Grid>
));


stories.add('flow - vertical', () => (
  <Grid wrap flow="vertical">
    <Col size="1">
      <span>1</span>
    </Col>
    <Col size="1">
      <span>2</span>
    </Col>
    <Col size="1">
      <span>3</span>
    </Col>
  </Grid>
));
stories.add('flow - reverse', () => (
  <Grid wrap flow="reverse">
    <Col size="1">
      <span>1</span>
    </Col>
    <Col size="1">
      <span>2</span>
    </Col>
    <Col size="1">
      <span>3</span>
    </Col>
  </Grid>
));

stories.add('flow - vertical-reverse', () => (
  <Grid wrap flow="vertical-reverse">
    <Col size="1">
      <span>1</span>
    </Col>
    <Col size="1">
      <span>2</span>
    </Col>
    <Col size="1">
      <span>3</span>
    </Col>
  </Grid>
));

stories.add('alignment', () => {
  const align =[
    'center',
    'space',
    'spread',
    'end',
  ];
  return (
    <DemoGrid>
      <Grid wrap align={  select('Align', align, 'center') }>
        <Col size="1">
          <span>1</span>
        </Col>
        <Col size="1">
          <span>2</span>
        </Col>
        <Col size="1">
          <span>3</span>
        </Col>
      </Grid>
    </DemoGrid>
  );
});

stories.add('grow', () => {
  const grow = {
    null: 'null',
    true: 'true',
    false: 'false',
  };
  return (
    <DemoGrid>

      <Grid align="center">
        <Row totalCols={ 6 }>
          <Col size="1">
            <span>1 </span>
          </Col>
          <Col grow={ false }>
            <span>2</span>
          </Col>
          <Col size="1" >
            <span>3</span>
          </Col>
        </Row>
      </Grid>
    </DemoGrid>
  );
});

stories.add('shrink', () => {
  const shrink = {
    null: 'null',
    true: 'true',
    false: 'false',
  };
  return (
    <DemoGrid>
      <Grid align="center">
        <Row totalCols={ 6 }>
          <Col size="1">
            <span>1 </span>
          </Col>
          <Col shrink={ false }>
            <span>2</span>
          </Col>
          <Col size="1" >
            <span>3</span>
          </Col>
        </Row>
      </Grid>
    </DemoGrid>
  );
});


stories.add('bump - Horizontal', () => {
  const position = [
    'left',
    'right'
  ];
  return (
    <Grid className="demo-bump">
      <Row totalCols={ 6 }>
        <Col><span>1</span></Col>
        <Col><span>2</span></Col>
        <Col><span>3</span></Col>
        <Col><span>4</span></Col>
        <Col bump={ select('Bump 5th column', position, 'left')}><span>5</span></Col>
        <Col><span>6</span></Col>
      </Row>
    </Grid>
  );
});

stories.add('Vertical Alignment', () => {
  const align = [
    'start',
    'center',
    'end',
  ];
  return (
    <div className="demo-grid-vertical" >
      <Grid verticalAlign={ select('Vertical Align', align, 'start') }>
        <Row totalCols={ 6 }>
          <Col><span>1</span></Col>
          <Col><span>2</span></Col>
          <Col><span>3</span></Col>
        </Row>
      </Grid>
    </div>
  );
});
stories.add('Absolutely centered', () => (
  <div className="demo-grid-vertical" >
    <Grid verticalAlign="center" align="center">
      <Row totalCols={ 6 }>
        <Col><span>1</span></Col>
        <Col><span>2</span></Col>
        <Col><span>3</span></Col>
      </Row>
    </Grid>
  </div>
));
stories.add('Individual alignment', () => (
  <div className="demo-grid-vertical" >
    <Grid>
      <Row totalCols={ 6 }>
        <Col align="top"><span>1</span></Col>
        <Col align="middle"><span>2</span></Col>
        <Col align="bottom"><span>3</span></Col>
      </Row>
    </Grid>
  </div>
));
