import React from 'react';

class CalendarDay extends React.Component {

  render() {

    const date = this.props.date;
    const numOffers = this.props.numOffers;

    return (
    <div className="calendarDay">
        {date.format("ddd, DD")}
        {'*'.repeat(numOffers)}
    </div>
    );

  }
}

export default CalendarDay;