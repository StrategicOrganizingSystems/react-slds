import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
// import backgrounds from "@storybook/addon-backgrounds";

import Datepicker, { Calendar } from '../src/Form/Datepicker';

const stories = storiesOf('Datepicker', module);

// decorators
stories.addDecorator((story, context) => withInfo()(story)(context));
stories.addDecorator(withKnobs);

stories.add('base', () => <Datepicker />);

stories.add('selected date', () => {
  let selectedDate = new Date(2018, 8, 27);
  return (
    <Datepicker
      onClickDay={date => (selectedDate = date)}
      selectedDate={selectedDate}
    />
  );
});

class DemoDatePicker extends Component {
  state = {
    open: false,
    date: new Date()
  };

  handleClickDateIcon = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClickDay = date => {
    action(date);
    console.log(date);
    this.setState({
      date
    });
    this.handleClickDateIcon();
  };

  render() {
    return (
      <Datepicker
        selectedDate={this.state.date}
        defaultDate={this.state.date}
        showCalendar={this.state.open}
        onClickDay={this.handleClickDay}
        onClickDateIcon={this.handleClickDateIcon}
      />
    );
  }
}

stories.add('basic', () => <DemoDatePicker />);
