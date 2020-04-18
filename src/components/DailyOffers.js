import React from 'react';

import Offer from './Offer'

import '../App.css';

class DailyOffers extends React.Component {

  render() {

    const day = this.props.day;

    var offers = this.props.offers;
    offers.sort((a, b) => (a.date_start > b.date_start) ? 1 : -1);

    let offersList;
    if(offers.length > 0){
      offersList = offers.map((offer) =>
        <Offer key={offer.id} value={offer} />
      );
    } else {
      offersList = 'No offers'
    }
    

    return (
      <div className="dailyOffers">
        <strong className="dayName">
          {day.format("dddd, MMMM Do YYYY")}
        </strong>
        <div className="dailyOffersList">
          {offersList}
        </div>  
      </div>
    );

  }
}

export default DailyOffers;