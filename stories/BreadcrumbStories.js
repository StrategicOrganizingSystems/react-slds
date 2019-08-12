import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { Breadcrumb }  from '../src';

const stories = storiesOf('Breadcrumb', module);

// decorators
stories.addDecorator(
  (story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);


stories.add('with text', () => {
  const options =  [
    { text: text('Text 1', 'Home')},
    { text: text('Text 2', 'Category')},
  ];

  return (<Breadcrumb options={ options } />);
});


stories.add('with text link', () => {
  const options =  [
    {
      text:  text('Text 1', 'Home'),
      link:  text('Link 1', ''),
    },
    {
      text:  text('Text 2', 'Smartphone'),
      link:  text('Link 2', ''),
    },
    {
      text:  text('Text 3', 'Apple'),
      link:  text('Link 3', 'http://wwww.apple.com'),
    },
  ];
  const props = {
    options
  };
  return (<Breadcrumb {...props} />);
});



// missing theme
