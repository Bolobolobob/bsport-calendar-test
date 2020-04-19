import React from 'react';
import moment from 'moment';

import CalendarDay from './CalendarDay';

import './Calendar.css';

/**
 * Displays a simplified weekly calendar
 * with a header indicating the current week
 * and a body with the days of the week and the number
 * of offers per day
 */
class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startOfWeek: '',
      selectedDay: null,
    }

    this.handleClick = this.handleClick.bind(this);

  }

  /** When the component finishes mounting we initialize the displayed week to the current week
   * and send it the handler in App.js
   */
  componentDidMount(){
    var startOfWeek = moment().weekday(0);

    this.setState({
      startOfWeek: startOfWeek,
    });

    this.props.onWeekChange(startOfWeek);

  }

  /** Handler for when the user clicks on a day of the calendar */
  handleClick(date) {

    var selectedDay = null;

    if(this.state.selectedDay){
      if(this.state.selectedDay.isSame(date, 'day')) {
        this.setState({
          selectedDay: null,
        });
        selectedDay = null
      } else {
        this.setState({
          selectedDay: date,
        })
        selectedDay = date
      }
    } else {
      this.setState({
        selectedDay: date,
      })
      selectedDay = date
    }
    
    this.props.onSelectDayChange(selectedDay);

  }

  render() {

    const startOfWeek = this.state.startOfWeek;
    const endOfWeek = moment(startOfWeek).add(6, 'd')
    const offersPerDay = this.props.offersPerDay;

    let calendarHeader;
    let calendarDays;
    if(startOfWeek) {
      calendarHeader = `${startOfWeek.format("ddd, DD/MM")} - ${endOfWeek.format("ddd, DD/MM")}`
      calendarDays = offersPerDay.map((dailyOffers) => {

        let classClickableDay;
        if(this.state.selectedDay && this.state.selectedDay.isSame(dailyOffers.date, 'day')) {
          classClickableDay = "selectedDay";
        } else {
          classClickableDay = "notSelectedDay";
        }

        return(
          <div  className={classClickableDay} key={dailyOffers.date} onClick={() => this.handleClick(dailyOffers.date)}>
            <CalendarDay numOffers={dailyOffers.offers.length} date={dailyOffers.date} />
          </div>
        )        
      })
    } else {
      calendarHeader = ''
      calendarDays = null;
    }

    return (
    <div className="calendar">
      <div className="calendarTop">
        {calendarHeader}
      </div>
      <div className="calendarDays">
        {calendarDays}
      </div>
    </div>
    );

  }
}

export default Calendar;