import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

// import App from '../../App';
import AccordionSection from '../AccordionSection.js';



const testData = {
  header: 'AccordionSection Header A',
  content: 'A Content',
};

it('renders correctly', () => {
  const tree = renderer
    .create(<AccordionSection header={ testData.header } index={1}>{ testData.content }</AccordionSection>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
