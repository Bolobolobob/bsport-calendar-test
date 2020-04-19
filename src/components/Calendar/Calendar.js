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

  componentDidMount(){
    var startOfWeek = moment().weekday(0);

    this.setState({
      startOfWeek: startOfWeek,
    });

    this.props.onWeekChange(startOfWeek);

  }

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

    let weekDisplay;
    let calendarDays;
    if(startOfWeek) {
      weekDisplay = `${startOfWeek.format("ddd, DD/MM")} - ${endOfWeek.format("ddd, DD/MM")}`
      calendarDays = offersPerDay.map((dailyOffers) => {

        let clickableDay;
        if(this.state.selectedDay && this.state.selectedDay.isSame(dailyOffers.date, 'day')) {
          clickableDay = "selectedDay";
        } else {
          clickableDay = "notSelectedDay";
        }

        return(
          <div  className={clickableDay} key={dailyOffers.date} onClick={() => this.handleClick(dailyOffers.date)}>
            <CalendarDay numOffers={dailyOffers.offers.length} date={dailyOffers.date} />
          </div>
        )        
      })
    } else {
      weekDisplay = ''
      calendarDays = null;
    }

    return (
    <div className="calendar">
      <div className="calendarTop">
        {weekDisplay}
      </div>
      <div className="calendarDays">
        {calendarDays}
      </div>
    </div>
    );

  }
}

export default Calendar;