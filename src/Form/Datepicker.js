import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import getDaysInMonth from 'date-fns/get_days_in_month';
import getDay from 'date-fns/get_day';
import subMonth from 'date-fns/sub_months';
import addMonth from 'date-fns/add_months';
import lastDayOfMonth from 'date-fns/last_day_of_month';
import isSameMonth from 'date-fns/is_same_month';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import isSameDay from 'date-fns/is_same_day';

import { range, chunk, uniqueId } from 'lodash';
// slds component
import ButtonIcon from './ButtonIcon';

import { createClassName, isDefined } from '../utils';

const generateCalendarDates = date => {
  let daysOfCalendarMonth = [];

  const month = date.getMonth();
  const year = date.getFullYear();

  const daysOfCurrentMonth = getDaysInMonth(date);
  const firstDayOfMonth = new Date(year, month, 1);

  const dayOfFirstDay = getDay(firstDayOfMonth);

  // previous month
  const prevDate = subMonth(date, 1);
  let datesOfPrevMonth = [];
  if (dayOfFirstDay) {
    const prevMonth = prevDate.getMonth();
    const prevYear = prevDate.getFullYear();
    const daysPrevMonth = getDaysInMonth(new Date(prevYear, prevMonth));
    const calendarStartDay = daysPrevMonth - dayOfFirstDay + 1;
    datesOfPrevMonth = range(calendarStartDay, daysPrevMonth + 1).map(
      day => new Date(prevYear, prevMonth, day)
    );
  }

  // next month
  let datesOfNextMonth = [];
  const dayOfLastDay = getDay(lastDayOfMonth(date));
  const nextDate = addMonth(date, 1);
  if (dayOfLastDay < 6) {
    const nextMonth = nextDate.getMonth();
    const nextYear = nextDate.getFullYear();
    datesOfNextMonth = range(1, 6 - dayOfLastDay + 1).map(
      day => new Date(nextYear, nextMonth, day)
    );
  }

  const datesOfCurrrentMonth = range(1, daysOfCurrentMonth + 1).map(
    day => new Date(year, month, day)
  );

  daysOfCalendarMonth = [
    ...datesOfPrevMonth,
    ...datesOfCurrrentMonth,
    ...datesOfNextMonth
  ];

  return chunk(daysOfCalendarMonth, 7);
};

export const Calendar = props => (
  <table
    aria-labelledby="month"
    aria-multiselectable="true"
    className="slds-datepicker__month"
    role="grid"
  >
    <thead>
      <tr id="weekdays">
        <th id="Sunday" scope="col">
          <abbr title="Sunday">Sun</abbr>
        </th>
        <th id="Monday" scope="col">
          <abbr title="Monday">Mon</abbr>
        </th>
        <th id="Tuesday" scope="col">
          <abbr title="Tuesday">Tue</abbr>
        </th>
        <th id="Wednesday" scope="col">
          <abbr title="Wednesday">Wed</abbr>
        </th>
        <th id="Thursday" scope="col">
          <abbr title="Thursday">Thu</abbr>
        </th>
        <th id="Friday" scope="col">
          <abbr title="Friday">Fri</abbr>
        </th>
        <th id="Saturday" scope="col">
          <abbr title="Saturday">Sat</abbr>
        </th>
      </tr>
    </thead>
    <tbody>
      {generateCalendarDates(props.date).map((week, i) => (
        <tr key={i}>
          {week.map(dayDate => {
            const isDayInSameMonth = isSameMonth(props.date, dayDate);
            const className = createClassName(
              !isDayInSameMonth ? 'slds-disabled-text' : null,
              isToday(dayDate) ? 'slds-is-today' : null,
              isDefined(props.selected) && isSameDay(props.selected, dayDate)
                ? 'slds-is-selected'
                : null
            );
            return (
              <td
                key={dayDate}
                aria-disabled={!isDayInSameMonth.toString()}
                aria-selected={!isDayInSameMonth.toString()}
                aria-current={isToday(dayDate) ? 'date' : null}
                className={className}
                role="gridcell"
              >
                <span
                  className="slds-day"
                  onClick={() => props.onClickDay(dayDate)}
                >
                  {dayDate.getDate()}
                </span>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

Calendar.defaultProps = {
  date: new Date()
};

const uid = uniqueId();
const datepickerId = `datepicker-${uid}`;
const selectId = `datepicker-select-${selectId}`;

class Datepicker extends PureComponent {
  state = {
    date: this.props.date || new Date(),
    selectedDate: null,
    open: false
  };

  onClickToday = e => {
    const date = new Date();
    this.setState({
      date
    });
    if (this.props.onClickToday) {
      this.props.onClickToday(e, date);
    }
  };

  onClickPrevMonth = e => {
    const date = subMonth(this.state.date, 1);
    this.setState({
      date
    });
    if (this.props.onClickPrevMonth) {
      this.props.onClickPrevMonth(e, date);
    }
  };

  onClickNextMonth = e => {
    const date = addMonth(this.state.date, 1);
    this.setState({
      date
    });
    if (this.props.onClickNextMonth) {
      this.props.onClickNextMonth(e, date);
    }
  };

  onClickDay = date => {
    if (this.props.onClickDay) {
      this.props.onClickDay(date);
    }

    this.setState({
      selectedDate: date
    });
  };

  onChangeYear = e => {
    const newDate = this.state.selectedDate || new Date();
    newDate.setYear(e.target.value);
    // console.log(newDate);
    this.setState({
      selectedDate: newDate,
      date: newDate
    });
    if (this.props.onChangeYear) {
      this.props.onChangeYear(newDate);
    }
  };

  getYears = () => {
    const arrYears = range(
      this.props.minDate.getFullYear() - 1,
      this.props.maxDate.getFullYear() + 1
    );

    return this.props.reverseYear ? arrYears.reverse() : arrYears;
  };

  renderOptionYear = e =>
    this.getYears().map(year => (
      <option key={year} value={year}>
        {year}
      </option>
    ));

  renderInput() {
    // console.log(this.props.defaultDate);
    const date = this.props.selectedDate || this.props.defaultDate;
    const value = format(date, this.props.dateFormat);
    if (!this.props.noInput) {
      return (
        <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_right">
          <input
            type="text"
            className="slds-input"
            id={datepickerId}
            onFocus={this.props.onCalendarFocus}
            value={value}
            onChange={() =>{}}
          />
          <ButtonIcon
            type="button"
            variant="utility"
            icon="event"
            className="slds-input__icon slds-input__icon_right"
            title="Select a date"
            onClick={this.props.onClickDateIcon}
          />
        </div>
      );
    }
  }

  render() {
    const { id, date = new Date(), todayText, label, ...props } = this.props;

    const currentDate = this.state.date || this.state.selectedDate || props.defaultDate;

    const monthName = format(currentDate, 'MMMM');

    const className = createClassName(
      'slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click',
      props.showCalendar ? 'slds-is-open' : ''
    );
    return (
      <div className={className} onBlur={this.onCalendarBlur}>
        {// label
          label ? (
            <label className="slds-form-element__label" htmlFor={datepickerId}>
              {label || 'Date'}
            </label>
          ) : null}
        {this.renderInput()}
        <div
          aria-hidden="false"
          aria-label={`Date picker: ${monthName}`}
          className="slds-datepicker slds-dropdown slds-dropdown_left"
          role="dialog"
        >
          <div className="slds-datepicker__filter slds-grid">
            <div className="slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow">
              <div className="slds-align-middle">
                <ButtonIcon
                  type="button"
                  variant="utility"
                  icon="left"
                  className="slds-button_icon-container"
                  title="Previous Month"
                  onClick={this.onClickPrevMonth}
                />
              </div>
              <h2
                aria-atomic="true"
                aria-live="assertive"
                className="slds-align-middle"
                id="month"
              >
                {monthName}
              </h2>
              <div className="slds-align-middle">
                <ButtonIcon
                  type="button"
                  variant="utility"
                  icon="right"
                  className="slds-button_icon-container"
                  title="Next Month"
                  onClick={this.onClickNextMonth}
                />
              </div>
            </div>
            <div className="slds-shrink-none">
              <label className="slds-assistive-text" htmlFor={selectId}>
                Pick a Year
              </label>
              <div className="slds-select_container">
                <select
                  className="slds-select"
                  id={selectId}
                  onChange={this.onChangeYear}
                  value={
                    this.state.selectedDate
                      ? this.state.selectedDate.getFullYear()
                      : this.props.defaultDate.getFullYear()
                  }
                >
                  {this.renderOptionYear()}
                </select>
              </div>
            </div>
          </div>
          <Calendar
            date={currentDate}
            onClickDay={this.onClickDay}
            selected={this.state.selectedDate || this.props.selectedDate}
          />
          <button
            className="slds-button slds-align_absolute-center slds-text-link"
            onClick={this.onClickToday}
          >
            {todayText}
          </button>
        </div>
      </div>
    );
  }


}
const todayDate = new Date();

Datepicker.defaultProps = {
  todayText: 'Today',
  date: new Date(),
  defaultDate: new Date(), // date display
  dateFormat: 'MM/DD/YYYY',
  selectedDate: null,
  maxDate: new Date(todayDate.getFullYear() + 40, 11, 31),
  minDate: new Date(todayDate.getFullYear() - 100, 0, 1),
  reverseYear: true,
  noInput: false,
  showCalendar: true,
  onClickDateIcon: () => {},
};

Datepicker.propTypes = {
  todayText: PropTypes.string
};

export default Datepicker;
