import React from 'react';
import moment from 'moment';

import DailyOffers from './DailyOffers';


class ListOffers extends React.Component {

  constructor(props) {
    super(props);

    this.getDaysOfWeek = this.getDaysOfWeek.bind(this);
    this.getOffersPerDay = this.getOffersPerDay.bind(this);
  }

  getDaysOfWeek() {
    
    var weekDays = [];

    for(let i=0; i<7; i++){
      weekDays.push(moment().weekday(i));
    }

    return weekDays;
  }

  getOffersPerDay(offers) {

    var offersPerDay = [[], [], [], [], [], [], []];

    for(let i=0; i<offers.length; i++) {
      var offerDate = moment(offers[i].date_start);
      var dayOfWeek = offerDate.weekday();

      offersPerDay[dayOfWeek].push(offers[i]);
    }

    return offersPerDay;

  }

  render() {
    
    const offersPerDay = this.getOffersPerDay(this.props.offers);
    const daysOfWeek = this.getDaysOfWeek();
    const days = [0, 1, 2, 3, 4, 5, 6];

    const listOffers = days.map((i) =>
      <DailyOffers key={daysOfWeek[i]} offers={offersPerDay[i]} day={daysOfWeek[i]} />
    );

    return (
    <div className="listOffers">
      {listOffers}  
    </div>
    );

  }
}

export default ListOffers;