import React from 'react';

import '../App.css';

class CalendarDay extends React.Component {

  render() {

    const date = this.props.date;
    const numOffers = this.props.numOffers;

    return (
    <div className="calendarDay">
        <div>
            {date.format("ddd, DD")}
        </div>
        <div>
            {'*'.repeat(numOffers)}
        </div>
    </div>
    );

  }
}

export default CalendarDay;