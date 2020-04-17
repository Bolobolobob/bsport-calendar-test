import React from 'react';

import Offer from './Offer'

class DailyOffers extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const day = this.props.day;

    var offers = this.props.offers;
    offers.sort((a, b) => (a.date_start > b.date_start) ? 1 : -1);

    const offersList = offers.map((offer) =>
      <Offer key={offer.id} value={offer} />
    );

    return (
      <div className="dailyOffers">
        {day.format()}
        {offersList}  
      </div>
    );

  }
}

export default DailyOffers;