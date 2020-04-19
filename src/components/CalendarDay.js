import React from 'react';

import '../App.css';

/**
 * Displays a calendar day
 * with the name of the day and the number 
 * of offers this day
 */
class CalendarDay extends React.Component {

  render() {

    const date = this.props.date;
    const numOffers = this.props.numOffers;

    let stringNumOffers;
    if (numOffers < 10) {
      stringNumOffers = '*'.repeat(numOffers);
    } else {
      stringNumOffers = '*'.repeat(10).concat('+');
    }

    return (
    <div className="calendarDay">
        <div>
            {date.format("ddd, DD")}
        </div>
        <div>
            {stringNumOffers}
        </div>
    </div>
    );

  }
}

export default CalendarDay;