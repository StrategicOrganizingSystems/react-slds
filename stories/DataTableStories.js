import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';

import DataTable from '../src/DataTable';

const stories = storiesOf('DataTable', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

const headers = [
  {

    type: 'checkbox',
    key: 'checkbox1',
    onChange: () => console.log('Click')
  },
  {
    text: 'Opportunity Name',
    key: 'opportunityName',
  },
  {
    text: 'Account Name',
    key: 'accountName',
  },
  {
    text: 'Close Date',
    key: 'closeDate',
  },
  {
    text: 'Stage',
    key: 'stage',
  },
  {
    text: 'Confidence',
    key: 'confidence',
  },
  {
    text: 'Amount',
    key: 'amount',
  },
  {
    text: 'Contact',
    key: 'contact',
    visible: false
  },

];


const data = [
  {

    opportunityName: 'Cloudhub',
    accountName: 'Cloudhub',
    closeDate: '4/14/2015',
    stage: 'Prospecting',
    confidence: '20%',
    amount: '$25k',
    contact: 'jrogers@cloudhub.com',
  },
  {
    opportunityName: 'Cloudhub + Anypoint Connectors',
    accountName: 'Cloudhub',
    closeDate: '4/14/2015',
    stage: 'Prospecting',
    confidence: '20%',
    amount: '$25k',
    contact: 'jrogers@cloudhub.com',
  },
];






stories.add('base', (() => (<DataTable headers={headers} data={ data }/>)));

stories.add('ontab', (() => 
  // onchnage
  (<DataTable headers={headers} data={ data } />)
));


stories.add('customCell', (() => {

  const customData = [
    {

      opportunityName: 'Cloudhub',
      accountName: 'Cloudhub',
      closeDate: '4/14/2015',
      stage: 'Prospecting',
      confidence: '20%',
      amount: '$25k',
      contact: 'jrogers@cloudhub.com',
    },
    {
      opportunityName: {
        customCell: (<strong>Custom cell of Cloudhub + Anypoint Connectors</strong>),
        title: 'Cloudhub + Anypoint Connectors',
      },
      accountName: 'Cloudhub',
      closeDate: '4/14/2015',
      stage: 'Prospecting',
      confidence: '20%',
      amount: '$25k',
      contact: 'jrogers@cloudhub.com',
    },
  ];

  // onchnage
  return (<DataTable headers={headers} data={ customData } />);
}));
