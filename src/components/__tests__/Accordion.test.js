import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Accordion from '../Accordion.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accordion />, div);
});

const testData = [
  {  header: 'Accordion Header A',
    content: 'A Content',
    showOnLoad: true
  },
  {
    header: 'Accordion Header B',
    content: 'B Content',
  },
];

// test('the data should be array', () => {
//   const type = typeof testData;
//   expect(Array.isArray(testData)).toBeTruthy();
//   expect(testData).toBeTruthy();
// });

it('renders correctly', () => {
  const tree = renderer
    .create(<Accordion data={ testData } />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
