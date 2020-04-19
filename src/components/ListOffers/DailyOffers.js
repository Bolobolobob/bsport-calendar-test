import React from 'react';

import Offer from './Offer'

import './ListOffers.css';

/**
 * Displays a group of daily offers and 
 * the name of the day
 */
class DailyOffers extends React.Component {

  render() {

    const day = this.props.day;

    let offers = this.props.offers;
    offers.sort((a, b) => (a.date_start > b.date_start) ? 1 : -1);

    let offersList;
    if(offers.length > 0){
      offersList = offers.map((offer) =>
        <li className='listElement' key={offer.id}>
          <Offer value={offer} />
        </li>
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
          <ul>
            {offersList}
          </ul>
        </div>  
      </div>
    );

  }
}

export default DailyOffers;